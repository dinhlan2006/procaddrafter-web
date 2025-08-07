import React from "react";
import { Button } from "./ui/button";

const steps = [
  "Initial Details", "Documentation",
  "Development", "Initial Sketch",
  "Research", "Designing",
  "Data Analysis", "Testing",
];

export default function GetStarted() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6" id="get-started">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            How To Get Started With Freelance CAD Drafter
          </h2>
          <p className="mb-6 text-gray-200">
            To get started with freelance CAD Drafter, clients have to share the
            details about their construction project. We value and analyze their
            blueprints to deliver the most suitable package. Then, we quote, invoice,
            and start generating reliable blueprints within 1–2 days for fast turnaround.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-gray-100">
              Get A Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full">
              Call Now
            </Button>
          </div>
        </div>

        {/* Right: steps grid */}
        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-yellow-600 text-white text-center py-4 rounded-md font-semibold hover:bg-yellow-700 transition"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
