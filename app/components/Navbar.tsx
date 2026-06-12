"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Los Tapatios</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/locations" className="text-charcoal hover:text-red-600 transition">
              Locations
            </Link>
            <Link href="/menu" className="text-charcoal hover:text-red-600 transition">
              Menu
            </Link>
            <Link href="/catering" className="text-charcoal hover:text-red-600 transition">
              Catering
            </Link>
            <Link href="/vip-club" className="text-charcoal hover:text-red-600 transition">
              VIP Club
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-red-600 transition">
              Contact
            </Link>
            <Link
              href="/order"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-charcoal hover:text-red-600">
              Home
            </Link>
            <Link href="/locations" className="block py-2 text-charcoal hover:text-red-600">
              Locations
            </Link>
            <Link href="/menu" className="block py-2 text-charcoal hover:text-red-600">
              Menu
            </Link>
            <Link href="/catering" className="block py-2 text-charcoal hover:text-red-600">
              Catering
            </Link>
            <Link href="/vip-club" className="block py-2 text-charcoal hover:text-red-600">
              VIP Club
            </Link>
            <Link href="/contact" className="block py-2 text-charcoal hover:text-red-600">
              Contact
            </Link>
            <Link
              href="/order"
              className="block mt-2 bg-red-600 text-white px-6 py-2 rounded-full text-center hover:bg-orange-600"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
