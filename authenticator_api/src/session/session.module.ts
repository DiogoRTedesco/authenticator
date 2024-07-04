import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsModule } from '../permission/permission.module';
import { SessionsController } from './session.controller';
import { Session } from './session.entity';
import { SessionsService } from './session.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
    PermissionsModule,
  ],
  providers: [SessionsService],
  controllers: [SessionsController],
  exports: [SessionsService],
})
export class SessionModule {}
