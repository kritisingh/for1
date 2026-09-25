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
  const pal = palette || {
    navText: '#1E3A8A',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navBorder: 'rgba(30, 64, 175, 0.16)',
    accentColor: '#3B82F6'
  };

  return (
    <aside className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2 select-none">
      
      <div 
        className="text-[9px] tracking-widest uppercase rotate-90 origin-right translate-x-3 mb-6 font-bold"
        style={{ 
          color: pal.pageBg === '#FFFFFF' ? (pal.navText || '#1E3A8A') : '#FFFFFF', 
          opacity: pal.pageBg === '#FFFFFF' ? 0.7 : 0.9 
        }}
      >
        Decades
      </div>

      <div 
        className="bg-white/90 backdrop-blur-md border p-2 rounded-2xl flex flex-col gap-1 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-colors"
        style={{ borderColor: pal.navBorder || 'rgba(30, 64, 175, 0.16)' }}
      >
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <button
              key={d.label}
              onClick={() => onJumpToYear(d.year)}
              className="group flex items-center justify-end gap-2 px-3 py-1 rounded-xl text-xs font-editorial transition-all cursor-pointer"
              style={{
                backgroundColor: isActive ? (pal.navActiveBg || '#1D4ED8') : 'transparent',
                color: isActive ? (pal.navActiveText || '#FFFFFF') : (pal.navText || '#1E3A8A'),
                fontWeight: isActive ? '700' : '500',
                boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.12)' : 'none'
              }}
              title={`${d.label} • ${d.era}`}
            >
              <span 
                className="hidden group-hover:inline-block text-[10px] font-sans font-medium mr-1 whitespace-nowrap opacity-75"
                style={{ color: isActive ? pal.navActiveText : pal.navText }}
              >
                {d.era}
              </span>

              <span className="font-semibold">{d.label}</span>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? 'scale-125' : 'opacity-40 group-hover:opacity-75'
                }`}
                style={{
                  backgroundColor: isActive ? (pal.accentColor || '#60A5FA') : (pal.navText || '#1E3A8A')
                }}
              />
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onJumpToYear(1950)}
        className="mt-1 text-[10px] px-3 py-1.5 rounded-full bg-white/95 border shadow-2xs font-semibold transition-all hover:scale-102 cursor-pointer"
        style={{
          borderColor: pal.navBorder || 'rgba(30, 64, 175, 0.16)',
          color: pal.navText || '#1E3A8A'
        }}
      >
        Genesis (1950) ↓
      </button>

    </aside>
  );
}
