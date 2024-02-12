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
      select: {
        id: true,
        email: true,
        phone: true,
        first_name: true,
        last_name: true,
        email_verified: true,
        is2fa: true,
        disable_access: true,
        otp_secret: true,
        created_at: true,
        updated_at: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async listUsers(
    take: number,
    cursor: string | null,
    searchString: string | null,
  ) {
    const users = await this.prismaService.user.findMany({
      take: Number.isNaN(take) ? 10 : take,
      cursor: cursor ? { id: cursor } : undefined,
      select: {
        id: true,
        email: true,
        phone: true,
        first_name: true,
        last_name: true,
        email_verified: true,
        is2fa: true,
        disable_access: true,
        otp_secret: true,
        created_at: true,
        updated_at: true,
      },
      where: {
        OR: searchString
          ? [
              {
                first_name: {
                  contains: searchString,
                },
              },
              {
                last_name: {
                  contains: searchString,
                },
              },
              { email: { contains: searchString } },
            ]
          : undefined,
      },
    });

    return users;
  }
}
