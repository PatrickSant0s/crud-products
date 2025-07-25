import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  focalLength: string;

  @Prop({ required: true })
  maxAperture: string;

  @Prop({ required: true })
  mount: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  hasStabilization: boolean;

  @Prop({ required: true })
  active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
