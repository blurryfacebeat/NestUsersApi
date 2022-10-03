import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { MESSAGES } from '../constants/messages.constant';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Role name value' })
  @IsString({ message: MESSAGES.VALUE_MUST_BE_STRING })
  readonly value: string;

  @ApiProperty({
    example: 'User who can delete accounts',
    description: 'Role description',
  })
  @IsString({ message: MESSAGES.DESCRIPTION_MUST_BE_STRING })
  readonly description: string;
}
