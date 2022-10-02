import { ROLES } from '../constants';

export class AddRoleDto {
  readonly value: ROLES;
  readonly userId: number;
}
