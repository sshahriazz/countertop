import { ApiPropertyOptional } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

export class UpdateUserDto implements Partial<UserEntity> {
  @ApiPropertyOptional({ type: Boolean, description: 'Disable access' })
  disableAccess?: boolean | undefined;
  @ApiPropertyOptional({ type: String, description: 'User email' })
  email?: string | undefined;
  @ApiPropertyOptional({ type: Boolean, description: 'Email verified' })
  emailVerified?: boolean | undefined;
  @ApiPropertyOptional({ type: String, description: 'User first name' })
  firstname?: string | undefined;
  @ApiPropertyOptional({ type: String, description: 'User last name' })
  lastname?: string | undefined;
  @ApiPropertyOptional({
    type: String,
    description: 'Two Factor Authentication',
  })
  is2fa?: boolean | undefined;
  @ApiPropertyOptional({ type: String, description: 'User role' })
  @ApiPropertyOptional({ type: String, description: 'User phone' })
  phone?: string | undefined;
}
