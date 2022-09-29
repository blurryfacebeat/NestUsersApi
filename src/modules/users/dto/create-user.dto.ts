import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.me', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  readonly password: string;
}
