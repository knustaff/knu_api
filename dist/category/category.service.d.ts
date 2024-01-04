import { PrismaService } from '../prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCategory(): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCategoryById(categoryId: number): Promise<{
        id: number;
        categoryName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
