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

export default function DecadeElevator({ currentYear, onJumpToYear, activeTheme = 'clean' }) {
  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  const containerBg = isDark
    ? 'bg-slate-900/90 border-slate-800 text-slate-200'
    : isEditorial
      ? 'bg-[#FAF8F5]/90 border-stone-300 text-stone-800'
      : 'bg-white/90 border-stone-200 text-stone-700 shadow-lg';

  const activeBtnClass = isDark
    ? 'bg-indigo-950/70 text-indigo-300 font-bold border border-indigo-700/60'
    : isEditorial
      ? 'bg-stone-200 text-stone-900 font-bold border border-stone-400 font-serif'
      : 'bg-rose-50 text-rose-700 font-bold border border-rose-200 shadow-xs';

  const pipActiveClass = isDark
    ? 'bg-indigo-400'
    : isEditorial
      ? 'bg-stone-900'
      : 'bg-rose-600';

  return (
    <aside className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2 select-none">
      
      <div className="text-[10px] tracking-widest opacity-40 uppercase rotate-90 origin-right translate-x-4 mb-8 font-medium">
        Decade Slider
      </div>

      <div className={`backdrop-blur-md border p-2 rounded-2xl flex flex-col gap-1 shadow-md transition-all ${containerBg}`}>
        {DECADES.map(d => {
          const decadeStart = Math.floor(d.year / 10) * 10;
          const decadeEnd = decadeStart + 9;
          const isActive = currentYear >= decadeStart && currentYear <= decadeEnd;

          return (
            <button
              key={d.label}
              onClick={() => onJumpToYear(d.year)}
              className={`group flex items-center justify-end gap-2 px-2.5 py-1.5 rounded-xl text-xs transition-all ${
                isActive
                  ? activeBtnClass
                  : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className="hidden group-hover:inline-block text-[10px] opacity-70 mr-1 whitespace-nowrap">
                {d.era}
              </span>
              
              <span className={isEditorial ? 'font-serif' : 'font-friendly'}>{d.label}</span>

              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? `${pipActiveClass} scale-125 ring-2 ring-current/20` : 'bg-current opacity-30'
                }`}
              />
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onJumpToYear(1950)}
        className={`mt-2 text-[10px] px-2.5 py-1 rounded-full border transition-all ${
          isDark 
            ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' 
            : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900 shadow-xs'
        }`}
      >
        Bedrock (1950) ↓
      </button>

    </aside>
  );
}
