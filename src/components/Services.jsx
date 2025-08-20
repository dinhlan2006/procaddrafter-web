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
      "We produce accurate plan & profile, grading, corridor, pipe network and quantity takeoff models using Autodesk Civil3D.",
    points: [
      "Plan & Profile sheets for roads, utilities",
      "Surface & corridor modeling",
      "Cut/fill & material quantities",
      "Pipe networks coordination",
      "Sheet annotations & publishing"
    ],
    deliverables: [
      "DWG native + Xrefs",
      "PDF sheet set",
      "LandXML export",
      "Quantity takeoff table",
      "Titleblock + CTB"
    ],
    software: ["Autodesk Civil3D", "AutoCAD"],
    standards: ["USCAD", "Client standards"]
  },

  permit: {
    key: "permit",
    title: "Permit Drawings",
    Icon: PermitIcon,
    hero: portfolioFrame,
    overview: "Code-compliant residential & commercial permit sets.",
    points: [
      "Floor plans, elevations",
      "Door/window schedules",
      "Structural & MEP notes",
      "Energy compliance (if requested)"
    ],
    deliverables: [
      "PDF submission set",
      "DWG editable source",
      "Revision clouds",
      "City mark-ups addressed"
    ],
    software: ["AutoCAD", "Revit"],
    standards: ["Local code", "Plot standards"]
  },

  residential: {
    key: "residential",
    title: "Residential Design",
    Icon: ResidentialIcon,
    hero: portfolioFrame,
    overview: "Drawings for houses, additions & ADUs.",
    points: [
      "Layout & space planning",
      "Plans | Elevations | Sections",
      "Kitchen/bath elevations",
      "Stair & detail sheets"
    ],
    deliverables: [
      "PDF construction set",
      "DWG source",
      "Schedules & details"
    ],
    software: ["AutoCAD", "Revit"],
    standards: ["Client drafting standard"]
  },

  mepf: {
    key: "mepf",
    title: "MEPF Drafting",
    Icon: MEPFIcon,
    hero: portfolioFrame,
    overview:
      "MEP & Firefighting coordination drawings – clash-free and ready for construction.",
    points: [
      "HVAC routing & risers",
      "Electrical trays & layouts",
      "Plumbing supply/drainage",
      "Sprinkler piping"
    ],
    deliverables: [
      "Combined coordination drawing",
      "PDF issue set",
      "DWG source file"
    ],
    software: ["AutoCAD MEP", "Revit"],
    standards: ["NFPA, ASHRAE, Client standards"]
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

  const handleKeyDown = useCallback(
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
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  const CARDS = Object.values(SERVICE_DATA);

  return (
    <>
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map(({ key, title, Icon }) => (
            <div
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => openCard(key)}
              onKeyDown={(e) => handleKeyDown(e, key)}
              className="group cursor-pointer rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mx-auto mb-4 inline-flex h-20 w-20 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
                <Icon className="h-12 w-12 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">Click to view details</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceDetails open={open} onClose={closeModal} service={selected} />
    </>
  );
}
