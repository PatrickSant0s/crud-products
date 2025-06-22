import { ProductForm } from "../../components/productForm";
import { ProductList } from "../../components/productList";
import { Product } from "../../types/product";
import { Container } from "./style";
import { deleteProduct, fetchProducts } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  // Função para carregar produtos do backend
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      await loadProducts(); // recarrega do backend a lista atualizada
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  };

  return (
    <Container>
      <ProductForm
        onCreated={(newProduct) => setProducts((old) => [...old, newProduct])}
      />

      <ProductList products={products} onDelete={handleDelete} />
    </Container>
  );
}
