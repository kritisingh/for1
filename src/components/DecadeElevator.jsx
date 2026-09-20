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

export default function DecadeElevator({ currentYear, onJumpToYear }) {
  return (
    <aside className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2 select-none">
      
      <div className="text-[9px] tracking-widest text-emerald-800/60 uppercase rotate-90 origin-right translate-x-3 mb-6 font-bold">
        Decades
      </div>

      <div className="bg-white/85 backdrop-blur-md border border-emerald-900/12 p-2 rounded-2xl flex flex-col gap-1 shadow-[0_8px_30px_rgba(20,40,24,0.06)]">
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <button
              key={d.label}
              onClick={() => onJumpToYear(d.year)}
              className={`group flex items-center justify-end gap-2 px-3 py-1 rounded-xl text-xs font-editorial transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-900 text-white font-bold shadow-xs'
                  : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-900/8'
              }`}
              title={`${d.label} • ${d.era}`}
            >
              <span className="hidden group-hover:inline-block text-[10px] font-sans font-medium text-emerald-800/70 mr-1 whitespace-nowrap">
                {d.era}
              </span>

              <span className="font-semibold">{d.label}</span>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-emerald-400 scale-125'
                    : 'bg-emerald-900/20 group-hover:bg-emerald-900/40'
                }`}
              />
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onJumpToYear(1950)}
        className="mt-1 text-[10px] text-emerald-900 hover:text-emerald-950 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-900/15 shadow-2xs font-semibold transition-all hover:bg-emerald-900/10 cursor-pointer"
      >
        Genesis (1950) ↓
      </button>

    </aside>
  );
}
