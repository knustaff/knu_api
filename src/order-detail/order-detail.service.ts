import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Staff } from '@prisma/client';
import { CreateOrderDetailDto, EditOrderDetailDto } from './dto';
import { OrderItem } from '../helper/order.type';

@Injectable()
export class OrderDetailService {
    constructor(private prisma: PrismaService) {}

    async getAllOrderDetailByOrderId(userId: number, orderId: number) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId,
            },
        });
        if (!findOrder) {
            throw new ForbiddenException('The order is invalid');
        }
        if (findOrder.userId !== userId) {
            throw new ForbiddenException('You are not the owner of this order');
        }

        const orderDetailOfOrder = this.prisma.orderDetail.findMany({
            where: {
                orderId: orderId,
            },
        });
        if (!orderDetailOfOrder) {
            throw new ForbiddenException(
                'Failed to get order detail of this order',
            );
        }
    }

    // async getAllOrderDetail(staff: Staff, orderId?: number) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException(
    //             'The staff cannot access order detail',
    //         );
    //     }

    //     const findOrder = await this.prisma.order.findFirst({
    //         where: {
    //             id: orderId,
    //         },
    //     });
    //     if (!findOrder) {
    //         throw new ForbiddenException('The order is invalid');
    //     }

    //     const orderDetail = orderId
    //         ? await this.prisma.orderDetail.findMany({
    //               where: {
    //                   orderId: orderId,
    //               },
    //           })
    //         : await this.prisma.orderDetail.findMany();
    //     if (!orderDetail) {
    //         throw new ForbiddenException('Failed to get all order detail');
    //     }

    //     return orderDetail;
    // }

    async createOrderDetail(orderId: number, dto: CreateOrderDetailDto[]) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId
            }
        });
        if(!findOrder) {
            throw new ForbiddenException('The order is invalid');
        }

        const listProductId: number[] = dto.map(value => value.productId)
        const findProduct = await this.prisma.product.findMany({
            where: {
                id: {
                    in: listProductId
                }
            }
        });
        if(!findProduct || findProduct.length !== listProductId.length) {
            throw new ForbiddenException('The product is invalid');
        }

        const newOrderItem: OrderItem[] = dto.map((item) => {
            return { ...item, orderId: orderId }
        });
        const orderDetailCreated = await this.prisma.orderDetail.createMany({
            data: newOrderItem
        });
        if(!orderDetailCreated) {
            throw new ForbiddenException('Fail to create the order detail');
        }

        return true;
    }

    // async editOrderDetailByOrderId(staff: Staff, orderDetailId: number, dto: EditOrderDetailDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException(
    //             'The staff cannot access order detail',
    //         );
    //     }

    //     const orderDetail = await this.prisma.orderDetail.findFirst({
    //         where: {
    //             id: orderDetailId
    //         }
    //     });

    //     if (!orderDetail) {
    //         throw new ForbiddenException('The Order Detail does not exist');
    //     }

    //     if (orderDetail.productId !== dto.productId || orderDetail.orderId !== dto.orderId) {
    //         throw new ForbiddenException('The data request doesn\'s match with the order detail');
    //     }

    //     if (dto.quantity <= 0) {
    //         await this.prisma.orderDetail.delete({
    //             where: {
    //                 id: orderDetail.id,
    //             },
    //         });

    //         return {
    //             success: true,
    //             message: 'Item deleted when quantity equal 0',
    //         };
    //     } else {
    //         const findProduct = await this.prisma.product.findFirst({
    //             where: {
    //                 id: dto.productId
    //             }
    //         });
    //         if(!findProduct) {
    //             throw new ForbiddenException('The product is invalid');
    //         }
            
    //         const updatedOrderDetail = await this.prisma.orderDetail.update({
    //             where: {
    //                 id: orderDetail.id,
    //             },
    //             data: {
    //                 quantity: dto.quantity,
    //                 subTotal: dto.quantity * findProduct.price
    //             }
    //         });

    //         if (!updatedOrderDetail) {
    //             throw new ForbiddenException('Fail to update order detail');
    //         }
    //     }
    // }

    async deteleOrderDetail(orderDetailId: number) {
        const findOrderDetail = await this.prisma.orderDetail.findFirst({
            where: {
                id: orderDetailId
            }
        });
        if(!findOrderDetail) {
            throw new ForbiddenException('The order detail is invalid');
        }

        await this.prisma.orderDetail.delete({
            where: {
                id: orderDetailId
            }
        });
        return {
            success: true,
            message: 'Deleted',
        };
    }
}
