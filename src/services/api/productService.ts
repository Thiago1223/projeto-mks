import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderBy = "ASC" | "DESC";

interface ApiResponse {
  products: Product[];
  count: number;
}

export const getProducts = async (orderBy: OrderBy): Promise<ApiResponse> => {
  const API_URL = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=${orderBy}`;
  
  try {
    const response = await axios.get<ApiResponse>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
