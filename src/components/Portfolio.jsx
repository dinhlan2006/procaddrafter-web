// src/components/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// 👉 danh sách video
const items = [
  {
    src: "/videos/civil3d.mp4",
    title: "Civil 3D Drafting Animation",
  },
  {
    src: "/videos/residential.mp4",
    title: "Residential Design Visualization",
  },
  {
    src: "/videos/permit.mp4",
    title: "Permit Drawings (Commercial)",
  },
  {
    src: "/videos/mepf.mp4",
    title: "MEPF Drafting Walkthrough",
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const refs = useRef([]); // tham chiếu tới các video

  // IntersectionObserver để bật/tắt video theo vùng nhìn thấy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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

    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // Lightbox hiển thị video to
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
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <video
              ref={(el) => (refs.current[i] = el)}
              src={item.src}
              muted
              playsInline
              loop
              className="w-full object-cover"
              poster="/assets/portfolio-frame.svg"
            />
            <div className="p-4 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={items}
        render={{ slide: renderVideo }}
        plugins={[Thumbnails]}
      />
    </section>
  );
}
