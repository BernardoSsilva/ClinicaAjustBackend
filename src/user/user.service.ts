import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from 'prisma/client';

const bcrypt = require('bcrypt');
@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try{
      const password = await bcrypt.hash(createUserDto.userPassword, 10)
      return await prisma.user.create({
        data: {
          userName: createUserDto.userName,
          userEmail: createUserDto.userEmail,
          userPassword: password
        }
      })
    }catch (error){
      return false
    }
  }

  async findAll() {
    try{
      return await prisma.user.findMany()
    }catch (error){
      return false
    }
  }

  async findOne(id: number) {
    try{
      return await prisma.user.findUnique({
        where : {userId: id}
      })
    }catch (error){
      return false
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try{
      const password =await bcrypt.hash(updateUserDto.userPassword, 10)
      console.log(password)
      return  await prisma.user.update({
        where: { userId:id },
        data:{
          userName: updateUserDto.userName,
          userEmail: updateUserDto.userEmail,
          userPassword: password
        }
      })
    }catch (error){
      return false
    }
  }

  remove(id: number) {
    try{
      return prisma.user.delete({
        where: { userId:id }
      })
    }catch (error){
      return false
    }
  }
}
