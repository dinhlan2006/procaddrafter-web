import React from "react";

const testimonials = [
  {
    name: "Mila Peters",
    text: "My doubts have been cleared after choosing CAD Drafter. They provided the most accurate blueprints for my project with on-time delivery leading to my project’s success. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Sami Steve",
    text: "Our company has been building various commercial and industrial buildings and we consider CAD Drafter as our trusted partner for providing us with the most reliable and accurate services.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Shea Sol",
    text: "I am really impressed with how supportive they were throughout our dealings. They also drafted exact blueprints which have led our firm to get precise estimations of our materials through their drawings.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blue-900 text-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-blue-800 p-6 rounded-lg border-l-4 border-yellow-400 shadow-md"
          >
            <p className="mb-4 italic">“{t.text}”</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-yellow-300">★★★★★</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
