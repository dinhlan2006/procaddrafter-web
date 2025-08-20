// Tất cả icon dùng chung style: line-art, stroke tròn, màu theo theme.
// Có thể truyền className để đổi size/màu theo Tailwind.
import React from "react";

const stroke = 1.8;              // độ dày nét
const primary = "#2563eb";       // blue-600
const accent = "#f59e0b";        // amber-500
const gray   = "#64748b";        // slate-500

export const Civil3DIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Civil 3D Drafting</title>
    <rect x="8" y="6" width="40" height="52" rx="4" stroke={gray} strokeWidth={stroke}/>
    <path d="M12 40c6-8 10-8 16-2s10 6 18-4" stroke={primary} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 48v-8M16 48h8" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
    <circle cx="46" cy="14" r="5" stroke={accent} strokeWidth={stroke}/>
    <path d="M46 11v6M43 14h6" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const PermitIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Permit Drawings</title>
    <rect x="10" y="8" width="34" height="48" rx="3" stroke={gray} strokeWidth={stroke}/>
    <path d="M14 18h22M14 24h22M14 30h22M14 36h18" stroke={primary} strokeWidth={stroke} strokeLinecap="round"/>
    <circle cx="48" cy="42" r="10" stroke={accent} strokeWidth={stroke}/>
    <path d="M48 37v10M43 42h10" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const ResidentialIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Residential Design</title>
    <path d="M10 32l22-16 22 16" stroke={primary} strokeWidth={stroke} strokeLinejoin="round"/>
    <rect x="16" y="30" width="32" height="20" rx="2" stroke={gray} strokeWidth={stroke}/>
    <rect x="24" y="36" width="8" height="8" stroke={primary} strokeWidth={stroke}/>
    <rect x="36" y="36" width="8" height="14" stroke={accent} strokeWidth={stroke}/>
    <path d="M8 50h48" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const MEPFIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>MEPF Drafting</title>
    {/* ống chính */}
    <rect x="8" y="30" width="48" height="6" rx="3" stroke={gray} strokeWidth={stroke}/>
    {/* vertical drops */}
    <line x1="16" y1="18" x2="16" y2="30" stroke={primary} strokeWidth={stroke}/>
    <line x1="24" y1="18" x2="24" y2="30" stroke={accent} strokeWidth={stroke}/>
    <line x1="32" y1="18" x2="32" y2="30" stroke="#38bdf8" strokeWidth={stroke}/>
    {/* bình chữa cháy */}
    <circle cx="48" cy="18" r="4" stroke={accent} strokeWidth={stroke}/>
    <path d="M48 14v4M46 18h4" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);
