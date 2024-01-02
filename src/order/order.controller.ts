import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { GetUser } from '../auth/decorator';
// import { Staff } from '@prisma/client';
import { CreateOrderDto, EditOrderDto } from './dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {

    }

    // @Get()
    // getAllOrder(@GetStaff() staff: Staff) {
    //     return this.orderService.getAllOrders(staff);
    // }

    @Get('my-order')
    getAllOrderByUserId(@GetUser('id') userId: number) {
        return this.orderService.getAllOrderByUserId(userId);
    }

    @Get(':id')
    getOrderById(@GetUser('id') id: number, @Param('id', ParseIntPipe) orderId: number) {
        return this.orderService.getOrderById(id, orderId);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createOrder(@GetUser('id') userId: number, dto: CreateOrderDto) {
        return this.orderService.createOder(userId, dto);
    }

    // @Patch(':id')
    // editOrder(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) orderId: number, dto: EditOrderDto) {
    //     return this.orderService.editOrder(staff, orderId, dto);
    // }

    @Patch('/cancel-order/:id')
    cancelOrder(@GetUser('id') userId: number, @Param('id', ParseIntPipe) orderId: number) {
        return this.orderService.cancelOrder(userId, orderId);
    }

    // @Delete(':id')
    // deleteOrder(@GetStaff() staff: Staff, @Param('id', ParseIntPipe) orderId: number) {
    //     return this.orderService.deleteOrder(staff, orderId);
    // }
}
