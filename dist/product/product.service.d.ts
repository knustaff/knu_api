import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        originalPrice: number;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProductById(productId: number): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        originalPrice: number;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProductsByCategoryId(categoryId: number): Promise<{
        id: number;
        productName: string;
        productDescription: string;
        originalPrice: number;
        price: number;
        inventoryQuantity: number;
        imageUrl: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createManyProduct(userEmail: string, dto: CreateProductDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
