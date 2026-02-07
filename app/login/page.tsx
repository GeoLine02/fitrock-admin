import Link from "next/link";

export default function Login() {
  return (
    <div
      className="min-h-screen w-screen 
  flex items-center justify-center"
    >
      <form className="w-95 bg-neutral-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-neutral-500 py-2 mb-4 text-white placeholder-gray-400 outline-none focus:border-orange-500"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full bg-transparent border-b border-neutral-500 py-2 mb-4 text-white placeholder-gray-400 outline-none focus:border-orange-500"
        />
        <button className="w-full bg-[#E47C48] cursor-pointer hover:bg-gray-700 transition-all duration-200 h-10 rounded-md text-white font-medium">
          Login
        </button>
        <p className="text-white flex justify-between text-sm mt-3">
          dont have an account ?{" "}
          <Link
            href={"/sign-up"}
            className="text-[#E47C48]  hover:bg-gray-700 transition-all duration-200 cursor-pointer underline"
          >
            Sign Up{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
