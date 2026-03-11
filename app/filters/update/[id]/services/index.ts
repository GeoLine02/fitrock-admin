import api from "@/utils/axios";

export async function updateWeightFilter(weight: number, filterId: number) {
  try {
    const res = await api.patch(`/filters/${filterId}`, {
      weightAmount: weight,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
