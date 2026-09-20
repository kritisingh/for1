import React from 'react';
import { ArrowUp, Flag } from 'lucide-react';
import RealCarThumbnail from './RealCarThumbnail';

export default function BedrockFooter({ onReturnToSurface }) {
  return (
    <footer className="relative py-24 px-4 text-center border-t border-emerald-900/12 bg-white/75 backdrop-blur-md z-10 select-none">
      
      {/* 1950 Genesis Real Car Thumbnail */}
      <div className="mb-6 flex justify-center">
        <RealCarThumbnail
          year={1950}
          chassisName="Alfa Romeo 158 Alfetta"
          teamName="Alfa Romeo"
          size="md"
          showLabel={true}
        />
      </div>

      {/* 1950 Silverstone Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-900/12 text-emerald-900 text-xs font-semibold mb-4 shadow-2xs">
        <Flag className="w-3.5 h-3.5 text-emerald-700" />
        <span>13 MAY 1950 • SILVERSTONE • THE FIRST GRAND PRIX</span>
      </div>

      {/* Title in Editorial Serif */}
      <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-emerald-950">
        You Have Reached <span className="italic text-emerald-800">The Genesis</span>
      </h2>

      <p className="mt-4 text-[#384F3D] max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
        You've explored the complete tapestry of Grand Prix history—drifting back through seven decades to Giuseppe Farina winning in a supercharged straight-8 Alfetta around an old British airfield.
      </p>

      {/* Return to Top CTA */}
      <div className="mt-8">
        <button
          onClick={onReturnToSurface}
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-950 text-white font-medium text-sm tracking-wide shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Footer Archive Credits */}
      <div className="mt-16 pt-8 border-t border-amber-900/10 text-xs text-amber-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-900">the Formula1</span>
          <span>•</span>
          <span>Grand Prix Archive</span>
        </div>
        <div className="text-amber-900/70 font-medium">
          1950 – Present
        </div>
      </div>

    </footer>
  );
}
