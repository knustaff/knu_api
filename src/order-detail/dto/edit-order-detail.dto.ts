import { IsNotEmpty, IsNumber } from 'class-validator';

export class EditOrderDetailDto {
    @IsNumber()
    @IsNotEmpty()
    orderId: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

}
