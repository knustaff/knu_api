export enum OrderStatus {
    PENDING = 0,
    PROCESSING = 1,
    COMPLETED = 2,
    SHIPPED = 3,
    DELIVERED = 4,
    CANCELED = 5
}
export type OrderItem = {
    orderId: number;
    productId: number;
    productName: string;
    imageUrl: string;
    quantity: number;
    price: number;
    totalPrice: number;
}