import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products') 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts() {
    return this.appService.getAllProducts();
  }

  @Post()
  @UsePipes(new ValidationPipe()) 
  addProduct(@Body() createProductDto: CreateProductDto) {
    return this.appService.createProduct(createProductDto);
  }
}
