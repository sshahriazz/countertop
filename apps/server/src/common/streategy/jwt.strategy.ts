import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtDto } from '../types/jwt';
import { UserDto } from '@server/user/dto/user.dto';
import { SecurityConfig } from '../configs/config.interface';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly prismaService: PrismaService,
    readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<SecurityConfig>('security')?.accessSecret,
    });
  }

  async validate(payload: JwtDto): Promise<UserDto> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        role: true,
        avatar: true,
        email_verified: true,
        phone: true,
        otp_secret: true,
        is2fa: true,
        disable_access: true,
        created_at: true,
        updated_at: true,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
