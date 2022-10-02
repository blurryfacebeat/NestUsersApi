import { AUTH_MESSAGES, TOKEN_TYPE } from '../constants/constants';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const getToken = (context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest();
  const authHeader = req.headers.authorization;
  const bearer = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];

  if (bearer !== TOKEN_TYPE || !token)
    throw new UnauthorizedException({
      message: AUTH_MESSAGES.NOT_AUTHORIZED,
    });

  return { req, token };
};
