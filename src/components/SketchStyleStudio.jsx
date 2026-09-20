import React from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { MarkerDoodleCar, RisographComicCar, BlueprintSketchCar, ChibiMiniatureCar } from './SketchStyles';

export const SKETCH_OPTIONS = [
  {
    id: 'marker',
    name: 'Whimsical Marker Doodle',
    tagline: 'The Pudding / Notebook Felt-Pen Style',
    description: 'Casual, wobbly hand-drawn felt pen contours with charming little exhaust puffs and soft pastel fills. Warm and playful.',
    badge: 'Popular',
    component: (theme) => <MarkerDoodleCar theme={theme} width={190} height={80} />
  },
  {
    id: 'risograph',
    name: 'Risograph Indie Comic',
    tagline: 'Tintin / New Yorker Ligne Claire',
    description: 'Two-tone print aesthetic where soft color washes are artistically offset from crisp black editorial ink lines with delicate crosshatching.',
    badge: 'Editorial Chic',
    component: (theme) => <RisographComicCar theme={theme} width={190} height={80} />
  },
  {
    id: 'blueprint',
    name: 'Architectural Blueprint',
    tagline: 'Design Studio / Drafting Wireframe',
    description: 'Delicate, ultra-fine technical drafting lines with geometric construction markings, wheelbase dimensions, and aerodynamic flow lines.',
    badge: 'Minimalist',
    component: (theme) => <BlueprintSketchCar theme={theme} width={190} height={80} />
  },
  {
    id: 'chibi',
    name: 'Chibi Micro-Machine',
    tagline: 'Cute Miniature / Toy Hot-Wheels',
    description: 'Delightful condensed cartoon proportions with chubby slick tires, bubbly cockpit, and a shiny oversized driver helmet.',
    badge: 'Cute & Playful',
    component: (theme) => <ChibiMiniatureCar theme={theme} width={180} height={80} />
  }
];

export default function SketchStyleStudio({ currentStyle, onSelectStyle }) {
  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4 relative z-20">
      <div className="bg-stone-50/90 border border-stone-200/90 rounded-[2rem] p-6 sm:p-8 shadow-xs">
        
        {/* Header with Title & Instructions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
              <Palette className="w-3.5 h-3.5" />
              <span>Interactive Sketch Studio</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Compare 4 F1 Car Sketch Styles
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Click any style below to preview it and instantly transform all background sketches across the page.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Active: <strong className="text-stone-900 capitalize">{currentStyle}</strong></span>
          </div>
        </div>

        {/* 4 Interactive Sketch Style Cards (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {SKETCH_OPTIONS.map((opt) => {
            const isSelected = currentStyle === opt.id;

            return (
              <div
                key={opt.id}
                onClick={() => onSelectStyle(opt.id)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative border text-left ${
                  isSelected
                    ? 'bg-white border-stone-900 ring-2 ring-stone-900/10 shadow-md scale-[1.02]'
                    : 'bg-white/70 hover:bg-white border-stone-200 hover:border-stone-300 hover:shadow-xs'
                }`}
              >
                {/* Active Checkmark Pill */}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-stone-900 text-white rounded-full p-1 shadow-xs">
                    <Check className="w-3 h-3" />
                  </div>
                )}

                {/* Badge */}
                <div className="mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {opt.badge}
                  </span>
                </div>

                {/* Visual Sketch Preview */}
                <div className="my-3 py-3 flex items-center justify-center min-h-[90px] bg-stone-50/60 rounded-xl border border-stone-100/80 overflow-hidden">
                  {opt.component(opt.id === 'blueprint' ? 'blue' : opt.id === 'risograph' ? 'rosso' : opt.id === 'chibi' ? 'purple' : 'papaya')}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-editorial font-bold text-base text-stone-900 leading-tight">
                    {opt.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-rose-600 mt-0.5">
                    {opt.tagline}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1.5 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                {/* Select Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStyle(opt.id);
                  }}
                  className={`mt-4 w-full py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {isSelected ? 'Currently Active' : 'Apply This Style'}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
