import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cart } from '@prisma/client';

@Injectable()
export class CartService {
    constructor(private prisma: PrismaService) {

    }

    async createCart(userId: number, cartItemsString: string) {
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
                    cartItemsString: cartItemsString
                }
            });
        } else {
            result = await this.prisma.cart.create({
                data: {
                    userId: userId,
                    cartItemsString: cartItemsString
                }
            });
        }

        delete result.id;
        delete result.userId;
        return result;
    }
}
