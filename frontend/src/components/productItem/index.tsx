import { Trash2, Pencil } from "lucide-react";
import { Product } from "../../types/product";
import { Item, DeleteButton, EditButton } from "./style";
import { deleteProduct } from "../../services/api";

type Props = {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
};

export function ProductItem({ product, onDelete, onEdit }: Props) {
  return (
    <Item>
      <div>
        <strong>{product.model}</strong> - {product.brand}
        <br />
        Type: {product.type}, Focal: {product.focalLength}, Aperture:{" "}
        {product.maxAperture}
        <br />
        Mount: {product.mount}, Weight: {product.weight}g
        <br />
        Stabilized: {product.hasStabilization ? "Yes" : "No"}, Active:{" "}
        {product.active ? "Yes" : "No"}
      </div>

      <div>
        <EditButton onClick={() => onEdit(product)} title="Editar produto">
          <Pencil size={18} />
        </EditButton>
        <DeleteButton
          onClick={() => {
            if (product._id) {
              onDelete(product._id);
            } else {
              console.error("ID do produto está undefined", product);
            }
          }}
        >
          <Trash2 size={18} />
        </DeleteButton>
      </div>
    </Item>
  );
}
