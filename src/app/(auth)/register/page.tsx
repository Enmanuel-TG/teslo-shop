import { geistSans } from "@/src/config/fonts";
import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${geistSans.className} text-4xl mb-5`}>Register</h1>

      <div className="flex flex-col">
        <label htmlFor="text">Name</label>
        <input
          required
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="Text"
        />
        <label htmlFor="email">Email Account</label>
        <input
          required
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <label htmlFor="email">Password</label>
        <input
          required
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <button className="btn-primary">Register</button>

        <div className="flex items-center mt-5 mb-2">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
        <p>Do you have a account?</p>
        <Link href="\login" className="btn-secondary text-center text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
}
