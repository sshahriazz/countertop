import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@server/user/entities/user.entity';
import { UserService } from '@server/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  async login(email: string, password: string) {}
  async logout(user: any) {}

  async register(email: string, password: string) {
    const existingUser = await this.existingUser(email);
    if (existingUser) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const hashedPassword = password;
    const createUser = this.userRepository.create({
      email,
      password: hashedPassword,
    });
    const user = await this.userRepository.save(createUser);
    if (!user) {
      return new HttpException('User not created', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async existingUser(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
    return null;
  }

  async generateToken(user: any) {}
  async validateUser(user: any) {}
}
