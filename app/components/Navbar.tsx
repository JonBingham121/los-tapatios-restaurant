"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/logo.jpg" 
              alt="Los Tapatios Mexican Restaurant" 
              width={180} 
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              Home
            </Link>
            <Link href="/locations" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              Locations
            </Link>
            <Link href="/menu" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              Menu
            </Link>
            <Link href="/catering" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              Catering
            </Link>
            <Link href="/vip-club" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              VIP Club
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-brand-red transition font-sans font-semibold">
              Contact
            </Link>
            <Link
              href="/order"
              className="bg-brand-red text-white px-6 py-2 rounded-full hover:bg-brand-brown transition font-sans font-bold shadow-lg"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
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
          <div className="md:hidden pb-4 bg-brand-cream rounded-b-lg">
            <Link href="/" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              Home
            </Link>
            <Link href="/locations" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              Locations
            </Link>
            <Link href="/menu" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              Menu
            </Link>
            <Link href="/catering" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              Catering
            </Link>
            <Link href="/vip-club" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              VIP Club
            </Link>
            <Link href="/contact" className="block py-2 text-gray-900 hover:text-brand-red font-sans font-semibold">
              Contact
            </Link>
            <Link
              href="/order"
              className="block mt-2 bg-brand-red text-white px-6 py-2 rounded-full text-center hover:bg-brand-brown font-sans font-bold shadow-lg"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
