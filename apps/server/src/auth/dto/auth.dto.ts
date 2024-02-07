import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '@server/user/dto/user.dto';

export class LoginDto {
  @ApiProperty({ type: String, description: 'Email' })
  email: string;
  @ApiProperty({ type: String, description: 'Password' })
  password: string;
}
export class RegisterDto extends LoginDto {}

export class ChangePasswordDto {
  @ApiProperty({ type: String, description: 'Email' })
  email: string;
  @ApiProperty({ type: String, description: 'OTP' })
  otp: string;
  @ApiProperty({ type: String, description: 'New Password' })
  newPassword: string;
}

export class TokensDto {
  @ApiProperty({ type: String, description: 'Access Token' })
  accessToken: string;
  @ApiProperty({ type: String, description: 'Refresh Token' })
  refreshToken: string;
}

export class LoginResponseDto {
  @ApiProperty({ type: UserDto, description: 'Token Type' })
  user: UserDto;
  @ApiProperty({ type: TokensDto, description: 'Token Type' })
  tokens: TokensDto;
}
export class RegisterResponseDto extends LoginResponseDto {}
