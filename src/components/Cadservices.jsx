import React from "react";
import { Button } from "../components/ui/button";

export default function CadServices() {
  return (
    <section
      id="cad-services"
      className="py-20 bg-gradient-to-br from-white to-gray-100 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">CAD Designing And Drafting Services</h2>
        <p className="text-lg text-gray-700 mb-6">
          Cad Drafter has been drafting the most authentic structural drawings throughout the USA,
          adhering to the country’s time zones. We provide dependable CAD design and drafting services
          for construction projects encompassing residential houses, commercial buildings, industrial buildings,
          and large-scale infrastructure with accuracy.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          Our CAD drafting services include 3D modeling, 2D modeling, 2D to 3D CAD conversion,
          and a wide range of domains in Computer Aided Design projects. We consider client objectives
          and project requirements to carry out our drawing process efficiently and professionally.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full">
            Upload Plans
          </Button>
          <Button className="border border-yellow-600 text-yellow-700 px-6 py-3 rounded-full bg-white hover:bg-yellow-100">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
