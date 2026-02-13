import api from "@/utils/axios";
import { SignUpCreds } from "../types";

export const signupService = async (data: SignUpCreds) => {
  try {
    const res = await api.post("/auth/signup", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
