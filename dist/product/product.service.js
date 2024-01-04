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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllProducts() {
        const products = await this.prisma.product.findMany();
        if (!products) {
            throw new common_1.ForbiddenException('Failed to get all products');
        }
        return products;
    }
    async getProductById(productId) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: productId
            }
        });
        if (!product) {
            throw new common_1.ForbiddenException(`No product with ID ${productId}`);
        }
        return product;
    }
    async getProductsByCategoryId(categoryId) {
        const findCategory = await this.prisma.category.findFirst({
            where: {
                id: categoryId
            }
        });
        if (!findCategory) {
            throw new common_1.ForbiddenException('The category is invalid');
        }
        const getProducts = await this.prisma.product.findMany({
            where: {
                categoryId: categoryId
            }
        });
        if (!getProducts) {
            throw new common_1.ForbiddenException('Fail to get products by category');
        }
        return getProducts;
    }
    async createManyProduct(userId, dto) {
        if (!userId) {
            throw new common_1.ForbiddenException('Has no access');
        }
        const findUser = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!findUser || findUser.email !== "admin@kimandyou.vn") {
            throw new common_1.ForbiddenException('Fail to get admin');
        }
        const product = await this.prisma.product.createMany({ data: dto });
        if (!product) {
            throw new common_1.ForbiddenException('Failed to create product');
        }
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map