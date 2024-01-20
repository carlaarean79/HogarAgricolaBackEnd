import { Test, TestingModule } from '@nestjs/testing';
import { MacrameService } from './macrame.service';

describe('MacrameService', () => {
  let service: MacrameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacrameService],
    }).compile();

    service = module.get<MacrameService>(MacrameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
