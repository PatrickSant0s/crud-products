import { ProductForm } from "../../components/productForm";
import { ProductList } from "../../components/productList";
import { Product } from "../../types/product";
import { Container } from "./style";
import { fetchProducts } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <Container>
      <ProductForm />
      <ProductList products={products} />
    </Container>
  );
}
