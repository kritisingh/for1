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
      
      {/* Elevator title */}
      <div className="text-[10px] font-telemetry tracking-widest text-neutral-500 uppercase rotate-90 origin-right translate-x-4 mb-8">
        Time Elevator
      </div>

      <div className="bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 p-2 rounded-2xl flex flex-col gap-1 shadow-2xl">
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <button
              key={d.label}
              onClick={() => onJumpToYear(d.year)}
              className={`group flex items-center justify-end gap-2 px-2 py-1.5 rounded-lg text-xs font-telemetry transition-all ${
                isActive
                  ? 'bg-red-950/60 text-red-400 font-bold border border-red-800/60 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900/80'
              }`}
            >
              {/* Tooltip on hover */}
              <span className="hidden group-hover:inline-block text-[10px] font-normal text-neutral-400 mr-1 whitespace-nowrap">
                {d.era}
              </span>
              
              <span>{d.label}</span>

              {/* Status Indicator Pip */}
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-red-500 scale-125 ring-2 ring-red-500/40'
                    : 'bg-neutral-700 group-hover:bg-neutral-400'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Quick Jump to Bedrock Button */}
      <button
        onClick={() => onJumpToYear(1950)}
        className="mt-2 text-[10px] font-telemetry text-neutral-500 hover:text-neutral-300 px-2 py-1 rounded bg-neutral-900/60 border border-neutral-800/60 transition-colors"
      >
        Bedrock (1950) ↓
      </button>

    </aside>
  );
}
