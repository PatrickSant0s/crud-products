import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  @ApiOperation({ summary: 'Buscar um produto por productId' })
  @ApiResponse({ status: 200, description: 'Produto encontrado' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  async findOne(@Param('productId') productId: string) {
    const product = await this.productsService.findOne(productId);
    if (!product) throw new NotFoundException();
    return product;
  }

  @Patch(':productId')
  @ApiOperation({ summary: 'Atualizar um produto por productId' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  async update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    const product = await this.productsService.update(
      productId,
      updateProductDto
    );
    if (!product) throw new NotFoundException();
    return product;
  }

  @Delete(':productId')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remover um produto por productId' })
  @ApiResponse({ status: 204, description: 'Produto removido com sucesso' })
  async remove(@Param('productId') productId: string): Promise<void> {
    await this.productsService.remove(productId);
  }
}
