import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Role name value' })
  readonly value: string;

  @ApiProperty({
    example: 'User who can delete accounts',
    description: 'Role description',
  })
  readonly description: string;
}
