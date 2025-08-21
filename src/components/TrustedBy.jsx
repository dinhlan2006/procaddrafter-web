import React from "react";

export default function TrustedBy() {
  const logos = [
    "/logos/buildsmart.svg",
    "/logos/urbanworks.svg",
    "/logos/architective.svg",
    "/logos/mepf.svg",
  ];

  return (
    <section className="py-14 bg-white text-center">
      <h3 className="text-xl font-semibold mb-8">Trusted by clients & partners</h3>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-14 opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
