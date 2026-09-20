import React from 'react';
import SketchCar from './SketchStyles';

/**
 * Historical sketch stream cascading down the entire page height (1950 - 2025).
 * Left and right alternating columns, evolving backwards through time.
 */
const SKETCH_STREAM = [
  // 2020s Era
  { theme: 'papaya', rotate: -12, side: 'left' },
  { theme: 'blue', rotate: 14, side: 'right' },
  { theme: 'yellow', rotate: 8, side: 'left' },
  { theme: 'pink', rotate: -15, side: 'right' },
  { theme: 'rosso', rotate: 10, side: 'left' },
  { theme: 'teal', rotate: -8, side: 'right' },

  // 2010s Turbo-Hybrid Era
  { theme: 'purple', rotate: -14, side: 'left' },
  { theme: 'teal', rotate: 12, side: 'right' },
  { theme: 'yellow', rotate: -10, side: 'left' },
  { theme: 'green', rotate: 15, side: 'right' },
  { theme: 'rosso', rotate: -12, side: 'left' },
  { theme: 'papaya', rotate: 9, side: 'right' },

  // 2000s V10 & V8 Screamer Era
  { theme: 'yellow', rotate: 12, side: 'left' },
  { theme: 'rosso', rotate: -14, side: 'right' },
  { theme: 'papaya', rotate: -10, side: 'left' },
  { theme: 'purple', rotate: 15, side: 'right' },
  { theme: 'blue', rotate: -8, side: 'left' },
  { theme: 'teal', rotate: 10, side: 'right' },

  // 1980s - 1990s Turbo Monsters
  { theme: 'purple', rotate: -15, side: 'left' },
  { theme: 'papaya', rotate: 12, side: 'right' },
  { theme: 'yellow', rotate: -10, side: 'left' },
  { theme: 'rosso', rotate: 14, side: 'right' },
  { theme: 'green', rotate: -12, side: 'left' },
  { theme: 'blue', rotate: 10, side: 'right' },

  // 1970s High-Airbox Era
  { theme: 'rosso', rotate: 15, side: 'left' },
  { theme: 'blue', rotate: -12, side: 'right' },
  { theme: 'pink', rotate: 10, side: 'left' },
  { theme: 'yellow', rotate: -15, side: 'right' },
  { theme: 'purple', rotate: 8, side: 'left' },
  { theme: 'teal', rotate: -14, side: 'right' },

  // 1950s - 1960s Classic Genesis
  { theme: 'green', rotate: -10, side: 'left' },
  { theme: 'rosso', rotate: 14, side: 'right' },
  { theme: 'papaya', rotate: -12, side: 'left' },
  { theme: 'purple', rotate: 10, side: 'right' },
  { theme: 'yellow', rotate: -15, side: 'left' },
  { theme: 'rosso', rotate: 12, side: 'right' },
  { theme: 'teal', rotate: -8, side: 'left' },
  { theme: 'rosso', rotate: 10, side: 'right' }
];

export default function BackgroundCarSketches({ sketchStyle = 'marker' }) {
  const leftSketches = SKETCH_STREAM.filter(item => item.side === 'left');
  const rightSketches = SKETCH_STREAM.filter(item => item.side === 'right');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      
      {/* LEFT MARGIN COLUMN: Cascades down the left gutter of the page */}
      <div className="absolute left-2 lg:left-4 xl:left-8 2xl:left-14 top-24 bottom-24 flex flex-col justify-between items-start opacity-85 sm:opacity-90">
        {leftSketches.map((sketch, idx) => (
          <div 
            key={`left-${idx}`}
            className="my-16 xl:my-20 transition-transform duration-500 hover:scale-110"
            style={{ 
              transform: `rotate(${sketch.rotate}deg)`,
              marginLeft: idx % 2 === 0 ? '0px' : '18px'
            }}
          >
            <SketchCar
              style={sketchStyle}
              theme={sketch.theme}
              width={175}
              height={75}
            />
          </div>
        ))}
      </div>

      {/* RIGHT MARGIN COLUMN: Cascades down the right gutter of the page */}
      <div className="absolute right-2 lg:right-4 xl:right-8 2xl:right-14 top-36 bottom-24 flex flex-col justify-between items-end opacity-85 sm:opacity-90">
        {rightSketches.map((sketch, idx) => (
          <div 
            key={`right-${idx}`}
            className="my-16 xl:my-20 transition-transform duration-500 hover:scale-110"
            style={{ 
              transform: `rotate(${sketch.rotate}deg)`,
              marginRight: idx % 2 === 0 ? '0px' : '18px'
            }}
          >
            <SketchCar
              style={sketchStyle}
              theme={sketch.theme}
              width={175}
              height={75}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
