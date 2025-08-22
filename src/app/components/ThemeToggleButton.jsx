"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="ml-2 p-2 mt-20 rounded-full bg-white/40 dark:bg-gray-800/40 hover:bg-lime-100 dark:hover:bg-gray-700 shadow-md transition-all duration-200"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-700" />}
    </button>
  );
}
