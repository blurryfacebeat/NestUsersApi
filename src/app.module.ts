import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './modules/users/users.model';
import { RolesModule } from './modules/roles/roles.module';
import { RoleModel } from './modules/roles/roles.model';
import { UserRolesModel } from './modules/roles/user-roles.model';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { PostsModel } from './modules/posts/posts.model';
import { FilesModule } from './modules/files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, RoleModel, UserRolesModel, PostsModel],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
})
export class AppModule {}
