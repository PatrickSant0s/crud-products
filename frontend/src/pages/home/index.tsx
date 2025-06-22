import { ProductForm } from "../../components/productForm";
import { ProductList } from "../../components/productList";
import { Product } from "../../types/product";
import { Container } from "./style";

const mockProducts: Product[] = [
  {
    id: "1",
    model: "EF 50mm",
    brand: "Canon",
    type: "Prime",
    focalLength: "50mm",
    maxAperture: "f/1.8",
    mount: "EF",
    weight: 160,
    hasStabilization: false,
    active: true,
  },
];

export default function Home() {
  return (
    <Container>
      <ProductForm />
      <ProductList products={mockProducts} />
    </Container>
  );
}
