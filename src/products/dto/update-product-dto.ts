/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly productName: string;

  @IsOptional()
  @IsNumber()
  readonly productPrice: number;

  @IsOptional()
  @IsNumber()
  readonly productQuantity: number;

  @IsOptional()
  @IsString()
  readonly exprationDate: string;
}
