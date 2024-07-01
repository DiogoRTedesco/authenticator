import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionsService } from './permission.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  async findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.permissionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePermissionDto: CreatePermissionDto) {
    return this.permissionsService.update(id, updatePermissionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.permissionsService.remove(id);
  }
}
