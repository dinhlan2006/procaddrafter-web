// src/components/Header.jsx
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src="/logo-procad.png" alt="ProcadDrafter" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
          <a href="#hero" className="hover:text-[#f59b7f] transition">Home</a>
          <a href="#services" className="hover:text-[#f59b7f] transition">Services</a>
          <a href="#portfolio" className="hover:text-[#f59b7f] transition">Portfolio</a>
          <a href="#testimonials" className="hover:text-[#f59b7f] transition">Testimonials</a>
          <a href="#cad-services" className="hover:text-[#f59b7f] transition">Design</a>
          <a href="#get-started" className="hover:text-[#f59b7f] transition">Get Started</a>
          <a href="#faq" className="hover:text-[#f59b7f] transition">FAQ</a>
          <a href="#footer" className="hover:text-[#f59b7f] transition">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-sm font-semibold text-gray-700 shadow">
          <a href="#hero" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Home</a>
          <a href="#services" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Services</a>
          <a href="#portfolio" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Portfolio</a>
          <a href="#testimonials" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Testimonials</a>
          <a href="#cad-services" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Design</a>
          <a href="#get-started" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Get Started</a>
          <a href="#faq" onClick={toggleMenu} className="block hover:text-[#f59b7f]">FAQ</a>
          <a href="#footer" onClick={toggleMenu} className="block hover:text-[#f59b7f]">Contact</a>
        </div>
      )}
    </header>
  );
}
