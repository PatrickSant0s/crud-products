import { Product } from "../../types/product";
import { Item } from "./style";

interface Props {
  product: Product;
}

export function ProductItem({ product }: Props) {
  return (
    <Item>
      <div>
        <strong>{product.model}</strong> - {product.brand}
        <br />
        Type: {product.type}, Focal: {product.focalLength}, Aperture:{" "}
        {product.maxAperture}
        <br />
        Mount: {product.mount}, Weight: {product.weight}g<br />
        Stabilized: {product.hasStabilization ? "Yes" : "No"}, Active:{" "}
        {product.active ? "Yes" : "No"}
      </div>
    </Item>
  );
}
