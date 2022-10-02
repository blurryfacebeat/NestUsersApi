import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { AUTH_MESSAGES, ROLES_KEY } from '../constants/constants';
import { Reflector } from '@nestjs/core';
import { RoleModel } from '../../roles/roles.model';
import { getToken } from '../utils/getToken.util';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
        context.getHandler(),
        context.getClass,
      ]);

      if (!requiredRoles) return true;

      const { req, token } = getToken(context);

      const user = this.jwtService.verify(token);

      req.user = user;

      return user.roles.some((role: RoleModel) =>
        requiredRoles.includes(role.value),
      );
    } catch {
      throw new UnauthorizedException({
        message: AUTH_MESSAGES.NO_ACCESS,
      });
    }
  }
}
