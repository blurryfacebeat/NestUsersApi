import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles table')
@Controller('roles')
export class RolesController {}
