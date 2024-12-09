"use client"
// components/Navbar.js
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
        {/* Logo */}
        <div className="text-center mt-[45px] text-2xl font-bold helvetica text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </div>
      <div className="container h-[87px] w-[1320px] mx-auto flex items-center justify-between">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-[16px] inter font-normal text-[16px]">
          <a href="#" className="navbar__link relative ">
            Home
          </a>
          <a href="#menu" className="navbar__link relative">
            Menu
          </a>
          <a href="#blog" className="navbar__link relative">
            Blog
          </a>
          <a href="#pages" className="navbar__link relative">
            Pages
          </a>
          <a href="#about" className="navbar__link relative">
            About
          </a>
          <a href="#shop" className="navbar__link relative">
            Shop
          </a>
          <a href="#contact" className="navbar__link relative">
            Contact
          </a>
        </nav>

        {/* Search & Cart Icons */}
        <div className="hidden md:flex items-center space-x-4 ">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] text-white text-sm px-4 py-2 w-[310px] h-[54px] rounded-full focus:outline-none"
            />
            <FiSearch className="absolute right-2 text-[#FF9F0D]" />
          </div>
          <HiOutlineShoppingBag className="text-2xl text-[#FF9F0D] hover:text-white cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FF9F0D] text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black text-white py-4 px-4 space-y-4">
          <a href="#" className="block hover:text-[#FF9F0D]">
            Home
          </a>
          <a href="#menu" className="block hover:text-[#FF9F0D]">
            Menu
          </a>
          <a href="#blog" className="block hover:text-[#FF9F0D]">
            Blog
          </a>
          <a href="#pages" className="block hover:text-[#FF9F0D]">
            Pages
          </a>
          <a href="#about" className="block hover:text-[#FF9F0D]">
            About
          </a>
          <a href="#shop" className="block hover:text-[#FF9F0D]">
            Shop
          </a>
          <a href="#contact" className="block hover:text-[#FF9F0D]">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
