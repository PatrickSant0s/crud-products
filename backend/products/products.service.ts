import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly model: Model<Product>
  ) {}

  async create(dto: CreateProductDto) {
    const product = new this.model(dto);
    return await product.save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOne(id: string) {
    const product = await this.model.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    const updated = await this.model
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    return updated;
  }

  async remove(id: string): Promise<void> {
    console.log('Tentando deletar ID:', id);
    const result = await this.model.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  }
}
