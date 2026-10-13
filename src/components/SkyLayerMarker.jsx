import React, { useState } from 'react';
import { ChevronDown, Zap, Wind, Gauge } from 'lucide-react';
import { SEASON_CARD_PALETTES } from '../data/themeColors';

/**
 * Formula 1 Era Chapter Card — Refined Horizontal Milestone Bar
 * 
 * Clean, compact design:
 * - Reduced font sizes: title scaled to text-lg sm:text-xl, Roman numeral to text-xl sm:text-2xl
 * - Strict font consistency: font-editorial (Syne) for era names & numerals, font-body for metadata
 * - 100% Oxford Midnight design DNA matching SeasonCard
 * - Compact horizontal layout with expandable lore description
 */

const ERA_META = {
  2025: {
    roman: 'IX',
    epoch: '09',
    dates: '2022 – Present',
    engine: '1.6L V6 Turbo-Hybrid (350 kW)',
    aero: 'Sculpted Venturi Ground Effect Tunnels',
    chassis: '18" Low-Profile Pirelli Tyres',
    status: 'Active Regulation'
  },
  2021: {
    roman: 'VIII',
    epoch: '08',
    dates: '2014 – 2021',
    engine: '1.6L Turbo V6 + Dual MGU-K & MGU-H',
    aero: 'Complex Outwash Front Wings & Titanium Halo',
    chassis: '13" Wheels • High-Rake Aerodynamics',
    status: 'Historic Archive'
  },
  2013: {
    roman: 'VII',
    epoch: '07',
    dates: '2006 – 2013',
    engine: '2.4L Atmospheric 90° V8 (18,000 RPM)',
    aero: 'Exhaust-Blown Diffusers & F-Duct Channels',
    chassis: 'KERS 60kW Push-to-Pass & Pirelli Slicks',
    status: 'Historic Archive'
  },
  2005: {
    roman: 'VI',
    epoch: '06',
    dates: '1995 – 2005',
    engine: '3.0L Atmospheric V10 (950+ HP @ 19,000 RPM)',
    aero: 'Stepped Floors, Chimneys & Viking Horn Wings',
    chassis: 'Grooved Bridgestone vs Michelin Tyres',
    status: 'Historic Archive'
  },
  1994: {
    roman: 'V',
    epoch: '05',
    dates: '1989 – 1994',
    engine: '3.5L Atmospheric V10 & V12 Engines',
    aero: 'Raised Anhedral Noses & High Aerofoils',
    chassis: 'Computer-Controlled Active Ride Suspension',
    status: 'Historic Archive'
  },
  1988: {
    roman: 'IV',
    epoch: '04',
    dates: '1977 – 1988',
    engine: '1.5L V6 Turbo (Up to 1,400 HP in Qualifying)',
    aero: 'Sliding Skirts to Flat Bottom Mandate',
    chassis: 'Pioneering Carbon Fibre Composite Tubs',
    status: 'Historic Archive'
  },
  1976: {
    roman: 'III',
    epoch: '03',
    dates: '1966 – 1976',
    engine: '3.0L Ford Cosworth DFV V8 / Ferrari Flat-12',
    aero: 'Towering Periscope Airboxes & Giant Wings',
    chassis: 'Ultra-Wide Rear Slicks & Aluminium Monocoques',
    status: 'Historic Archive'
  },
  1965: {
    roman: 'II',
    epoch: '02',
    dates: '1961 – 1965',
    engine: '1.5L Naturally Aspirated V8 & V6 (210 HP)',
    aero: 'Pure Streamlined Cigar Bodywork (Zero Wings)',
    chassis: 'First Stressed-Skin Aluminium Monocoque',
    status: 'Historic Archive'
  },
  1958: {
    roman: 'I',
    epoch: '01',
    dates: '1950 – 1960',
    engine: '4.5L Atmospheric / 1.5L Supercharged',
    aero: 'Front Radiator Cowls & Exposed Wheels',
    chassis: 'Steel Tubular Spaceframes & Wire-Spoke Wheels',
    status: 'Historic Archive'
  }
};

const TIMELINE_EPOCHS = [
  { year: 1958, roman: 'I', label: '1950' },
  { year: 1965, roman: 'II', label: '1961' },
  { year: 1976, roman: 'III', label: '1966' },
  { year: 1988, roman: 'IV', label: '1977' },
  { year: 1994, roman: 'V', label: '1989' },
  { year: 2005, roman: 'VI', label: '1995' },
  { year: 2013, roman: 'VII', label: '2006' },
  { year: 2021, roman: 'VIII', label: '2014' },
  { year: 2025, roman: 'IX', label: '2022' }
];

export default function SkyLayerMarker({ layer, palette = 'amber-walnut-dark' }) {
  const { name, subName, description, year } = layer;
  const [isExpanded, setIsExpanded] = useState(false);

  // Exact same palette tokens as SeasonCard
  const pal = SEASON_CARD_PALETTES[palette] || SEASON_CARD_PALETTES['amber-walnut-dark'];

  const meta = ERA_META[year] || {
    roman: '✦',
    epoch: '00',
    dates: subName,
    engine: 'Formula 1 Power Unit',
    aero: 'Regulation Aerodynamics',
    chassis: 'Chassis & Tyres',
    status: 'Historic Archive'
  };

  return (
    <div className="w-full max-w-3xl xl:max-w-4xl mx-auto select-none mt-6 sm:mt-8 mb-6 sm:mb-8">

      {/* The Grand Prix Codex Landmark Card */}
      <div 
        className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300"
        style={{
          backgroundColor: pal.bg,
          borderColor: pal.border
        }}
      >
        {/* Tier 1: 9-Epoch Timeline Tracker Ribbon */}
        <div 
          className="px-4 sm:px-6 py-2.5 border-b flex items-center justify-between text-xs font-body"
          style={{
            backgroundColor: pal.bgCard,
            borderColor: pal.borderSubtle
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: pal.accentColor }} />
            <span className="font-semibold uppercase tracking-wider text-[10px]" style={{ color: pal.subtextColor }}>
              FIA Regulation Epoch {meta.epoch} of 09
            </span>
            <span className="opacity-30">•</span>
            <span className="text-[11px] font-medium" style={{ color: pal.bodyTextColor, opacity: 0.85 }}>
              {meta.dates}
            </span>
          </div>

          {/* 9-Epoch Stepper Track */}
          <div className="hidden sm:flex items-center gap-1">
            {TIMELINE_EPOCHS.map((ep) => {
              const isCurrent = ep.roman === meta.roman;
              return (
                <span
                  key={ep.roman}
                  title={`Chapter ${ep.roman} (${ep.label})`}
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-medium transition-all ${
                    isCurrent
                      ? 'font-bold shadow-2xs'
                      : 'opacity-40 hover:opacity-75'
                  }`}
                  style={{
                    backgroundColor: isCurrent ? pal.accentColor : 'transparent',
                    color: isCurrent ? '#FFFFFF' : pal.bodyTextColor
                  }}
                >
                  {ep.roman}
                </span>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Primary Headline Stage with Ghosted Roman Watermark */}
        <div 
          className="p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between"
          style={{
            background: `linear-gradient(180deg, ${pal.bg} 0%, ${pal.bgCard} 100%)`
          }}
        >
          {/* Giant Ghosted Roman Numeral Watermark in the Background */}
          <div 
            aria-hidden="true"
            className="font-editorial absolute right-4 -bottom-4 sm:-bottom-8 text-7xl sm:text-8xl md:text-9xl font-bold select-none pointer-events-none leading-none tracking-tighter"
            style={{
              color: pal.titleColor,
              opacity: 0.05
            }}
          >
            {meta.roman}
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Architectural Roman Chapter Badge */}
              <div 
                className="font-editorial text-base sm:text-lg font-normal tracking-wider w-11 h-11 rounded-2xl border shrink-0 flex items-center justify-center leading-none shadow-2xs"
                style={{ 
                  backgroundColor: pal.bg,
                  borderColor: pal.borderSubtle,
                  color: pal.titleColor 
                }}
              >
                {meta.roman}
              </div>

              {/* Title & Regulation Status Tag */}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span 
                    className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border shadow-2xs font-body"
                    style={{
                      backgroundColor: meta.status === 'Active Regulation' ? (pal.badgeBg || 'rgba(187, 108, 67, 0.12)') : 'rgba(100, 116, 139, 0.08)',
                      borderColor: meta.status === 'Active Regulation' ? (pal.badgeBorder || 'rgba(187, 108, 67, 0.25)') : 'rgba(100, 116, 139, 0.20)',
                      color: meta.status === 'Active Regulation' ? pal.accentColor : pal.bodyTextColor
                    }}
                  >
                    {meta.status}
                  </span>
                </div>
                
                <h2 
                  className="font-editorial text-lg sm:text-xl font-normal tracking-wide mt-1 leading-snug" 
                  style={{ color: pal.titleColor }}
                >
                  {name}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: 3-Part Technical Formula Grid (Engine • Aero • Chassis) */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border-t font-body"
          style={{
            borderColor: pal.borderSubtle,
            backgroundColor: pal.bg
          }}
        >
          {/* Powertrain */}
          <div className="p-3.5 sm:px-4 flex flex-col gap-1" style={{ borderColor: pal.borderSubtle }}>
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider" style={{ color: pal.subtextColor }}>
              <Zap className="w-3 h-3 text-amber-500 shrink-0" />
              <span>Powertrain Formula</span>
            </div>
            <div className="text-xs font-medium leading-snug" style={{ color: pal.titleColor }}>
              {meta.engine}
            </div>
          </div>

          {/* Aerodynamics */}
          <div className="p-3.5 sm:px-4 flex flex-col gap-1" style={{ borderColor: pal.borderSubtle }}>
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider" style={{ color: pal.subtextColor }}>
              <Wind className="w-3 h-3 text-cyan-500 shrink-0" />
              <span>Aero Philosophy</span>
            </div>
            <div className="text-xs font-medium leading-snug" style={{ color: pal.titleColor }}>
              {meta.aero}
            </div>
          </div>

          {/* Chassis & Tyres */}
          <div className="p-3.5 sm:px-4 flex flex-col gap-1" style={{ borderColor: pal.borderSubtle }}>
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider" style={{ color: pal.subtextColor }}>
              <Gauge className="w-3 h-3 text-blue-500 shrink-0" />
              <span>Chassis & Tyres</span>
            </div>
            <div className="text-xs font-medium leading-snug" style={{ color: pal.titleColor }}>
              {meta.chassis}
            </div>
          </div>
        </div>

        {/* Tier 4: Editorial Lore Compartment */}
        <div 
          className="px-5 sm:px-6 py-3.5 border-t flex items-start gap-3.5 font-body"
          style={{ 
            borderColor: pal.borderSubtle,
            backgroundColor: pal.bgCard
          }}
        >
          <div className="w-1 h-5 rounded-full mt-0.5 shrink-0" style={{ backgroundColor: pal.accentColor, opacity: 0.6 }} />
          <div className="flex-1 min-w-0">
            <p 
              className={`text-sm sm:text-[15px] font-normal leading-relaxed transition-all ${
                !isExpanded ? 'line-clamp-2' : ''
              }`} 
              style={{ color: pal.bodyTextColor }}
            >
              {description}
            </p>

            {description && description.length > 90 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold hover:underline cursor-pointer transition-colors"
                style={{ color: pal.subtextColor }}
              >
                <span>{isExpanded ? 'Show less' : 'Read more about this era'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
