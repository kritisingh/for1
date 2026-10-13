import React from 'react';
import { Trophy, Car } from 'lucide-react';
import F1Logo from './F1Logo';
import { SEASON_CARD_PALETTES } from '../data/themeColors';

export default function Header({ 
  viewMode, 
  setViewMode, 
  onJumpToTop,
  palette
}) {
  const activePal = palette || SEASON_CARD_PALETTES['amber-walnut-dark'];

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b px-4 sm:px-8 py-3 select-none transition-colors duration-300"
      style={{
        backgroundColor: activePal.headerBg || 'rgba(74, 65, 60, 0.96)',
        borderColor: activePal.navBorder || 'rgba(235, 239, 238, 0.25)'
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        {/* Brand F1 Logo */}
        <div 
          onClick={onJumpToTop}
          className="cursor-pointer hover:opacity-85 transition-transform hover:scale-102 flex items-center"
          title="Formula 1 - Jump to top"
        >
          <F1Logo className="h-6 sm:h-7 w-auto" />
        </div>

        {/* Right Controls: Standings View Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Standings View Switcher (Drivers vs Constructors) */}
          <div 
            className="flex items-center gap-1 p-1 rounded-xl border text-xs font-semibold font-body transition-colors"
            style={{
              backgroundColor: activePal.navBg || 'rgba(255, 255, 255, 0.12)',
              borderColor: activePal.navBorder || 'rgba(235, 239, 238, 0.25)'
            }}
          >
            <button
              onClick={() => setViewMode('drivers')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
              style={{
                backgroundColor: viewMode === 'drivers' ? (activePal.navActiveBg || '#BB6C43') : 'transparent',
                color: viewMode === 'drivers' ? (activePal.navActiveText || '#FFFFFF') : (activePal.navText || '#EBEFEE'),
                boxShadow: viewMode === 'drivers' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <Trophy className={`w-3.5 h-3.5 ${viewMode === 'drivers' ? 'text-amber-200' : 'opacity-70'}`} />
              <span>Drivers</span>
            </button>
            <button
              onClick={() => setViewMode('constructors')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
              style={{
                backgroundColor: viewMode === 'constructors' ? (activePal.navActiveBg || '#BB6C43') : 'transparent',
                color: viewMode === 'constructors' ? (activePal.navActiveText || '#FFFFFF') : (activePal.navText || '#EBEFEE'),
                boxShadow: viewMode === 'constructors' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <Car className={`w-3.5 h-3.5 ${viewMode === 'constructors' ? 'text-amber-200' : 'opacity-70'}`} />
              <span>Constructors</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
