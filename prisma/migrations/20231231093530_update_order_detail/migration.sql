/*
  Warnings:

  - Added the required column `price` to the `orderDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingMethod` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orderDetails" ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "shippingMethod" TEXT NOT NULL;
