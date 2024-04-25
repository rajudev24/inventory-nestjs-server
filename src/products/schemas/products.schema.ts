/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Products {
  @Prop()
  productName: string;

  @Prop()
  productPrice: number;

  @Prop()
  productQuantity: number;

  @Prop()
  exprationDate: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
