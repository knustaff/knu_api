import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateOrderDto {
    @IsDateString()
    @IsNotEmpty()
    orderDate: string;

    @IsNumber()
    @IsNotEmpty()
    orderStatus: number;

    @IsString()
    @IsNotEmpty()
    shippingAddress: string;
    
    @IsString()
    @IsNotEmpty()
    shippingMethod: string;

    @IsNumber()
    @IsNotEmpty()
    totalAmount: number;
}