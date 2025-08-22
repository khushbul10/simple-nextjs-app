import React from 'react'
import Link from 'next/link';



export default async function ProductsPage() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  const products = data?.data;
  console.log(products);
  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-white via-lime-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-lime-900 transition-colors">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-lime-700 dark:text-lime-400 tracking-tight drop-shadow-lg">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {products?.map(product => (
          <div
            key={product._id}
            className="group bg-white dark:bg-gray-800 border border-lime-200 dark:border-lime-700 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-lime-400 dark:hover:border-lime-500"
          >
            <div className="relative w-40 h-40 mb-4">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-xl border-2 border-lime-200 dark:border-lime-700 group-hover:border-lime-400 dark:group-hover:border-lime-500 transition" />
              {product.stock === 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">Out of Stock</span>
              )}
            </div>
            <h2 className="text-lg font-bold mb-1 text-lime-700 dark:text-lime-400 text-center">{product.name}</h2>
            <span className="inline-block bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">{product.category}</span>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">by <span className="font-medium text-gray-700 dark:text-gray-200">{product.seller}</span></p>
            <p className="text-2xl font-bold text-lime-700 dark:text-lime-400 mb-2">${product.price}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">{product.ratings} <span className="text-xs">({product.ratingsCount} reviews)</span></span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Stock: <span className={product.stock > 0 ? "text-lime-700 dark:text-lime-400" : "text-red-500"}>{product.stock}</span></p>
            <Link href={`/products/${product._id}`} passHref legacyBehavior>
              <a className="mt-auto w-full bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-lime-600 hover:to-lime-700 dark:hover:from-lime-700 dark:hover:to-lime-800 transition-all duration-200 text-center block">Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
