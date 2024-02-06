import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';
import { type User, type Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateUser(
    userId: string,
    user: Prisma.UserUpdateInput,
  ): Promise<User | null> {
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

  async findUser(id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  listUsers() {
    // TODO: Implement it using nest paginate
  }
}
