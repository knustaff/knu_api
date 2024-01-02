import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
    
    @IsString()
    @IsNotEmpty()
    productName?: string;

    @IsString()
    @IsOptional()
    productDescription?: string;

    @IsNumber()
    @IsNotEmpty()
    originalPrice: number;
    
    @IsNumber()
    @IsNotEmpty()
    price?: number;

    @IsNumber()
    @IsNotEmpty()
    inventoryQuantity?: number;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId?: number;

    @IsNumber()
    @IsNotEmpty()
    subcategoryId?: number;
}