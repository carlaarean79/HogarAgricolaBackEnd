import { Test, TestingModule } from '@nestjs/testing';
import { TutorialRecienteService } from './tutorial-reciente.service';

describe('TutorialRecienteService', () => {
  let service: TutorialRecienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorialRecienteService],
    }).compile();

    service = module.get<TutorialRecienteService>(TutorialRecienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
