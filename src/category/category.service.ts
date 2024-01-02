import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Staff } from '@prisma/client';
import { CreateCategoryDto, EditCategoryDto } from './dto';
@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async getAllCategory() {
        const categories = await this.prisma.category.findMany();

        if (!categories) {
            throw new ForbiddenException('Failed to get all categories');
        }

        return categories;
    }

    async getCategoryById(categoryId: number) {
        const category = await this.prisma.category.findUnique({
            where: { 
                id: categoryId 
            }
        });
        if (!category) {
            throw new ForbiddenException('Failed to get category by id');
        }

        return category;
    }

    // async createCategory(staff: Staff, dto: CreateCategoryDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access categories');
    //     }

    //     const categoryCreated = await this.prisma.category.create({
    //         data: dto
    //     }); 
    //     if(!categoryCreated) {
    //         throw new ForbiddenException('Failed to create a new category');
    //     }

    //     return categoryCreated;
    // }

    // async editCategory(staff: Staff, categoryId: number, dto: EditCategoryDto) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access categories');
    //     }

    //     const findCategory = await this.prisma.category.findFirst({
    //         where: {
    //             id: categoryId
    //         }
    //     });
    //     if(!findCategory) {
    //         throw new NotFoundException('The category is invalid');
    //     }

    //     const editedCategory = await this.prisma.category.update({
    //         where: {
    //             id: categoryId
    //         },
    //         data: {
    //             ...dto
    //         }
    //     })
    //     if(!editedCategory){
    //         throw new ForbiddenException('Failed to update category');
    //     }
    // }

    // async deleteCategory(staff: Staff, categoryId: number) {
    //     if (!staff.roleId) {
    //         throw new ForbiddenException('The staff cannot access categories');
    //     }
        
    //     const findCategory = await this.prisma.category.findUnique({
    //         where: {
    //             id: categoryId
    //         }
    //     })
    //     if(!findCategory) {
    //         throw new ForbiddenException('The category is invalid');
    //     }

    //     const deletedCategory = await this.prisma.category.delete({
    //         where: {
    //             id: categoryId
    //         }
    //     })
    //     if(!deletedCategory) {
    //         throw new ForbiddenException('Failed to delete the category');
    //     }

    //     return true;
    // }
}
