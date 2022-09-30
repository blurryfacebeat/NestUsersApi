import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RoleModel } from '../roles/roles.model';
import { UserRolesModel } from '../roles/user-roles.model';

interface IUserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, IUserCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Unique user id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@example.me', description: 'User email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'true', description: 'Is user banned' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: 'Adult content', description: 'Reason of user ban' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @BelongsToMany(() => RoleModel, () => UserRolesModel)
  roles: RoleModel[];
}
