import { HttpException, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { prisma } from 'prisma/client';

@Injectable()
export class ScheduleService {
  async create(createScheduleDto: CreateScheduleDto, authorId) {
    try {
      return await prisma.schedule.create({
        data:{
          authorId,
          hour:createScheduleDto.hour,
          client:createScheduleDto.client,
          service:createScheduleDto.service,
        }
      })
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  findAll(authorId) {
    try {
      return prisma.schedule.findMany({
        where:{
          authorId
        }
      });
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  findOne(id: number, authorId) {
    try {
      return prisma.schedule.findUnique({
        where: { hourId: id , authorId},
      });
    } catch (err) {
      return new HttpException('Bad request', 400);
    }
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto, authorId) {
    try{
      return prisma.schedule.update({
        where: { hourId: id, authorId },
        data: {
          hour: updateScheduleDto.hour,
          client: updateScheduleDto.client,
          service: updateScheduleDto.service,
        },
      });
    } catch(err){
      return new HttpException('Bad request', 400);
    }
  }

  remove(id: number, authorId) {
    
    try{
      return prisma.schedule.delete({
        where: { hourId: id , authorId},
      });
    }catch(err){
      return new HttpException('Bad request', 400);
    }
  }
}
