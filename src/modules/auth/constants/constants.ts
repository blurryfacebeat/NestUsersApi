export const TOKEN_TYPE = 'Bearer';
export const ROLES_KEY = 'roles';

export enum AUTH_MESSAGES {
  NOT_AUTHORIZED = `User isn't authorized`,
  USER_EXISTS = 'User with this email already exists',
  NO_USER = 'No user with this email or password',
  NO_ACCESS = 'No access',
  USER_NOT_FOUND = 'User not found',
  USER_OR_ROLE_NOT_FOUND = 'User or role not found',
}
