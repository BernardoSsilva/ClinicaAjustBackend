import { HttpException, Injectable } from '@nestjs/common';
import { prisma } from 'prisma/client';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { AuthBody } from './dto/auth.body';

@Injectable()
export class AuthService {
    constructor(
        private jwtService:JwtService
    ){}
  async signIn(authBody:AuthBody) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          userEmail: authBody.email,
        },
        select:{
            userId:true,
            userPassword:true
        },
      });

      

      const passwordMatch = await bcrypt.compare(authBody.password, user.userPassword);

      if (!passwordMatch) {
        throw new HttpException('Invalid credentials', 401);
      }
      const payload = { sub: user.userId };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (err) {
      throw new HttpException('Bad request', 400);
      
    }
  }
}
