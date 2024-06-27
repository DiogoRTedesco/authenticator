import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getStarWars(): {
    title: string,
    episode_id: string
  }[] {
    return [
      {
        title: 'A New Hope',
        episode_id: '4'
      },
      {
        title: 'The Empire Strikes Back',
        episode_id: '5'
      },
      {
        title: 'Return of the Jedi',
        episode_id: '6'
      }
    ]
  }
  getStarWarsById(id:string):{
    title: string,
    episode_id: string
    } {
      return this.getStarWars().find((item) => item.episode_id === id) 
  }
}
