import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './users.model';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles-auth.decorator';
import { ROLES } from '../roles/constants';
import { AddRoleDto } from '../roles/dto/add-role.dto';
import { BanUserDto } from '../roles/dto/ban-user.dto';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../../pipes/validation.pipe';

@ApiTags('Users table')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: UserModel })
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Issue a role' })
  @ApiResponse({ status: 200 })
  @Roles(ROLES.ADMIN)
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Post('role')
  async addRole(@Body() dto: AddRoleDto) {
    return await this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @Roles(ROLES.ADMIN)
  @UseGuards(RolesGuard)
  @Post('ban')
  async banUser(@Body() dto: BanUserDto) {
    return await this.usersService.banUser(dto);
  }
}
