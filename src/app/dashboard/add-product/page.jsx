"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    seller: "",
    price: "",
    stock: "",
    ratings: "",
    ratingsCount: "",
    img: "",
    shipping: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Product added successfully!");
        setForm({
          name: "",
          category: "",
          seller: "",
          price: "",
          stock: "",
          ratings: "",
          ratingsCount: "",
          img: "",
          shipping: "",
        });
      } else {
        toast.error(data.error || "Failed to add product.");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-lime-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-lime-900">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-lime-700 dark:text-lime-400 text-center">Add Product</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="seller" value={form.seller} onChange={handleChange} placeholder="Seller" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="ratings" value={form.ratings} onChange={handleChange} placeholder="Ratings" type="number" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="ratingsCount" value={form.ratingsCount} onChange={handleChange} placeholder="Ratings Count" type="number" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="img" value={form.img} onChange={handleChange} placeholder="Image URL" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <input name="shipping" value={form.shipping} onChange={handleChange} placeholder="Shipping" type="number" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white" required />
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-lime-600 hover:to-lime-700 dark:hover:from-lime-700 dark:hover:to-lime-800 transition-all duration-200">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
