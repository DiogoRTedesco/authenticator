import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from 'src/permission/permission.entity';
import { PermissionsService } from 'src/permission/permission.service';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    providers: [PermissionsService],
    exports: [PermissionsService]
})
export class SessionModule {}
