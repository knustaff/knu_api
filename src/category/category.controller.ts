import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtGuard } from '../auth/guard';
// import { GetStaff } from '../auth/decorator';
// import { Staff } from '@prisma/client';
import { CreateCategoryDto, EditCategoryDto } from './dto';

// @UseGuards(JwtGuard)
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getAllCategories() {
        return this.categoryService.getAllCategory();
    }

    @Get(':id')
    getCategoryById(@Param('id', ParseIntPipe) categoryId: number) {
        return this.categoryService.getCategoryById(categoryId);
    }

    // @HttpCode(HttpStatus.CREATED)
    // @Post()
    // createNewCategory(
    //     @GetStaff() staff: Staff,
    //     @Body() dto: CreateCategoryDto,
    // ) {
    //     return this.categoryService.createCategory(staff, dto);
    // }

    // @Patch(':id')
    // updateCategory(
    //     @GetStaff() staff: Staff,
    //     @Param('id', ParseIntPipe) categoryId: number,
    //     @Body() dto: EditCategoryDto,
    // ) {
    //     return this.categoryService.editCategory(staff, categoryId, dto);
    // }

    // @Delete(':id')
    // deleteCategory(
    //     @GetStaff() staff: Staff,
    //     @Param('id', ParseIntPipe) categoryId: number,
    // ) {
    //     return this.categoryService.deleteCategory(staff, categoryId);
    // }
}
