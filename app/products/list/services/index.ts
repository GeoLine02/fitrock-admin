import { cookies } from "next/headers";

import api from "@/utils/axios";

export const getProductsService = async (page: number, limit: number) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const res = await api.get(`/products?page=${page}&limit=${limit}`, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    console.log("data: ", res.data);

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
