import { Trash } from "lucide-react";
import { Product } from "../../types/product";

import { DeleteButton, Item } from "./style";

interface Props {
  product: Product;
  onDelete: (id: string) => void;
}

export function ProductItem({ product, onDelete }: Props) {
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
      <DeleteButton
        onClick={() => onDelete(product.id)}
        title="Excluir produto"
      >
        <Trash size={18} />
      </DeleteButton>
    </Item>
  );
}
