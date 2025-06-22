import { Product } from "../../types/product";

import { ProductItem } from "../productItem";

import { List } from "./style";

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
  
}

export function ProductList({ products, onDelete, onEdit }: Props) {
  return (
    <List>
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          product={prod}
          onDelete={onDelete}
          onEdit={(product) => {
            onEdit(product);
          }}
        />
      ))}
    </List>
  );
}
