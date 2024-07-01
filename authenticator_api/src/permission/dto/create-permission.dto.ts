import { IsEnum, IsNotEmpty } from 'class-validator';
import { PermissionLevel } from '../permission-level.enum';

export class CreatePermissionDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  systemId: number;

  @IsEnum(PermissionLevel)
  level: PermissionLevel;
}
