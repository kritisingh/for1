import React from 'react';
import { Rocket, Flag } from 'lucide-react';

export default function BedrockFooter({ onReturnToSurface, activeTheme = 'clean' }) {
  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  const badgeClass = isDark
    ? 'bg-amber-950/40 border-amber-600/40 text-amber-400'
    : isEditorial
      ? 'bg-stone-200 border-stone-300 text-stone-800 font-serif'
      : 'bg-amber-50 border-amber-200 text-amber-700';

  const ctaClass = isDark
    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
    : isEditorial
      ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-md'
      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20';

  return (
    <footer className="relative py-20 px-4 text-center border-t border-inherit overflow-hidden">
      
      {/* Bedrock Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs border mb-6 ${badgeClass}`}>
        <Flag className="w-3.5 h-3.5 opacity-80" />
        <span>Maximum Depth Reached: 1950 (The Bedrock)</span>
      </div>

      <h2 className={`text-4xl sm:text-5xl tracking-tight text-inherit ${
        isEditorial ? 'font-editorial italic font-normal text-stone-950 text-5xl sm:text-6xl' : 'font-friendly font-extrabold'
      }`}>
        You Have Reached <span className={isDark ? 'text-amber-400' : isEditorial ? 'underline decoration-stone-400' : 'text-rose-600'}>Time-Zero</span>
      </h2>

      <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed opacity-80 font-normal ${
        isEditorial ? 'font-serif text-stone-700' : ''
      }`}>
        You just descended through 76 seasons of Formula 1 history—from modern hybrid aerodynamics all the way back to Giuseppe Farina winning on an RAF airfield in 1950.
      </p>

      {/* Return to Surface Action */}
      <div className="mt-10">
        <button
          onClick={onReturnToSurface}
          className={`group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-friendly font-bold text-sm tracking-wide transition-all hover:scale-105 ${ctaClass}`}
        >
          <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>Ascend to Surface (2025)</span>
        </button>
      </div>

      <div className="mt-16 pt-8 border-t border-inherit opacity-60 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
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
