import React from 'react';
import { Radio, Cpu, ShieldCheck, Flame, Zap, MessageSquareQuote } from 'lucide-react';

export default function MilestoneCard({ milestone }) {
  const { type, badge, title, tagline, quote, speaker, description, stats } = milestone;

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-2 sm:px-0">
      <div className="relative rounded-2xl bg-[#161C26] border border-[#263142] p-6 sm:p-8 shadow-lg overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row: Badge & Radio Indicator */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#1F2633] border border-[#2D384B] text-rose-300">
            <MessageSquareQuote className="w-3.5 h-3.5 text-rose-400" />
            <span>{badge}</span>
          </div>

          {/* Pit Radio Waveform */}
          {type === 'radio' && (
            <div className="flex items-center gap-1">
              <span className="w-1 h-3.5 bg-rose-500 rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-rose-500 rounded-full animate-pulse delay-75" />
              <span className="w-1 h-2.5 bg-rose-500 rounded-full animate-pulse delay-150" />
              <span className="w-1 h-6 bg-rose-500 rounded-full animate-pulse delay-100" />
              <span className="w-1 h-3 bg-rose-500 rounded-full animate-pulse delay-200" />
              <span className="text-[11px] font-medium text-rose-400 ml-1.5">
                Team Radio
              </span>
            </div>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
          {title}
        </h3>
        
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
          {tagline}
        </div>

        {/* Quote Box */}
        {quote && (
          <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#111620] border-l-4 border-rose-500 border-y border-r border-[#222B3B]">
            <p className="font-display text-base sm:text-lg italic font-semibold text-slate-100 leading-snug">
              {quote}
            </p>
            {speaker && (
              <div className="text-xs text-slate-400 font-medium mt-2 text-right">
                — {speaker}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mt-2">
          {description}
        </p>

        {/* Stats Strip */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-[#222A38]">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-[#111620] border border-[#252E3E] px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">{s.label}:</span>
                <span className="text-xs font-bold text-white">{s.value}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
