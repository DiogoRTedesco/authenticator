import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { Session } from './session.entity';
import { SessionsService } from './session.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionsService.create(createSessionDto);
  }

  @Get()
  findAll(): Promise<Session[]> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Session> {
    return this.sessionsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.sessionsService.remove(id);
  }
}
