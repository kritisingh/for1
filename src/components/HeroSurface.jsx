import React from 'react';
import { ArrowDown, Flame, ShieldAlert, Cpu, Sparkles, Compass } from 'lucide-react';

export default function HeroSurface({ onStartDive, onJumpToYear, activeTheme = 'clean' }) {
  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  const badgeClass = isDark
    ? 'bg-slate-900/80 border-slate-700 text-indigo-300'
    : isEditorial
      ? 'bg-stone-200/80 border-stone-300 text-stone-800 font-serif italic'
      : 'bg-rose-50 border-rose-200 text-rose-700 font-medium';

  const statTileClass = isDark
    ? 'bg-slate-900/60 border-slate-800 text-slate-100'
    : isEditorial
      ? 'bg-[#FAF8F5] border-stone-300 text-stone-900'
      : 'bg-white border-stone-200/80 text-stone-900 shadow-xs';

  const shortcutClass = isDark
    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50'
    : isEditorial
      ? 'bg-[#FAF8F5] border-stone-300 text-stone-700 hover:text-stone-900 hover:border-stone-500 font-serif'
      : 'bg-white border-stone-200 text-stone-700 hover:text-stone-900 hover:border-rose-400 hover:shadow-xs';

  const ctaClass = isDark
    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
    : isEditorial
      ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-md'
      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20';

  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden border-b border-inherit">
      
      {/* Surface Depth Pill */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border mb-6 transition-all ${badgeClass}`}>
        <Sparkles className="w-3.5 h-3.5 opacity-80" />
        <span>Surface Level: 0m (Season 2025)</span>
      </div>

      {/* Main Title */}
      <h1 className={`text-5xl sm:text-7xl md:text-8xl tracking-tight max-w-5xl leading-[1.05] ${
        isEditorial 
          ? 'font-editorial italic font-normal text-stone-950' 
          : 'font-friendly font-extrabold text-inherit'
      }`}>
        The F1 <span className={
          isDark 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400' 
            : isEditorial 
              ? 'font-bold not-italic underline decoration-stone-400 decoration-wavy' 
              : 'text-rose-600'
        }>
          Descent
        </span>
      </h1>

      <p className={`mt-6 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed opacity-80 ${
        isEditorial ? 'font-serif text-stone-700' : 'font-friendly'
      }`}>
        A gentle, curious journey through 76 years of Grand Prix racing.
        Scroll down through time from today’s cutting-edge cars all the way back to the very first race in 1950.
      </p>

      {/* Quick stats ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full mt-10">
        <div className={`border p-3.5 rounded-2xl transition-all ${statTileClass}`}>
          <div className="text-2xl font-bold font-friendly">76</div>
          <div className="text-xs opacity-60 font-medium mt-0.5">Seasons Explored</div>
        </div>
        <div className={`border p-3.5 rounded-2xl transition-all ${statTileClass}`}>
          <div className={`text-2xl font-bold font-friendly ${isDark ? 'text-indigo-400' : 'text-rose-600'}`}>
            1,125+
          </div>
          <div className="text-xs opacity-60 font-medium mt-0.5">Grands Prix</div>
        </div>
        <div className={`border p-3.5 rounded-2xl transition-all ${statTileClass}`}>
          <div className="text-2xl font-bold font-friendly">34</div>
          <div className="text-xs opacity-60 font-medium mt-0.5">World Champions</div>
        </div>
        <div className={`border p-3.5 rounded-2xl transition-all ${statTileClass}`}>
          <div className="text-2xl font-bold font-friendly text-amber-600">16</div>
          <div className="text-xs opacity-60 font-medium mt-0.5">Title Teams</div>
        </div>
      </div>

      {/* Era Jump Shortcuts */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="opacity-50 mr-1">Jump to Era:</span>
        <button
          onClick={() => onJumpToYear(2021)}
          className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${shortcutClass}`}
        >
          <Flame className="w-3 h-3 text-rose-500" />
          <span>2021 Abu Dhabi Drama</span>
        </button>
        <button
          onClick={() => onJumpToYear(2004)}
          className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${shortcutClass}`}
        >
          <Cpu className="w-3 h-3 text-amber-500" />
          <span>2004 Peak V10 Apex</span>
        </button>
        <button
          onClick={() => onJumpToYear(1976)}
          className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${shortcutClass}`}
        >
          <ShieldAlert className="w-3 h-3 text-orange-500" />
          <span>1976 Hunt vs Lauda</span>
        </button>
        <button
          onClick={() => onJumpToYear(1950)}
          className={`px-3 py-1.5 rounded-full border transition-all ${shortcutClass}`}
        >
          <span>1950 First Grand Prix</span>
        </button>
      </div>

      {/* Dive Trigger */}
      <div className="mt-12 flex flex-col items-center">
        <button
          onClick={onStartDive}
          className={`group flex items-center gap-2.5 px-8 py-3.5 rounded-full font-friendly font-bold text-sm tracking-wide transition-all hover:scale-105 ${ctaClass}`}
        >
          <span>Begin Scrolling Down</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
        <span className="text-xs opacity-50 mt-3">
          Scroll smoothly to descend through time
        </span>
      </div>

    </section>
  );
}
