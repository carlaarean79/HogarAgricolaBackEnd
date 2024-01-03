import { Test, TestingModule } from '@nestjs/testing';
import { TutorialRecienteController } from './tutorial-reciente.controller';

describe('TutorialRecienteController', () => {
  let controller: TutorialRecienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorialRecienteController],
    }).compile();

    controller = module.get<TutorialRecienteController>(TutorialRecienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
