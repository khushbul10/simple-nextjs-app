"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const { resolvedTheme, theme } = useTheme();
  console.log(resolvedTheme, theme);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white ">
            Discover Our{" "}
            <span className="text-lime-600 dark:text-lime-400">Exclusive</span>{" "}
            Products
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Shop the latest tech, gadgets, and accessories. Quality you can
            trust, at prices you’ll love.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full bg-lime-600 text-white font-medium hover:bg-lime-700 transition"
            >
              View Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-full border border-lime-600 text-lime-600 dark:text-lime-400 dark:border-lime-400 hover:bg-lime-50 dark:hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?_gl=1*zvuwu1*_ga*MzAxMTk1ODA4LjE3NTQ4MjIxMjI.*_ga_8JE65Q40S6*czE3NTU4NDY0NTgkbzIkZzEkdDE3NTU4NDY0NjIkajU2JGwwJGgw" // put your image in /public folder
            alt="Hero Product"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
