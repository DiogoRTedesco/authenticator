import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemsController } from './system.controller';
import { System } from './system.entity';
import { SystemsService } from './system.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([System]),
    SystemModule,
  ],
  providers: [SystemsService],
  controllers: [SystemsController],
  exports: [SystemsService],
})
export class SystemModule {}
