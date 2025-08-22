// src/components/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import frame from "../assets/portfolio-frame.svg"; // poster image (in src/assets)

const ITEMS = [
  { id: 1, tag: "civil",       title: "Civil 3D Drafting",     src: "/videos/civil3d.mp4" },
  { id: 2, tag: "residential", title: "Residential Design",    src: "/videos/residential.mp4" },
  { id: 3, tag: "permit",      title: "Permit Drawings",       src: "/videos/permit.mp4" },
  { id: 4, tag: "mepf",        title: "MEPF Drafting",         src: "/videos/mepf.mp4" },
];

const FILTERS = [
  { label: "All",         value: "all" },
  { label: "Civil 3D",    value: "civil" },
  { label: "Residential", value: "residential" },
  { label: "Permit",      value: "permit" },
  { label: "MEPF",        value: "mepf" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(-1); // index inside the *filtered* array
  const videoRefs = useRef([]);                   // HTMLVideoElement[]

  const filtered =
    filter === "all" ? ITEMS : ITEMS.filter((i) => i.tag === filter);

  // Autoplay/pause when cards enter/leave viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            typeof v.play === "function" && v.play().catch(() => {});
          } else {
            v.pause?.();
          }
        });
      },
      { threshold: 0.3 }
    );

    // observe current rendered videos
    videoRefs.current.forEach((el) => el && io.observe(el));

    return () => io.disconnect();
  }, [filter]); // re-attach when filter changes

  // Render <video> inside Lightbox
  const renderVideo = ({ slide }) => (
    <video
      controls
      autoPlay
      muted
      loop
      playsInline
      style={{ maxWidth: "90vw", maxHeight: "90vh" }}
    >
      <source src={slide.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Portfolio &amp; Samples
      </h2>

      {/* Filter bar */}
      <div className="flex justify-center mb-8 gap-3 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => {
              setFilter(f.value);
              setOpenIndex(-1);
            }}
            className={`px-4 py-2 rounded-full border transition
              ${
                filter === f.value
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setOpenIndex(i)}
            className="rounded-2xl overflow-hidden shadow hover:shadow-2xl transition cursor-pointer bg-white ring-1 ring-gray-100"
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              className="w-full h-48 object-cover bg-gray-100"
              preload="metadata"
              muted
              loop
              playsInline
              poster={frame}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-4 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={filtered.map((v) => ({ src: v.src, type: "video" }))}
        render={{ video: renderVideo }}
        controller={{ closeOnBackdropClick: true }}
      />
    </section>
  );
}
