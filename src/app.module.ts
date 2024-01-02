import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        AuthModule,
        UserModule,
        OrderModule,
        OrderDetailModule,
        ProductModule,
        CategoryModule,
        CartModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
