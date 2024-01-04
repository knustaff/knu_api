import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllOrderByUserId(userId: number): Promise<{
        id: number;
        userId: number;
        name: string;
        orderDate: Date;
        orderStatus: number;
        phoneNumber: string;
        shippingAddress: string;
        shippingMethod: string;
        paymentMethod: string;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOrderById(userId: number, orderId: number): Promise<{
        id: number;
        userId: number;
        name: string;
        orderDate: Date;
        orderStatus: number;
        phoneNumber: string;
        shippingAddress: string;
        shippingMethod: string;
        paymentMethod: string;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOder(userId: number, dto: CreateOrderDto): Promise<{
        id: number;
        userId: number;
        name: string;
        orderDate: Date;
        orderStatus: number;
        phoneNumber: string;
        shippingAddress: string;
        shippingMethod: string;
        paymentMethod: string;
        totalAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    cancelOrder(userId: number, orderId: number): Promise<void>;
}
