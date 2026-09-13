import React from 'react';
import { ArrowDown, Flame, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function HeroSurface({ onStartDive, onJumpToYear }) {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden border-b border-[#222A36]">
      
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/20 via-[#101319] to-[#101319] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-glow" />

      {/* Surface Depth Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181D26] border border-[#2A3342] text-rose-300 text-xs font-medium mb-6 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-rose-400" />
        <span>Surface Level: 0m (Season 2025)</span>
      </div>

      {/* Main Title */}
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08]">
        The F1 <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400">Descent</span>
      </h1>

      <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
        A deep, curious dive through 76 seasons of Formula 1 history.
        Scroll down through time from today’s high-tech hybrids back to the first race at Silverstone in 1950.
      </p>

      {/* Stats Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl w-full mt-10">
        <div className="bg-[#161B24]/80 border border-[#252E3C] p-4 rounded-2xl shadow-xs text-center">
          <div className="font-display text-2xl sm:text-3xl font-bold text-white">76</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Seasons Explored</div>
        </div>
        <div className="bg-[#161B24]/80 border border-[#252E3C] p-4 rounded-2xl shadow-xs text-center">
          <div className="font-display text-2xl sm:text-3xl font-bold text-rose-400">1,125+</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Grands Prix</div>
        </div>
        <div className="bg-[#161B24]/80 border border-[#252E3C] p-4 rounded-2xl shadow-xs text-center">
          <div className="font-display text-2xl sm:text-3xl font-bold text-white">34</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">World Champions</div>
        </div>
        <div className="bg-[#161B24]/80 border border-[#252E3C] p-4 rounded-2xl shadow-xs text-center">
          <div className="font-display text-2xl sm:text-3xl font-bold text-amber-400">16</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Champion Teams</div>
        </div>
      </div>

      {/* Era Jump Shortcuts */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 mr-1 font-medium">Quick Teleport:</span>
        <button
          onClick={() => onJumpToYear(2021)}
          className="px-3.5 py-1.5 rounded-full bg-[#161B24] border border-[#27303E] text-slate-300 hover:text-white hover:border-rose-500/50 hover:bg-[#1C222E] transition-all flex items-center gap-1.5"
        >
          <Flame className="w-3.5 h-3.5 text-rose-400" />
          <span>2021 Title Drama</span>
        </button>
        <button
          onClick={() => onJumpToYear(2004)}
          className="px-3.5 py-1.5 rounded-full bg-[#161B24] border border-[#27303E] text-slate-300 hover:text-white hover:border-amber-500/50 hover:bg-[#1C222E] transition-all flex items-center gap-1.5"
        >
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          <span>2004 Peak V10 Apex</span>
        </button>
        <button
          onClick={() => onJumpToYear(1976)}
          className="px-3.5 py-1.5 rounded-full bg-[#161B24] border border-[#27303E] text-slate-300 hover:text-white hover:border-orange-500/50 hover:bg-[#1C222E] transition-all flex items-center gap-1.5"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-orange-400" />
          <span>1976 Hunt vs Lauda</span>
        </button>
        <button
          onClick={() => onJumpToYear(1950)}
          className="px-3.5 py-1.5 rounded-full bg-[#161B24] border border-[#27303E] text-slate-300 hover:text-white hover:border-slate-500 hover:bg-[#1C222E] transition-all"
        >
          <span>1950 First Grand Prix</span>
        </button>
      </div>

      {/* Dive Trigger */}
      <div className="mt-12 flex flex-col items-center">
        <button
          onClick={onStartDive}
          className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 transition-all hover:scale-105"
        >
          <span>Begin Descent</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
        <span className="text-xs text-slate-400 mt-3 font-medium opacity-80">
          Scroll down to explore season by season
        </span>
      </div>

    </section>
  );
}
