import { Product } from "../../types/product";
import { ProductItem } from "../productItem";

import { List } from "./style";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <List>
      {products.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </List>
  );
}
