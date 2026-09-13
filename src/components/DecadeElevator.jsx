import React from 'react';

const DECADES = [
  { label: '2020s', year: 2025, era: 'Ground Effect' },
  { label: '2010s', year: 2019, era: 'Turbo Hybrid' },
  { label: '2000s', year: 2009, era: 'V10 to V8' },
  { label: '1990s', year: 1999, era: 'High Rev V10' },
  { label: '1980s', year: 1989, era: 'Turbo Monsters' },
  { label: '1970s', year: 1979, era: 'Ground Effect' },
  { label: '1960s', year: 1969, era: 'Wings & DFV' },
  { label: '1950s', year: 1950, era: 'Pioneers' }
];

export default function DecadeElevator({ currentYear, onJumpToYear }) {
  return (
    <aside className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2 select-none">
      
      <div className="text-[10px] tracking-widest text-slate-500 uppercase rotate-90 origin-right translate-x-4 mb-8 font-medium">
        Decade Slider
      </div>

      <div className="bg-[#151A24]/90 backdrop-blur-md border border-[#232B39] p-2 rounded-2xl flex flex-col gap-1 shadow-lg">
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <button
              key={d.label}
              onClick={() => onJumpToYear(d.year)}
              className={`group flex items-center justify-end gap-2 px-2.5 py-1.5 rounded-xl text-xs font-display transition-all ${
                isActive
                  ? 'bg-rose-950/50 text-rose-300 font-bold border border-rose-800/50 shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-[#1C2330]'
              }`}
            >
              <span className="hidden group-hover:inline-block text-[10px] font-normal text-slate-400 mr-1 whitespace-nowrap">
                {d.era}
              </span>
              
              <span>{d.label}</span>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-rose-500 scale-125 ring-2 ring-rose-500/30'
                    : 'bg-slate-600 group-hover:bg-slate-400'
                }`}
              />
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onJumpToYear(1950)}
        className="mt-2 text-[10px] text-slate-400 hover:text-white px-2.5 py-1 rounded-full bg-[#151A24] border border-[#232B39] transition-colors"
      >
        Bedrock (1950) ↓
      </button>

    </aside>
  );
}
