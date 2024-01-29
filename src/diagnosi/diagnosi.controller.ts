import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiagnosiService } from './diagnosi.service';
import { CreateDiagnosiDto } from './dto/create-diagnosi.dto';
import { UpdateDiagnosiDto } from './dto/update-diagnosi.dto';

@Controller('diagnosi')
export class DiagnosiController {
  constructor(private readonly diagnosiService: DiagnosiService) {}

  @Post()
  create(@Body() createDiagnosiDto: CreateDiagnosiDto) {
    return this.diagnosiService.create(createDiagnosiDto);
  }

  @Get()
  findAll() {
    return this.diagnosiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiagnosiDto: UpdateDiagnosiDto) {
    return this.diagnosiService.update(+id, updateDiagnosiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosiService.remove(+id);
  }
}
