import { Body, Controller, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, ChangePasswordDto, CreateUserDto } from './dto';
import { GetUser } from './decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
    }

    @Post('signup')
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }

    @Patch('change-password')
    changePassword(@GetUser('id') userId: number, @Body() dto: ChangePasswordDto) {
        return this.authService.changePassword(userId, dto);
    }
}
