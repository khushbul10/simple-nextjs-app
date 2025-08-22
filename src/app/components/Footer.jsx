"use client";

import ThemeToggleButton from "./ThemeToggleButton";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 transition-colors duration-300 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Simple Next.js App. All rights reserved.
        </p>
        <div className="mt-2 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </div>
    </footer>
  );
}
