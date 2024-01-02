import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Staff } from '@prisma/client';
import { CreateOrderDto, EditOrderDto } from './dto';
import { OrderStatus } from '../helper/order.type';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) {}

    // async getAllOrders(staff: Staff) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access order');
    //     }

    //     const orders = await this.prisma.order.findMany();
    //     if (!orders) {
    //         throw new ForbiddenException('Failed to get all orders');
    //     }

    //     return orders;
    // }

    async getAllOrderByUserId(userId: number) {
        const orders = await this.prisma.order.findMany({
            where: {
                userId: userId,
            },
        });
        if (!orders) {
            throw new ForbiddenException('Failed to get the orders of the user');
        }
        if (orders.length == 0) {
            throw new ForbiddenException('User has no order');
        }

        return orders;
    }

    async getOrderById(userId: number, orderId: number) {
        const order = await this.prisma.order.findFirst({
            where: {
                id: orderId,
                userId: userId,
            },
        });
        if (!order) {
            throw new ForbiddenException('Failed to get the order');
        }

        return order;
    }

    async createOder(userId: number, dto: CreateOrderDto) {
        const createdOrder = await this.prisma.order.create({
            data: {
                userId,
                ...dto,
            },
        });

        if (!createdOrder) {
            throw new ForbiddenException('Failed to create order');
        }

        return createdOrder;
    }

    // async editOrder(staff: Staff, orderId: number, dto: EditOrderDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access order');
    //     }

    //     const findOrder = await this.prisma.order.findFirst({
    //         where: {
    //             id: orderId,
    //         },
    //     });
    //     if (!findOrder) {
    //         throw new ForbiddenException('The order is invalid');
    //     }

    //     const editedOrder = await this.prisma.order.update({
    //         where: {
    //             id: orderId,
    //         },
    //         data: {
    //             ...dto,
    //         },
    //     });
    //     if (!editedOrder) {
    //         throw new ForbiddenException('Failed to edit the order');
    //     }

    //     return editedOrder;
    // }

    async cancelOrder(userId: number, orderId: number) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId
            }
        });
        if (findOrder?.orderStatus !== OrderStatus.PENDING || !findOrder) {
            throw new ForbiddenException(`Can't cancel an already processed or non-existing order`);
        }
        if (findOrder.userId !== userId) {
            throw new ForbiddenException('The user cannot access this order');
        }

        const canceledOrder = await this.prisma.order.update({
            where: {
                id: orderId,
                userId: userId
            },
            data: {
                orderStatus: OrderStatus.CANCELED
            }
        });
        if (!canceledOrder) {
            throw new ForbiddenException('Failed to cancel this order');
        }
    }

    // async deleteOrder(staff: Staff, orderId: number) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access order');
    //     }
    //     const findOrder = await this.prisma.order.findFirst({
    //         where: {
    //             id: orderId
    //         }
    //     });
    //     if(!findOrder) {
    //         throw new ForbiddenException('The order is invalid');
    //     }

    //     const deletedOrder = await this.prisma.order.delete({
    //         where: {
    //             id: orderId
    //         }
    //     });
    //     const deleteOrderDetail = await this.prisma.orderDetail.deleteMany({
    //         where: {
    //             orderId: orderId
    //         }
    //     })
    //     if(!deletedOrder || !deleteOrderDetail) {
    //         throw new ForbiddenException('Failed to delete the order');
    //     }

    //     return true;
    // }
}
