import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './users.model';

@ApiTags('Users table')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: UserModel })
  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }
}
