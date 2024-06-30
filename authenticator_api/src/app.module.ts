import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';

import { PermissionsService } from './permissions/permissions.service';
import { PermissionsModule } from './permissions/permissions.module';
import { SystemsService } from './systems/systems.service';

@Module({
  imports: [UsersModule, PermissionsModule],
  controllers: [AppController],
  providers: [AppService, PermissionsService, SystemsService],
})
export class AppModule {}
