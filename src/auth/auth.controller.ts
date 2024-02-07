import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBody } from './dto/auth.body';
import { AuthGuard, Public } from './auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags("Authentication")
export class AuthController {
    constructor(private authService: AuthService){}

    @Post()
    @Public()
    @ApiResponse({ status: 400, description: 'Bad request' })
    async login(@Body() authBody:AuthBody){
        return await this.authService.signIn(authBody)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
