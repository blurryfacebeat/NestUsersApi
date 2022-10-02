import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.me', description: 'User email' })
  @IsString({ message: 'Email must be string' })
  @IsEmail({}, { message: 'Email is incorrect' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString({ message: 'Password must be string' })
  @Length(4, 16, {
    message: 'Password must be at least 4 and not more than 16 characters',
  })
  readonly password: string;
}
