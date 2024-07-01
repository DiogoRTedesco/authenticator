import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsModule } from './permission/permission.module';
import { PermissionsService } from './permission/permission.service';
import { SessionModule } from './session/session.module';
import { SessionService } from './session/session.service';
import { SystemsService } from './system/system.service';
import { UsersController } from './user/user.controller';
import { UsersModule } from './user/user.module';
import { UsersService } from './user/users.service';
import { SystemModule } from './system/system.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule, PermissionsModule, SessionModule, SystemModule],
  controllers: [AppController, UsersController],
  providers: [AppService, PermissionsService, SystemsService, SessionService,UsersService],
})
export class AppModule {}
