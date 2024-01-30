import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBody } from './dto/auth.body';
import { AuthGuard, Public } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post()
    @Public()
    async login(@Body() authBody:AuthBody){
        return await this.authService.signIn(authBody)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
