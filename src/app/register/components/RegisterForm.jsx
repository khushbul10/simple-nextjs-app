"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react'

export default function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    registerUser(data);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400" required />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
        <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400" required />
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-lime-500 to-lime-600 dark:from-lime-600 dark:to-lime-700 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-lime-600 hover:to-lime-700 dark:hover:from-lime-700 dark:hover:to-lime-800 transition-all duration-200">Register</button>
    </form>
  )
}
