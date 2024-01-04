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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const order_detail_service_1 = require("./order-detail.service");
let OrderDetailController = class OrderDetailController {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    getAllOrderDetailByOrderId(userId, orderId) {
        return this.orderDetailService.getAllOrderDetailByOrderId(userId, orderId);
    }
    createOrderDetail(orderId, dto) {
        return this.orderDetailService.createOrderDetail(orderId, dto);
    }
    deleteOrderDetail(orderDetailId) {
        return this.orderDetailService.deteleOrderDetail(orderDetailId);
    }
};
exports.OrderDetailController = OrderDetailController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "getAllOrderDetailByOrderId", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('orderId')),
    __param(1, (0, common_1.Body)('cartData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "createOrderDetail", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "deleteOrderDetail", null);
exports.OrderDetailController = OrderDetailController = __decorate([
    (0, common_1.Controller)('order-detail'),
    __metadata("design:paramtypes", [order_detail_service_1.OrderDetailService])
], OrderDetailController);
//# sourceMappingURL=order-detail.controller.js.map