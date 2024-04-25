import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // retrona una varaible 
    var variable = 'my name is YovanEnovore';
    return variable;
  }
}
