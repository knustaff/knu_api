import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cart } from '@prisma/client';
import { CreateCartDto } from './dto';

@Injectable()
export class CartService {
    constructor(private prisma: PrismaService) {

    }

    async createCart(userId: number, dto: CreateCartDto) {
        let result: Cart;
        const findCart = await this.prisma.cart.findFirst({
            where: {
                userId: userId
            }
        });
        if(findCart) {
            result = await this.prisma.cart.update({
                where: {
                    id: findCart.id
                }, 
                data: {
                    ...dto
                }
            });
        } else {
            result = await this.prisma.cart.create({
                data: {
                    userId: userId,
                    ...dto
                }
            });
        }

        delete result.id;
        delete result.userId;
        return result;
    }

    async getCart(userId: number) {
        const cart = await this.prisma.cart.findFirst({
            where: {
                userId: userId
            }
        });
        if(!cart) {
            throw new ForbiddenException('User has no cart data');
        }

        delete cart.id;
        delete cart.userId;
        return cart;
    }
}
