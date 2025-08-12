import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h4 className="text-xl font-bold mb-3">CAD DRAFTER</h4>
          <p>
            We offer the best CAD Drafting services for construction projects
            all over the USA.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Sample</li>
            <li>CAD Drafter UK</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>2D Drafting</li>
            <li>3D CAD Drafting</li>
            <li>MEP Drafting</li>
            <li>Civil Drafting</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: procaddrafter.com@gmail.com</p>
          <p>Phone: +84 788 639 487</p>
          <p>Address: Tòa Nhà An Phú Plaza, 117-119 Lý Chính Thắng, Phường Xuân Hòa, TP.HCM</p>
        </div>
      </div>
      <p className="text-center mt-10 text-gray-400 text-xs">
        © {new Date().getFullYear()} CAD Drafter | Design & SEO by Digital Insides
      </p>
    </footer>
  );
}
