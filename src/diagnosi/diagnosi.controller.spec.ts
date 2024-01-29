import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosiController } from './diagnosi.controller';
import { DiagnosiService } from './diagnosi.service';

describe('DiagnosiController', () => {
  let controller: DiagnosiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosiController],
      providers: [DiagnosiService],
    }).compile();

    controller = module.get<DiagnosiController>(DiagnosiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
