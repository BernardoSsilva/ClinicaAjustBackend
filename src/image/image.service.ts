import { HttpException, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { prisma } from 'prisma/client';

@Injectable()
export class ImageService {
  create(file, examId) {
    try{
      return prisma.images.create({
        data: {
          imageName: file.originalname,
          stored: file.filename,
          examAtribuiton: examId,
        }
      })
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  findAll() {
    try{
      return prisma.images.findMany()
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  findOne(id: number) {
    try{
      return prisma.images.findUnique({
        where:{
          imageId:id
        }
      })
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    try{
      return prisma.images.update({
        where:{
          imageId:id
        },
        data: updateImageDto
      })
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  remove(id: number) {
    try{
      return prisma.images.delete({
        where:{
          imageId:id
        }
      })
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }
}
