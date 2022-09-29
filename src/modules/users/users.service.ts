import { Injectable } from '@nestjs/common';
import { UserModel } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
