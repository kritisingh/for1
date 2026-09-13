import React from 'react';
import { Rocket, Flag } from 'lucide-react';

export default function BedrockFooter({ onReturnToSurface }) {
  return (
    <footer className="relative py-20 px-4 text-center border-t border-[#222A36] bg-[#101319] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/15 via-[#101319] to-[#101319] -z-10" />

      {/* Bedrock Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/30 border border-amber-600/40 text-amber-300 text-xs font-medium mb-6">
        <Flag className="w-3.5 h-3.5 text-amber-400" />
        <span>Maximum Depth Reached: 1950 (The Bedrock)</span>
      </div>

      <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        You Have Reached <span className="text-amber-400">Time-Zero</span>
      </h2>

      <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
        You just descended through 76 seasons of Formula 1 history—from modern ground-effect hybrids back to Giuseppe Farina winning on an RAF airfield in 1950.
      </p>

      {/* Return to Surface Action */}
      <div className="mt-10">
        <button
          onClick={onReturnToSurface}
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-rose-600/25 hover:scale-105 transition-all"
        >
          <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>Ascend to Surface (2025)</span>
        </button>
      </div>

      <div className="mt-16 pt-8 border-t border-[#1C222E] text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <span>The F1 Descent</span>
          <span>•</span>
          <span>Designed for curious racing geeks of all backgrounds</span>
        </div>
        <div>
          76 Grand Prix seasons (1950–2025)
        </div>
      </div>

    </footer>
  );
}
