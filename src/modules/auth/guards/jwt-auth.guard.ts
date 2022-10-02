import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { AUTH_MESSAGES } from '../constants/constants';
import { getToken } from '../utils/getToken.util';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const { req, token } = getToken(context);

      req.user = this.jwtService.verify(token);

      return true;
    } catch {
      throw new UnauthorizedException({
        message: AUTH_MESSAGES.NOT_AUTHORIZED,
      });
    }
  }
}
