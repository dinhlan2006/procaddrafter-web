// src/components/Services.jsx
import { useEffect, useMemo, useState } from "react";
import ServiceDetails from "./ServiceDetails";

// ICONS
import civil3dIcon from "../assets/civil3d.svg";
import permitIcon from "../assets/permit.svg";
import residentialIcon from "../assets/residential.svg";

// HERO PREVIEWS (tạm thời dùng 1 ảnh khung hoặc ảnh thật nếu có)
import portfolioFrame from "../assets/portfolio-frame.svg";

const SERVICE_DATA = {
  civil3d: {
    key: "civil3d",
    title: "Civil 3D Drafting",
    icon: civil3dIcon,
    hero: portfolioFrame, // thay bằng ảnh CAD thật nếu có
    overview:
      "We produce accurate plan & profile, grading, corridor, pipe network and quantity takeoff models using Autodesk Civil 3D. Deliverables are ready for permitting, bidding, and construction.",
    points: [
      "Plan & Profile sheets for roads, utilities",
      "Surface & corridor modeling (alignments, FG, assemblies)",
      "Grading, cut/fill & material quantities",
      "Pipe networks (storm, water, sanitary) with profiles",
      "Sheet set organization and publishing",
      "Sheet annotations, labels & tables per standards"
    ],
    deliverables: [
      "DWG (Civil 3D native) + Xrefs",
      "PDF plan set (Sheet Set)",
      "LandXML / CSV export (surfaces, alignments, points)",
      "Quantity takeoff tables",
      "CTB/STB + title block"
    ],
    software: ["Autodesk Civil 3D", "AutoCAD", "Bluebeam"],
    standards: ["USCAD standards", "Client CAD standards", "AASHTO (when required)"]
  },
  permit: {
    key: "permit",
    title: "Permit Drawings",
    icon: permitIcon,
    hero: portfolioFrame,
    overview:
      "Code-compliant residential & light-commercial permit sets. We coordinate architectural, structural, and MEP notes for quick approval.",
    points: [
      "Site plan, floor plans, elevations",
      "Door/window schedules & room tags",
      "Basic structural notes (lateral/vertical)",
      "MEP general notes & fixture layout (as required)",
      "Title 24 or energy notes (if provided by client)"
    ],
    deliverables: [
      "PDF full set for submission",
      "DWG source files",
      "Revisions tracked & clouded",
      "City markups addressed"
    ],
    software: ["AutoCAD", "Revit (upon request)", "Bluebeam"],
    standards: ["Local code notes (by client/city)", "Plot standards per city"]
  },
  residential: {
    key: "residential",
    title: "Residential Design",
    icon: residentialIcon,
    hero: portfolioFrame,
    overview:
      "Construction drawings for additions, ADUs, and new single-family homes. We prepare clear floor plans, elevations, sections, and details to build fast and safely.",
    points: [
      "Space planning & schematic layout",
      "Floor plans, elevations & building sections",
      "Stair, door/window details",
      "Interior elevations (kitchen, bath) when requested",
      "Title block, index, sheet notes"
    ],
    deliverables: [
      "PDF construction set",
      "DWG source files",
      "Detail sheets & schedules",
      "Revisions log"
    ],
    software: ["AutoCAD", "Revit (upon request)"],
    standards: ["Client drafting standard", "City sheet naming & plotting"]
  }
};

export default function Services() {
  const [open, setOpen] = useState(false);
  const [which, setWhich] = useState(null);

  const selected = useMemo(() => {
    if (!which) return null;
    return SERVICE_DATA[which];
  }, [which]);

  // Deep-link: #civil3d, #permit, #residential
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && SERVICE_DATA[hash]) {
      setWhich(hash);
      setOpen(true);
    }
  }, []);

  function onCardClick(key) {
    setWhich(key);
    setOpen(true);
    // cập nhật hash để share link
    history.replaceState(null, "", `#${key}`);
  }

  function closeModal() {
    setOpen(false);
    setWhich(null);
    // clear hash
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  const CARDS = [
    { ...SERVICE_DATA.civil3d },
    { ...SERVICE_DATA.permit },
    { ...SERVICE_DATA.residential }
  ];

  return (
    <>
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CARDS.map((s) => (
            <button
              key={s.key}
              onClick={() => onCardClick(s.key)}
              className="group w-full bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="h-28 mx-auto mb-4 transition-transform group-hover:-translate-y-0.5"
              />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Click to view details
              </p>
            </button>
          ))}
        </div>
      </section>

      <ServiceDetails open={open} onClose={closeModal} service={selected} />
    </>
  );
}
