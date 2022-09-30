import {
  Column,
  Table,
  DataType,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../users/users.model';
import { UserRolesModel } from './user-roles.model';

interface IRoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class RoleModel extends Model<RoleModel, IRoleCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Unique user id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Admin', description: 'Role name value' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'User who can delete accounts',
    description: 'Role description',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => UserModel, () => UserRolesModel)
  users: UserModel[];
}
