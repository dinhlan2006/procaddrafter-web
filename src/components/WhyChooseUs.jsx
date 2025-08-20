// src/components/WhyChooseUs.jsx
import React from "react";
import { SpeedIcon, PriceTagIcon, DrafterIcon, MEPFIcon } from "./icons/ServiceIcons";

const ITEMS = [
  {
    key: "fast",
    title: "Fast Turnaround",
    desc: "We deliver drawings quickly without compromising quality, so your projects keep moving.",
    Icon: SpeedIcon,
  },
  {
    key: "pricing",
    title: "Affordable Pricing",
    desc: "Competitive, transparent rates tailored to scope. Maximum value for your budget.",
    Icon: PriceTagIcon,
  },
  {
    key: "drafters",
    title: "Skilled Drafters",
    desc: "Experienced team that understands engineering, permitting, and construction standards.",
    Icon: DrafterIcon,
  },
  {
    key: "mepf",
    title: "MEPF Experts",
    desc: "Specialized in coordinated Mechanical, Electrical, Plumbing & Fire-fighting shop drawings.",
    Icon: MEPFIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {ITEMS.map(({ key, title, desc, Icon }) => (
          <div
            key={key}
            className="
              group relative bg-white rounded-2xl border border-gray-200
              shadow-sm hover:shadow-xl transition-all duration-300
              overflow-hidden
            "
          >
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-amber-400" />

            <div className="p-8 text-center">
              <div
                className="
                  mx-auto mb-6 inline-flex items-center justify-center
                  h-16 w-16 rounded-full
                  bg-amber-100 ring-1 ring-amber-300 shadow-inner
                "
              >
                <Icon className="w-9 h-9 text-amber-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {desc}
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
