import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterDto,
  ChangePasswordDto,
  LoginResponseDto,
} from './dto/auth.dto';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response, Request } from 'express';
import { IsPublic } from '@server/common/metadata/public.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'User Registration',
  })
  @ApiBody({ type: RegisterDto, description: 'User Registration Details' })
  @ApiResponse({
    type: LoginResponseDto,
    description: 'User Registration Response',
  })
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
  @IsPublic()
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
  @IsPublic()
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

  @Get('refresh-token')
  @IsPublic()
  @ApiOperation({
    summary: 'RefreshTokens',
  })
  @ApiQuery({
    name: 'rt',
    required: false,
    description: 'Refresh Token',
  })
  async refreshToken(@Req() req: Request, @Query('rt') rt: string) {
    const cookies = req.headers['cookie'];

    if (!cookies) {
      return await this.authService.refreshTokens(rt);
    }
    const refreshToken = cookies.split('refreshToken=')[1].split(';')[0];

    return await this.authService.refreshTokens(refreshToken);
  }

  @Get('request-reset-password')
  @IsPublic()
  @ApiOperation({
    summary: 'Request Password Reset',
  })
  @ApiQuery({
    name: 'email',
    required: true,
    description: 'Email Address',
  })
  async requestResetPassword(@Query('email') email: string) {
    return await this.authService.forgotPasswordRequest(email);
  }

  @Post('change-password')
  @IsPublic()
  @ApiOperation({
    summary: 'Change Password',
  })
  @ApiBody({
    type: ChangePasswordDto,
    description: 'New Password',
  })
  async changePassword(
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    return await this.authService.changePassword(
      changePasswordDto.email,
      changePasswordDto.otp,
      changePasswordDto.newPassword,
    );
  }
}
