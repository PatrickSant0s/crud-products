import { Product } from "../../types/product";

import { ProductItem } from "../productItem";

import { List } from "./style";

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
}

export function ProductList({ products, onDelete }: Props) {
  return (
    <List>
      {products.map((prod) => (
        <ProductItem key={prod.id} product={prod} onDelete={onDelete} />
      ))}
    </List>
  );
}
