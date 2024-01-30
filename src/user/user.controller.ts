import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Patch,
  Post,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get()
  async findOne(@Headers('authorization') token: string) {
    token = token.replace('Bearer ', '');
    const decoded = await this.jwtService.decode(token);
    return this.userService.findOne(decoded.sub);
  }

  @Patch()
  async update(
    @Headers('authorization') token: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    token = token.replace('Bearer ', '');
    const decoded = await this.jwtService.decode(token);
    return this.userService.update(decoded.sub, updateUserDto);
  }

  @Delete()
  async remove(@Headers('authorization') token: string) {
    token = token.replace('Bearer ', '');
    const decoded = await this.jwtService.decode(token);
    return this.userService.remove(decoded.sub);
  }
}
