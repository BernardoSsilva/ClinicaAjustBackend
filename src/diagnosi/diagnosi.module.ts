import { Module } from '@nestjs/common';
import { DiagnosiService } from './diagnosi.service';
import { DiagnosiController } from './diagnosi.controller';

@Module({
  controllers: [DiagnosiController],
  providers: [DiagnosiService],
})
export class DiagnosiModule {}
