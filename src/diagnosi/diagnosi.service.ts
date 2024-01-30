import { HttpException, Injectable } from '@nestjs/common';
import { CreateDiagnosiDto } from './dto/create-diagnosi.dto';
import { UpdateDiagnosiDto } from './dto/update-diagnosi.dto';
import { prisma } from 'prisma/client';

@Injectable()
export class DiagnosiService {
  create(createDiagnosiDto: CreateDiagnosiDto) {
    
    try{
      return prisma.diagnosis.create({
        data: 
        {
          author: createDiagnosiDto.author,
          description: createDiagnosiDto.description,
          pacientName: createDiagnosiDto.pacientName
        }
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  findAll() {
    try{  
      return prisma.diagnosis.findMany()
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  findOne(id: number) {
    try{
      return prisma.diagnosis.findUnique({
        where: { diagnosiId: id}
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  update(id: number, updateDiagnosiDto: UpdateDiagnosiDto) {
    try{
      return prisma.diagnosis.update({
        where: { diagnosiId: id },
        data: updateDiagnosiDto
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  remove(id: number) {
    try{
        return prisma.diagnosis.delete({
          where: { diagnosiId: id }
        })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }
}
