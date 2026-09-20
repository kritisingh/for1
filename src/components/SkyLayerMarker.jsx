import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEASON_CARD_PALETTES } from '../data/themeColors';

/**
 * Formula 1 Era Chapter Card — Horizontal Milestone Bar
 * 
 * Permanently locked design:
 * - Sleek, horizontal milestone banner (~115px) that acts as an epoch bookmark
 * - Strict font consistency: font-editorial for Roman numerals and era names, font-body for metadata
 * - 100% Soft Sage design DNA matching the SeasonCard palette
 * - Zero aviation/flying jargon: authentic Formula 1 engine formulas, aero specs, and regulation epochs
 * - Dropdown toggle on description to read full lore without line-clamp truncation
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

export default function SkyLayerMarker({ layer, palette = 'sage-black' }) {
  const { name, subName, description, year } = layer;
  const [isExpanded, setIsExpanded] = useState(false);

  // Exact same Soft Sage palette tokens as SeasonCard
  const pal = SEASON_CARD_PALETTES[palette] || SEASON_CARD_PALETTES['sage-black'];

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
    <div className="w-full max-w-3xl xl:max-w-4xl mx-auto select-none mt-6 sm:mt-8 mb-6">

      {/* Horizontal Milestone Bar */}
      <div 
        className="w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 border shadow-[0_12px_30px_-8px_rgba(10,35,18,0.18)] transition-all duration-300"
        style={{
          backgroundColor: pal.bg,
          borderColor: pal.border
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: Roman Chapter Block + Era Title + Description */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div 
              className="font-editorial text-3xl sm:text-4xl font-normal px-3.5 py-2 rounded-2xl border shrink-0 text-center leading-none shadow-2xs"
              style={{ 
                backgroundColor: pal.bgCard,
                borderColor: pal.borderSubtle,
                color: pal.titleColor 
              }}
            >
              {meta.roman}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: pal.accentColor }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: pal.subtextColor }}>
                  Chapter {meta.roman} • {meta.dates}
                </span>
              </div>
              
              <h2 className="font-editorial text-xl sm:text-2xl font-normal tracking-tight mt-0.5" style={{ color: pal.titleColor }}>
                {name}
              </h2>
              
              <div>
                <p 
                  className={`text-xs font-normal mt-1 leading-relaxed max-w-2xl transition-all ${
                    !isExpanded ? 'line-clamp-2' : ''
                  }`} 
                  style={{ color: pal.bodyTextColor }}
                >
                  {description}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold hover:underline cursor-pointer transition-colors"
                  style={{ color: pal.subtextColor }}
                >
                  <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Compact Technical Spec Badges */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-1.5 shrink-0 pt-2.5 md:pt-0 border-t md:border-t-0 border-emerald-900/15">
            <span 
              className="text-[11px] px-3 py-1 rounded-xl border font-medium shadow-2xs" 
              style={{ backgroundColor: pal.bgCard, borderColor: pal.borderSubtle, color: pal.bodyTextColor }}
            >
              Engine: <strong style={{ color: pal.titleColor }}>{meta.engine}</strong>
            </span>
            <span 
              className="text-[11px] px-3 py-1 rounded-xl border font-medium shadow-2xs" 
              style={{ backgroundColor: pal.bgCard, borderColor: pal.borderSubtle, color: pal.bodyTextColor }}
            >
              Aero: <strong style={{ color: pal.titleColor }}>{meta.aero}</strong>
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
