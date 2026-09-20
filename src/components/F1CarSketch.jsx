import React from 'react';

/**
 * Palette inspired by The Pudding's animal sketches:
 * Playful pastels with friendly, crisp, hand-drawn dark outlines.
 */
export const SKETCH_THEMES = {
  papaya: { bg: '#FFEDD5', stroke: '#1C1917', fill: '#FB923C', accent: '#EA580C', name: 'McLaren Papaya' },
  rosso: { bg: '#FEE2E2', stroke: '#1C1917', fill: '#F87171', accent: '#DC2626', name: 'Ferrari Rosso' },
  purple: { bg: '#F3E8FF', stroke: '#1C1917', fill: '#C084FC', accent: '#9333EA', name: 'Pudding Purple' },
  pink: { bg: '#FCE7F3', stroke: '#1C1917', fill: '#F472B6', accent: '#DB2777', name: 'Pudding Pink' },
  yellow: { bg: '#FEF9C3', stroke: '#1C1917', fill: '#FDE047', accent: '#EAB308', name: 'Pudding Yellow' },
  teal: { bg: '#CCFBF1', stroke: '#1C1917', fill: '#5EEAD4', accent: '#0D9488', name: 'Petronas Mint' },
  blue: { bg: '#E0F2FE', stroke: '#1C1917', fill: '#7DD3FC', accent: '#0284C7', name: 'Alpine Sky' },
  green: { bg: '#DCFCE7', stroke: '#1C1917', fill: '#86EFAC', accent: '#16A34A', name: 'British Racing Green' }
};

/**
 * Type 1: Modern Ground Effect F1 Car Sketch (Side Profile)
 */
export function ModernCarSketch({ theme = 'papaya', width = 160, height = 70, className = '' }) {
  const t = SKETCH_THEMES[theme] || SKETCH_THEMES.papaya;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="100" cy="76" rx="80" ry="5" fill="#1C1917" fillOpacity="0.08" />

      {/* Rear Wing */}
      <path d="M 22 25 L 42 22 L 40 42 L 20 44 Z" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 28 28 L 38 27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="42" x2="32" y2="56" stroke={t.stroke} strokeWidth="2.5" />

      {/* Main Car Body Sketch */}
      <path
        d="M 32 54 
           C 45 46, 68 40, 88 40 
           C 105 40, 118 43, 132 46 
           C 152 50, 172 55, 188 57 
           C 194 58, 196 62, 192 64 
           C 180 66, 160 67, 140 67 
           C 110 68, 70 68, 38 67 
           Z"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Underbody & Sidepod Details */}
      <path d="M 85 50 C 105 48, 125 54, 140 58 C 128 66, 95 67, 78 65 Z" fill={t.accent} stroke={t.stroke} strokeWidth="1.8" />
      <path d="M 90 46 C 115 44, 140 48, 155 54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Airbox */}
      <path d="M 82 40 C 85 33, 93 33, 97 40 Z" fill={t.bg} stroke={t.stroke} strokeWidth="2" />
      <circle cx="89" cy="37" r="2" fill={t.stroke} />

      {/* Halo */}
      <path d="M 97 42 C 108 38, 118 39, 128 46" stroke={t.stroke} strokeWidth="2.5" strokeLinecap="round" />

      {/* Cute Driver Helmet */}
      <circle cx="110" cy="38" r="5" fill="#FFFFFF" stroke={t.stroke} strokeWidth="2" />
      <path d="M 110 37 Q 114 39 113 41" stroke={t.stroke} strokeWidth="2" strokeLinecap="round" />

      {/* Front Wing Assembly */}
      <path d="M 170 63 L 196 61 L 197 67 L 165 68 Z" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="175" y1="64" x2="194" y2="63" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Big Chunky Wheels (The Pudding doodle style) */}
      {/* Rear Wheel */}
      <circle cx="50" cy="62" r="14" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
      <circle cx="50" cy="62" r="7" fill={t.bg} stroke={t.stroke} strokeWidth="1.8" />
      <circle cx="50" cy="62" r="2.5" fill={t.stroke} />

      {/* Front Wheel */}
      <circle cx="155" cy="62" r="14" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
      <circle cx="155" cy="62" r="7" fill={t.bg} stroke={t.stroke} strokeWidth="1.8" />
      <circle cx="155" cy="62" r="2.5" fill={t.stroke} />
    </svg>
  );
}

/**
 * Type 2: Vintage Classic Cigar Torpedo F1 Car Sketch (1950s/1960s)
 */
export function VintageCarSketch({ theme = 'rosso', width = 160, height = 70, className = '' }) {
  const t = SKETCH_THEMES[theme] || SKETCH_THEMES.rosso;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <ellipse cx="100" cy="76" rx="80" ry="5" fill="#1C1917" fillOpacity="0.08" />

      {/* Chrome Side Exhaust Pipe */}
      <path d="M 85 54 L 35 54 L 25 56" stroke="#A8A29E" strokeWidth="3" strokeLinecap="round" />

      {/* Torpedo Body */}
      <path
        d="M 32 55 
           C 40 44, 75 42, 115 42 
           C 145 42, 172 45, 192 53 
           C 198 56, 198 63, 192 66 
           C 170 70, 130 70, 85 70 
           C 45 70, 30 65, 32 55 
           Z"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Front Radiator Grille Oval */}
      <ellipse cx="193" cy="59" rx="3.5" ry="6" fill="#44403C" stroke={t.stroke} strokeWidth="1.8" />

      {/* Windshield */}
      <path d="M 115 42 C 120 37, 126 37, 129 42 Z" fill="#E0F2FE" stroke={t.stroke} strokeWidth="1.5" />

      {/* Vintage Driver with Helmet, Goggles & Fluttering Scarf */}
      <circle cx="108" cy="35" r="5.5" fill="#D97706" stroke={t.stroke} strokeWidth="2" />
      <ellipse cx="111" cy="34" rx="2" ry="1.5" fill="#E0F2FE" stroke={t.stroke} strokeWidth="1" />
      {/* Fluttering scarf */}
      <path d="M 103 38 Q 95 36 88 39 Q 95 41 103 40 Z" fill="#FFFFFF" stroke={t.stroke} strokeWidth="1.5" />

      {/* Hand-painted number roundel */}
      <circle cx="145" cy="54" r="6" fill="#FFFFFF" stroke={t.stroke} strokeWidth="1.5" />
      <text x="145" y="57" textAnchor="middle" fontSize="7" fontWeight="bold" fill={t.stroke} fontFamily="serif">
        1
      </text>

      {/* Wire Spoke Wheels with Knock-off Spinner */}
      {/* Rear Wheel */}
      <g transform="translate(52, 60)">
        <circle cx="0" cy="0" r="15" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10.5" fill={t.bg} stroke={t.stroke} strokeWidth="1.5" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke={t.stroke} strokeWidth="1" />
        <line x1="0" y1="-9" x2="0" y2="9" stroke={t.stroke} strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#E5E7EB" stroke={t.stroke} strokeWidth="1" />
      </g>

      {/* Front Wheel */}
      <g transform="translate(165, 60)">
        <circle cx="0" cy="0" r="15" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10.5" fill={t.bg} stroke={t.stroke} strokeWidth="1.5" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke={t.stroke} strokeWidth="1" />
        <line x1="0" y1="-9" x2="0" y2="9" stroke={t.stroke} strokeWidth="1" />
        <circle cx="0" cy="0" r="3" fill="#E5E7EB" stroke={t.stroke} strokeWidth="1" />
      </g>
    </svg>
  );
}

/**
 * Type 3: 1970s High-Airbox & Wings F1 Car Sketch (Hunt vs Lauda era)
 */
export function HighAirboxSketch({ theme = 'purple', width = 160, height = 70, className = '' }) {
  const t = SKETCH_THEMES[theme] || SKETCH_THEMES.purple;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <ellipse cx="100" cy="76" rx="80" ry="5" fill="#1C1917" fillOpacity="0.08" />

      {/* Giant Periscope Airbox Scoop rising high! */}
      <path d="M 94 44 C 94 20, 106 15, 110 15 C 114 15, 118 20, 117 44 Z" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" />
      <ellipse cx="106" cy="18" rx="3" ry="2" fill={t.stroke} />

      {/* High Rear Wing on Struts */}
      <line x1="36" y1="24" x2="36" y2="52" stroke={t.stroke} strokeWidth="2" />
      <line x1="45" y1="24" x2="45" y2="52" stroke={t.stroke} strokeWidth="2" />
      <path d="M 26 20 L 54 18 L 52 28 L 24 30 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2.5" strokeLinejoin="round" />

      {/* Wedge Fuselage */}
      <path
        d="M 38 52 
           L 80 44 
           L 135 48 
           L 182 58 
           C 188 59, 188 64, 182 65 
           L 130 67 
           L 42 67 
           Z"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Driver */}
      <circle cx="104" cy="40" r="5" fill="#FFFFFF" stroke={t.stroke} strokeWidth="2" />
      <rect x="103" y="38" width="4" height="2" rx="0.5" fill={t.stroke} />

      {/* Chisel Front Wing */}
      <path d="M 168 61 L 194 59 L 195 66 L 165 66 Z" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" strokeLinejoin="round" />

      {/* Extra Wide Rear Slicks */}
      <circle cx="52" cy="60" r="16" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
      <circle cx="52" cy="60" r="8" fill={t.bg} stroke={t.stroke} strokeWidth="2" />
      <circle cx="52" cy="60" r="2.5" fill={t.stroke} />

      {/* Front Wheels */}
      <circle cx="155" cy="62" r="12" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
      <circle cx="155" cy="62" r="6" fill={t.bg} stroke={t.stroke} strokeWidth="2" />
      <circle cx="155" cy="62" r="2" fill={t.stroke} />
    </svg>
  );
}

/**
 * Type 4: Front-Facing F1 Car Doodle Sketch
 */
export function FrontCarSketch({ theme = 'yellow', width = 110, height = 75, className = '' }) {
  const t = SKETCH_THEMES[theme] || SKETCH_THEMES.yellow;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <ellipse cx="60" cy="80" rx="50" ry="5" fill="#1C1917" fillOpacity="0.08" />

      {/* Rear Wing in Background */}
      <rect x="25" y="16" width="70" height="12" rx="3" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" />

      {/* Halo & Cockpit Roll Hoop */}
      <path d="M 52 28 C 52 20, 68 20, 68 28 Z" fill={t.bg} stroke={t.stroke} strokeWidth="2" />
      <circle cx="60" cy="24" r="2.5" fill={t.stroke} />

      {/* Driver Helmet */}
      <circle cx="60" cy="35" r="7" fill="#FFFFFF" stroke={t.stroke} strokeWidth="2" />
      <rect x="56" y="33" width="8" height="3" rx="1" fill={t.stroke} />

      {/* Halo Bar */}
      <path d="M 45 42 C 48 37, 72 37, 75 42" stroke={t.stroke} strokeWidth="3" strokeLinecap="round" />

      {/* Sidepods */}
      <rect x="30" y="48" width="16" height="20" rx="4" fill={t.fill} stroke={t.stroke} strokeWidth="2.5" />
      <rect x="74" y="48" width="16" height="20" rx="4" fill={t.fill} stroke={t.stroke} strokeWidth="2.5" />

      {/* Nose Cone */}
      <path d="M 52 42 L 68 42 L 65 72 L 55 72 Z" fill={t.fill} stroke={t.stroke} strokeWidth="2.5" strokeLinejoin="round" />

      {/* Suspension Wishbones */}
      <line x1="24" y1="52" x2="52" y2="58" stroke={t.stroke} strokeWidth="2" />
      <line x1="24" y1="68" x2="52" y2="64" stroke={t.stroke} strokeWidth="2" />
      <line x1="96" y1="52" x2="68" y2="58" stroke={t.stroke} strokeWidth="2" />
      <line x1="96" y1="68" x2="68" y2="64" stroke={t.stroke} strokeWidth="2" />

      {/* Massive Front Wing */}
      <rect x="8" y="70" width="104" height="8" rx="3" fill={t.accent} stroke={t.stroke} strokeWidth="2.5" />

      {/* Tires Left & Right */}
      <rect x="10" y="44" width="14" height="32" rx="4" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
      <rect x="96" y="44" width="14" height="32" rx="4" fill="#292524" stroke={t.stroke} strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Type 5: Racing Helmet & Checkered Flag Doodle Sketch
 */
export function HelmetSketch({ theme = 'pink', width = 90, height = 75, className = '' }) {
  const t = SKETCH_THEMES[theme] || SKETCH_THEMES.pink;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <ellipse cx="50" cy="80" rx="35" ry="4" fill="#1C1917" fillOpacity="0.08" />

      {/* Helmet Dome */}
      <path
        d="M 25 50 
           C 25 30, 40 20, 58 20 
           C 75 20, 85 32, 85 52 
           C 85 68, 70 72, 55 72 
           C 38 72, 25 65, 25 50 
           Z"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="2.5"
      />

      {/* Helmet Deco Stripe */}
      <path d="M 32 32 C 45 27, 65 27, 78 34" stroke={t.accent} strokeWidth="4" strokeLinecap="round" />
      <path d="M 30 38 C 45 33, 65 33, 76 40" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Visor */}
      <path
        d="M 52 40 
           C 65 40, 80 43, 86 48 
           C 86 56, 75 58, 60 57 
           C 54 56, 50 50, 52 40 
           Z"
        fill="#1C1917"
        stroke={t.stroke}
        strokeWidth="1.5"
      />
      {/* Visor Glare Reflection */}
      <path d="M 60 45 L 75 47" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

      {/* Hans device collar */}
      <path d="M 28 65 Q 45 74 65 71" stroke={t.stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Unified F1CarSketch Component Selector
 */
export default function F1CarSketch({ type = 'modern', theme = 'papaya', width, height, className = '', rotate = 0 }) {
  const style = rotate ? { transform: `rotate(${rotate}deg)` } : undefined;

  return (
    <div style={style} className={`inline-block select-none ${className}`}>
      {type === 'modern' && <ModernCarSketch theme={theme} width={width} height={height} />}
      {type === 'vintage' && <VintageCarSketch theme={theme} width={width} height={height} />}
      {type === 'airbox' && <HighAirboxSketch theme={theme} width={width} height={height} />}
      {type === 'front' && <FrontCarSketch theme={theme} width={width} height={height} />}
      {type === 'helmet' && <HelmetSketch theme={theme} width={width} height={height} />}
    </div>
  );
}
