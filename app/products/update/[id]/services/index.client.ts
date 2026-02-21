import { ProductData } from "@/app/products/create/types";
import api from "@/utils/axios";

export const updateProduct = async (id: number, data: ProductData) => {
  try {
    const rse = await api.patch(`/products/${id}`, data);
    return rse.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
