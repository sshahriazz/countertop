import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserResponseDto } from './dto/user-response.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateUser(
    userId: string,
    user: Prisma.UserUpdateInput,
  ): Promise<UserResponseDto | null> {
    return await this.prismaService.user.update({
      where: { id: userId },
      data: user,
    });
  }
  async deleteUser(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.prismaService.user.delete({ where: { id: id } });
  }

  async findUser(id: string): Promise<UserResponseDto> {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async listUsers(
    cursor: Prisma.UserWhereUniqueInput,
    take: number,
    skip: number,
    orderBy: Prisma.UserOrderByWithRelationInput,
  ) {
    // Validate take and skip
    if (take < 1) throw new Error('Take must be positive.');
    if (skip < 0) throw new Error('Skip must be non-negative.');

    const totalUsers = await this.prismaService.user.count();
    if (skip >= totalUsers)
      throw new Error('Skip is greater than the total number of users.');
    if (take > totalUsers)
      throw new Error('Take is greater than the total number of users.');

    const users = await this.prismaService.user.findMany({
      cursor,
      take,
      orderBy,
      skip,
    });

    const currentPage = Math.floor(skip / take) + 1;
    const totalPages = Math.ceil(totalUsers / take);

    const metaData = {
      totalUsers,
      itemsPerPage: take,
      currentPage,
      totalPages,
      nextCursor: users[users.length - 1]?.id,
      previousCursor: currentPage > 1 ? users[0]?.id : null,
      hasNextPage: totalPages > currentPage,
      hasPreviousPage: currentPage > 1,
    };

    return {
      users,
      metaData,
    };
  }
}
