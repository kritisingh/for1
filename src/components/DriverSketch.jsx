import React from 'react';

/**
 * Hand-drawn editorial vector sketches of iconic F1 drivers.
 * Features hand-drawn ink line art, soft watercolor wash fills,
 * signature helmets/caps, expressive personality, and iconic quote badges.
 */

// Kimi Räikkönen — The Iceman (2007 Ferrari World Champion)
function KimiSketch({ width = 110, height = 110 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible select-none drop-shadow-sm"
    >
      {/* Soft ice-blue watercolor aura */}
      <circle cx="60" cy="58" r="44" fill="#E0F2FE" fillOpacity="0.75" />

      {/* Little floating ice crystal doodle */}
      <path d="M 98 22 L 102 26 M 100 20 L 100 28 M 96 24 L 104 24" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 16 38 L 20 42 M 18 36 L 18 44 M 14 40 L 22 40" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />

      {/* Racing suit shoulders */}
      <path
        d="M 24 108 C 28 88 42 82 60 82 C 78 82 92 88 96 108 Z"
        fill="#FEE2E2"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Ferrari red suit collar accent */}
      <path d="M 46 84 L 60 96 L 74 84" stroke="#DC2626" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <line x1="60" y1="96" x2="60" y2="108" stroke="#1C1917" strokeWidth="1.8" />

      {/* Neck */}
      <path d="M 48 72 L 48 84 C 54 86 66 86 72 84 L 72 72 Z" fill="#FED7AA" stroke="#1C1917" strokeWidth="2" />

      {/* Head / Jaw (Defined, cool Nordic jawline) */}
      <path
        d="M 38 48 C 38 72 45 78 60 78 C 75 78 82 72 82 48 Z"
        fill="#FFEDD5"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ears */}
      <ellipse cx="36" cy="54" rx="4" ry="7" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />
      <ellipse cx="84" cy="54" rx="4" ry="7" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />

      {/* Classic Ferrari / Alfa racing cap (pulled low over eyes) */}
      <path
        d="M 34 44 C 36 24 50 18 60 18 C 70 18 84 24 86 44 Z"
        fill="#DC2626"
        stroke="#1C1917"
        strokeWidth="2.2"
      />
      {/* Cap Visor (flat, angled forward) */}
      <path
        d="M 30 44 C 44 41 76 41 90 44 C 92 48 86 52 60 51 C 34 52 28 48 30 44 Z"
        fill="#991B1B"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Finnish flag ribbon accent on cap */}
      <rect x="52" y="24" width="16" height="6" rx="1.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />
      <line x1="57" y1="24" x2="57" y2="30" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="52" y1="27" x2="68" y2="27" stroke="#0284C7" strokeWidth="1.5" />

      {/* Iconic Dark Aviator Sunglasses (Kimi's trademark) */}
      <path
        d="M 41 53 C 41 50 54 50 55 53 L 56 61 C 55 64 42 64 41 61 Z"
        fill="#1E293B"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <path
        d="M 64 53 C 65 50 78 50 79 53 L 79 61 C 78 64 65 64 64 61 Z"
        fill="#1E293B"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <line x1="55" y1="54" x2="64" y2="54" stroke="#0F172A" strokeWidth="2" />
      <line x1="36" y1="52" x2="41" y2="54" stroke="#0F172A" strokeWidth="1.6" />
      <line x1="79" y1="54" x2="84" y2="52" stroke="#0F172A" strokeWidth="1.6" />
      <line x1="44" y1="55" x2="49" y2="60" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <line x1="67" y1="55" x2="72" y2="60" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

      {/* Nose hint */}
      <path d="M 59 63 L 60 67 L 62 67" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />

      {/* The classic straight, calm, totally unfazed mouth */}
      <line x1="53" y1="71" x2="67" y2="71" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Daniel Ricciardo — The Honey Badger (Iconic mega-smile & Shoey)
function RicciardoSketch({ width = 110, height = 110 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible select-none drop-shadow-sm"
    >
      {/* Warm sunny golden-yellow watercolor aura */}
      <circle cx="60" cy="58" r="44" fill="#FEF08A" fillOpacity="0.75" />

      {/* Little sparkling celebration stars */}
      <path d="M 100 24 L 102 28 L 106 30 L 102 32 L 100 36 L 98 32 L 94 30 L 98 28 Z" fill="#F59E0B" opacity="0.8" />
      <path d="M 18 30 L 19 33 L 22 34 L 19 35 L 18 38 L 17 35 L 14 34 L 17 33 Z" fill="#F59E0B" opacity="0.8" />

      {/* Racing suit shoulders */}
      <path
        d="M 24 108 C 28 88 42 82 60 82 C 78 82 92 88 96 108 Z"
        fill="#1E1B4B"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M 44 84 L 60 98 L 76 84" stroke="#EA580C" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <line x1="60" y1="98" x2="60" y2="108" stroke="#FBBF24" strokeWidth="2" />

      {/* Neck */}
      <path d="M 48 70 L 48 84 C 54 86 66 86 72 84 L 72 70 Z" fill="#FED7AA" stroke="#1C1917" strokeWidth="2" />

      {/* Head / Cheerful rounded jaw */}
      <path
        d="M 38 46 C 38 72 45 78 60 78 C 75 78 82 72 82 46 Z"
        fill="#FFEDD5"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ears */}
      <ellipse cx="36" cy="52" rx="4.5" ry="7" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />
      <ellipse cx="84" cy="52" rx="4.5" ry="7" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />

      {/* Daniel's curly dark hair peeking out */}
      <path d="M 35 40 Q 32 46 36 50 M 85 40 Q 88 46 84 50" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />

      {/* Racing Cap (slightly tilted up cheerfully) */}
      <path
        d="M 34 40 C 36 20 48 16 60 16 C 72 16 84 20 86 40 Z"
        fill="#1E293B"
        stroke="#1C1917"
        strokeWidth="2.2"
      />
      <path
        d="M 28 38 C 44 32 76 32 92 38 C 94 42 88 46 60 45 C 32 46 26 42 28 38 Z"
        fill="#0F172A"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Honey Badger icon doodle badge on cap */}
      <circle cx="60" cy="27" r="4.5" fill="#F59E0B" stroke="#1C1917" strokeWidth="1" />
      <path d="M 58 26 L 60 28 L 62 26" stroke="#1C1917" strokeWidth="1" strokeLinecap="round" />

      {/* Crinkled Happy Smiling Eyes */}
      <path d="M 42 50 Q 48 46 54 50" stroke="#1C1917" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M 66 50 Q 72 46 78 50" stroke="#1C1917" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M 40 49 L 38 48 M 80 49 L 82 48" stroke="#1C1917" strokeWidth="1.4" strokeLinecap="round" />

      {/* Friendly nose */}
      <path d="M 58 54 Q 60 60 62 60" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* THE LEGENDARY DANIEL RICCIARDO MEGA-SMILE! (Giant toothy grin) */}
      <path
        d="M 43 62 Q 60 61 77 62 C 76 74 60 75 43 62 Z"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <line x1="46" y1="67" x2="74" y2="67" stroke="#1C1917" strokeWidth="1.2" />
      <path d="M 40 60 Q 42 64 43 66" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 80 60 Q 78 64 77 66" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mini Shoey doodle in corner */}
      <g transform="translate(86, 78) scale(0.8)">
        <path d="M 4 18 L 18 18 C 22 18 24 16 26 12 L 28 8 L 22 6 L 16 12 L 8 12 L 4 18 Z" fill="#1C1917" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="28" cy="4" r="2.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
        <circle cx="24" cy="2" r="1.5" fill="#FEF08A" />
      </g>
    </svg>
  );
}

// Romain Grosjean — The Phoenix (Miraculous 2020 Bahrain escape & Haas hero)
function GrosjeanSketch({ width = 110, height = 110 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible select-none drop-shadow-sm"
    >
      {/* Warm glowing phoenix flame-orange aura */}
      <circle cx="60" cy="58" r="44" fill="#FED7AA" fillOpacity="0.75" />

      {/* Stylized phoenix flame wing accents */}
      <path d="M 14 62 Q 8 50 16 42 Q 18 52 22 56 Z" fill="#F97316" fillOpacity="0.8" />
      <path d="M 106 62 Q 112 50 104 42 Q 102 52 98 56 Z" fill="#F97316" fillOpacity="0.8" />
      <circle cx="102" cy="36" r="2" fill="#F59E0B" />
      <circle cx="18" cy="36" r="2" fill="#F59E0B" />

      {/* Racing suit shoulders (Haas white/red/grey) */}
      <path
        d="M 24 108 C 28 88 42 82 60 82 C 78 82 92 88 96 108 Z"
        fill="#F8FAFC"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M 44 84 L 60 96 L 76 84" stroke="#DC2626" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <line x1="50" y1="88" x2="50" y2="108" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="88" x2="70" y2="108" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />

      {/* Neck */}
      <path d="M 48 70 L 48 84 C 54 86 66 86 72 84 L 72 70 Z" fill="#FED7AA" stroke="#1C1917" strokeWidth="2" />

      {/* Head / Warm expressive face */}
      <path
        d="M 38 46 C 38 72 45 76 60 76 C 75 76 82 72 82 46 Z"
        fill="#FFEDD5"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ears */}
      <ellipse cx="36" cy="52" rx="4" ry="6.5" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />
      <ellipse cx="84" cy="52" rx="4" ry="6.5" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />

      {/* Romain's brown styled hair */}
      <path
        d="M 36 44 C 36 24 46 18 60 18 C 74 18 84 24 84 44 C 80 34 72 32 60 32 C 48 32 40 36 36 44 Z"
        fill="#78350F"
        stroke="#1C1917"
        strokeWidth="2"
      />

      {/* Kind, determined eyebrows */}
      <path d="M 43 47 Q 49 44 54 46" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 66 46 Q 71 44 77 47" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />

      {/* Warm, grateful eyes */}
      <ellipse cx="48" cy="52" rx="3.2" ry="3.5" fill="#1C1917" />
      <ellipse cx="72" cy="52" rx="3.2" ry="3.5" fill="#1C1917" />
      <circle cx="49" cy="51" r="1.2" fill="#FFFFFF" />
      <circle cx="73" cy="51" r="1.2" fill="#FFFFFF" />

      {/* Nose */}
      <path d="M 59 52 L 59 60 L 62 60" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" />

      {/* Gentle, resilient, genuine smile */}
      <path d="M 48 66 Q 60 72 72 66" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Halo Safety Ring symbol (The device that saved his life in 2020) */}
      <g transform="translate(42, 94) scale(0.65)">
        <path d="M 6 8 C 16 2 40 2 50 8 L 46 14 C 38 10 18 10 10 14 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.8" />
        <line x1="28" y1="10" x2="28" y2="24" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Ayrton Senna — 3x World Champion & Monaco Master
function SennaSketch({ width = 110, height = 110 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible select-none drop-shadow-sm"
    >
      {/* Warm Brazilian solar-yellow watercolor aura */}
      <circle cx="60" cy="58" r="44" fill="#FEF08A" fillOpacity="0.8" />

      {/* Racing suit shoulders (Marlboro McLaren red/white) */}
      <path
        d="M 24 108 C 28 88 42 82 60 82 C 78 82 92 88 96 108 Z"
        fill="#DC2626"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M 44 84 L 60 96 L 76 84" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line x1="60" y1="96" x2="60" y2="108" stroke="#FFFFFF" strokeWidth="2.4" />

      {/* Neck */}
      <path d="M 48 70 L 48 84 C 54 86 66 86 72 84 L 72 70 Z" fill="#FED7AA" stroke="#1C1917" strokeWidth="2" />

      {/* THE LEGENDARY SENNA HELMET (Iconic Yellow with Green/Blue Stripes) */}
      <path
        d="M 34 52 C 34 22 46 16 60 16 C 74 16 86 22 86 52 C 86 74 76 76 60 76 C 44 76 34 74 34 52 Z"
        fill="#FACC15"
        stroke="#1C1917"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Dark Green Horizontal Stripe */}
      <path d="M 34 40 Q 60 44 86 40 L 86 46 Q 60 50 34 46 Z" fill="#15803D" stroke="#1C1917" strokeWidth="1.2" />

      {/* Deep Blue Stripe */}
      <path d="M 34 60 Q 60 64 86 60 L 86 65 Q 60 69 34 65 Z" fill="#1D4ED8" stroke="#1C1917" strokeWidth="1.2" />

      {/* Visor Area (Intense dark visor with eyes focused forward) */}
      <path
        d="M 38 46 Q 60 50 82 46 L 81 58 Q 60 62 39 58 Z"
        fill="#0F172A"
        stroke="#1C1917"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M 43 49 Q 55 52 64 51" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

      {/* Chin air vents */}
      <circle cx="56" cy="71" r="1.2" fill="#1C1917" />
      <circle cx="60" cy="71" r="1.2" fill="#1C1917" />
      <circle cx="64" cy="71" r="1.2" fill="#1C1917" />
    </svg>
  );
}

// Michael Schumacher — The Red Baron (7x World Champion)
function SchumacherSketch({ width = 110, height = 110 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible select-none drop-shadow-sm"
    >
      {/* Warm Crimson watercolor aura */}
      <circle cx="60" cy="58" r="44" fill="#FEE2E2" fillOpacity="0.8" />

      {/* 7 Little Championship Stars overhead */}
      <g fill="#EAB308" transform="translate(36, 12) scale(0.65)">
        <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
        <polygon points="25,1 27,7 33,7 28,11 30,17 25,13 20,17 22,11 17,7 23,7" />
        <polygon points="40,1 42,7 48,7 43,11 45,17 40,13 35,17 37,11 32,7 38,7" />
        <polygon points="55,1 57,7 63,7 58,11 60,17 55,13 50,17 52,11 47,7 53,7" />
      </g>

      {/* Racing suit shoulders */}
      <path
        d="M 24 108 C 28 88 42 82 60 82 C 78 82 92 88 96 108 Z"
        fill="#DC2626"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M 44 84 L 60 96 L 76 84" stroke="#FFFFFF" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <line x1="60" y1="96" x2="60" y2="108" stroke="#FFFFFF" strokeWidth="2" />

      {/* Neck */}
      <path d="M 48 70 L 48 84 C 54 86 66 86 72 84 L 72 70 Z" fill="#FED7AA" stroke="#1C1917" strokeWidth="2" />

      {/* Head / Firm square champion jaw */}
      <path
        d="M 38 46 C 38 72 45 78 60 78 C 75 78 82 72 82 46 Z"
        fill="#FFEDD5"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ears */}
      <ellipse cx="36" cy="52" rx="4" ry="6.5" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />
      <ellipse cx="84" cy="52" rx="4" ry="6.5" fill="#FED7AA" stroke="#1C1917" strokeWidth="1.8" />

      {/* Signature Red Ferrari Cap */}
      <path
        d="M 34 42 C 36 22 48 18 60 18 C 72 18 84 22 86 42 Z"
        fill="#B91C1C"
        stroke="#1C1917"
        strokeWidth="2.2"
      />
      <path
        d="M 28 40 C 44 36 76 36 92 40 C 94 44 88 48 60 47 C 32 48 26 44 28 40 Z"
        fill="#991B1B"
        stroke="#1C1917"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <rect x="52" y="24" width="16" height="7" rx="1.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1" />
      <circle cx="60" cy="27.5" r="2" fill="#DC2626" />

      {/* Intense, focused champion eyes */}
      <path d="M 44 48 Q 50 46 54 48" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 66 48 Q 70 46 76 48" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />
      <ellipse cx="49" cy="53" rx="3" ry="3.2" fill="#1C1917" />
      <ellipse cx="71" cy="53" rx="3" ry="3.2" fill="#1C1917" />
      <circle cx="50" cy="52" r="1" fill="#FFFFFF" />
      <circle cx="72" cy="52" r="1" fill="#FFFFFF" />

      {/* Determined nose & sharp chin */}
      <path d="M 59 53 L 59 62 L 62 62" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 48 68 Q 60 72 72 68" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <line x1="58" y1="74" x2="62" y2="74" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Driver metadata & personality tags
export const DRIVER_SKETCHES_DATA = {
  kimi: {
    id: 'kimi',
    name: 'Kimi Räikkönen',
    nickname: 'The Iceman',
    team: 'Ferrari • 2007 World Champion',
    quote: 'Leave me alone, I know what to do.',
    catchphrase: 'Bwoah... ❄️',
    accentColor: '#EF4444',
    bgBadge: 'bg-rose-50 border-rose-200 text-rose-800',
    component: KimiSketch
  },
  ricciardo: {
    id: 'ricciardo',
    name: 'Daniel Ricciardo',
    nickname: 'The Honey Badger',
    team: 'Red Bull • 8x Grand Prix Winner',
    quote: 'Sometimes you just gotta lick the stamp and send it!',
    catchphrase: 'Shoey Time! 🍾',
    accentColor: '#F59E0B',
    bgBadge: 'bg-amber-50 border-amber-200 text-amber-800',
    component: RicciardoSketch
  },
  grosjean: {
    id: 'grosjean',
    name: 'Romain Grosjean',
    nickname: 'The Phoenix',
    team: 'Haas • 10x F1 Podiums',
    quote: 'I saw death coming, and I said no. Not today.',
    catchphrase: 'The Phoenix 🔥',
    accentColor: '#F97316',
    bgBadge: 'bg-orange-50 border-orange-200 text-orange-800',
    component: GrosjeanSketch
  },
  senna: {
    id: 'senna',
    name: 'Ayrton Senna',
    nickname: 'Master of Monaco',
    team: 'McLaren • 3x World Champion',
    quote: 'If you no longer go for a gap that exists, you are no longer a racing driver.',
    catchphrase: 'Simply the Best 🇧🇷',
    accentColor: '#EAB308',
    bgBadge: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    component: SennaSketch
  },
  schumacher: {
    id: 'schumacher',
    name: 'Michael Schumacher',
    nickname: 'The Red Baron',
    team: 'Ferrari • 7x World Champion',
    quote: 'Once something is a passion, the motivation is there.',
    catchphrase: 'The Red Baron 👑',
    accentColor: '#DC2626',
    bgBadge: 'bg-red-50 border-red-200 text-red-800',
    component: SchumacherSketch
  }
};

/**
 * DriverSketch Badge Component
 * Rendered as an authentic artist notebook doodle sticker
 */
export default function DriverSketch({ driver = 'kimi', showTag = true, className = '' }) {
  const data = DRIVER_SKETCHES_DATA[driver] || DRIVER_SKETCHES_DATA.kimi;
  const Component = data.component;

  return (
    <div className={`inline-flex flex-col items-center select-none group ${className}`}>
      {/* Hand-drawn sketch art */}
      <div className="relative transform transition-transform duration-300 hover:scale-105">
        <Component width={92} height={92} />

        {/* Floating speech bubble / iconic catchphrase */}
        {showTag && (
          <div className="absolute -top-3 -right-6 bg-white/95 backdrop-blur-xs border border-stone-300 rounded-full px-2 py-0.5 shadow-2xs text-[9px] font-bold text-stone-800 whitespace-nowrap rotate-6 group-hover:rotate-0 transition-transform">
            {data.catchphrase}
          </div>
        )}
      </div>

      {/* Driver name & badge */}
      {showTag && (
        <div className="mt-1 text-center max-w-[130px]">
          <div className="text-[11px] font-bold text-stone-900 tracking-tight leading-tight">
            {data.name}
          </div>
          <div className="text-[9px] font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
            {data.nickname}
          </div>
        </div>
      )}
    </div>
  );
}
