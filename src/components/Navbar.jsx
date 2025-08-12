import React from "react";
import { Link } from "react-scroll"; // Nếu muốn cuộn mượt
import logo from "../assets/react.svg"; // Tạm thời dùng logo cũ, sau thay bằng logo mới của bạn

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="ProcadDrafter Logo" className="h-10 w-auto mr-3" />
          <span className="text-xl font-bold text-gray-800">
            <span className="text-yellow-500">Procad</span>Drafter
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Home</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Portfolio</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Testimonials</Link></li>
          <li><Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">FAQ</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
