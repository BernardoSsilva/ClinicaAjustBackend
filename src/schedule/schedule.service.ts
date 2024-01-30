import { HttpException, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { prisma } from 'prisma/client';

@Injectable()
export class ScheduleService {
  create(createScheduleDto: CreateScheduleDto, authorId) {
    try {
      return prisma.schedule.create({
        data: {
          authorId,
          hour: createScheduleDto.hour,
          client: createScheduleDto.client,
          service: createScheduleDto.service,
          dateService: createScheduleDto.dateService,
        },
      });
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  findAll() {
    try {
      return prisma.schedule.findMany();
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  findOne(id: number) {
    try {
      return prisma.schedule.findUnique({
        where: { hourId: id },
      });
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    try{
      return prisma.schedule.update({
        where: { hourId: id },
        data: {
          hour: updateScheduleDto.hour,
          client: updateScheduleDto.client,
          service: updateScheduleDto.service,
          dateService: updateScheduleDto.dateService,
        },
      });
    } catch(err){
      return new HttpException('Bad request', 400);
    }
  }

  remove(id: number) {
    
    try{
      return prisma.schedule.delete({
        where: { hourId: id },
      });
    }catch(err){
      return new HttpException('Bad request', 400);
    }
  }
}
