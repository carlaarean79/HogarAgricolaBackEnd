import { Test, TestingModule } from '@nestjs/testing';
import { MacrameController } from './macrame.controller';

describe('MacrameController', () => {
  let controller: MacrameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacrameController],
    }).compile();

    controller = module.get<MacrameController>(MacrameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
