import React, { useState } from 'react';

/**
 * Era-specific onomatopoeia sound mappings inspired by The Pudding's animal sounds essay
 */
const ERA_SOUNDS = {
  'ground-effect': { sound: 'nyooom-whoosh!', label: 'Turbo Aero Whoosh', ipa: '[ɲuːm ʍuːʃ]' },
  'turbo-hybrid': { sound: 'whirrr-psssh!', label: 'Hybrid Turbo Hiss', ipa: '[ʍɪɹ pʃʃʃ]' },
  'v8-aero': { sound: 'screeeaaam!', label: '18,000 RPM V8 Howl', ipa: '[skɹiːm]' },
  'v10-apex': { sound: 'NYOOOOMMM!', label: '19,000 RPM V10 Symphony', ipa: '[ɲoʊmːː]' },
  'turbo-beast': { sound: 'stututu-braaap!', label: '1,400 HP Turbo Flutter', ipa: '[stʊtʊtʊ bɹɑːp]' },
  'high-airbox': { sound: 'ROOOAAAR!', label: 'Cosworth DFV Thunder', ipa: '[ɹoʊːɹ]' },
  'cigar-classic': { sound: 'chug-rumble-braaap!', label: 'Supercharged Straight-8', ipa: '[tʃʌɡ bɹɑːp]' }
};

/**
 * Determine the visual silhouette era from a season year
 */
export function getCarEra(year) {
  if (year >= 2022) return 'ground-effect';
  if (year >= 2014) return 'turbo-hybrid';
  if (year >= 2006) return 'v8-aero';
  if (year >= 1989) return 'v10-apex';
  if (year >= 1977) return 'turbo-beast';
  if (year >= 1968) return 'high-airbox';
  return 'cigar-classic';
}

/**
 * Smart team livery colors and styling
 */
export function getTeamColors(teamName = '', customColor) {
  const name = teamName.toLowerCase();

  if (name.includes('ferrari')) {
    return { main: '#DC2626', secondary: '#FBBF24', accent: '#FFFFFF', dark: '#991B1B', name: 'Ferrari Rosso Corsa' };
  }
  if (name.includes('mclaren')) {
    return { main: '#FF8000', secondary: '#0F172A', accent: '#38BDF8', dark: '#C25E00', name: 'McLaren Papaya' };
  }
  if (name.includes('red bull')) {
    return { main: '#1E293B', secondary: '#FACC15', accent: '#DC2626', dark: '#0F172A', name: 'Red Bull Midnight & Gold' };
  }
  if (name.includes('mercedes')) {
    return { main: '#CBD5E1', secondary: '#0D9488', accent: '#0F172A', dark: '#64748B', name: 'Mercedes Silver & Teal' };
  }
  if (name.includes('williams')) {
    return { main: '#2563EB', secondary: '#FFFFFF', accent: '#38BDF8', dark: '#1D4ED8', name: 'Williams Heritage Blue' };
  }
  if (name.includes('lotus')) {
    // Check if vintage green/yellow or black/gold
    if (name.includes('gold') || name.includes('jps') || name.includes('79') || name.includes('72')) {
      return { main: '#18181B', secondary: '#F59E0B', accent: '#FDE68A', dark: '#09090B', name: 'Lotus Black & Gold' };
    }
    return { main: '#047857', secondary: '#FACC15', accent: '#FFFFFF', dark: '#064E3B', name: 'Lotus Racing Green' };
  }
  if (name.includes('renault') || name.includes('alpine')) {
    return { main: '#FACC15', secondary: '#2563EB', accent: '#0F172A', dark: '#CA8A04', name: 'Renault Yellow & Blue' };
  }
  if (name.includes('benetton')) {
    return { main: '#059669', secondary: '#0284C7', accent: '#FACC15', dark: '#047857', name: 'Benetton Multi-Color' };
  }
  if (name.includes('brawn')) {
    return { main: '#FFFFFF', secondary: '#A3E635', accent: '#0F172A', dark: '#E2E8F0', name: 'Brawn Pure White & Neon' };
  }
  if (name.includes('alfa romeo') || name.includes('maserati')) {
    return { main: '#B91C1C', secondary: '#E2E8F0', accent: '#F59E0B', dark: '#7F1D1D', name: 'Vintage Rosso Alfa' };
  }
  if (name.includes('tyrrell')) {
    return { main: '#1D4ED8', secondary: '#FFFFFF', accent: '#60A5FA', dark: '#1E40AF', name: 'Elf Tyrrell Blue' };
  }
  if (name.includes('brabham')) {
    return { main: '#1E3A8A', secondary: '#FFFFFF', accent: '#DC2626', dark: '#172554', name: 'Brabham Blue & White' };
  }
  if (name.includes('cooper') || name.includes('brm') || name.includes('vanwall')) {
    return { main: '#14532D', secondary: '#FFFFFF', accent: '#FACC15', dark: '#052E16', name: 'British Racing Green' };
  }

  // Fallback with customColor if provided
  const main = customColor || '#0284C7';
  return { main, secondary: '#FFFFFF', accent: '#F59E0B', dark: '#0369A1', name: teamName || 'F1 Grand Prix' };
}

/**
 * Charming Doodle F1 Car component in The Pudding illustration style
 */
export default function F1CarDoodle({
  year = 2025,
  team = 'McLaren',
  teamColor,
  chassis = 'MCL38',
  driverName = 'Lando Norris',
  number = '4',
  size = 'md',
  showSound = true,
  interactive = true,
  className = ''
}) {
  const [isWiggling, setIsWiggling] = useState(false);
  const [soundBubbleActive, setSoundBubbleActive] = useState(false);

  const era = getCarEra(year);
  const soundData = ERA_SOUNDS[era] || ERA_SOUNDS['ground-effect'];
  const colors = getTeamColors(team, teamColor);

  const handleInteraction = () => {
    if (!interactive) return;
    setIsWiggling(true);
    setSoundBubbleActive(true);
    setTimeout(() => setIsWiggling(false), 800);
    setTimeout(() => setSoundBubbleActive(false), 2400);
  };

  // Dimensions
  const sizeMap = {
    sm: { width: 180, height: 65, scale: 0.65 },
    md: { width: 240, height: 85, scale: 0.85 },
    lg: { width: 320, height: 110, scale: 1 },
    xl: { width: 420, height: 140, scale: 1.3 },
    hero: { width: 480, height: 160, scale: 1.5 }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div 
      className={`inline-flex flex-col items-center select-none relative group ${className}`}
      onClick={handleInteraction}
      role={interactive ? 'button' : 'figure'}
      tabIndex={interactive ? 0 : undefined}
      title={`${chassis} (${year}) - Click to hear ${team}'s engine!`}
      style={{ cursor: interactive ? 'pointer' : 'default' }}
    >
      {/* Pudding-Style Onomatopoeia Speech Bubble */}
      {showSound && (
        <div 
          className={`absolute -top-7 sm:-top-8 transition-all duration-300 z-20 pointer-events-none ${
            soundBubbleActive 
              ? 'opacity-100 scale-100 -translate-y-1' 
              : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 shadow-md flex items-center gap-1.5 whitespace-nowrap text-stone-800">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            <span className="font-serif italic font-bold text-xs text-rose-600">
              "{soundData.sound}"
            </span>
            <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
              {soundData.ipa}
            </span>
          </div>
          {/* Little speech bubble tail */}
          <div className="w-2 h-2 bg-white border-b border-r border-stone-200 rotate-45 mx-auto -mt-1 shadow-xs" />
        </div>
      )}

      {/* SVG Canvas with Hand-Drawn / Charming Stylized Silhouette */}
      <div className={`transition-transform duration-300 ${isWiggling ? 'scale-105 rotate-1' : 'group-hover:scale-102'}`}>
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-sm"
        >
          <defs>
            {/* Soft ground shadow */}
            <radialGradient id={`car-shadow-${year}-${colors.main.replace('#', '')}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>

            {/* Tire rubber gradient */}
            <linearGradient id="tire-rubber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#09090B" />
            </linearGradient>

            {/* Rim alloy gradient */}
            <linearGradient id="rim-alloy" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4F4F5" />
              <stop offset="100%" stopColor="#A1A1AA" />
            </linearGradient>
          </defs>

          {/* Ground drop shadow */}
          <ellipse cx="150" cy="88" rx="125" ry="7" fill={`url(#car-shadow-${year}-${colors.main.replace('#', '')})`} />

          {/* Speed line accents when wiggling */}
          {isWiggling && (
            <g className="text-stone-300 stroke-current" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="50" x2="25" y2="50" className="animate-pulse" />
              <line x1="12" y1="62" x2="35" y2="62" className="animate-pulse delay-75" />
              <line x1="20" y1="74" x2="40" y2="74" className="animate-pulse delay-150" />
            </g>
          )}

          {/* Render Era-Specific Silhouette */}
          {era === 'ground-effect' && (
            <GroundEffectCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'turbo-hybrid' && (
            <TurboHybridCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'v8-aero' && (
            <V8AeroCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'v10-apex' && (
            <V10ApexCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'turbo-beast' && (
            <TurboBeastCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'high-airbox' && (
            <HighAirboxCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

          {era === 'cigar-classic' && (
            <CigarClassicCar colors={colors} number={number} isWiggling={isWiggling} />
          )}

        </svg>
      </div>

      {/* Label under the car */}
      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
        <span 
          className="w-2 h-2 rounded-full shadow-2xs" 
          style={{ backgroundColor: colors.main }} 
        />
        <span className="font-semibold text-stone-800">{chassis}</span>
        <span className="text-stone-300">•</span>
        <span className="text-stone-600">{driverName}</span>
      </div>

    </div>
  );
}

/* =========================================================================
   ERA 1: MODERN GROUND EFFECT (2022–2025)
   Curved 3D front wing, halo, scalloped sidepods, 18-inch wheels with aero discs
   ========================================================================= */
function GroundEffectCar({ colors, number, isWiggling }) {
  return (
    <g id="ground-effect-car">
      {/* Rear Wing Assembly */}
      <path d="M 40 46 L 55 42 L 55 58 L 40 60 Z" fill={colors.dark} />
      <path d="M 32 30 C 35 24 55 24 60 28 L 58 44 C 54 40 40 40 32 44 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <rect x="36" y="32" width="22" height="4" rx="2" fill={colors.secondary} />
      {/* DRS actuator pod */}
      <circle cx="48" cy="27" r="2.5" fill="#DC2626" />

      {/* Main Fuselage Body */}
      <path 
        d="M 52 56 
           C 65 52, 90 44, 120 44 
           C 140 44, 155 48, 175 52 
           C 205 56, 235 64, 265 67 
           C 275 68, 282 72, 280 75
           C 278 77, 260 76, 245 76
           C 220 76, 200 78, 180 78
           C 130 78, 90 77, 60 76 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />

      {/* Sidepod Underfloor Intake Contour & Venturi Tunnel */}
      <path 
        d="M 125 58 
           C 145 56, 175 60, 195 64 
           C 185 75, 140 76, 115 74 
           Z" 
        fill={colors.dark} 
        opacity="0.85"
      />
      {/* Sidepod Livery Stripe */}
      <path 
        d="M 120 54 C 150 51, 185 58, 210 63" 
        stroke={colors.secondary} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />

      {/* Engine Airbox & Roll Hoop */}
      <path d="M 115 44 C 118 36, 128 36, 134 44 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" />
      <circle cx="125" cy="40" r="3" fill="#1C1917" />

      {/* Halo Structure */}
      <path 
        d="M 134 46 
           C 145 42, 160 42, 170 50 
           L 155 52 
           Z" 
        fill="#1C1917" 
        stroke="#44403C" 
        strokeWidth="1.5"
      />

      {/* Cute Driver in Helmet */}
      <circle cx="148" cy="43" r="6" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />
      <path d="M 148 41 Q 153 43 151 46 Q 146 44 148 41" fill="#1C1917" />

      {/* Driver Number Pill on Nose */}
      <circle cx="230" cy="65" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />
      <text x="230" y="68" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1C1917">
        {number}
      </text>

      {/* Front Wing Assembly (Swooping Ground Effect) */}
      <path 
        d="M 245 74 
           C 260 72, 280 72, 290 70 
           C 294 69, 296 74, 293 76 
           C 285 78, 260 79, 240 78 
           Z" 
        fill={colors.secondary} 
        stroke="#1C1917" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      {/* Front Wing Endplate with vortex generator */}
      <path d="M 285 64 C 290 64, 294 68, 292 78 L 287 77 Z" fill={colors.main} stroke="#1C1917" strokeWidth="1.5" />

      {/* Rear 18" Wheel with Aero Cover */}
      <g transform="translate(75, 74)">
        <circle cx="0" cy="0" r="17" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        {/* Pirelli Color Ring (Red Softs!) */}
        <circle cx="0" cy="0" r="14" fill="none" stroke="#DC2626" strokeWidth="1.5" />
        {/* Aero Wheel Cover Cap */}
        <circle cx="0" cy="0" r="11" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="#18181B" />
      </g>

      {/* Front 18" Wheel with Aero Cover */}
      <g transform="translate(225, 74)">
        <circle cx="0" cy="0" r="17" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="11" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="#18181B" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 2: TURBO-HYBRID V6 ERA (2014–2021)
   Shark fin, intricate front wing, long wheelbase, Halo
   ========================================================================= */
function TurboHybridCar({ colors, number, isWiggling }) {
  return (
    <g id="turbo-hybrid-car">
      {/* Shark Fin Engine Cover */}
      <path d="M 68 36 L 115 40 L 95 56 L 68 56 Z" fill={colors.dark} stroke="#1C1917" strokeWidth="1.5" />

      {/* Rear Wing */}
      <path d="M 38 32 L 62 30 L 60 48 L 36 50 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 40 34 L 58 33" stroke={colors.secondary} strokeWidth="3" strokeLinecap="round" />

      {/* Fuselage Body */}
      <path 
        d="M 55 58 
           C 75 52, 105 46, 125 46 
           C 145 46, 160 50, 185 54 
           C 215 58, 245 64, 275 66 
           C 283 67, 285 71, 280 73 
           C 255 75, 215 76, 180 77 
           C 130 77, 90 77, 60 76 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Petronas / Team Deco Stripes */}
      <path d="M 120 54 C 155 52, 190 58, 235 64" stroke={colors.secondary} strokeWidth="3" strokeLinecap="round" />

      {/* Airbox */}
      <path d="M 120 46 C 122 38, 130 38, 134 46 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" />
      <circle cx="127" cy="42" r="2.5" fill="#1C1917" />

      {/* Halo */}
      <path d="M 134 48 C 148 44, 160 44, 172 52" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />

      {/* Driver */}
      <circle cx="150" cy="45" r="5.5" fill="#F4F4F5" stroke="#1C1917" strokeWidth="1.5" />
      <rect x="148" y="44" width="5" height="3" rx="1" fill="#18181B" />

      {/* Driver Number */}
      <circle cx="235" cy="63" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />
      <text x="235" y="66" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1C1917">
        {number}
      </text>

      {/* Sharp Multi-Tier Front Wing */}
      <path d="M 255 72 L 290 70 L 292 76 L 250 77 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <line x1="265" y1="73" x2="288" y2="72" stroke="#1C1917" strokeWidth="1" />

      {/* Wheels with Spoke Rims */}
      <g transform="translate(75, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#E11D48" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="9" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>

      <g transform="translate(230, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#E11D48" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="9" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 3: V8 AERO SCREAMERS (2006–2013)
   Aero horns, stepped platypus noses, high skinny rear wing
   ========================================================================= */
function V8AeroCar({ colors, number, isWiggling }) {
  return (
    <g id="v8-aero-car">
      {/* High Skinny Rear Wing */}
      <path d="M 45 25 L 65 24 L 63 46 L 43 47 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <line x1="47" y1="28" x2="63" y2="27" stroke={colors.secondary} strokeWidth="3" />

      {/* Fuselage with High Stepped Nose */}
      <path 
        d="M 60 58 
           C 78 52, 105 45, 130 45 
           C 155 45, 175 48, 205 52 
           C 225 54, 255 58, 275 62 
           C 280 63, 281 67, 276 69 
           C 255 72, 215 75, 180 76 
           C 120 76, 80 76, 60 75 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Aero Horns / Winglets above Cockpit */}
      <path d="M 135 44 C 138 34, 144 34, 142 44" stroke="#1C1917" strokeWidth="2" fill="none" />

      {/* Airbox */}
      <path d="M 125 45 C 127 38, 133 38, 137 45 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />

      {/* Open Cockpit Driver */}
      <circle cx="152" cy="43" r="5.5" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />
      <rect x="151" y="42" width="4.5" height="2.5" rx="0.5" fill="#1C1917" />

      {/* Number */}
      <circle cx="240" cy="59" r="4.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />
      <text x="240" y="62" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1C1917">
        {number}
      </text>

      {/* Front Wing */}
      <path d="M 260 67 L 288 66 L 290 73 L 255 74 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />

      {/* Wheels */}
      <g transform="translate(75, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="9" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>

      <g transform="translate(230, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="9" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 4: V10 APEX GOLDEN ERA (1989–2005)
   Elevated needle nose, sidepod chimneys, grooved tires
   ========================================================================= */
function V10ApexCar({ colors, number, isWiggling }) {
  return (
    <g id="v10-apex-car">
      {/* Rear Wing */}
      <path d="M 42 34 L 64 32 L 62 48 L 40 50 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 44 36 L 62 34" stroke={colors.secondary} strokeWidth="3" />

      {/* Needle-Nose Fuselage */}
      <path 
        d="M 58 58 
           C 75 52, 105 46, 128 46 
           C 150 46, 170 50, 195 53 
           C 225 56, 255 60, 275 64 
           C 281 65, 281 69, 275 70 
           C 250 72, 210 74, 175 75 
           C 125 75, 85 75, 60 74 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Sidepod Chimney Vent Exhaust Puffs */}
      <rect x="118" y="44" width="4" height="6" rx="1" fill="#44403C" />

      {/* Airbox */}
      <path d="M 124 46 C 126 37, 134 37, 138 46 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />

      {/* Driver (Schumacher / Hakkinen era) */}
      <circle cx="152" cy="44" r="5.5" fill="#EF4444" stroke="#1C1917" strokeWidth="1.5" />
      <rect x="151" y="43" width="5" height="2.5" rx="0.5" fill="#1C1917" />

      {/* Racing Stripe */}
      <path d="M 125 52 C 160 50, 195 54, 240 61" stroke={colors.secondary} strokeWidth="3" strokeLinecap="round" />

      {/* Front Wing with suspended pylons */}
      <path d="M 255 68 L 285 66 L 287 72 L 250 73 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />
      <line x1="266" y1="63" x2="266" y2="68" stroke="#1C1917" strokeWidth="1.5" />

      {/* Grooved Tires (4 White Grooves!) */}
      <g transform="translate(75, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="14.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="11.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="8" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>

      <g transform="translate(225, 74)">
        <circle cx="0" cy="0" r="16" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="14.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="11.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <circle cx="0" cy="0" r="8" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 5: TURBO BEASTS & GROUND EFFECT 1.0 (1977–1988)
   Boxy rear wings, chunky massive rear slicks, turbo scoops (e.g. MP4/4)
   ========================================================================= */
function TurboBeastCar({ colors, number, isWiggling }) {
  return (
    <g id="turbo-beast-car">
      {/* Boxy Rectangular Rear Wing */}
      <rect x="36" y="28" width="28" height="24" rx="2" fill={colors.main} stroke="#1C1917" strokeWidth="2" />
      <rect x="40" y="32" width="20" height="4" fill={colors.secondary} />

      {/* Wedge-Shaped Low Body */}
      <path 
        d="M 52 58 
           L 100 48 
           L 135 48 
           L 200 56 
           L 270 66 
           C 275 67, 276 71, 270 72 
           L 180 74 
           L 60 74 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Low Turbo Intercooler Scoop */}
      <path d="M 110 48 L 125 42 L 132 48 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />

      {/* Iconic Two-Tone Livery (like Senna's McLaren red/white) */}
      <path d="M 170 53 L 260 65 L 260 72 L 170 73 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="1.5" />

      {/* Driver with Famous Yellow Helmet (Senna Tribute) */}
      <circle cx="150" cy="44" r="6" fill="#FACC15" stroke="#1C1917" strokeWidth="1.5" />
      <path d="M 145 44 L 155 44" stroke="#1E3A8A" strokeWidth="1.5" />
      <rect x="148" y="43" width="5" height="2.5" rx="0.5" fill="#1C1917" />

      {/* Big Boxy Front Wing */}
      <path d="M 250 68 L 285 66 L 287 74 L 245 74 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />

      {/* MASSIVE Rear Slick Tire (Much wider & taller!) */}
      <g transform="translate(72, 72)">
        <circle cx="0" cy="0" r="19" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="9" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <text x="0" y="1" textAnchor="middle" fontSize="4" fill="#FFFFFF" fontWeight="bold">GOODYEAR</text>
      </g>

      {/* Normal Front Tire */}
      <g transform="translate(225, 74)">
        <circle cx="0" cy="0" r="15" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="7.5" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 6: WILD HIGH-AIRBOX ERA (1968–1976)
   Towering periscope airbox, giant rear wing on struts, Hunt vs Lauda era
   ========================================================================= */
function HighAirboxCar({ colors, number, isWiggling }) {
  return (
    <g id="high-airbox-car">
      {/* Towering Periscope Scoop Airbox! (Quintessential 1970s!) */}
      <path 
        d="M 130 50 
           C 130 25, 145 20, 150 20 
           C 155 20, 160 25, 158 50 
           Z" 
        fill={colors.secondary} 
        stroke="#1C1917" 
        strokeWidth="2" 
      />
      {/* Airbox hole */}
      <ellipse cx="145" cy="22" rx="4" ry="2.5" fill="#1C1917" />

      {/* High Rear Wing on Metal Struts */}
      <line x1="52" y1="28" x2="52" y2="58" stroke="#1C1917" strokeWidth="2" />
      <line x1="64" y1="28" x2="64" y2="58" stroke="#1C1917" strokeWidth="2" />
      <path d="M 40 24 L 74 22 L 72 32 L 38 34 Z" fill={colors.main} stroke="#1C1917" strokeWidth="2" strokeLinejoin="round" />

      {/* Fuselage Wedge Body */}
      <path 
        d="M 55 58 
           L 110 50 
           L 180 54 
           L 260 65 
           C 268 66, 268 70, 260 71 
           L 180 73 
           L 60 73 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Retro Driver with Classic Visor */}
      <circle cx="142" cy="46" r="6" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
      <rect x="140" y="44" width="5" height="3" rx="0.5" fill="#1C1917" />

      {/* Chisel / Shovel Front Wing */}
      <path d="M 245 68 L 282 66 L 284 73 L 240 73 Z" fill={colors.secondary} stroke="#1C1917" strokeWidth="2" />

      {/* Extra-Fat 1970s Rear Slicks */}
      <g transform="translate(74, 71)">
        <circle cx="0" cy="0" r="19" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="#1C1917" />
      </g>

      <g transform="translate(225, 73)">
        <circle cx="0" cy="0" r="15" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="7.5" fill="url(#rim-alloy)" stroke="#1C1917" strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#1C1917" />
      </g>
    </g>
  );
}

/* =========================================================================
   ERA 7: CIGAR CLASSIC TUBES (1950–1967)
   Bullet/cigar torpedo body, spoke wire wheels, goggles & scarf driver!
   ========================================================================= */
function CigarClassicCar({ colors, number, isWiggling }) {
  return (
    <g id="cigar-classic-car">
      {/* Chrome Exhaust Pipe running along the side with lovely heat louvers */}
      <path d="M 120 62 L 50 62 L 40 64" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
      <path d="M 40 64 L 32 66" stroke="#9CA3AF" strokeWidth="3.5" strokeLinecap="round" />

      {/* Torpedo Cigar Fuselage Body */}
      <path 
        d="M 52 64 
           C 60 54, 110 50, 160 50 
           C 200 50, 240 52, 275 60 
           C 285 63, 285 71, 275 73 
           C 240 78, 180 78, 120 78 
           C 70 78, 50 72, 52 64 
           Z" 
        fill={colors.main} 
        stroke="#1C1917" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Front Oval Grille Mesh (Fangio / Moss Alfa Romeo 158 style) */}
      <ellipse cx="278" cy="66" rx="3.5" ry="6" fill="#44403C" stroke="#D1D5DB" strokeWidth="1.5" />

      {/* Exposed Suspension Wishbones */}
      <line x1="220" y1="64" x2="235" y2="72" stroke="#4B5563" strokeWidth="1.8" />
      <line x1="220" y1="72" x2="235" y2="64" stroke="#4B5563" strokeWidth="1.8" />

      {/* Vintage Cockpit Cowl Windshield */}
      <path d="M 160 50 C 165 44, 172 44, 175 50 Z" fill="#E0F2FE" opacity="0.8" stroke="#1C1917" strokeWidth="1" />

      {/* Charming Vintage Driver: Leather Helmet, Goggles & Fluttering Scarf! */}
      <circle cx="150" cy="42" r="6" fill="#D97706" stroke="#1C1917" strokeWidth="1.5" />
      {/* Driving Goggles */}
      <ellipse cx="153" cy="41" rx="2.5" ry="1.8" fill="#E0F2FE" stroke="#1C1917" strokeWidth="1" />
      <line x1="147" y1="41" x2="151" y2="41" stroke="#1C1917" strokeWidth="1" />
      {/* White racing scarf fluttering behind driver */}
      <path d="M 144 46 Q 135 44 128 47 Q 135 49 144 48 Z" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />

      {/* Vintage Hand-Painted Racing Number Roundel */}
      <circle cx="205" cy="62" r="7" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.2" />
      <text x="205" y="65.5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1C1917" fontFamily="serif">
        {number || '1'}
      </text>

      {/* Classic Spoke Wire Wheels with Central Chrome Knock-Off Spinner! */}
      <g transform="translate(80, 72)">
        <circle cx="0" cy="0" r="18" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
        {/* Wire Spokes */}
        <line x1="-12" y1="-1" x2="12" y2="1" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-1" y1="-12" x2="1" y2="12" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-9" y1="-9" x2="9" y2="9" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-9" y1="9" x2="9" y2="-9" stroke="#D1D5DB" strokeWidth="0.8" />
        {/* Chrome Knock-off Spinner Nut */}
        <circle cx="0" cy="0" r="4" fill="#E5E7EB" stroke="#1C1917" strokeWidth="1" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(235, 72)">
        <circle cx="0" cy="0" r="18" fill="url(#tire-rubber)" stroke="#1C1917" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="13" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
        <line x1="-12" y1="-1" x2="12" y2="1" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-1" y1="-12" x2="1" y2="12" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-9" y1="-9" x2="9" y2="9" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="-9" y1="9" x2="9" y2="-9" stroke="#D1D5DB" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="4" fill="#E5E7EB" stroke="#1C1917" strokeWidth="1" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  );
}
