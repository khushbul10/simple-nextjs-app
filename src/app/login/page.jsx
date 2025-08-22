import React from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-lime-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-lime-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-lime-700 dark:text-lime-400 text-center">Login</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
