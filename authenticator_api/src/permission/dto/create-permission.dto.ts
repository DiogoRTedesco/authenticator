import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { PermissionLevel } from '../permission-level.enum';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  systemId: number;
  
  @IsNotEmpty()
  @IsEnum(PermissionLevel)
  level: PermissionLevel;
}
