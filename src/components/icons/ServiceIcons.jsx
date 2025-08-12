// src/components/icons/ServiceIcons.jsx
// Tất cả icon dùng chung style: line-art, stroke tròn, màu theo theme.
// Có thể truyền className để đổi size/màu theo Tailwind.
import React from "react";

const stroke = 1.8;              // độ dày nét
const primary = "#2563eb";       // blue-600
const accent = "#f59e0b";        // amber-500
const gray = "#64748b";          // slate-500

export const Civil3DIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Civil 3D Drafting</title>
    {/* Khung giấy */}
    <rect x="8" y="6" width="40" height="52" rx="4" stroke={gray} strokeWidth={stroke}/>
    {/* Profile đường */}
    <path d="M12 40c6-8 10-8 16-2s10 6 18-4" stroke={primary} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    {/* Trục tọa độ nhỏ */}
    <path d="M16 48v-8M16 48h8" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
    {/* Block civil */}
    <circle cx="46" cy="14" r="5" stroke={accent} strokeWidth={stroke}/>
    <path d="M46 11v6M43 14h6" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const PermitIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Permit Drawings</title>
    {/* Tờ giấy */}
    <rect x="10" y="8" width="34" height="48" rx="3" stroke={gray} strokeWidth={stroke}/>
    {/* Dòng chữ */}
    <path d="M14 18h22M14 24h22M14 30h22M14 36h18" stroke={primary} strokeWidth={stroke} strokeLinecap="round"/>
    {/* Dấu mộc */}
    <circle cx="48" cy="42" r="10" stroke={accent} strokeWidth={stroke}/>
    <path d="M48 37v10M43 42h10" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const ResidentialIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Residential Design</title>
    {/* Nhà */}
    <path d="M10 32l22-16 22 16" stroke={primary} strokeWidth={stroke} strokeLinejoin="round"/>
    <rect x="16" y="30" width="32" height="20" rx="2" stroke={gray} strokeWidth={stroke}/>
    <rect x="24" y="36" width="8" height="8" stroke={primary} strokeWidth={stroke}/>
    <rect x="36" y="36" width="8" height="14" stroke={accent} strokeWidth={stroke}/>
    {/* Nền */}
    <path d="M8 50h48" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const SpeedIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Fast Turnaround</title>
    {/* Đồng hồ */}
    <circle cx="32" cy="32" r="18" stroke={primary} strokeWidth={stroke}/>
    <path d="M32 20v12l8 4" stroke={accent} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    {/* Tốc độ */}
    <path d="M10 32h-4M58 32h-4" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const PriceTagIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Affordable Pricing</title>
    {/* Tag */}
    <path d="M12 24l20-10a4 4 0 013.6.2l16 9.2a4 4 0 012 3.5V44a4 4 0 01-2.2 3.6l-20 10" stroke={gray} strokeWidth={stroke} strokeLinejoin="round"/>
    <circle cx="26" cy="22" r="3" stroke={accent} strokeWidth={stroke}/>
    {/* Dấu $ */}
    <path d="M32 36c6 0 6-8 0-8s-6 8 0 8v6" stroke={primary} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const DrafterIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <title>Skilled Drafters</title>
    {/* Người */}
    <circle cx="32" cy="22" r="8" stroke={primary} strokeWidth={stroke}/>
    <path d="M16 48c2-8 10-12 16-12s14 4 16 12" stroke={gray} strokeWidth={stroke} strokeLinecap="round"/>
    {/* Mũ cứng */}
    <path d="M24 18c0-3 3-6 8-6s8 3 8 6" stroke={accent} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);
