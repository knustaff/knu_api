import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto } from './dto';
export declare class OrderDetailController {
    private orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    getAllOrderDetailByOrderId(userId: number, orderId: number): Promise<void>;
    createOrderDetail(orderId: number, dto: CreateOrderDetailDto[]): Promise<boolean>;
    deleteOrderDetail(orderDetailId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
