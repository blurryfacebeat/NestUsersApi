import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../constants/constants';
import { ROLES } from '../../roles/constants';

export const Roles = (...roles: ROLES[]) => SetMetadata(ROLES_KEY, roles);
