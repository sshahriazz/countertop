import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, description: 'Email' })
  email: string;
  @ApiProperty({ type: String, description: 'Password' })
  password: string;
}
export class RegisterDto extends LoginDto {}
