import React from 'react';

/**
 * Color palettes tailored for each style
 */
export const STYLE_PALETTES = {
  papaya: { fill: '#FDBA74', accent: '#EA580C', ink: '#1C1917', wash: '#FFEDD5', tint: '#FED7AA' },
  rosso: { fill: '#FCA5A5', accent: '#DC2626', ink: '#1C1917', wash: '#FEE2E2', tint: '#FECACA' },
  purple: { fill: '#D8B4FE', accent: '#9333EA', ink: '#1C1917', wash: '#F3E8FF', tint: '#E9D5FF' },
  pink: { fill: '#F9A8D4', accent: '#DB2777', ink: '#1C1917', wash: '#FCE7F3', tint: '#FBCFE8' },
  yellow: { fill: '#FDE047', accent: '#CA8A04', ink: '#1C1917', wash: '#FEF9C3', tint: '#FEF08A' },
  teal: { fill: '#5EEAD4', accent: '#0D9488', ink: '#1C1917', wash: '#CCFBF1', tint: '#99F6E4' },
  blue: { fill: '#93C5FD', accent: '#2563EB', ink: '#1C1917', wash: '#EFF6FF', tint: '#BFDBFE' },
  green: { fill: '#86EFAC', accent: '#16A34A', ink: '#1C1917', wash: '#F0FDF4', tint: '#BBF7D0' }
};

/* =========================================================================
   STYLE 1: WHIMSICAL MARKER DOODLE (The Pudding / Notebook Scribble)
   Organic, wobbly hand-drawn felt-pen lines, casual, friendly, playful
   ========================================================================= */
export function MarkerDoodleCar({ theme = 'papaya', width = 180, height = 75, className = '' }) {
  const c = STYLE_PALETTES[theme] || STYLE_PALETTES.papaya;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {/* Hand-drawn scribble shadow */}
      <ellipse cx="100" cy="76" rx="75" ry="4.5" fill="#1C1917" fillOpacity="0.08" />

      {/* Little whimsical exhaust puff bubbles ~o° */}
      <circle cx="16" cy="42" r="3" fill={c.wash} stroke={c.ink} strokeWidth="1.5" />
      <circle cx="22" cy="46" r="2" fill={c.wash} stroke={c.ink} strokeWidth="1.2" />
      <circle cx="12" cy="48" r="1.5" fill={c.wash} stroke={c.ink} strokeWidth="1" />

      {/* Rear Wing (Wobbly hand-drawn feel) */}
      <path 
        d="M 24 24 
           Q 34 22 44 24 
           L 42 43 
           Q 32 45 22 43 
           Z" 
        fill={c.accent} 
        stroke={c.ink} 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <line x1="26" y1="28" x2="40" y2="27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="33" y1="43" x2="33" y2="56" stroke={c.ink} strokeWidth="2.4" strokeLinecap="round" />

      {/* Main Car Body - soft organic contours */}
      <path 
        d="M 33 55 
           Q 50 47 70 42 
           Q 95 39 120 42 
           Q 145 45 168 53 
           Q 185 57 192 63 
           Q 188 67 175 67 
           L 38 67 
           Z" 
        fill={c.fill} 
        stroke={c.ink} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Sidepod scribble highlight */}
      <path d="M 85 48 Q 110 46 135 52 Q 120 63 80 63 Z" fill={c.wash} stroke={c.ink} strokeWidth="1.8" />
      <path d="M 90 44 Q 120 42 145 49" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Airbox scoop */}
      <path d="M 82 41 Q 87 32 94 40 Z" fill={c.wash} stroke={c.ink} strokeWidth="2.2" />
      <circle cx="88" cy="37" r="2" fill={c.ink} />

      {/* Halo bar */}
      <path d="M 95 43 Q 110 37 124 45" stroke={c.ink} strokeWidth="2.5" strokeLinecap="round" />

      {/* Cute Driver in Helmet with little visor wink */}
      <circle cx="106" cy="38" r="5.5" fill="#FFFFFF" stroke={c.ink} strokeWidth="2" />
      <path d="M 106 37 Q 111 38 110 41" stroke={c.ink} strokeWidth="2" strokeLinecap="round" />

      {/* Front Wing with cute curved endplate */}
      <path 
        d="M 166 64 
           Q 182 61 197 62 
           L 196 68 
           Q 180 68 162 67 
           Z" 
        fill={c.accent} 
        stroke={c.ink} 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Chunky Doodled Wheels */}
      <circle cx="52" cy="62" r="14" fill="#292524" stroke={c.ink} strokeWidth="2.5" />
      <circle cx="52" cy="62" r="7" fill={c.wash} stroke={c.ink} strokeWidth="1.8" />
      <circle cx="52" cy="62" r="2.5" fill={c.ink} />

      <circle cx="152" cy="62" r="14" fill="#292524" stroke={c.ink} strokeWidth="2.5" />
      <circle cx="152" cy="62" r="7" fill={c.wash} stroke={c.ink} strokeWidth="1.8" />
      <circle cx="152" cy="62" r="2.5" fill={c.ink} />
    </svg>
  );
}

/* =========================================================================
   STYLE 2: RISOGRAPH / LIGNE CLAIRE (French Comic / Indie Print Art)
   Two-tone offset color wash slightly misaligned with crisp editorial ink lines
   ========================================================================= */
export function RisographComicCar({ theme = 'rosso', width = 180, height = 75, className = '' }) {
  const c = STYLE_PALETTES[theme] || STYLE_PALETTES.rosso;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="102" cy="77" rx="78" ry="4.5" fill="#1C1917" fillOpacity="0.07" />

      {/* -------------------------------------------------------------
          LAYER 1: OFFSET RISOGRAPH COLOR WASH (Slightly shifted for authentic print feel!)
          ------------------------------------------------------------- */}
      <g transform="translate(-2.5, 2)" opacity="0.85">
        {/* Body color block */}
        <path
          d="M 32 54 C 45 46, 75 40, 95 40 C 115 40, 130 44, 150 48 C 170 52, 185 58, 192 63 L 175 67 L 36 67 Z"
          fill={c.fill}
        />
        {/* Accent wash for wings */}
        <rect x="22" y="24" width="20" height="18" rx="2" fill={c.accent} />
        <rect x="165" y="60" width="30" height="7" rx="2" fill={c.accent} />
        {/* Yellow helmet wash */}
        <circle cx="112" cy="38" r="6" fill="#FEF08A" />
      </g>

      {/* -------------------------------------------------------------
          LAYER 2: PRECISE EDITORIAL INK CONTOUR LINES
          ------------------------------------------------------------- */}
      {/* Rear Wing Structure */}
      <rect x="23" y="23" width="20" height="18" rx="2" fill="none" stroke={c.ink} strokeWidth="2" />
      <line x1="23" y1="30" x2="43" y2="30" stroke={c.ink} strokeWidth="1.5" />
      <line x1="33" y1="41" x2="33" y2="56" stroke={c.ink} strokeWidth="2" />

      {/* Car Body Contour */}
      <path
        d="M 32 54 
           C 48 46, 75 40, 98 40 
           C 118 40, 132 44, 152 48 
           C 172 52, 185 58, 192 63 
           C 192 66, 185 67, 175 67 
           L 36 67 
           Z"
        fill="none"
        stroke={c.ink}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Comic Crosshatch Shading Lines on Underside */}
      <line x1="75" y1="64" x2="80" y2="67" stroke={c.ink} strokeWidth="1" />
      <line x1="85" y1="64" x2="90" y2="67" stroke={c.ink} strokeWidth="1" />
      <line x1="95" y1="64" x2="100" y2="67" stroke={c.ink} strokeWidth="1" />
      <line x1="105" y1="64" x2="110" y2="67" stroke={c.ink} strokeWidth="1" />
      <line x1="115" y1="64" x2="120" y2="67" stroke={c.ink} strokeWidth="1" />

      {/* Cockpit & Airbox */}
      <path d="M 85 40 C 88 33, 96 33, 99 40" stroke={c.ink} strokeWidth="2" />
      <circle cx="92" cy="36" r="2" fill={c.ink} />
      <path d="M 99 42 C 110 38, 122 39, 130 46" stroke={c.ink} strokeWidth="2.2" />

      {/* Driver Helmet with visor */}
      <circle cx="112" cy="38" r="5.5" fill="none" stroke={c.ink} strokeWidth="1.8" />
      <rect x="110" y="37" width="5" height="2.5" rx="0.5" fill={c.ink} />

      {/* Front Wing */}
      <path d="M 166 61 L 195 61 L 195 67 L 164 67 Z" fill="none" stroke={c.ink} strokeWidth="2" strokeLinejoin="round" />

      {/* Wheels with Risograph offset fill */}
      <g transform="translate(52, 62)">
        <circle cx="-2" cy="1.5" r="14" fill="#57534E" opacity="0.4" />
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke={c.ink} strokeWidth="2.2" />
        <circle cx="0" cy="0" r="8" fill="none" stroke={c.ink} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3" fill={c.ink} />
      </g>

      <g transform="translate(152, 62)">
        <circle cx="-2" cy="1.5" r="14" fill="#57534E" opacity="0.4" />
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke={c.ink} strokeWidth="2.2" />
        <circle cx="0" cy="0" r="8" fill="none" stroke={c.ink} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3" fill={c.ink} />
      </g>
    </svg>
  );
}

/* =========================================================================
   STYLE 3: ARCHITECTURAL BLUEPRINT (Design Studio / Drafting Wireframe)
   Delicate fine lines, geometric construction circles, dimension markers
   ========================================================================= */
export function BlueprintSketchCar({ theme = 'blue', width = 180, height = 75, className = '' }) {
  const c = STYLE_PALETTES[theme] || STYLE_PALETTES.blue;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {/* Technical grid lines in background */}
      <line x1="20" y1="67" x2="190" y2="67" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="52" y1="20" x2="52" y2="78" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="152" y1="20" x2="152" y2="78" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Dimension callout marker */}
      <line x1="52" y1="16" x2="152" y2="16" stroke={c.accent} strokeWidth="1" markerStart="url(#arrow)" />
      <text x="102" y="14" textAnchor="middle" fontSize="6" fontFamily="monospace" fill={c.accent} fontWeight="bold">
        WHEELBASE: 3600mm
      </text>

      {/* Rear Wing Structure */}
      <rect x="25" y="24" width="18" height="18" fill={c.wash} stroke={c.accent} strokeWidth="1.5" />
      <line x1="34" y1="42" x2="34" y2="56" stroke="#475569" strokeWidth="1.5" />

      {/* Fuselage Profile */}
      <path
        d="M 34 55 
           C 50 48, 75 42, 98 42 
           C 118 42, 134 46, 154 50 
           C 172 54, 185 60, 192 64 
           L 175 67 
           L 36 67 
           Z"
        fill="#FFFFFF"
        stroke="#1E293B"
        strokeWidth="1.6"
      />

      {/* Aerodynamic Flow Line */}
      <path d="M 20 50 C 60 36, 120 38, 180 58" stroke={c.accent} strokeWidth="1" strokeDasharray="2 2" />

      {/* Airbox & Driver */}
      <path d="M 86 42 L 92 34 L 98 42 Z" stroke="#1E293B" strokeWidth="1.4" fill="#FFFFFF" />
      <circle cx="110" cy="38" r="5" stroke="#1E293B" strokeWidth="1.4" fill="#FFFFFF" />
      <text x="110" y="40" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="#64748B">
        PILOT
      </text>

      {/* Front Wing */}
      <rect x="165" y="61" width="28" height="6" rx="1" fill={c.wash} stroke={c.accent} strokeWidth="1.4" />

      {/* Precision Wireframe Wheels with Crosshairs */}
      <g transform="translate(52, 62)">
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="8" fill="none" stroke="#64748B" strokeWidth="1" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke="#94A3B8" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="2.5" fill={c.accent} />
      </g>

      <g transform="translate(152, 62)">
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="8" fill="none" stroke="#64748B" strokeWidth="1" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke="#94A3B8" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="2.5" fill={c.accent} />
      </g>
    </svg>
  );
}

/* =========================================================================
   STYLE 4: CUTE CHIBI MINIATURE (Toy Hot-Wheels / Micro-Machine Sketch)
   Condensed proportions, chubby slick tires, rounded bubbly cockpit
   ========================================================================= */
export function ChibiMiniatureCar({ theme = 'purple', width = 170, height = 75, className = '' }) {
  const c = STYLE_PALETTES[theme] || STYLE_PALETTES.purple;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <ellipse cx="85" cy="74" rx="65" ry="4.5" fill="#1C1917" fillOpacity="0.09" />

      {/* Cute Chubby Rear Wing */}
      <rect x="18" y="24" width="22" height="18" rx="4" fill={c.accent} stroke="#1C1917" strokeWidth="2.5" />
      <rect x="22" y="28" width="14" height="4" rx="2" fill="#FFFFFF" />
      <line x1="29" y1="42" x2="29" y2="54" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />

      {/* Bubbly Compact Body */}
      <path
        d="M 28 54 
           C 40 44, 60 38, 85 38 
           C 105 38, 120 42, 138 48 
           C 152 52, 160 58, 162 62 
           C 160 65, 150 66, 140 66 
           L 32 66 
           Z"
        fill={c.fill}
        stroke="#1C1917"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Cute Large Helmet (Chibi scale!) */}
      <circle cx="95" cy="34" r="8" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2.5" />
      <path d="M 94 31 Q 102 33 100 38 Q 93 37 94 31" fill="#1C1917" />
      <circle cx="98" cy="33" r="1.2" fill="#FFFFFF" /> {/* Cute shiny reflection dot! */}

      {/* Airbox */}
      <path d="M 72 38 Q 78 28 85 38" stroke="#1C1917" strokeWidth="2.5" fill={c.wash} />

      {/* Front Wing with cute curved cheeks */}
      <rect x="135" y="60" width="28" height="7" rx="3.5" fill={c.accent} stroke="#1C1917" strokeWidth="2.2" />

      {/* Fat Cute Chubby Wheels */}
      <circle cx="48" cy="60" r="15" fill="#292524" stroke="#1C1917" strokeWidth="2.5" />
      <circle cx="48" cy="60" r="7" fill={c.wash} stroke="#1C1917" strokeWidth="2" />
      <circle cx="48" cy="60" r="2.5" fill="#1C1917" />

      <circle cx="128" cy="60" r="15" fill="#292524" stroke="#1C1917" strokeWidth="2.5" />
      <circle cx="128" cy="60" r="7" fill={c.wash} stroke="#1C1917" strokeWidth="2" />
      <circle cx="128" cy="60" r="2.5" fill="#1C1917" />
    </svg>
  );
}

/**
 * Universal Sketch Component: Renders whichever style is currently selected!
 */
export default function SketchCar({
  style = 'marker',
  theme = 'papaya',
  width,
  height,
  className = '',
  rotate = 0
}) {
  const transform = rotate ? `rotate(${rotate}deg)` : undefined;

  return (
    <div style={{ transform }} className={`inline-block select-none ${className}`}>
      {style === 'marker' && <MarkerDoodleCar theme={theme} width={width} height={height} />}
      {style === 'risograph' && <RisographComicCar theme={theme} width={width} height={height} />}
      {style === 'blueprint' && <BlueprintSketchCar theme={theme} width={width} height={height} />}
      {style === 'chibi' && <ChibiMiniatureCar theme={theme} width={width} height={height} />}
    </div>
  );
}
