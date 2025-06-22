export interface FormData {
  model: string;
  brand: string;
  type: string;
  focalLength: string;
  maxAperture: string;
  mount: string;
  weight: string;
  hasStabilization: boolean;
  active: boolean;
}

export function validateProductForm(data: FormData) {
  const errors: { [key: string]: string } = {};

  if (!data.model) errors.model = "Modelo obrigatório";
  if (!data.brand) errors.brand = "Marca obrigatória";
  if (!data.type) errors.type = "Tipo obrigatório";
  if (!data.focalLength) errors.focalLength = "Comprimento focal obrigatório";
  if (!data.maxAperture) errors.maxAperture = "Abertura máxima obrigatória";
  if (!data.mount) errors.mount = "Montaria obrigatória";

  if (!data.weight) errors.weight = "Peso obrigatório";
  else if (isNaN(Number(data.weight))) errors.weight = "Peso deve ser número";

  return errors;
}
