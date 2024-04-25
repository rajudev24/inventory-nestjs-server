/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './schemas/products.schema';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';

@Controller('product')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/get-products')
  async getAllProducts(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Post('/add-product')
  async createProduct(
    @Body()
    product: CreateProductDto,
  ): Promise<Products> {
    return this.productsService.create(product);
  }

  @Get(':id')
  async getProduct(
    @Param('id')
    id: string,
  ): Promise<Products> {
    return this.productsService.findById(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
  ): Promise<Products> {
    return this.productsService.updateById(id, product);
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id')
    id: string,
  ): Promise<Products> {
    return this.productsService.deleteById(id);
  }
}
