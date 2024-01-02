import { IsOptional, IsNumber, IsString } from 'class-validator'

export class EditOrderDto {

    @IsNumber()
    @IsOptional()
    orderStatus?: number;

    @IsString()
    @IsOptional()
    shippingAdress?: string;

    @IsNumber()
    @IsOptional()
    totalAmount?: number;
    
}