import { useEffect, useState } from "react";
import { ProductForm } from "../../components/productForm";
import { ProductList } from "../../components/productList";
import { EditProductModal } from "../../components/editProductModal";
import { Product } from "../../types/product";
import { deleteProduct, fetchProducts } from "../../services/api";
import { Container, FilterInput, Pagination, PageButton } from "./style";
import { toast } from "react-toastify";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const itemsPerPage = 3;

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

  const handleDelete = async (_id: string) => {
    try {
      await deleteProduct(_id);
      await loadProducts();
      toast.success("Produto removido com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
      toast.error("Erro ao excluir produto. Tente novamente.");
    }
  };

  const handleCreated = (newProduct: Product) => {
    setProducts((old) => [...old, newProduct]);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleCloseEdit = () => {
    setEditingProduct(null);
    loadProducts(); // recarrega os dados
  };

  const handleUpdated = () => {
    loadProducts();
    toast.success("Produto atualizado com sucesso!");
    setEditingProduct(null);
  };

  const filteredProducts = products.filter(
    (product) =>
      (product.model?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
      (product.brand?.toLowerCase() ?? "").includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <h1>Gerenciador de Produtos</h1>

      <ProductForm onCreated={handleCreated} />

      <FilterInput
        placeholder="Filtrar por modelo ou marca"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <ProductList
        products={paginatedProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={handleCloseEdit}
          onUpdated={loadProducts}
        />
      )}

      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              active={currentPage === i + 1}
            >
              {i + 1}
            </PageButton>
          ))}
        </Pagination>
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdated={handleUpdated}
        />
      )}
    </Container>
  );
}
