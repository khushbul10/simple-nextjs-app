"use client";
import React from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    toast("Logging In...");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        throw new Error("Login failed");
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED try to Log In");
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400" required />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
        <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400" required />
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-lime-600 hover:to-lime-700 dark:hover:from-lime-700 dark:hover:to-lime-800 transition-all duration-200">Login</button>
    </form>
  )
}
