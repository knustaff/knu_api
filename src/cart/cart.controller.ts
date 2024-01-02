import { Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { GetUser } from '../auth/decorator';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {

    }

    @Post('create-cart-info')
    createCart(@GetUser('id') userId: number, cartString: string) {
        return this.cartService.createCart(userId, cartString);
    }
}
