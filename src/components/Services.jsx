// src/components/Services.jsx
import { useEffect, useMemo, useState, useCallback } from "react";
import ServiceDetails from "./ServiceDetails";

// Vector icons (React components)
import { Civil3DIcon, PermitIcon, ResidentialIcon } from "./icons/ServiceIcons";

// Optional hero preview image shown in the modal
import portfolioFrame from "../assets/portfolio-frame.svg";

/* ---------- Content config ---------- */
const SERVICE_DATA = {
  civil3d: {
    key: "civil3d",
    title: "Civil 3D Drafting",
    Icon: Civil3DIcon,
    hero: portfolioFrame,
    overview:
      "We produce accurate plan & profile, grading, corridor, pipe network and quantity takeoff models using Autodesk Civil 3D. Deliverables are ready for permitting, bidding, and construction.",
    points: [
      "Plan & Profile sheets for roads, utilities",
      "Surface & corridor modeling (alignments, FG, assemblies)",
      "Grading, cut/fill & material quantities",
      "Pipe networks (storm, water, sanitary) with profiles",
      "Sheet set organization and publishing",
      "Sheet annotations, labels & tables per standards",
    ],
    deliverables: [
      "DWG (Civil 3D native) + Xrefs",
      "PDF plan set (Sheet Set)",
      "LandXML / CSV export (surfaces, alignments, points)",
      "Quantity takeoff tables",
      "CTB/STB + title block",
    ],
    software: ["Autodesk Civil 3D", "AutoCAD", "Bluebeam"],
    standards: ["USCAD standards", "Client CAD standards", "AASHTO (when required)"],
  },

  permit: {
    key: "permit",
    title: "Permit Drawings",
    Icon: PermitIcon,
    hero: portfolioFrame,
    overview:
      "Code-compliant residential & light-commercial permit sets. We coordinate architectural, structural, and MEP notes for quick approval.",
    points: [
      "Site plan, floor plans, elevations",
      "Door/window schedules & room tags",
      "Basic structural notes (lateral/vertical)",
      "MEP general notes & fixture layout (as required)",
      "Title 24 or energy notes (if provided by client)",
    ],
    deliverables: [
      "PDF full set for submission",
      "DWG source files",
      "Revisions tracked & clouded",
      "City markups addressed",
    ],
    software: ["AutoCAD", "Revit (upon request)", "Bluebeam"],
    standards: ["Local code notes (by client/city)", "Plot standards per city"],
  },

  residential: {
    key: "residential",
    title: "Residential Design",
    Icon: ResidentialIcon,
    hero: portfolioFrame,
    overview:
      "Construction drawings for additions, ADUs, and new single-family homes. We prepare clear floor plans, elevations, sections, and details to build fast and safely.",
    points: [
      "Space planning & schematic layout",
      "Floor plans, elevations & building sections",
      "Stair, door/window details",
      "Interior elevations (kitchen, bath) when requested",
      "Title block, index, sheet notes",
    ],
    deliverables: [
      "PDF construction set",
      "DWG source files",
      "Detail sheets & schedules",
      "Revisions log",
    ],
    software: ["AutoCAD", "Revit (upon request)"],
    standards: ["Client drafting standard", "City sheet naming & plotting"],
  },
};

/* ---------- Component ---------- */
export default function Services() {
  const [open, setOpen] = useState(false);
  const [which, setWhich] = useState(null);

  const selected = useMemo(() => (which ? SERVICE_DATA[which] : null), [which]);

  // Open modal if URL has hash (#civil3d / #permit / #residential)
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && SERVICE_DATA[hash]) {
      setWhich(hash);
      setOpen(true);
    }
  }, []);

  const openCard = useCallback((key) => {
    setWhich(key);
    setOpen(true);
    // update hash so you can share the link
    window.history.replaceState?.(null, "", `#${key}`);
  }, []);

  const onCardKeyDown = useCallback(
    (e, key) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCard(key);
      }
    },
    [openCard]
  );

  const closeModal = useCallback(() => {
    setOpen(false);
    setWhich(null);
    // clear hash
    window.history.replaceState?.(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }, []);

  const CARDS = [SERVICE_DATA.civil3d, SERVICE_DATA.permit, SERVICE_DATA.residential];

  return (
    <>
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {CARDS.map(({ key, title, Icon }) => (
            <div
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => openCard(key)}
              onKeyDown={(e) => onCardKeyDown(e, key)}
              aria-label={`View details for ${title}`}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm outline-none transition
                         hover:-translate-y-0.5 hover:shadow-xl focus:ring-4 focus:ring-blue-200"
            >
              <div className="mx-auto mb-4 inline-flex h-20 w-20 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100 transition group-hover:scale-[1.02]">
                <Icon className="h-12 w-12 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">Click to view details</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceDetails open={open} onClose={closeModal} service={selected} />
    </>
  );
}
