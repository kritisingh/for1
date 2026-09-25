import React from 'react';
import { ArrowUp, Flag } from 'lucide-react';
import RealCarThumbnail from './RealCarThumbnail';

export default function BedrockFooter({ onReturnToSurface, palette }) {
  const pal = palette || {
    navText: '#1E3A8A',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navBorder: 'rgba(30, 64, 175, 0.16)',
    navBg: 'rgba(30, 64, 175, 0.06)',
    accentColor: '#3B82F6'
  };

  return (
    <footer 
      className="relative py-24 px-4 text-center border-t bg-white/80 backdrop-blur-md z-10 select-none transition-colors"
      style={{ borderColor: pal.navBorder || 'rgba(30, 64, 175, 0.15)' }}
    >
      
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
      <div 
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold mb-4 shadow-2xs"
        style={{
          backgroundColor: pal.navBg || 'rgba(30, 64, 175, 0.06)',
          borderColor: pal.navBorder || 'rgba(30, 64, 175, 0.18)',
          color: pal.navText || '#1E3A8A'
        }}
      >
        <Flag className="w-3.5 h-3.5" style={{ color: pal.accentColor || '#3B82F6' }} />
        <span>13 MAY 1950 • SILVERSTONE • THE FIRST GRAND PRIX</span>
      </div>

      {/* Title in Editorial Serif */}
      <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-slate-900">
        You Have Reached <span className="italic" style={{ color: pal.navActiveBg || '#1D4ED8' }}>The Genesis</span>
      </h2>

      <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
        You've explored the complete tapestry of Grand Prix history—drifting back through seven decades to Giuseppe Farina winning in a supercharged straight-8 Alfetta around an old British airfield.
      </p>

      {/* Return to Top CTA */}
      <div className="mt-8">
        <button
          onClick={onReturnToSurface}
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide shadow-md hover:scale-105 transition-all cursor-pointer"
          style={{
            backgroundColor: pal.navActiveBg || '#1D4ED8',
            color: pal.navActiveText || '#FFFFFF'
          }}
        >
          <span>Return to Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Footer Archive Credits */}
      <div 
        className="mt-16 pt-8 border-t text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
        style={{ borderColor: pal.navBorder || 'rgba(30, 64, 175, 0.12)' }}
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">Formula 1</span>
          <span>•</span>
          <span>World Championship Archive</span>
        </div>
        <div className="font-medium text-slate-600">
          1950 – Present
        </div>
      </div>

    </footer>
  );
}
