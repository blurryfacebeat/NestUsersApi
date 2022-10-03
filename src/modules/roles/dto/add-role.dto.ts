import { ROLES } from '../constants';
import { IsNumber, IsString } from 'class-validator';
import { MESSAGES } from '../constants/messages.constant';

export class AddRoleDto {
  @IsString({ message: MESSAGES.VALUE_MUST_BE_STRING })
  readonly value: ROLES;

  @IsNumber({}, { message: MESSAGES.USERID_MUST_BE_NUMBER })
  readonly userId: number;
}
