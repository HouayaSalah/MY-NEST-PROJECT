import { Controller, Get } from '@nestjs/common';
import { HelloService } from 'src/core/service/hello/hello.service';

@Controller('hello')
export class HelloController {

    constructor(private readonly helloService: HelloService){

    }
    @Get('hi')
    getHi(): string {
      return this.helloService.getHello();
    }
}
