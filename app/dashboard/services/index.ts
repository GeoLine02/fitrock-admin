import api from "@/utils/axios";
import { cookies } from "next/headers";

export async function getUserCount() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await api.get("/user/count", {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });
    const data = res.data;
    return data.count;
  } catch (error) {
    console.error("Error fetching user count:", error);
    throw error;
  }
}

export async function getProductsCount() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await api.get("/products/count", {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });
    const data = res.data;
    return data.count;
  } catch (error) {
    console.error("Error fetching products count:", error);
    throw error;
  }
}
