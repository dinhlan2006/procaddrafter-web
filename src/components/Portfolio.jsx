import React from "react";
import cad1 from "../assets/portfolio1.png";
import cad2 from "../assets/portfolio2.png";
import cad3 from "../assets/portfolio3.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Portfolio and Samples
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[cad1, cad2, cad3].map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={image} alt={`CAD Sample ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
