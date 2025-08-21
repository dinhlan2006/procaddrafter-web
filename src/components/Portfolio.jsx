// src/components/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import poster correctly from src/assets (Vite will hash/serve it)
import frame from "../assets/portfolio-frame.svg";

const ITEMS = [
  { src: "/videos/civil3d.mp4", title: "Civil 3D Drafting", tag: "civil" },
  { src: "/videos/residential.mp4", title: "Residential Design", tag: "residential" },
  { src: "/videos/permit.mp4", title: "Permit Drawings", tag: "permit" },
  { src: "/videos/mepf.mp4", title: "MEPF Drafting", tag: "mepf" },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Civil 3D", value: "civil" },
  { label: "Residential", value: "residential" },
  { label: "Permit", value: "permit" },
  { label: "MEPF", value: "mepf" },
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState("all");
  const vids = useRef([]);

  const filtered = filter === "all" ? ITEMS : ITEMS.filter((i) => i.tag === filter);

  // Autoplay/pause when in viewport. Re-attach when filter changes.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting && typeof v.play === "function") {
            v.play().catch(() => {});
          } else if (typeof v.pause === "function") {
            v.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    vids.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [filter, filtered.length]);

  const renderVideo = ({ slide }) => (
    <video
      src={slide.src}
      controls
      autoPlay
      muted
      loop
      playsInline
      style={{ maxWidth: "90vw", maxHeight: "90vh" }}
    />
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Portfolio & Samples</h2>

      {/* FILTER BAR */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === f.value
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={item.src}
            onClick={() => setIndex(i)}
            className="rounded-xl overflow-hidden shadow hover:shadow-2xl transition cursor-pointer"
          >
            <video
              ref={(el) => (vids.current[i] = el)}
              src={item.src}
              muted
              loop
              autoPlay
              playsInline
              poster={frame}
              className="w-full h-48 object-cover bg-gray-100"
            />
            <div className="p-4 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filtered.map((v) => ({ ...v, type: "video" }))}
        render={{ video: renderVideo }}
        controller={{ autoplay: true }}
      />
    </section>
  );
}
