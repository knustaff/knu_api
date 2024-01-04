export declare class CreateProductDto {
    productName: string;
    productDescription?: string;
    originalPrice: number;
    price: number;
    inventoryQuantity: number;
    imageUrl?: string;
    categoryId: number;
    subcategoryId: number;
}
