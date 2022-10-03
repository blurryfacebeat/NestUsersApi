import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleModel } from './roles.model';
import { ROLES } from './constants';
import { ValidationPipe } from '../../pipes/validation.pipe';

@ApiTags('Roles table')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 201, type: RoleModel })
  @UsePipes(ValidationPipe)
  @Post()
  async createRole(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: RoleModel })
  @Get(':value')
  async getRoleByValue(@Param('value') value: ROLES) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, type: [RoleModel] })
  @Get()
  async getAllRoles() {
    return this.rolesService.getAllRoles();
  }
}
