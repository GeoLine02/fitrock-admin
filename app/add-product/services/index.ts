import api from "@/utils/axios";
import { AddProductData } from "../types";

export const addProductService = async (data: AddProductData) => {
  try {
    const res = await api.post("/products", data);
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
