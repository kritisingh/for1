import React from 'react';
import RealCarThumbnail from './RealCarThumbnail';
import DriverSketch from './DriverSketch';

/**
 * Curated stream of iconic F1 cars & legendary driver sketches across history (1950 - 2024).
 * Keyed by season year to ensure zero overlap, pristine vertical rhythm,
 * and synchronized placement alongside each era's season card.
 * 
 * Includes bespoke hand-drawn sketches of:
 * - Kimi Räikkönen ("The Iceman" — 2007 Ferrari Champion)
 * - Daniel Ricciardo ("The Honey Badger" — 2014 Red Bull Breakout & Shoey)
 * - Romain Grosjean ("The Phoenix" — 2020 Bahrain Miracle & Haas Hero)
 * - Michael Schumacher ("The Red Baron" — 1994 Champion)
 * - Ayrton Senna ("Simply the Best" — 1988 McLaren Champion)
 */
export const ICONIC_BACKGROUND_STREAM = {
  // 2020s Ground-Effect Era
  2024: { type: 'car', year: 2024, chassis: 'MCL38', team: 'McLaren', side: 'left', rotate: -6 },
  2023: { type: 'car', year: 2023, chassis: 'RB19', team: 'Red Bull', side: 'right', rotate: 7 },
  2021: { type: 'car', year: 2021, chassis: 'W12', team: 'Mercedes', side: 'left', rotate: 6 },
  
  // 2020: Romain Grosjean ("The Phoenix 🔥" — Miraculous Bahrain escape & Haas hero)
  2020: { type: 'driver', driver: 'grosjean', year: 2020, side: 'right', rotate: -6 },

  // 2010s Turbo-Hybrid Era
  2018: { type: 'car', year: 2018, chassis: 'W09', team: 'Mercedes', side: 'left', rotate: -7 },
  
  // 2014: Daniel Ricciardo ("The Honey Badger 🍾" — Red Bull 3-win breakout & Shoey time!)
  2014: { type: 'driver', driver: 'ricciardo', year: 2014, side: 'right', rotate: 7 },
  
  2013: { type: 'car', year: 2013, chassis: 'RB9', team: 'Red Bull', side: 'left', rotate: 7 },
  2010: { type: 'car', year: 2010, chassis: 'RB6', team: 'Red Bull', side: 'right', rotate: -7 },

  // 2000s V10 & V8 Era
  2009: { type: 'car', year: 2009, chassis: 'BGP 001', team: 'Brawn GP', side: 'left', rotate: -6 },
  
  // 2007: Kimi Räikkönen ("The Iceman ❄️" — 2007 Ferrari World Championship!)
  2007: { type: 'driver', driver: 'kimi', year: 2007, side: 'right', rotate: -6 },
  
  2005: { type: 'car', year: 2005, chassis: 'R25', team: 'Renault', side: 'left', rotate: 6 },
  2004: { type: 'car', year: 2004, chassis: 'F2004', team: 'Ferrari', side: 'right', rotate: -6 },
  2002: { type: 'car', year: 2002, chassis: 'F2002', team: 'Ferrari', side: 'left', rotate: -7 },
  2000: { type: 'car', year: 2000, chassis: 'F1-2000', team: 'Ferrari', side: 'right', rotate: 6 },

  // 1990s & 1980s Active Suspension & Turbos
  1998: { type: 'car', year: 1998, chassis: 'MP4/13', team: 'McLaren', side: 'left', rotate: 7 },
  
  // 1994: Michael Schumacher ("The Red Baron 👑" — First World Championship)
  1994: { type: 'driver', driver: 'schumacher', year: 1994, side: 'right', rotate: -6 },
  
  1992: { type: 'car', year: 1992, chassis: 'FW14B', team: 'Williams', side: 'left', rotate: -6 },
  
  // 1988: Ayrton Senna ("Simply the Best 🇧🇷" — 1988 McLaren World Championship)
  1988: { type: 'driver', driver: 'senna', year: 1988, side: 'right', rotate: 8 },
  
  1986: { type: 'car', year: 1986, chassis: 'MP4/2C', team: 'McLaren', side: 'left', rotate: 6 },
  1980: { type: 'car', year: 1980, chassis: 'FW07B', team: 'Williams', side: 'right', rotate: -7 },

  // 1970s High-Airbox & Ground Effect
  1978: { type: 'car', year: 1978, chassis: 'Lotus 79', team: 'Lotus', side: 'left', rotate: -6 },
  1976: { type: 'car', year: 1976, chassis: '312T2', team: 'Ferrari', side: 'right', rotate: 6 },
  1974: { type: 'car', year: 1974, chassis: 'M23', team: 'McLaren', side: 'left', rotate: 7 },
  1971: { type: 'car', year: 1971, chassis: 'Tyrrell 003', team: 'Tyrrell', side: 'right', rotate: -6 },

  // 1950s - 1960s Classic Genesis
  1968: { type: 'car', year: 1968, chassis: 'Lotus 49', team: 'Lotus', side: 'left', rotate: -7 },
  1966: { type: 'car', year: 1966, chassis: 'BT19', team: 'Brabham', side: 'right', rotate: 7 },
  1960: { type: 'car', year: 1960, chassis: 'Cooper T53', team: 'Cooper', side: 'left', rotate: 6 },
  1957: { type: 'car', year: 1957, chassis: '250F', team: 'Maserati', side: 'right', rotate: -6 },
  1954: { type: 'car', year: 1954, chassis: 'W196', team: 'Mercedes', side: 'left', rotate: -6 },
  1950: { type: 'car', year: 1950, chassis: 'Alfetta 158', team: 'Alfa Romeo', side: 'right', rotate: 8 }
};

/**
 * BackgroundRealCars component:
 * Renders an authentic F1 championship machine or legendary driver sketch
 * in the sky margin beside its corresponding historical season card.
 */
export default function BackgroundRealCars({ year }) {
  if (!year) return null;
  const item = ICONIC_BACKGROUND_STREAM[year];
  if (!item) return null;

  const isLeft = item.side === 'left';

  const content = item.type === 'driver' ? (
    <DriverSketch driver={item.driver} showTag={true} />
  ) : (
    <RealCarThumbnail
      year={item.year}
      chassisName={item.chassis}
      teamName={item.team}
      size="xs"
      showLabel={true}
    />
  );

  return isLeft ? (
    <div 
      className="hidden lg:block absolute -left-20 xl:-left-36 2xl:-left-44 top-24 pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <div 
        style={{ transform: `rotate(${item.rotate}deg)` }}
        className="transition-transform duration-500 hover:scale-105"
      >
        <div className="animate-sticker-float">
          <div className="opacity-90 hover:opacity-100 transition-opacity pointer-events-auto">
            {content}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div 
      className="hidden lg:block absolute -right-20 xl:-right-36 2xl:-right-44 top-24 pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <div 
        style={{ transform: `rotate(${item.rotate}deg)` }}
        className="transition-transform duration-500 hover:scale-105"
      >
        <div className="animate-sticker-float-delayed">
          <div className="opacity-90 hover:opacity-100 transition-opacity pointer-events-auto">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
