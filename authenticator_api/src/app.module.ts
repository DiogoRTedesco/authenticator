import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MoService } from './permissions/mo/mo.service';
import { PermissionsService } from './permissions/permissions.service';
import { PermissionsModule } from './permissions/permissions.module';
import { SystemsService } from './systems/systems.service';

@Module({
  imports: [UsersModule, PermissionsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, MoService, PermissionsService, SystemsService],
})
export class AppModule {}
