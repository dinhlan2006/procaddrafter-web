// src/components/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Portfolio() {
  const items = [
    { src: "/videos/civil3d.mp4", title: "Civil 3D Drafting Animation" },
    { src: "/videos/residential.mp4", title: "Residential Design Visualization" },
    { src: "/videos/permit.mp4", title: "Permit Drawings (Commercial)" },
    { src: "/videos/mepf.mp4", title: "MEPF Drafting Walkthrough" },
  ];

  const [index, setIndex] = useState(-1); // lightbox index
  const refs = useRef([]); // reference tới video html

  // Tự động play/pause khi element trong vùng nhìn thấy
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // render slide video trong Lightbox
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
    </video>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Portfolio & Samples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <video
              ref={el => (refs.current[i] = el)}
              src={item.src}
              muted
              playsInline
              loop
              // tự chạy
              autoPlay
              poster="/assets/portfolio-frame.svg"
              className="w-full object-cover"
            />
            <div className="p-4 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      {/* lightbox video */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={items}
        render={{ slide: renderVideo }}
      />
    </section>
  );
}
