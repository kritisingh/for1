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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Depth Telemetry */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="font-racing font-bold text-lg tracking-wider text-white">
              F1 <span className="text-red-500">DESCENT</span>
            </span>
          </div>

          <div className="h-4 w-[1px] bg-neutral-800 hidden sm:block"></div>

          {/* Depth Counter */}
          <div className="flex items-center gap-2 text-xs font-telemetry bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-300">
            <Compass className="w-3.5 h-3.5 text-red-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>DEPTH:</span>
            <span className="text-red-400 font-bold">{currentYear}</span>
            <span className="text-neutral-500">({depthPercent}%)</span>
          </div>

          {/* Current Era Pill (desktop) */}
          <div className="hidden lg:flex items-center text-xs font-medium text-neutral-400 bg-neutral-900/60 border border-neutral-800/60 px-3 py-1 rounded-full">
            <span className="text-neutral-200">{currentEra || 'Modern Era'}</span>
          </div>
        </div>

        {/* Center: Search / Jump */}
        <div className="relative flex-1 max-w-xs sm:max-w-sm hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search driver, team, or year (e.g. Senna, 1998)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900/90 border border-neutral-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/50 transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-300"
            >
              ✕
            </button>
          )}
        </div>

        {/* Global Standings Toggle */}
        <div className="flex items-center gap-2">
          <div className="bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 flex items-center text-xs font-medium">
            <button
              onClick={() => setViewMode('drivers')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'drivers'
                  ? 'bg-red-600 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Drivers</span>
            </button>
            <button
              onClick={() => setViewMode('constructors')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'constructors'
                  ? 'bg-red-600 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Constructors</span>
            </button>
          </div>

          {/* Quick jump to surface button */}
          <button
            onClick={() => onJumpToYear(2025)}
            title="Return to 2025 (Surface)"
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors hidden sm:block"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
