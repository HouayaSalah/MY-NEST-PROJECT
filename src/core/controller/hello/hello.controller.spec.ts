import { Test, TestingModule } from '@nestjs/testing';
import { HelloService } from 'src/core/service/hello/hello.service';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService]
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  describe('hi', () => {
  it('should return "HELLO HOUAYA SALAH"', () => {
    expect(controller.getHi()).toBe('HELLO HOUAYA SALAH');
  });
});
});
