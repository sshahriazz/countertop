import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({ type: UserResponseDto, status: HttpStatus.OK })
  async findUser(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.userService.findUser(id);
  }
}
