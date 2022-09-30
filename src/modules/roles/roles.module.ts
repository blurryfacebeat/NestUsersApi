import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from './roles.model';
import { UserModel } from '../users/users.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel])],
})
export class RolesModule {}
