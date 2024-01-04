import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto, ChangePasswordDto, CreateStaffDto, CreateUserDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) {}

    async signup(dto: CreateUserDto) {
        const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const checkPhoneNumber = dto.phone.match(regexPhoneNumber);
        if(!checkPhoneNumber) {
            throw new ForbiddenException('Phone number is invalid');
        }
        // generate the password
        const hash = await argon.hash(dto.password);
        // save the new user in db
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    phone: dto.phone
                },
            });
            delete user.hash;

            // return the saved user
            // return user;
            return this.signToken(user.id, user.email, user.firstName, user.lastName);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }

    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!this.checkCredentials(user, dto.password)) {
            throw new ForbiddenException('Credentials incorrect');
        }

        // send back the user
        delete user.hash;
        return this.signToken(user.id, user.email, user.firstName, user.lastName);
    }

    async changePassword(userId: number, dto: ChangePasswordDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!this.checkCredentials(user, dto.currentPassword)) {
            throw new ForbiddenException('Credentials incorrect');
        }

        const password = await argon.hash(dto.newPassword);

        const userUpdate = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                hash: password
            }
        });
        delete userUpdate.hash;
        return {result: true, message: 'Password Changed'};
    }

    async checkCredentials(user: any, password: string) {
        let result = true;
        // if user does not exist throw exception
        if (!user) {
            result = false;
        }
        // compare password
        const pwMatches = await argon.verify(user.hash, password);
        // if password incorrect throw exception
        if (!pwMatches) {
            result = false;
        }

        return result;
    }

    async signToken(
        id: Number,
        email: string,
        firstName: string,
        lastName: string,
        roleId?: number,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: id,
            email,
            firstName,
            lastName,
            roleId
        };
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '24h',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}
