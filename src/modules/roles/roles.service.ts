import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleModel } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { ROLES } from './constants';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RoleModel) private roleRepository: typeof RoleModel,
  ) {}

  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRoleByValue(value: ROLES) {
    return await this.roleRepository.findOne({ where: { value } });
  }

  async getAllRoles() {
    return await this.roleRepository.findAll();
  }
}
