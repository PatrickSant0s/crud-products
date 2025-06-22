import axios from "axios";
import { Product } from "../types/product";

const baseUrl = "http://localhost:3000/products";

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(baseUrl);
  return response.data;
}
