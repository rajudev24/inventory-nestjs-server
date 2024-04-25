/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schemas/products.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private productModel: mongoose.Model<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    const products = await this.productModel.find();
    return products;
  }

  async create(product: Products): Promise<Products> {
    const res = await this.productModel.create(product);
    return res;
  }

  async findById(id: string): Promise<Products> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct ID');
    }
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('Product Not Found');
    }
    return product;
  }

  async updateById(id: string, product: Products): Promise<Products> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct ID');
    }
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Products> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct ID');
    }
    return await this.productModel.findByIdAndDelete(id);
  }
}
