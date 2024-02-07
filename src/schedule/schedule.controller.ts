import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleService } from './schedule.service';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("Schedule Services")
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService, private jwtService:JwtService) {}

  @Post()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async create(@Body() createScheduleDto: CreateScheduleDto, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.scheduleService.create(createScheduleDto,decodedToken.sub);
  }

  @Get()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findAll( @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.scheduleService.findAll(decodedToken.sub);
  }

  @Get(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findOne(@Param('id') id: string,  @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.scheduleService.findOne(+id, decodedToken.sub);
  }

  @Patch(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto, @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.scheduleService.update(+id, updateScheduleDto, decodedToken.sub);
  }

  @Delete(':id')
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async remove(@Param('id') id: string,  @Headers("authorization") token:string) {
    token = token.replace('Bearer ', '')
    const decodedToken = await this.jwtService.decode(token.toString())
    return this.scheduleService.remove(+id, decodedToken.sub);
  }
}
