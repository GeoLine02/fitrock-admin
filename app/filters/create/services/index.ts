import api from "@/utils/axios";

export async function createWeigthFilter(weight: number) {
  try {
    const res = await api.post("/filters", {
      weightAmount: weight,
    });

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
