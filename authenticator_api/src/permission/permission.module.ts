import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from '../system/system.entity';
import { User } from '../user/user.entity';
import { PermissionsController } from './permission.controller';
import { Permission } from './permission.entity';
import { PermissionsService } from './permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, User, System])],
  providers: [PermissionsService],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
