import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, EditProductDto } from './dto';
// import { Staff } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts() {
        const products = await this.prisma.product.findMany();
        if (!products) {
            throw new ForbiddenException('Failed to get all products');
        }
        return products;
    }

    async getProductById(productId: number) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: productId
            }
        });
        if (!product) {
            throw new ForbiddenException(`No product with ID ${productId}`);
        }

        return product;
    }

    async getProductsByCategoryId(categoryId: number) {
        const findCategory = await this.prisma.category.findFirst({
            where: {
                id: categoryId
            }
        });
        if(!findCategory){
            throw new ForbiddenException('The category is invalid');
        }

        const getProducts = await this.prisma.product.findMany({
            where: {
                categoryId: categoryId
            }
        });
        if(!getProducts) {
            throw new ForbiddenException('Fail to get products by category');
        }

        return getProducts;
    }

    // async createManyProduct(dto: CreateProductDto[]) {
    //     const product = await this.prisma.product.createMany({ data: dto });
    //     if (!product) {
    //         throw new ForbiddenException('Failed to create product');
    //     }

    //     return product;
    // }

    // async createProduct(staff: Staff, dto: CreateProductDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access products');
    //     }

    //     const product = await this.prisma.product.create({ data: dto });
    //     if (!product) {
    //         throw new ForbiddenException('Failed to create product');
    //     }

    //     return product;
    // }

    // async editProduct(staff: Staff, productId: number, dto: EditProductDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access products');
    //     }

    //     const findProduct = await this.prisma.product.findFirst({
    //         where: {
    //             id: productId
    //         }
    //     })
    //     if (!findProduct) {
    //         throw new NotFoundException('The product is invalid');
    //     }

    //     const editedProduct = await this.prisma.product.update({
    //         where: { 
    //             id: productId 
    //         },
    //         data: { 
    //             ...dto 
    //         },
    //     });
    //     if (!editedProduct) {
    //         throw new ForbiddenException('Failed to edit the product');
    //     }

    //     return editedProduct;
    // }

    // async deleteProduct(staff: Staff, productId: number) {
    //     if(!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access products');
    //     }
        
    //     const findProduct = await this.prisma.product.findUnique({
    //         where: {
    //             id: productId
    //         }
    //     })
    //     if(!findProduct) {
    //         throw new ForbiddenException('The product is invalid');
    //     }

    //     const deletedProduct = await this.prisma.product.delete({
    //         where: {
    //             id: productId
    //         }
    //     })
    //     if(!deletedProduct) {
    //         throw new ForbiddenException('Faileded to delete the product');
    //     }

    //     return true;
    // }
}
