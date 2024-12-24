"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#F5E6FE] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6A0572]">
          <Link href="/">ShopCapio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-[#3D1E6D] hover:text-[#C77DFF] font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[#3D1E6D] hover:text-[#C77DFF] font-medium transition-colors"
          >
            Products
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#3D1E6D] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-[#F5E6FE] px-4 pb-4`}
      >
        <Link
          href="/"
          className="block text-[#3D1E6D] hover:text-[#C77DFF] py-2 font-medium transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="block text-[#3D1E6D] hover:text-[#C77DFF] py-2 font-medium transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

