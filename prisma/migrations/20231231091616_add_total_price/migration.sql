/*
  Warnings:

  - Added the required column `totalPrice` to the `orderDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orderDetails" ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "totalAmount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "originalPrice" INTEGER;
