import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './users.model';
import { RoleModel } from '../roles/roles.model';
import { UserRolesModel } from '../roles/user-roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([UserModel, RoleModel, UserRolesModel]),
    RolesModule,
  ],
})
export class UsersModule {}
