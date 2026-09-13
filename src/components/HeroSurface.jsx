import React from 'react';
import { ArrowDown, Flame, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function HeroSurface({ onStartDive, onJumpToYear }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden border-b border-neutral-800/80">
      
      {/* Ambient background glow & grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-neutral-950 to-neutral-950 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      {/* Surface Depth Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-telemetry mb-6 animate-radar">
        <Sparkles className="w-3.5 h-3.5 text-red-400" />
        <span>SURFACE LEVEL: 0 METERS (YEAR 2025)</span>
      </div>

      {/* Main Title */}
      <h1 className="font-racing text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase text-white max-w-5xl leading-[1.05]">
        THE F1 <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-amber-500">DESCENT</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
        A deep dive through 76 seasons of Formula 1 history. 
        Scroll down through time from the latest 2025 championship into the deep bedrock of 1950.
      </p>

      {/* Quick stats ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full mt-10">
        <div className="bg-neutral-900/70 border border-neutral-800/80 p-3 rounded-xl">
          <div className="font-telemetry text-2xl font-bold text-white">76</div>
          <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Seasons Explored</div>
        </div>
        <div className="bg-neutral-900/70 border border-neutral-800/80 p-3 rounded-xl">
          <div className="font-telemetry text-2xl font-bold text-red-400">1,125+</div>
          <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Grands Prix</div>
        </div>
        <div className="bg-neutral-900/70 border border-neutral-800/80 p-3 rounded-xl">
          <div className="font-telemetry text-2xl font-bold text-white">34</div>
          <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mt-0.5">World Champions</div>
        </div>
        <div className="bg-neutral-900/70 border border-neutral-800/80 p-3 rounded-xl">
          <div className="font-telemetry text-2xl font-bold text-amber-400">16</div>
          <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Title Constructors</div>
        </div>
      </div>

      {/* Era Jump Shortcuts */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-telemetry">
        <span className="text-neutral-500 mr-1">Fast Teleport:</span>
        <button
          onClick={() => onJumpToYear(2021)}
          className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-neutral-800/60 transition-all flex items-center gap-1.5"
        >
          <Flame className="w-3 h-3 text-red-500" />
          <span>2021 Abu Dhabi Drama</span>
        </button>
        <button
          onClick={() => onJumpToYear(2004)}
          className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-neutral-800/60 transition-all flex items-center gap-1.5"
        >
          <Cpu className="w-3 h-3 text-amber-400" />
          <span>2004 Peak V10 Apex</span>
        </button>
        <button
          onClick={() => onJumpToYear(1976)}
          className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-neutral-800/60 transition-all flex items-center gap-1.5"
        >
          <ShieldAlert className="w-3 h-3 text-orange-400" />
          <span>1976 Hunt vs Lauda</span>
        </button>
        <button
          onClick={() => onJumpToYear(1950)}
          className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-neutral-800/60 transition-all"
        >
          <span>1950 First Grand Prix</span>
        </button>
      </div>

      {/* Dive Trigger */}
      <div className="mt-12 flex flex-col items-center">
        <button
          onClick={onStartDive}
          className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-racing font-bold text-base uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:scale-105"
        >
          <span>Begin Descent</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
        <span className="text-[11px] font-telemetry text-neutral-500 mt-3 animate-pulse">
          Scroll down to plunge into 2025
        </span>
      </div>

    </section>
  );
}
