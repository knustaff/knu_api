import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
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
    getOrderById(id: number, orderId: number): Promise<{
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
    createOrder(userId: number, dto: CreateOrderDto): Promise<{
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
