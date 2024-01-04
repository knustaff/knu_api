import { ProductService } from './product.service';
import { CreateProductDto } from './dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProduct(): Promise<{
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
    createManyProducts(userId: number, dto: CreateProductDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
