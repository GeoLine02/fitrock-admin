"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/providers/UserProvider";
import { ClipLoader } from "react-spinners";
import { signinService } from "../services";

type LoginFormData = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setServerError(null);

      const res = await signinService(data);

      console.log(res);

      if (res.status === 203) {
        setUser(res.data.user);

        router.push("/");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message || "Login failed. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Fitrock Admin</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Server Error */}
          {serverError && (
            <p className="text-red-600 text-sm text-center">{serverError}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? <ClipLoader color="white" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
