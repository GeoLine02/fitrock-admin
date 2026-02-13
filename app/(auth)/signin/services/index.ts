import api from "@/utils/axios";
import { SignInCreds } from "../types";

export const signinService = async (data: SignInCreds) => {
  try {
    const res = await api.post("/auth/signin", data);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
