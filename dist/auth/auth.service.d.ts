import { AuthDto, ChangePasswordDto, CreateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
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
    checkCredentials(user: any, password: string): Promise<boolean>;
    signToken(id: Number, email: string, firstName: string, lastName: string, roleId?: number): Promise<{
        access_token: string;
    }>;
}
