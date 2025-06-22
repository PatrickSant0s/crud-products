import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Sigma 35mm f/1.4',
    description: 'Modelo do produto',
  })
  @IsString()
  model: string;

  @ApiProperty({ example: 'Sigma', description: 'Marca do produto' })
  @IsString()
  brand: string;

  @ApiProperty({ example: 'Macro', description: 'Tipo da lente' })
  @IsString()
  type: string;

  @ApiProperty({ example: '35mm', description: 'Comprimento focal da lente' })
  @IsString()
  focalLength: string;

  @ApiProperty({ example: 'f/1.4', description: 'Abertura máxima da lente' })
  @IsString()
  maxAperture: string;

  @ApiProperty({
    example: 'Canon EF Mount',
    description: 'Nome oficial da montaria',
  })
  @IsString()
  mount: string;

  @ApiProperty({ example: 665, description: 'Peso em gramas' })
  @IsInt()
  weight: number;

  @ApiProperty({ example: true, description: 'Possui estabilização?' })
  @IsBoolean()
  hasStabilization: boolean;

  @ApiProperty({ example: true, description: 'Está ativo?' })
  @IsBoolean()
  active: boolean;
}
