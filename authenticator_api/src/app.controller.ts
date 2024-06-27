import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/starwars')
  getStarWars(): Object {
    return this.appService.getStarWars();
    }

  @Get('/starwars/:id')
  getStarWarsById(@Param('id') id: string): Object {
    return this.appService.getStarWarsById(id);
    }
  
}
