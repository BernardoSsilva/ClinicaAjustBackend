import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosiDto } from './create-diagnosi.dto';

export class UpdateDiagnosiDto extends PartialType(CreateDiagnosiDto) {}
