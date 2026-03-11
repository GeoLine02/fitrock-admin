import api from "@/utils/axios";

export async function refetchFilters(page: number, limit: number) {
  try {
    const res = await api.get(`/filters?page=${page}&limit=${limit}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteFilter(filterId: number) {
  try {
    const res = await api.delete(`/filters/${filterId}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
