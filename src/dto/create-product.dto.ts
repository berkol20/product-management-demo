import { IsString, IsNumber, MinLength, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Ürün adı boş olamaz' })
  @IsString()
  @MinLength(3, { message: 'Ürün adı en az 3 karakter olmalıdır' })
  name!: string;

  @IsNumber({}, { message: 'Fiyat bir sayı olmalıdır' })
  price!: number;
}
