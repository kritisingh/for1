import React from 'react';
import { Compass, Trophy, Car, Search, ArrowUp } from 'lucide-react';

export default function Header({ 
  currentYear, 
  currentEra, 
  viewMode, 
  setViewMode, 
  onJumpToYear,
  searchQuery,
  setSearchQuery
}) {
  const depthPercent = Math.round(((2025 - currentYear) / (2025 - 1950)) * 100);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#101319]/90 border-b border-[#222A36] px-4 lg:px-8 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Depth Indicator */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              The F1 <span className="text-rose-500">Descent</span>
            </span>
          </div>

          <div className="h-4 w-[1px] bg-[#2A3342] hidden sm:block"></div>

          {/* Depth Counter */}
          <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#181D26] border border-[#27303E] text-slate-300 font-medium">
            <Compass className="w-3.5 h-3.5 text-rose-400 opacity-80" />
            <span className="text-slate-400">Depth:</span>
            <strong className="text-white font-bold">{currentYear}</strong>
            <span className="text-slate-500 text-[11px]">({depthPercent}%)</span>
          </div>

          {/* Current Era Pill */}
          <div className="hidden lg:flex items-center text-xs px-3 py-1 rounded-full bg-[#161B23] border border-[#222A36] text-slate-400">
            <span>{currentEra || 'Modern Era'}</span>
          </div>
        </div>

        {/* Center: Search / Jump */}
        <div className="relative flex-1 max-w-xs sm:max-w-sm hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search driver, team, or year (e.g. Senna, 1998)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#161B24] border border-[#27303E] rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500/60 focus:ring-2 focus:ring-rose-500/20 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Global Standings Toggle */}
        <div className="flex items-center gap-2">
          <div className="bg-[#161B24] p-1 rounded-xl border border-[#262E3B] flex items-center text-xs font-medium">
            <button
              onClick={() => setViewMode('drivers')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'drivers'
                  ? 'bg-rose-500 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Drivers</span>
            </button>
            <button
              onClick={() => setViewMode('constructors')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'constructors'
                  ? 'bg-rose-500 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
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
            className="p-1.5 rounded-lg bg-[#161B24] border border-[#262E3B] text-slate-400 hover:text-white hover:border-slate-600 transition-colors hidden sm:block"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
