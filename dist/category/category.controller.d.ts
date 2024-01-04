import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<{
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
