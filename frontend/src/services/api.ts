import axios from "axios";
import { Product } from "../types/product";
import exp from "constants";

const baseUrl = "http://localhost:3000/products";

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(baseUrl);
  return response.data;
}

export async function deleteProduct(id: string): Promise<void> {
  await axios.delete(`${baseUrl}/${id}`);
}

export async function createProduct(
  product: Omit<Product, "_id">
): Promise<Product> {
  const response = await axios.post<Product>(baseUrl, product);
  return response.data;
}

export async function updateProduct(
  id: string,
  product: Omit<Product, "_id">
): Promise<Product> {
  const response = await axios.patch<Product>(`${baseUrl}/${id}`, product);
  return response.data;
}
