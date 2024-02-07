/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Patch,
  Post,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Public } from "src/auth/auth.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { ApiForbiddenResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("User Services")
@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post()
  @Public()
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findAll() {
    return await this.userService.findAll();
  }

  @Get("/unique")
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async findOne(@Headers("authorization") token: string) {
    token = token.replace("Bearer ", "");
    const decoded = await this.jwtService.decode(token);
    return this.userService.findOne(decoded.sub);
  }

  @Patch()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async update(
    @Headers("authorization") token: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    token = token.replace("Bearer ", "");
    const decoded = await this.jwtService.decode(token);
    return this.userService.update(decoded.sub, updateUserDto);
  }

  @Delete()
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'unauthorized' })
  async remove(@Headers("authorization") token: string) {
    token = token.replace("Bearer ", "");
    const decoded = await this.jwtService.decode(token);
    return this.userService.remove(decoded.sub);
  }
}
