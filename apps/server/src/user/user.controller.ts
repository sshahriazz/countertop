import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  @ApiQuery({ name: 'id', required: true })
  @ApiResponse({ type: UserResponseDto })
  async findUser(@Query('id') id: string): Promise<UserResponseDto> {
    return await this.userService.findUser(id);
  }

  @Get('list')
  @ApiResponse({ type: UserResponseDto, isArray: true })
  @ApiQuery({ name: 'take', required: false })
  @ApiQuery({ name: 'cursor', required: false })
  @ApiQuery({ name: 'searchString', required: false })
  async listUsers(
    @Query('take') take: string,
    @Query('cursor') cursor: string,
    @Query('searchString') searchString: string,
  ): Promise<UserResponseDto[]> {
    return await this.userService.listUsers(
      parseInt(take),
      cursor,
      searchString,
    );
  }
}
