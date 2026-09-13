import React from 'react';
import { Radio, Cpu, ShieldCheck, Flame, Zap, MessageSquareQuote } from 'lucide-react';

export default function MilestoneCard({ milestone, activeTheme = 'clean' }) {
  const { type, badge, title, tagline, quote, speaker, description, stats } = milestone;

  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  const cardClass = isDark
    ? 'bg-slate-900/50 backdrop-blur-md border-slate-800 text-slate-100 rounded-2xl shadow-xl'
    : isEditorial
      ? 'bg-[#FAF8F3] border-stone-300 text-stone-900 rounded-lg shadow-none'
      : 'bg-white border-stone-200 text-stone-900 rounded-2xl shadow-sm';

  const quoteBoxClass = isDark
    ? 'bg-slate-950/70 border-l-4 border-indigo-500 border-y border-r border-slate-800 text-slate-100'
    : isEditorial
      ? 'bg-white/80 border-l-4 border-stone-800 border-y border-r border-stone-200 text-stone-900 font-serif'
      : 'bg-rose-50/50 border-l-4 border-rose-500 border-y border-r border-rose-100 text-stone-900';

  const badgeClass = isDark
    ? 'bg-indigo-950/60 border-indigo-800/80 text-indigo-300'
    : isEditorial
      ? 'bg-stone-200/80 border-stone-300 text-stone-800 font-serif'
      : 'bg-rose-100/70 border-rose-200 text-rose-700';

  const statPillClass = isDark
    ? 'bg-slate-950 border-slate-800 text-slate-200'
    : isEditorial
      ? 'bg-stone-100 border-stone-200 text-stone-800 font-serif'
      : 'bg-stone-50 border-stone-200 text-stone-800';

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-2 sm:px-0">
      <div className={`p-6 sm:p-8 border transition-all ${cardClass}`}>
        
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}>
            <MessageSquareQuote className="w-3.5 h-3.5 opacity-80" />
            <span>{badge}</span>
          </div>

          {/* Comms Waveform Indicator */}
          {type === 'radio' && (
            <div className="flex items-center gap-1">
              <span className={`w-1 h-3 rounded-full animate-pulse ${isDark ? 'bg-indigo-400' : 'bg-rose-500'}`} />
              <span className={`w-1 h-5 rounded-full animate-pulse delay-75 ${isDark ? 'bg-indigo-400' : 'bg-rose-500'}`} />
              <span className={`w-1 h-2 rounded-full animate-pulse delay-150 ${isDark ? 'bg-indigo-400' : 'bg-rose-500'}`} />
              <span className={`w-1 h-4 rounded-full animate-pulse delay-100 ${isDark ? 'bg-indigo-400' : 'bg-rose-500'}`} />
              <span className="text-[10px] font-semibold opacity-60 ml-1 uppercase">
                Pit Radio
              </span>
            </div>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight text-inherit ${
          isEditorial ? 'font-editorial italic font-normal text-3xl sm:text-4xl text-stone-950' : 'font-friendly'
        }`}>
          {title}
        </h3>
        
        <div className="text-xs opacity-60 uppercase tracking-wider mt-1 font-medium">
          {tagline}
        </div>

        {/* Dramatic Quote Box */}
        {quote && (
          <div className={`my-5 p-4 sm:p-5 rounded-xl transition-all ${quoteBoxClass}`}>
            <p className={`text-base sm:text-lg italic leading-snug ${
              isEditorial ? 'font-editorial text-lg sm:text-xl font-normal' : 'font-friendly font-semibold'
            }`}>
              {quote}
            </p>
            {speaker && (
              <div className="text-xs opacity-70 mt-2 text-right font-medium">
                — {speaker}
              </div>
            )}
          </div>
        )}

        {/* Story Narrative */}
        <p className={`text-sm sm:text-base leading-relaxed opacity-80 font-normal mt-2 ${
          isEditorial ? 'font-serif text-stone-700' : ''
        }`}>
          {description}
        </p>

        {/* Stats Strip */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-inherit opacity-90">
            {stats.map((s, idx) => (
              <div key={idx} className={`px-3 py-1 rounded-lg border flex items-center gap-1.5 text-xs ${statPillClass}`}>
                <span className="opacity-60">{s.label}:</span>
                <span className="font-bold">{s.value}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
