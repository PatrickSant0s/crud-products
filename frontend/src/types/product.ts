export interface Product {
  _id: string;
  model: string;
  brand: string;
  type: "Prime" | "Zoom" | "Macro" | "Tilt-Shift";
  focalLength: string;
  maxAperture: string;
  mount: string;
  weight: number;
  hasStabilization: boolean;
  active: boolean;
}
