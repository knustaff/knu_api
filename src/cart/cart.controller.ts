import { Body, Controller, Get, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateCartDto } from './dto';

@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {

    }

    @Post('create-cart-info')
    createCart(@GetUser('id', ParseIntPipe) userId: number, @Body() dto: CreateCartDto) {
        return this.cartService.createCart(userId, dto);
    }

    @Get()
    getCart(@GetUser('id', ParseIntPipe) userId: number) {
        return this.cartService.getCart(userId);
    }
}
