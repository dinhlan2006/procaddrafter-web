// src/components/Services.jsx
import { useEffect, useMemo, useState, useCallback } from "react";
import ServiceDetails from "./ServiceDetails";
import { Civil3DIcon, PermitIcon, ResidentialIcon, MEPFIcon } from "./icons/ServiceIcons";
import portfolioFrame from "../assets/portfolio-frame.svg";

const SERVICE_DATA = {
  civil3d: {
    key: "civil3d",
    title: "Civil 3D Drafting",
    Icon: Civil3DIcon,
    hero: portfolioFrame,
    overview:
      "We produce accurate plan & profile, grading, corridor, pipe network and quantity takeoff models using Autodesk Civil 3D.",
    points: [
      "Plan & Profile sheets for roads, utilities",
      "Surface & corridor modeling",
      "Grading cut & fill quantities",
      "Pipe networks with profiles",
      "Sheet set organization and publishing"
    ],
    deliverables: ["PDF set", "DWG files", "LandXML", "Take-off tables"],
    software: ["Civil 3D", "AutoCAD"],
    standards: ["AASHTO", "Client standards"]
  },
  permit: {
    key: "permit",
    title: "Permit Drawings",
    Icon: PermitIcon,
    hero: portfolioFrame,
    overview: "Code-compliant residential & light-commercial permit sets.",
    points: [
      "Floor plans, elevations",
      "Door/window schedules",
      "Title block, sheet index",
      "City submittal markups addressed"
    ],
    deliverables: ["PDF issue set", "DWG source"],
    software: ["AutoCAD", "Revit"],
    standards: ["Local codes"]
  },
  residential: {
    key: "residential",
    title: "Residential Design",
    Icon: ResidentialIcon,
    hero: portfolioFrame,
    overview: "Construction drawings for additions, ADUs and new homes.",
    points: ["Space planning", "Floor plans", "Interior details"],
    deliverables: ["PDF construction set", "DWG CAD files"],
    software: ["AutoCAD", "Revit"],
    standards: ["City plotting"]
  },
  mepf: {
    key: "mepf",
    title: "MEPF Drafting",
    Icon: MEPFIcon,
    hero: portfolioFrame,
    overview: "Coordination drawings for Mechanical, Electrical, Plumbing and Firefighting systems.",
    points: [
      "HVAC duct layout",
      "Cable tray / electrical routes",
      "Water & drainage piping",
      "Sprinkler system coordination"
    ],
    deliverables: ["Combined DWG coordination", "PDF issue set"],
    software: ["Revit", "AutoCAD MEP"],
    standards: ["NFPA, Client standards"]
  }
};


export default function Services() {
  const [open, setOpen] = useState(false);
  const [which, setWhich] = useState(null);

  const selected = useMemo(() => (which ? SERVICE_DATA[which] : null), [which]);

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
    window.history.replaceState(null, "", `#${key}`);
  }, []);

  const onCardKey = useCallback((e, key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCard(key);
    }
  }, [openCard]);

  const closeModal = useCallback(() => {
    setOpen(false);
    setWhich(null);
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }, []);

  const CARDS = [SERVICE_DATA.civil3d, SERVICE_DATA.permit, SERVICE_DATA.residential, SERVICE_DATA.mepf];

  return (
    <>
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {CARDS.map(({ key, title, Icon }) => (
            <div
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => openCard(key)}
              onKeyDown={(e) => onCardKey(e, key)}
              aria-label={`View details for ${title}`}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-center
                         shadow-sm hover:-translate-y-0.5 hover:shadow-xl transition focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
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
