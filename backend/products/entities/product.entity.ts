import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

const { nanoid } = require('nanoid');

@Entity('products')
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  type: string;

  @Column()
  focalLength: string;

  @Column()
  maxAperture: string;

  @Column()
  mount: string;

  @Column()
  weight: number;

  @Column()
  hasStabilization: boolean;

  @Column()
  active: boolean;

  @BeforeInsert()
  generateID() {
    this.id = `product_${nanoid()}`;
  }
}
