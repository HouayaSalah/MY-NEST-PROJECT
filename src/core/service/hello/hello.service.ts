import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    getHello(): string {
        return 'HELLO HOUAYA SALAH';
      }
}
