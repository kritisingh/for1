import React from 'react';
import { Compass, Trophy, Car, Search, ArrowUp } from 'lucide-react';

export default function Header({ 
  currentYear, 
  currentEra, 
  viewMode, 
  setViewMode, 
  onJumpToYear,
  searchQuery,
  setSearchQuery,
  activeTheme = 'clean'
}) {
  const depthPercent = Math.round(((2025 - currentYear) / (2025 - 1950)) * 100);

  // Dynamic theme styling
  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  const headerBg = isDark 
    ? 'bg-[#0E131B]/90 border-slate-800 text-slate-100'
    : isEditorial 
      ? 'bg-[#F4F1EA]/95 border-stone-300 text-stone-900' 
      : 'bg-[#FAF8F5]/90 border-stone-200 text-stone-900';

  const inputBg = isDark 
    ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-400' 
    : isEditorial 
      ? 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400' 
      : 'bg-white border-stone-200 text-stone-900 placeholder-stone-400';

  const toggleContainerBg = isDark 
    ? 'bg-slate-900 border-slate-800' 
    : isEditorial 
      ? 'bg-stone-200 border-stone-300' 
      : 'bg-stone-100 border-stone-200';

  const activeBtnBg = isDark 
    ? 'bg-indigo-600 text-white' 
    : isEditorial 
      ? 'bg-stone-900 text-white' 
      : 'bg-rose-600 text-white';

  const inactiveBtnColor = isDark 
    ? 'text-slate-400 hover:text-white' 
    : 'text-stone-600 hover:text-stone-900';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-4 lg:px-8 py-3 transition-colors duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Depth Indicator */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDark ? 'bg-indigo-400' : isEditorial ? 'bg-stone-800' : 'bg-rose-500'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isDark ? 'bg-indigo-500' : isEditorial ? 'bg-stone-900' : 'bg-rose-600'
              }`}></span>
            </span>
            <span className={`font-bold text-lg tracking-tight ${
              isEditorial ? 'font-editorial italic text-2xl font-normal' : 'font-friendly'
            }`}>
              The F1 <span className={isDark ? 'text-indigo-400' : isEditorial ? 'text-stone-900 italic font-bold' : 'text-rose-600'}>Descent</span>
            </span>
          </div>

          <div className={`h-4 w-[1px] hidden sm:block ${isDark ? 'bg-slate-800' : 'bg-stone-300'}`}></div>

          {/* Depth Counter */}
          <div className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full border ${
            isDark 
              ? 'bg-slate-900 border-slate-800 text-slate-300' 
              : isEditorial
                ? 'bg-stone-200/80 border-stone-300 text-stone-800 font-serif'
                : 'bg-white border-stone-200 text-stone-700 font-medium'
          }`}>
            <Compass className="w-3.5 h-3.5 opacity-70" />
            <span>Depth:</span>
            <strong className={isDark ? 'text-indigo-400' : isEditorial ? 'text-stone-900' : 'text-rose-600'}>
              {currentYear}
            </strong>
            <span className="opacity-60">({depthPercent}%)</span>
          </div>

          {/* Current Era Pill */}
          <div className={`hidden lg:flex items-center text-xs px-3 py-1 rounded-full border ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800/80 text-slate-400' 
              : isEditorial
                ? 'bg-stone-200/50 border-stone-300/80 text-stone-700 font-serif italic'
                : 'bg-stone-100/70 border-stone-200 text-stone-600'
          }`}>
            <span>{currentEra || 'Modern Era'}</span>
          </div>
        </div>

        {/* Center: Search / Jump */}
        <div className="relative flex-1 max-w-xs sm:max-w-sm hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
          <input
            type="text"
            placeholder="Search driver, team, or year (e.g. Senna, 1998)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className={`w-full rounded-full pl-9 pr-4 py-1.5 text-xs border focus:outline-none transition-all ${inputBg}`}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100"
            >
              ✕
            </button>
          )}
        </div>

        {/* Global Standings Toggle */}
        <div className="flex items-center gap-2">
          <div className={`p-1 rounded-xl border flex items-center text-xs font-medium ${toggleContainerBg}`}>
            <button
              onClick={() => setViewMode('drivers')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'drivers' ? activeBtnBg + ' shadow-sm font-semibold' : inactiveBtnColor
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Drivers</span>
            </button>
            <button
              onClick={() => setViewMode('constructors')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'constructors' ? activeBtnBg + ' shadow-sm font-semibold' : inactiveBtnColor
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Constructors</span>
            </button>
          </div>

          {/* Quick jump to surface */}
          <button
            onClick={() => onJumpToYear(2025)}
            title="Return to 2025 (Surface)"
            className={`p-1.5 rounded-lg border transition-colors hidden sm:block ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' 
                : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
