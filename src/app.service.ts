import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log(
      '🚀 ~ file: COMMUNICATIONS app.service.ts:11 ~ AppService ~ handleUserCreated ~ data',
      data,
    );
    //todo: Email the user...
    console.log(
      `I'm doing something with the user email ${data.email}that the communication microservices recived....`,
    );
  }
}
