import { Injectable } from '@nestjs/common';
import { CreateDiagnosiDto } from './dto/create-diagnosi.dto';
import { UpdateDiagnosiDto } from './dto/update-diagnosi.dto';

@Injectable()
export class DiagnosiService {
  create(createDiagnosiDto: CreateDiagnosiDto) {
    return 'This action adds a new diagnosi';
  }

  findAll() {
    return `This action returns all diagnosi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnosi`;
  }

  update(id: number, updateDiagnosiDto: UpdateDiagnosiDto) {
    return `This action updates a #${id} diagnosi`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnosi`;
  }
}
