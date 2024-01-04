import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    name: string;

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
    
    @IsString()
    @IsNotEmpty()
    paymentMethod: string

    @IsNumber()
    @IsNotEmpty()
    totalAmount: number;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}