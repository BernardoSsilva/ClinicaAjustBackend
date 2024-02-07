import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './image.service';
import { diskStorage } from 'multer';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('image')
@ApiTags("Image Services")
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
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  create(@UploadedFile() file: Express.Multer.File, examId: number) {
    return this.imageService.create(file, examId);
  }

  @Get()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
