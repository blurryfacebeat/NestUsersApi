import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './modules/users/users.model';
import { RolesModule } from './modules/roles/roles.module';
import { RoleModel } from './modules/roles/roles.model';
import { UserRolesModel } from './modules/roles/user-roles.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, RoleModel, UserRolesModel],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
