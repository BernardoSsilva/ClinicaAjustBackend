import { JwtService } from '@nestjs/jwt';
import { Controller, Get, Post, Body, Patch, Param, Delete, Headers} from '@nestjs/common';
import { DiagnosiService } from './diagnosi.service';
import { CreateDiagnosiDto } from './dto/create-diagnosi.dto';
import { UpdateDiagnosiDto } from './dto/update-diagnosi.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('diagnosi')
@ApiTags("Diagnosi Services")
export class DiagnosiController {
  constructor(private readonly diagnosiService: DiagnosiService, private jwtService:JwtService) {}

  @Post()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async create(@Body() createDiagnosiDto: CreateDiagnosiDto, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.diagnosiService.create(createDiagnosiDto, decodedToken.sub);
  }

  @Get()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findAll( @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.diagnosiService.findAll( decodedToken.sub);
  }

  @Get(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findOne(@Param('id') id: string, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.diagnosiService.findOne(+id, decodedToken.sub);
  }

  @Patch(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async update(@Param('id') id: string, @Body() updateDiagnosiDto: UpdateDiagnosiDto, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.diagnosiService.update(+id, updateDiagnosiDto, decodedToken.sub);
  }

  @Delete(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async remove(@Param('id') id: string, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.diagnosiService.remove(+id, decodedToken.sub);
  }
}
