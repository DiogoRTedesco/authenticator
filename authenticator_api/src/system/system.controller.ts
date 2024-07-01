import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSystemDto } from './dto/create-system.dto';
import { SystemsService } from './system.service';

@Controller('systems')
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Post()
  async create(@Body() createSystemDto: CreateSystemDto) {
    return this.systemsService.create(createSystemDto);
  }

  @Get()
  async findAll() {
    return this.systemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.systemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSystemDto: CreateSystemDto) {
    return this.systemsService.update(id, updateSystemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.systemsService.remove(id);
  }
}
