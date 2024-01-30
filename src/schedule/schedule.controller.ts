import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleService } from './schedule.service';


@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService, private jwtService:JwtService) {}

  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    const authorId = 1
    return this.scheduleService.create(createScheduleDto,authorId);
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
