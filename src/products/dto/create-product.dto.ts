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
  MaxAperture: string;

  @IsString()
  mount: string;

  @IsInt()
  weight: number;

  @IsBoolean()
  haStabilization: boolean;

  @IsBoolean()
  active: boolean;
}
