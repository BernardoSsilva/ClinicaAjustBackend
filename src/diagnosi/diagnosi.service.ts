import { HttpException, Injectable } from '@nestjs/common';
import { CreateDiagnosiDto } from './dto/create-diagnosi.dto';
import { UpdateDiagnosiDto } from './dto/update-diagnosi.dto';
import { prisma } from 'prisma/client';

@Injectable()
export class DiagnosiService {
  create(createDiagnosiDto: CreateDiagnosiDto, authorId:number) {
    
    try{
      return prisma.diagnosis.create({
        data: 
        {
          author: authorId,
          description: createDiagnosiDto.description,
          pacientName: createDiagnosiDto.pacientName
        }
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  findAll(authhorId:number) {
    try{  
      return prisma.diagnosis.findMany({
        where:{
          author:authhorId
        }
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  findOne(id: number, author) {
    try{
      return prisma.diagnosis.findUnique({
        where: { diagnosiId: id, author}
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  update(id: number, updateDiagnosiDto: UpdateDiagnosiDto, author) {
    try{
      return prisma.diagnosis.update({
        where: { diagnosiId: id, author },
        data: updateDiagnosiDto
      })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }

  remove(id: number, author) {
    try{
        return prisma.diagnosis.delete({
          where: { diagnosiId: id, author}
        })
    }catch(err){
      return new HttpException("Bad request", 400)
    }
  }
}
