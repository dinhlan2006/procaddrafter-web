import React from "react";
import civil3d from "../assets/civil3d.png";
import permit from "../assets/permit.png";
import residential from "../assets/residential.png";

const services = [
  { title: "Civil 3D Drafting", image: civil3d },
  { title: "Permit Drawings", image: permit },
  { title: "Residential Design", image: residential },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map(({ title, image }) => (
          <div key={title} className="bg-gray-100 p-6 rounded-2xl shadow-md text-center">
            <img src={image} alt={title} className="h-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
