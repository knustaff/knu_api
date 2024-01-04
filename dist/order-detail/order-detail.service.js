"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrderDetailService = class OrderDetailService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllOrderDetailByOrderId(userId, orderId) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId,
            },
        });
        if (!findOrder) {
            throw new common_1.ForbiddenException('The order is invalid');
        }
        if (findOrder.userId !== userId) {
            throw new common_1.ForbiddenException('You are not the owner of this order');
        }
        const orderDetailOfOrder = this.prisma.orderDetail.findMany({
            where: {
                orderId: orderId,
            },
        });
        if (!orderDetailOfOrder) {
            throw new common_1.ForbiddenException('Failed to get order detail of this order');
        }
    }
    async createOrderDetail(orderId, dto) {
        const findOrder = await this.prisma.order.findFirst({
            where: {
                id: orderId
            }
        });
        if (!findOrder) {
            throw new common_1.ForbiddenException('The order is invalid');
        }
        const listProductId = dto.map(value => value.productId);
        const findProduct = await this.prisma.product.findMany({
            where: {
                id: {
                    in: listProductId
                }
            }
        });
        if (!findProduct || findProduct.length !== listProductId.length) {
            throw new common_1.ForbiddenException('The product is invalid');
        }
        const newOrderItem = dto.map((item) => {
            return { ...item, orderId: orderId };
        });
        const orderDetailCreated = await this.prisma.orderDetail.createMany({
            data: newOrderItem
        });
        if (!orderDetailCreated) {
            throw new common_1.ForbiddenException('Fail to create the order detail');
        }
        return true;
    }
    async deteleOrderDetail(orderDetailId) {
        const findOrderDetail = await this.prisma.orderDetail.findFirst({
            where: {
                id: orderDetailId
            }
        });
        if (!findOrderDetail) {
            throw new common_1.ForbiddenException('The order detail is invalid');
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
};
exports.OrderDetailService = OrderDetailService;
exports.OrderDetailService = OrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderDetailService);
//# sourceMappingURL=order-detail.service.js.map