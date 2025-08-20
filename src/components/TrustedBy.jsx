import React from "react";

const LOGOS = [
  { src: "/assets/logo-buildsmart.svg", alt: "BuildSmart" },
  { src: "/assets/logo-urbanworks.svg", alt: "UrbanWorks" },
  { src: "/assets/logo-architective.svg", alt: "Architective" },
  { src: "/assets/logo-mepf.svg", alt: "MEPF Solutions" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold mb-8 text-gray-700 tracking-wide">
          Trusted by clients & partners
        </h3>

        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          {LOGOS.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
