// src/components/ServiceDetails.jsx
import { useEffect } from "react";

export default function ServiceDetails({ open, onClose, service }) {
  // Đóng bằng phím ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-[min(980px,92vw)] max-h-[86vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/90 p-5 backdrop-blur">
          <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-50"
            aria-label="Close"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-7 space-y-6">
          {/* Ảnh hero/preview */}
          {service.hero && (
            <img
              src={service.hero}
              alt={service.title}
              className="w-full rounded-xl border"
            />
          )}

          {/* Overview */}
          <section className="space-y-3">
            <h4 className="text-lg font-semibold">Overview</h4>
            <p className="text-gray-700 leading-relaxed">{service.overview}</p>
          </section>

          {/* What we deliver */}
          {service.points?.length > 0 && (
            <section className="space-y-3">
              <h4 className="text-lg font-semibold">What we deliver</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.points.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-[#C99200]">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Deliverables */}
          {service.deliverables?.length > 0 && (
            <section className="space-y-3">
              <h4 className="text-lg font-semibold">Deliverables</h4>
              <div className="rounded-xl border p-4">
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {service.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Standards / Software */}
          {(service.software?.length || service.standards?.length) && (
            <section className="grid md:grid-cols-2 gap-4">
              {service.software?.length > 0 && (
                <div className="rounded-xl border p-4">
                  <h5 className="font-semibold mb-2">Software</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {service.software.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {service.standards?.length > 0 && (
                <div className="rounded-xl border p-4">
                  <h5 className="font-semibold mb-2">Standards</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {service.standards.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#get-started"
              className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
            >
              Get a Quote
            </a>
            <a
              href="#contact-form"
              className="rounded-full border px-5 py-2 hover:bg-gray-50"
            >
              Upload Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
