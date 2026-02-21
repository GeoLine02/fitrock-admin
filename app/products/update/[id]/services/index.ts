import { cookies } from "next/headers";
import api from "@/utils/axios";

export const getProductById = async (id: number) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const res = await api.get(`/products/${id}`, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
