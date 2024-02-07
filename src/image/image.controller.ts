import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './image.service';
import { diskStorage } from 'multer';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post("/:examId")
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'uploads',
      }),
    }),
  )
  create(@UploadedFile() file: Express.Multer.File, examId: number) {
    return this.imageService.create(file, examId);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
