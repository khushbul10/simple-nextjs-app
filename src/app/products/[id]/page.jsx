import React from "react";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) return notFound();
  const data = await res.json();
  const product = data?.data;
  if (!product) return notFound();

  return (
    <div className="min-h-screen mt-20 py-10 bg-gradient-to-br from-white via-lime-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-lime-900 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 border border-lime-200 dark:border-lime-700 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <img src={product.img} alt={product.name} className="w-56 h-56 object-cover rounded-xl border-2 border-lime-200 dark:border-lime-700 mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-lime-700 dark:text-lime-400 text-center">{product.name}</h1>
        <span className="inline-block bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">{product.category}</span>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-2 text-center">by <span className="font-medium text-gray-700 dark:text-gray-200">{product.seller}</span></p>
        <p className="text-2xl font-bold text-lime-700 dark:text-lime-400 mb-3 text-center">${product.price}</p>
        <div className="flex items-center gap-2 mb-3 justify-center">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-gray-700 dark:text-gray-200 text-sm">{product.ratings} <span className="text-xs">({product.ratingsCount} reviews)</span></span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 text-center">Stock: <span className={product.stock > 0 ? "text-lime-700 dark:text-lime-400" : "text-red-500"}>{product.stock}</span></p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">Shipping: ${product.shipping}</p>
        <button className="w-full bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-lime-600 hover:to-lime-700 dark:hover:from-lime-700 dark:hover:to-lime-800 transition-all duration-200">Buy Now</button>
      </div>
    </div>
  );
}
