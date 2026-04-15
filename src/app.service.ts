import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {
  
  private products: any[] = [];

  getAllProducts() {
    return this.products;
  }

  createProduct(dto: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...dto,
      createdAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }
}