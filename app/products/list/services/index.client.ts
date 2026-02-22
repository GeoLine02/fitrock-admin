import api from "@/utils/axios";

export const refetchProducts = async (page: number, limit: number) => {
  try {
    const res = await api.get(`/products?page=${page}&limit=${limit}`);

    console.log("refetched prouducts: ", res.data);

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const res = await api.delete(`/products/${productId}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
