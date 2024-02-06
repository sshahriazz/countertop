import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { SecurityConfig } from '@server/common/configs/config.interface';

import { hash, compare } from 'bcrypt';
import { JWTPayload } from '@server/common/types/api';
import { TypedEventEmitter } from '@server/event-emitter/typed-event-emitter.class';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly eventEmitter: TypedEventEmitter,
  ) {}

  async login(email: string, password: string) {
    const validateEmail = await this.validateEmail(email);

    if (typeof validateEmail === 'string') {
      throw new HttpException(validateEmail, HttpStatus.BAD_REQUEST);
    }

    const existingUser = await this.validateUser(email);

    if (!existingUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const { password: pass, ...rest } = existingUser;
    const isPasswordMatching = await compare(password, pass);

    if (!isPasswordMatching) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload: JWTPayload = {
      userId: existingUser.id,
      email: existingUser.email,
      role: ['user'],
      firstname: existingUser.first_name!,
      lastname: existingUser.last_name!,
    };

    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);

    return { user: rest, tokens: { accessToken, refreshToken } };
  }

  async register(email: string, isOauth: boolean, password?: string) {
    const existingUser = await this.validateUser(email);

    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const validateEmail = await this.validateEmail(email);

    if (typeof validateEmail === 'string') {
      throw new HttpException(validateEmail, HttpStatus.BAD_REQUEST);
    }

    const validatePassword = !isOauth
      ? await this.validatePassword(password!)
      : 'Password@2012';

    if (typeof validatePassword === 'string' && !isOauth) {
      throw new HttpException(validatePassword, HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await this.hashPassword(password!);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = await this.prismaService.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      const payload: JWTPayload = {
        userId: user.id,
        email: user.email,
        role: ['user'],
        firstname: user.first_name!,
        lastname: user.last_name!,
      };

      const accessToken = await this.generateAccessToken(payload);
      const refreshToken = await this.generateRefreshToken(payload);

      this.eventEmitter.emit('user.welcome', {
        name: 'Bhagyajit Jagdev',
        email: payload.email,
      });

      this.eventEmitter.emit('user.verify-email', {
        name: 'Bhagyajit Jagdev',
        email: payload.email,
        otp: '****', // generate a random OTP
      });

      return { user, tokens: { accessToken, refreshToken } };
    } catch (error) {
      throw new HttpException('User Creation Failed', HttpStatus.BAD_REQUEST);
    }
  }

  async refreshTokens(refreshToken: string) {
    const securityConfig = this.configService.get<SecurityConfig>('security')!;
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: securityConfig.refreshSecret,
      });

      const user = await this.prismaService.user.findUnique({
        where: { id: payload.userId },
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const jwtPayload = {
        userId: user.id,
        email: user.email,
        role: ['user'],
        firstname: user.first_name!,
        lastname: user.last_name!,
      };

      const accessToken = await this.generateAccessToken(jwtPayload);
      const newRefreshToken = await this.generateRefreshToken(jwtPayload);

      return { accessToken, newRefreshToken };
    } catch (error) {
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
  }

  async changePassword(email: string, otp: string, newPassword: string) {
    const user = await this.validateUser(email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const hashedOTP = await compare(otp, user.otp_secret!);
    if (!hashedOTP) {
      throw new HttpException('Invalid OTP', HttpStatus.BAD_REQUEST);
    }

    await this.prismaService.user.update({
      where: {
        email,
      },
      data: {
        password: await this.hashPassword(newPassword),
        otp_secret: null,
      },
    });
    //TODO: Send an event to notify the user that the password has been changed via email
  }

  async forgotPasswordRequest(email: string) {
    const user = await this.validateUser(email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const otp = await this.generateOTP();
    const hashedOTP = await this.hashOTP(otp);
    await this.prismaService.user.update({
      where: {
        email,
      },
      data: {
        otp_secret: hashedOTP,
      },
    });
    //TODO: Now emitte the event to send the OTP to the user
  }

  async validateUser(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (user) {
      return user;
    }
    return null;
  }

  private async generateAccessToken(payload: JWTPayload): Promise<string> {
    const securityConfig = this.configService.get<SecurityConfig>('security')!;

    return this.jwtService.sign(payload, {
      secret: securityConfig.accessSecret,
      expiresIn: securityConfig.expiresIn,
    });
  }

  private async generateRefreshToken(payload: {
    userId: string;
  }): Promise<string> {
    const securityConfig = this.configService.get<SecurityConfig>('security')!;
    return this.jwtService.sign(payload, {
      secret: securityConfig.refreshSecret,
      expiresIn: securityConfig.refreshIn,
    });
  }
  private async hashPassword(password: string): Promise<string> {
    const securityConfig = this.configService.get<SecurityConfig>('security')!;
    const salt = securityConfig.bcryptSaltOrRound;
    const hashedPassword = await hash(password, salt);
    if (!hashedPassword) {
      throw new HttpException('Password not hashed', HttpStatus.BAD_REQUEST);
    }
    return hashedPassword;
  }

  private async validatePassword(password: string): Promise<boolean | string> {
    if (password.length < 8) {
      return 'Password should be at least 8 characters long';
    } else if (!/[a-z]/.test(password)) {
      return 'Password should contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(password)) {
      return 'Password should contain at least one uppercase letter';
    } else if (!/\d/.test(password)) {
      return 'Password should contain at least one digit';
    } else if (!/[@$!%*?&]/.test(password)) {
      return 'Password should contain at least one special character';
    } else {
      return true;
    }
  }
  private async validateEmail(email: string): Promise<boolean | string> {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email';
    }
    return true;
  }
  private async generateOTP() {
    return Math.random().toString(36).substring(2, 8);
  }
  private async hashOTP(otp: string) {
    const securityConfig = this.configService.get<SecurityConfig>('security')!;
    const salt = securityConfig.bcryptSaltOrRound;
    const hashedOTP = await hash(otp, salt);
    if (!hashedOTP) {
      throw new HttpException('OTP not hashed', HttpStatus.BAD_REQUEST);
    }
    return hashedOTP;
  }
}
