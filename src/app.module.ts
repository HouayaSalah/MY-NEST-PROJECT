import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './core/controller/hello/hello.controller';
import { HelloService } from './core/service/hello/hello.service';

@Module({
  imports: [],
  controllers: [AppController,HelloController],
  providers: [AppService,HelloService],
})
export class AppModule {}
