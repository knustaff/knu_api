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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCart(userId, dto) {
        let result;
        const findCart = await this.prisma.cart.findFirst({
            where: {
                userId: userId
            }
        });
        if (findCart) {
            result = await this.prisma.cart.update({
                where: {
                    id: findCart.id
                },
                data: {
                    ...dto
                }
            });
        }
        else {
            result = await this.prisma.cart.create({
                data: {
                    userId: userId,
                    ...dto
                }
            });
        }
        delete result.id;
        delete result.userId;
        return result;
    }
    async getCart(userId) {
        const cart = await this.prisma.cart.findFirst({
            where: {
                userId: userId
            }
        });
        if (!cart) {
            throw new common_1.ForbiddenException('User has no cart data');
        }
        delete cart.id;
        delete cart.userId;
        return cart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map