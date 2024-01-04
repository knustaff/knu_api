import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDetailDto } from './dto';
export declare class OrderDetailService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllOrderDetailByOrderId(userId: number, orderId: number): Promise<void>;
    createOrderDetail(orderId: number, dto: CreateOrderDetailDto[]): Promise<boolean>;
    deteleOrderDetail(orderDetailId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
