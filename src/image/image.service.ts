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

      return b64Images
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  async findOne(id: number) {
    try{
      const result = await prisma.images.findUnique({
        where:{
          imageId:id
        }
      })

      return this.toBase64(result)
    }catch(err){
      return new HttpException("Bad Request", 400)
    }
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    try{
      const result = await prisma.images.update({
        where:{
          imageId:id
        },
        data: updateImageDto
      })

       return this.toBase64(result)
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
