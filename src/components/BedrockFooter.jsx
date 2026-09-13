import React from 'react';
import { Rocket, Flag, Trophy, ShieldCheck, Heart } from 'lucide-react';

export default function BedrockFooter({ onReturnToSurface }) {
  return (
    <footer className="relative py-20 px-4 text-center border-t border-neutral-800 bg-neutral-950 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/20 via-neutral-950 to-neutral-950 -z-10" />

      {/* Bedrock Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-600/40 text-amber-400 text-xs font-telemetry mb-6">
        <Flag className="w-3.5 h-3.5 text-amber-400" />
        <span>MAXIMUM DEPTH REACHED: 1950 (THE BEDROCK)</span>
      </div>

      <h2 className="font-racing text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
        You Have Reached <span className="text-amber-400">Time-Zero</span>
      </h2>

      <p className="mt-4 text-neutral-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
        You just descended through 76 seasons of Formula 1 history—from modern ground-effect hybrids back to Giuseppe Farina winning on an RAF bomber base in Northamptonshire.
      </p>

      {/* Return to Surface Action */}
      <div className="mt-10">
        <button
          onClick={onReturnToSurface}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-racing font-bold text-base uppercase tracking-wider shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
        >
          <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>Ascend to Surface (2025)</span>
        </button>
      </div>

      <div className="mt-16 pt-8 border-t border-neutral-900 text-xs text-neutral-500 font-telemetry flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <span>The F1 Descent</span>
          <span>•</span>
          <span>Designed for curious 2026 racing geeks</span>
        </div>
        <div>
          Data verified across 76 Grand Prix seasons (1950–2025)
        </div>
      </div>

    </footer>
  );
}
