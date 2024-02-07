import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserResponseDto implements Partial<User> {
  @ApiProperty({ type: String })
  id?: string | undefined;
  @ApiPropertyOptional({ type: String })
  email?: string | undefined;
  @ApiPropertyOptional({ type: Date })
  created_at?: Date | undefined;
  @ApiPropertyOptional({ type: Boolean })
  disable_access?: boolean | undefined;
  @ApiPropertyOptional({ type: Boolean })
  email_verified?: boolean | undefined;
  @ApiPropertyOptional({ type: String })
  first_name?: string | null | undefined;
  @ApiPropertyOptional({ type: Boolean })
  is2fa?: boolean | undefined;
  @ApiPropertyOptional({ type: String })
  last_name?: string | null | undefined;
  @ApiPropertyOptional({ type: String })
  otp_secret?: string | null | undefined;
  @ApiPropertyOptional({ type: String })
  phone?: string | null | undefined;
  @ApiPropertyOptional({ type: Date })
  updated_at?: Date | undefined;
}
