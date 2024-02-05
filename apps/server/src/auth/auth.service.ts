import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SecurityConfig } from '@server/common/configs/config.interface';
import { UserEntity } from '@server/user/entities/user.entity';
import { UserService } from '@server/user/user.service';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { JWTPayload } from '@server/common/types/api';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  async login(email: string, password: string) {
    const validateEmail = await this.validateEmail(email);

    if (typeof validateEmail === 'string') {
      return new HttpException(validateEmail, HttpStatus.BAD_REQUEST);
    }

    const existingUser = await this.validateUser(email);

    if (!existingUser) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const { password: pass, ...rest } = existingUser;
    const isPasswordMatching = await compare(password, pass);

    if (!isPasswordMatching) {
      return new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload: JWTPayload = {
      userId: existingUser.id,
      email: existingUser.email,
      role: ['user'],
      firstname: existingUser.firstname,
      lastname: existingUser.lastname,
    };

    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);

    return { user: rest, tokens: { accessToken, refreshToken } };
  }

  async register(email: string, isOauth: boolean, password?: string) {
    const existingUser = await this.validateUser(email);

    if (existingUser) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const validateEmail = await this.validateEmail(email);

    if (typeof validateEmail === 'string') {
      return new HttpException(validateEmail, HttpStatus.BAD_REQUEST);
    }

    const validatePassword = !isOauth
      ? await this.validatePassword(password!)
      : 'Password@2012';

    if (typeof validatePassword === 'string' && !isOauth) {
      return new HttpException(validatePassword, HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await this.hashPassword(password!);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = await this.userRepository.save({
        email,
        password: hashedPassword,
        roles: ['user'],
      });

      // const { password, ...user } = await this.userRepository.save(createUser);
      const payload: JWTPayload = {
        userId: user.id,
        email: user.email,
        role: ['user'],
        firstname: user.firstname,
        lastname: user.lastname,
      };

      const accessToken = await this.generateAccessToken(payload);
      const refreshToken = await this.generateRefreshToken(payload);

      return { user, tokens: { accessToken, refreshToken } };
    } catch (error) {
      return new HttpException('User Creation Failed', HttpStatus.BAD_REQUEST);
    }
  }

  async validateUser(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
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
}
