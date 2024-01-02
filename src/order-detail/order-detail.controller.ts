import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto, EditOrderDetailDto } from './dto';
// import { GetStaff } from '../auth/decorator';
// import { Staff } from '@prisma/client';

@Controller('order-detail')
export class OrderDetailController {
    constructor(private orderDetailService: OrderDetailService) {

    }

    @Get('orderDetailByOrderId')
    getAllOrderDetailByOrderId(userId: number, orderId: number) {
        return this.orderDetailService.getAllOrderDetailByOrderId(userId, orderId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createOrderDetail(orderId: number, dto: CreateOrderDetailDto[]) {
        return this.orderDetailService.createOrderDetail(orderId, dto);
    }

    // @Patch(':id')
    // editOrderDetailByOrderId(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) orderDetailId: number, dto: EditOrderDetailDto) {
    //     return this.orderDetailService.editOrderDetailByOrderId(staff, orderDetailId, dto);
    // }

    @Delete(':id')
    deleteOrderDetail(@Param('id', ParseIntPipe) orderDetailId: number) {
        return this.orderDetailService.deteleOrderDetail(orderDetailId);
    }
}
