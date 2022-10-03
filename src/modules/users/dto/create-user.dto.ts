import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { MESSAGES } from '../constants/messages.constant';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.me', description: 'User email' })
  @IsString({ message: MESSAGES.EMAIL_MUST_BE_STRING })
  @IsEmail({}, { message: MESSAGES.EMAIL_MUST_BE_EMAIL })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString({ message: MESSAGES.PASSWORD_MUST_BE_STRING })
  @Length(4, 16, {
    message: MESSAGES.PASSWORD_WRONG_LENGTH,
  })
  readonly password: string;
}
