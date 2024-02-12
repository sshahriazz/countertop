import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserDto implements Partial<User> {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String })
  phone: string | null;
  @ApiProperty({ type: String })
  first_name: string | null;
  @ApiProperty({ type: String })
  last_name: string | null;
  @ApiProperty({ type: Boolean })
  email_verified: boolean;
  @ApiProperty({ type: Boolean })
  is2fa: boolean;
  @ApiProperty({ type: Boolean })
  disable_access: boolean;
  @ApiProperty({ type: String })
  otp_secret: string | null;
  @ApiProperty({ type: Date })
  created_at: Date;
  @ApiProperty({ type: Date })
  updated_at: Date;
}
export class MetaData {
  totalUsers: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  nextCursor: string;
  previousCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export class PaginatedDto {
  @ApiProperty({ type: [UserDto] })
  users: UserDto[];
  @ApiProperty({ type: MetaData })
  metaData: MetaData;
}
