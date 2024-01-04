import { CartService } from './cart.service';
import { CreateCartDto } from './dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    createCart(userId: number, dto: CreateCartDto): Promise<{
        id: number;
        userId: number;
        cartItemsString: string;
    }>;
    getCart(userId: number): Promise<{
        id: number;
        userId: number;
        cartItemsString: string;
    }>;
}
