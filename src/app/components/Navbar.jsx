"use client";

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { signOut, useSession } from "next-auth/react";

export function ThemeToggleButton() {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="ml-2 p-2 rounded-full bg-white/40 dark:bg-gray-800/40 hover:bg-lime-100 dark:hover:bg-gray-700 shadow-md transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-700" />}
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)
  const { data: session, status } = useSession();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
        } bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl shadow-lg border-b border-lime-400/30`}
      style={{
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold  text-black dark:text-white  hover:text-white transition-colors duration-200">
          MyStore
        </Link>

        {/* Desktop Links & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="px-3 py-1 rounded-xl font-medium text-white bg-lime-500/80 hover:bg-lime-600 hover:text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
            Home
          </Link>
          <Link href="/products" className="px-3 py-1 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
            Products
          </Link>
          {status !== "authenticated" ? (
            <>
              <Link href="/login" className="px-3 py-1 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                Login
              </Link>
              <Link href="/register" className="px-3 py-1 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="px-3 py-1 rounded-xl font-medium text-lime-700 bg-lime-100 hover:bg-lime-200 hover:text-lime-900 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                Dashboard
              </Link>
              <Link href="/profile" className="px-3 py-1 rounded-xl font-medium text-lime-700 bg-lime-100 hover:bg-lime-200 hover:text-lime-900 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                Profile
              </Link>
              <button onClick={() => {
                signOut()
                toast("Logged Out Successfully");
              }} className="px-3 py-1 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">
                Logout
              </button>
            </>
          )}
          {/* <ThemeToggleButton /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* <ThemeToggleButton /> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lime-500 bg-white/40 hover:bg-lime-100 rounded-full p-2 shadow-md transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-lime-400/30 shadow-lg">
          <div className="flex flex-col space-y-3 px-4 py-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-white bg-lime-500/80 hover:bg-lime-600 hover:text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
              Home
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
              Products
            </Link>
            {status === "loading" ? null : !session ? (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-lime-600 bg-white/70 hover:bg-lime-100 hover:text-lime-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-lime-700 bg-lime-100 hover:bg-lime-200 hover:text-lime-900 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  Dashboard
                </Link>
                <Link href="/profile" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-xl font-medium text-lime-700 bg-lime-100 hover:bg-lime-200 hover:text-lime-900 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  Profile
                </Link>
                <button className="px-3 py-2 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400" onClick={() => {/* TODO: Add logout logic */ }}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}