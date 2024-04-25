/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly productName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly productPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly productQuantity: number;

  @IsNotEmpty()
  @IsString()
  readonly exprationDate: string;
}
