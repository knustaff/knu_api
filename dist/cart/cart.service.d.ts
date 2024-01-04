import { PrismaService } from '../prisma/prisma.service';
import { CreateCartDto } from './dto';
export declare class CartService {
    private prisma;
    constructor(prisma: PrismaService);
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
