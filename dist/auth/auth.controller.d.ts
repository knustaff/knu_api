import { AuthService } from './auth.service';
import { AuthDto, ChangePasswordDto, CreateUserDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<{
        result: boolean;
        message: string;
    }>;
}
