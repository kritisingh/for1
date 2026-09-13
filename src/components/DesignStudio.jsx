import React, { useState } from 'react';
import { Sparkles, Palette, ExternalLink, BookOpen, Moon, Sun, Check, ArrowRight } from 'lucide-react';

export default function DesignStudio({ activeTheme, setActiveTheme, sampleSeason, sampleMilestone }) {
  const [isOpen, setIsOpen] = useState(true);
  const [comparisonTab, setComparisonTab] = useState('sideBySide'); // 'sideBySide' | 'toggleFull'

  const themes = [
    {
      id: 'clean',
      title: 'Option 1: Neal.fun Clean',
      subtitle: 'Warm off-white, playful, airy & friendly to all',
      vibe: 'Like neal.fun/deep-sea & The Pudding',
      bgPreview: 'bg-[#FAF8F5]',
      borderPreview: 'border-stone-300',
      textPreview: 'text-stone-800',
      tagColor: 'bg-rose-100 text-rose-700',
      links: [
        { name: 'neal.fun/deep-sea', url: 'https://neal.fun/deep-sea/' },
        { name: 'pudding.cool (Visual essays)', url: 'https://pudding.cool/' },
        { name: 'craft.do', url: 'https://www.craft.do/' }
      ]
    },
    {
      id: 'editorial',
      title: 'Option 2: Modern Editorial',
      subtitle: 'Kinetic linen, refined serif headers & coffee-table book elegance',
      vibe: 'Like The Athletic, Kinfolk & Monocle',
      bgPreview: 'bg-[#F4F1EA]',
      borderPreview: 'border-stone-400',
      textPreview: 'text-stone-900',
      tagColor: 'bg-emerald-100 text-emerald-800',
      links: [
        { name: 'The Athletic', url: 'https://theathletic.com/' },
        { name: 'Kinfolk Magazine', url: 'https://kinfolk.com/' },
        { name: 'NYT Visual Journalism', url: 'https://www.nytimes.com/interactive/' }
      ]
    },
    {
      id: 'twilight',
      title: 'Option 3: Velvety Twilight',
      subtitle: 'Soft slate night, glassmorphism & gentle pastel glows (zero hacker vibes)',
      vibe: 'Like Apple TV+, Spotify Wrapped & Arc',
      bgPreview: 'bg-[#0E131B]',
      borderPreview: 'border-slate-700',
      textPreview: 'text-slate-100',
      tagColor: 'bg-indigo-900/60 text-indigo-300',
      links: [
        { name: 'Apple TV+ Feature UI', url: 'https://www.apple.com/apple-tv-plus/' },
        { name: 'Raycast Design', url: 'https://www.raycast.com/' },
        { name: 'Linear Design System', url: 'https://linear.app/' }
      ]
    }
  ];

  return (
    <section className="border-b border-neutral-800 bg-neutral-950 text-neutral-100 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500/20 to-rose-500/20 border border-amber-500/30 text-amber-400">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-friendly font-bold text-lg text-white flex items-center gap-2">
                Design Studio & Live Style Lab
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/60 font-normal">
                  Interactive Preview
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Compare 3 all-gender friendly, subtle design directions. Click any option to apply it live to the entire site!
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
          >
            {isOpen ? 'Minimize Studio ▲' : 'Open Design Studio ▼'}
          </button>
        </div>

        {isOpen && (
          <div className="pt-6 space-y-6">
            
            {/* Theme Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {themes.map(t => {
                const isSelected = activeTheme === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 border-2 transition-all text-left flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-400 bg-neutral-900 shadow-xl ring-2 ring-amber-400/20'
                        : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70'
                    }`}
                  >
                    <div>
                      {/* Badge & Active Check */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${t.tagColor}`}>
                          {t.vibe}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-700/50">
                            <Check className="w-3.5 h-3.5" />
                            Active
                          </span>
                        )}
                      </div>

                      <h3 className="font-friendly font-bold text-base text-white mt-1">
                        {t.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {t.subtitle}
                      </p>
                    </div>

                    {/* Internet Reference Links */}
                    <div className="mt-4 pt-3 border-t border-neutral-800/80">
                      <div className="text-[10px] uppercase font-telemetry tracking-wider text-neutral-500 mb-1.5">
                        Real-World References:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {t.links.map(l => (
                          <a
                            key={l.name}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-amber-400 hover:underline bg-neutral-950/70 px-2 py-0.5 rounded border border-neutral-800 transition-colors"
                          >
                            <span>{l.name}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button
                      className={`mt-4 w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      <span>{isSelected ? 'Currently Viewing Full Site' : 'Preview This Theme'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Live Side-by-Side Mini Preview Section */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs uppercase font-telemetry font-bold tracking-wider text-neutral-400">
                  Side-by-Side Card Comparison (2024 Season Sample)
                </h4>
                <span className="text-[11px] text-neutral-500 font-telemetry">
                  See how the exact same data looks in each style
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* 1. Neal.fun Clean Sample */}
                <div className="bg-[#FAF8F5] text-stone-900 rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                      <div>
                        <span className="font-friendly font-extrabold text-2xl text-stone-900">2024</span>
                        <div className="text-[10px] text-rose-600 font-semibold uppercase tracking-wider">Ground Effect Era</div>
                      </div>
                      <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium border border-stone-200">
                        Drivers Podium
                      </span>
                    </div>

                    {/* P1 Card in Neal.fun Clean */}
                    <div className="mt-3 bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center font-bold text-amber-700 shrink-0">
                        MV
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-amber-600 font-bold uppercase">Champion</div>
                        <div className="font-friendly font-bold text-stone-900 text-sm truncate">Max Verstappen</div>
                        <div className="text-xs text-stone-500">Red Bull Racing</div>
                      </div>
                      <div className="text-right">
                        <div className="font-friendly font-bold text-sm text-stone-900">429 pts</div>
                        <div className="text-[11px] text-stone-500">9 wins</div>
                      </div>
                    </div>

                    {/* Runner ups */}
                    <div className="mt-2 space-y-1.5 text-xs text-stone-700">
                      <div className="flex items-center justify-between p-1.5 bg-stone-100/70 rounded-lg">
                        <span>P2 • Lando Norris (McLaren)</span>
                        <span className="font-semibold">374 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 bg-stone-100/70 rounded-lg">
                        <span>P3 • Charles Leclerc (Ferrari)</span>
                        <span className="font-semibold">356 pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-center">
                    <span className="text-[11px] text-stone-500 font-medium">Style: Neal.fun Clean (Warm & Joyful)</span>
                  </div>
                </div>

                {/* 2. Modern Editorial Sample */}
                <div className="bg-[#F6F4EE] text-stone-900 rounded-lg p-4 border border-stone-300 shadow-none flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between pb-3 border-b border-stone-300">
                      <div>
                        <span className="font-editorial text-3xl italic font-normal text-stone-900">The 2024 Season</span>
                        <div className="text-[10px] text-stone-600 tracking-widest uppercase mt-0.5">Volume LXXV • Formula 1</div>
                      </div>
                      <span className="text-[11px] font-editorial italic text-stone-600">
                        Drivers' Cup
                      </span>
                    </div>

                    {/* P1 Card in Editorial */}
                    <div className="mt-3 bg-[#FCFBF8] p-3 border border-stone-300 flex items-center gap-3">
                      <div className="w-12 h-12 border border-stone-400 bg-stone-200 flex items-center justify-center font-editorial italic text-stone-800 shrink-0">
                        MV
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-serif uppercase tracking-widest text-stone-500">World Champion</div>
                        <div className="font-editorial text-base font-bold text-stone-900 truncate">Max Verstappen</div>
                        <div className="text-xs font-serif italic text-stone-600">Red Bull Racing-Honda</div>
                      </div>
                      <div className="text-right">
                        <div className="font-serif text-sm font-semibold text-stone-900">429 pts</div>
                        <div className="text-[11px] text-stone-500 italic">9 victories</div>
                      </div>
                    </div>

                    {/* Runner ups */}
                    <div className="mt-2 space-y-1 text-xs text-stone-800 font-serif">
                      <div className="flex items-center justify-between py-1 border-b border-stone-200/80">
                        <span>II. Lando Norris — McLaren</span>
                        <span className="font-medium">374 pts</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-stone-200/80">
                        <span>III. Charles Leclerc — Ferrari</span>
                        <span className="font-medium">356 pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-300 text-center">
                    <span className="text-[11px] text-stone-600 font-serif italic">Style: Modern Editorial (Curated Magazine)</span>
                  </div>
                </div>

                {/* 3. Velvety Twilight Sample */}
                <div className="bg-[#0F141C] text-slate-100 rounded-2xl p-4 border border-slate-800 shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="font-friendly font-bold text-2xl text-white">2024</span>
                        <div className="text-[10px] text-indigo-400 font-medium uppercase tracking-wider">Ground Effect Era</div>
                      </div>
                      <span className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-full font-medium border border-slate-700">
                        Drivers Podium
                      </span>
                    </div>

                    {/* P1 Card in Twilight */}
                    <div className="mt-3 bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 shadow-md flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-300 shrink-0">
                        MV
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-indigo-400 font-semibold uppercase">Champion</div>
                        <div className="font-friendly font-bold text-white text-sm truncate">Max Verstappen</div>
                        <div className="text-xs text-slate-400">Red Bull Racing</div>
                      </div>
                      <div className="text-right">
                        <div className="font-friendly font-bold text-sm text-slate-100">429 pts</div>
                        <div className="text-[11px] text-indigo-300">9 wins</div>
                      </div>
                    </div>

                    {/* Runner ups */}
                    <div className="mt-2 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between p-1.5 bg-slate-900/40 rounded-lg border border-slate-800/50">
                        <span>P2 • Lando Norris (McLaren)</span>
                        <span className="font-semibold text-slate-100">374 pts</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 bg-slate-900/40 rounded-lg border border-slate-800/50">
                        <span>P3 • Charles Leclerc (Ferrari)</span>
                        <span className="font-semibold text-slate-100">356 pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 font-medium">Style: Velvety Twilight (Soothing Dark)</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
