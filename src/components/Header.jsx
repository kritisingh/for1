import React from 'react';
import { Trophy, Car } from 'lucide-react';
import F1Logo from './F1Logo';

export default function Header({ 
  viewMode, 
  setViewMode, 
  onJumpToTop
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#FDF5DF]/92 backdrop-blur-md border-b border-emerald-900/10 px-4 sm:px-8 py-3.5 select-none transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand F1 Logo */}
        <div 
          onClick={onJumpToTop}
          className="cursor-pointer hover:opacity-85 transition-transform hover:scale-102 flex items-center"
          title="Formula 1 - Jump to top"
        >
          <F1Logo className="h-6 sm:h-7 w-auto" />
        </div>

        {/* Standings View Switcher — Emerald / Soft Sage Theme */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-emerald-900/6 border border-emerald-900/12 text-xs font-medium">
          <button
            onClick={() => setViewMode('drivers')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'drivers'
                ? 'bg-emerald-950 text-white font-bold shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-900/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Drivers</span>
          </button>
          <button
            onClick={() => setViewMode('constructors')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'constructors'
                ? 'bg-emerald-950 text-white font-bold shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-emerald-900/5'
            }`}
          >
            <Car className="w-3.5 h-3.5 text-emerald-300" />
            <span>Constructors</span>
          </button>
        </div>

      </div>
    </header>
  );
}
