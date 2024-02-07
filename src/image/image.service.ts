import { HttpException, Injectable } from '@nestjs/common';
import { prisma } from 'prisma/client';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import * as fs from 'fs';

@Injectable()
export class ImageService {
  async create(file, examId) {
    try{
      return await prisma.images.create({
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

  async findAll() {
    try{
      const result =  await prisma.images.findMany()

      const b64Images = result.map((image) =>{
        const base64Image = this.toBase64(image)
        return base64Image
      })
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


  toBase64(image:Image){
    try{
      const base64 = fs.readFileSync(`uploads/${image.stored}`, `base64`);
      return base64
    } catch(err){
      return new HttpException("Bad Request", 400)
    }
   
  }
}
