import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'User Registration',
  })
  @ApiBody({ type: RegisterDto, description: 'User Registration Details' })
  @ApiQuery({
    name: 'isCookie',
    required: false,
    description: 'true/false',
  })
  @ApiQuery({
    name: 'isOauth',
    required: false,
    description: 'true/false',
  })
  async register(
    @Body() loginDto: RegisterDto,
    @Query('isCookie') isCookie: string = 'false',
    @Query('isOauth') isOauth: string = 'false',
    @Res({ passthrough: true }) res: Response,
  ) {
    const authState = await this.authService.register(
      loginDto.email.toLowerCase(),
      isOauth === 'true',
      loginDto.password,
    );

    if (!(authState instanceof HttpException)) {
      if (isCookie === 'true') {
        res.cookie('accessToken', authState.tokens.accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        });
        res.cookie('refreshToken', authState.tokens.refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        });
      }
    }

    return authState;
  }

  @Post('login')
  @HttpCode(200)
  @ApiOperation({
    summary: 'User Login',
  })
  @ApiBody({ type: LoginDto, description: 'User Login Details' })
  @ApiQuery({
    name: 'isCookie',
    required: false,
    description: 'true/false',
  })
  async login(
    @Body() loginDto: LoginDto,
    @Query('isCookie') isCookie: string = 'false',
    @Res({ passthrough: true }) res: Response,
  ) {
    const authState = await this.authService.login(
      loginDto.email.toLowerCase(),
      loginDto.password,
    );

    if (!(authState instanceof HttpException)) {
      if (isCookie === 'true') {
        res.cookie('accessToken', authState.tokens.accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        });
        res.cookie('refreshToken', authState.tokens.refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        });
      }
    }
    return authState;
  }
}
