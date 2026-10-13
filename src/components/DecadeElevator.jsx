import React from 'react';

const DECADES = [
  { label: '2020s', year: 2025, era: 'Ground Effect' },
  { label: '2010s', year: 2019, era: 'Turbo-Hybrid' },
  { label: '2000s', year: 2009, era: 'V8 Screamers' },
  { label: '1990s', year: 1999, era: 'V10 Apex' },
  { label: '1980s', year: 1989, era: '1,400hp Turbos' },
  { label: '1970s', year: 1979, era: 'Wings & DFV' },
  { label: '1960s', year: 1969, era: 'Cigar Cars' },
  { label: '1950s', year: 1950, era: 'Silverstone Genesis' }
];

export default function DecadeElevator({ currentYear, onJumpToYear, palette }) {
  const pal = palette || {};
  const activeBg = pal.accentColor || '#BB6C43';
  const textMuted = pal.subtextColor || '#CCB499';

  return (
    <aside className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end select-none font-body">
      
      {/* Telemetry Flight Rail Capsule */}
      <div 
        className="w-24 p-1.5 rounded-2xl border backdrop-blur-xl shadow-[0_16px_36px_-6px_rgba(0,0,0,0.40),0_2px_8px_rgba(0,0,0,0.15)] flex flex-col gap-0.5 transition-all"
        style={{
          backgroundColor: 'rgba(38, 32, 28, 0.90)',
          borderColor: 'rgba(235, 239, 238, 0.14)'
        }}
      >
        {/* Rail Header */}
        <div 
          className="px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-center border-b mb-0.5"
          style={{
            borderColor: 'rgba(235, 239, 238, 0.10)',
            color: textMuted
          }}
        >
          Decades
        </div>

        {/* Decade Buttons */}
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <div key={d.label} className="relative group w-full">
              
              {/* Floating Tooltip to the Left (Zero layout shift on hover) */}
              <div 
                className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg border text-[11px] font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-150 backdrop-blur-md shadow-md z-50 flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(38, 32, 28, 0.95)',
                  borderColor: 'rgba(235, 239, 238, 0.18)',
                  color: '#EBEFEE'
                }}
              >
                <span className="font-bold" style={{ color: activeBg }}>{d.label}</span>
                <span className="opacity-40">•</span>
                <span>{d.era}</span>
              </div>

              {/* The Button */}
              <button
                onClick={() => onJumpToYear(d.year)}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer"
                style={{
                  backgroundColor: isActive ? activeBg : 'transparent',
                  color: isActive ? '#FFFFFF' : '#EBEFEE',
                  opacity: isActive ? 1 : 0.72
                }}
                title={`${d.label} • ${d.era}`}
              >
                <span className={`text-[11px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {d.label}
                </span>

                <span 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'scale-125 bg-white' : 'opacity-40 group-hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? '#FFFFFF' : textMuted
                  }}
                />
              </button>
            </div>
          );
        })}

        {/* Genesis (1950) Anchor */}
        <div className="pt-1 border-t mt-0.5" style={{ borderColor: 'rgba(235, 239, 238, 0.10)' }}>
          <button
            onClick={() => onJumpToYear(1950)}
            className="w-full flex items-center justify-center gap-1 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-white/10 cursor-pointer"
            style={{
              color: textMuted
            }}
            title="Jump to the 1950 Silverstone Genesis"
          >
            <span>1950</span>
            <span>↓</span>
          </button>
        </div>

      </div>

    </aside>
  );
}
