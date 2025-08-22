"use client";
import React, { useEffect, useState } from 'react';

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch('/api/products?limit=6');
        const data = await res.json();
        setProducts(data.data?.slice(0, 6) || []);
      } catch (err) {
        setProducts([]);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-lime-700 dark:text-lime-400">Product Highlights</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {products.map(product => (
            <div key={product._id} className="bg-white dark:bg-gray-800 border border-lime-200 dark:border-lime-700 rounded-xl shadow-md p-6 flex flex-col items-center">
              <img src={product.img} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-1 text-lime-700 dark:text-lime-400 text-center">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">{product.category}</p>
              <p className="text-gray-700 dark:text-gray-200 font-bold mb-2">${product.price}</p>
              <span className="text-xs text-gray-400 dark:text-gray-500">{product.seller}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
