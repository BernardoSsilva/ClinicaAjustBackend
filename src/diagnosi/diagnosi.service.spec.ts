import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosiService } from './diagnosi.service';

describe('DiagnosiService', () => {
  let service: DiagnosiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosiService],
    }).compile();

    service = module.get<DiagnosiService>(DiagnosiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
