import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  model: string;

  @IsString()
  brand: string;

  @IsString()
  type: string;

  @IsString()
  focalLength: string;

  @IsString()
  maxAperture: string;

  @IsString()
  mount: string;

  @IsInt()
  weight: number;

  @IsBoolean()
  hasStabilization: boolean;

  @IsBoolean()
  active: boolean;
}
