import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Car, ChevronDown, Check, Palette } from 'lucide-react';
import F1Logo from './F1Logo';
import { SEASON_CARD_PALETTES, PALETTE_GROUPS } from '../data/themeColors';

export default function Header({ 
  viewMode, 
  setViewMode, 
  onJumpToTop,
  palette,
  currentPaletteId,
  onSelectPalette
}) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPaletteOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activePal = palette || SEASON_CARD_PALETTES['oxford-midnight-bg'];

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b px-4 sm:px-8 py-3 select-none transition-colors duration-300"
      style={{
        backgroundColor: activePal.headerBg || 'rgba(255, 255, 255, 0.94)',
        borderColor: activePal.navBorder || 'rgba(30, 64, 175, 0.15)'
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

        {/* Right Controls: Palette Switcher & View Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Palette Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-2xs hover:scale-102"
              style={{
                backgroundColor: activePal.navBg || 'rgba(30, 64, 175, 0.08)',
                borderColor: activePal.navBorder || 'rgba(30, 64, 175, 0.20)',
                color: activePal.navText || '#1E3A8A'
              }}
              title="Change Royal Blue & White Palette"
            >
              <Palette className="w-3.5 h-3.5 opacity-80" />
              <span className="flex items-center">
                <span 
                  className="w-2.5 h-2.5 rounded-full border border-black/15 shadow-2xs" 
                  style={{ backgroundColor: activePal.primaryDot || activePal.bg }} 
                />
                <span 
                  className="w-2.5 h-2.5 rounded-full border border-black/15 shadow-2xs -ml-1" 
                  style={{ backgroundColor: activePal.secondaryDot || activePal.titleColor }} 
                />
              </span>
              <span className="hidden sm:inline font-medium">{activePal.name}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPaletteOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isPaletteOpen && (
              <div 
                className="absolute right-0 mt-2 w-72 sm:w-84 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/95 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Choose Palette</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Royal Blue & White
                  </span>
                </div>

                <div className="max-h-[70vh] overflow-y-auto py-1">
                  {PALETTE_GROUPS.map((group, gIdx) => (
                    <div key={group.groupName} className={gIdx > 0 ? 'mt-2 pt-2 border-t border-slate-100' : ''}>
                      <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {group.groupName}
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        {group.palettes.map(palId => {
                          const opt = SEASON_CARD_PALETTES[palId];
                          if (!opt) return null;
                          const isSelected = currentPaletteId === palId;
                          return (
                            <button
                              key={palId}
                              onClick={() => {
                                onSelectPalette(palId);
                                setIsPaletteOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-700 text-white shadow-xs font-semibold'
                                  : 'hover:bg-slate-100 text-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-base shrink-0">{opt.emoji}</span>
                                <div className="min-w-0">
                                  <div className="text-xs truncate flex items-center gap-1.5">
                                    <span>{opt.name}</span>
                                    {opt.badge && (
                                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-medium ${isSelected ? 'bg-white/25 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                                        {opt.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div className={`text-[10px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                    {opt.subname || opt.tag}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <div className="flex items-center">
                                  <span 
                                    className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs" 
                                    style={{ backgroundColor: opt.bg }} 
                                  />
                                  <span 
                                    className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs -ml-1.5" 
                                    style={{ backgroundColor: opt.titleColor }} 
                                  />
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Standings View Switcher (Drivers vs Constructors) */}
          <div 
            className="flex items-center gap-1 p-1 rounded-xl border text-xs font-medium transition-colors"
            style={{
              backgroundColor: activePal.navBg || 'rgba(30, 64, 175, 0.08)',
              borderColor: activePal.navBorder || 'rgba(30, 64, 175, 0.16)'
            }}
          >
            <button
              onClick={() => setViewMode('drivers')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
              style={{
                backgroundColor: viewMode === 'drivers' ? (activePal.navActiveBg || '#1D4ED8') : 'transparent',
                color: viewMode === 'drivers' ? (activePal.navActiveText || '#FFFFFF') : (activePal.navText || '#1E3A8A'),
                boxShadow: viewMode === 'drivers' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <Trophy className={`w-3.5 h-3.5 ${viewMode === 'drivers' ? 'text-amber-300' : 'opacity-70'}`} />
              <span>Drivers</span>
            </button>
            <button
              onClick={() => setViewMode('constructors')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
              style={{
                backgroundColor: viewMode === 'constructors' ? (activePal.navActiveBg || '#1D4ED8') : 'transparent',
                color: viewMode === 'constructors' ? (activePal.navActiveText || '#FFFFFF') : (activePal.navText || '#1E3A8A'),
                boxShadow: viewMode === 'constructors' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <Car className={`w-3.5 h-3.5 ${viewMode === 'constructors' ? 'text-blue-200' : 'opacity-70'}`} />
              <span>Constructors</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
