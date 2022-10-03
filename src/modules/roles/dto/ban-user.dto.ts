import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { MESSAGES } from '../constants/messages.constant';

export class BanUserDto {
  @ApiProperty({ example: '15', description: 'User id who need ban' })
  @IsNumber({}, { message: MESSAGES.USERID_MUST_BE_NUMBER })
  readonly userId: number;

  @ApiProperty({ example: 'Racism', description: 'Why user banned' })
  @IsString({ message: MESSAGES.BAN_REASON_MUST_BE_STRING })
  readonly banReason: string;
}
