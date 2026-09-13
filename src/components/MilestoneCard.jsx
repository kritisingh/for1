import React from 'react';
import { Radio, AlertTriangle, Cpu, ShieldCheck, Flame, Zap } from 'lucide-react';

export default function MilestoneCard({ milestone }) {
  const { type, badge, title, tagline, quote, speaker, description, stats } = milestone;

  const getIcon = () => {
    switch (type) {
      case 'radio':
        return <Radio className="w-4 h-4 text-red-400" />;
      case 'tech':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'safety':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'bedrock':
        return <Zap className="w-4 h-4 text-amber-400" />;
      default:
        return <Flame className="w-4 h-4 text-orange-400" />;
    }
  };

  const getBadgeColor = () => {
    switch (type) {
      case 'radio':
        return 'bg-red-950/70 border-red-800/80 text-red-400';
      case 'tech':
        return 'bg-cyan-950/70 border-cyan-800/80 text-cyan-400';
      case 'safety':
        return 'bg-emerald-950/70 border-emerald-800/80 text-emerald-400';
      case 'bedrock':
        return 'bg-amber-950/70 border-amber-800/80 text-amber-400';
      default:
        return 'bg-orange-950/70 border-orange-800/80 text-orange-400';
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-14 px-4">
      
      {/* Background glow vignette */}
      <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Subtle decorative grid/stripes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row: Badge & Radio Waveform */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-telemetry font-bold border ${getBadgeColor()}`}>
            {getIcon()}
            <span>{badge}</span>
          </div>

          {/* Simulated Radio Waveform Animation */}
          {type === 'radio' && (
            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-red-500 animate-pulse rounded-full" />
              <span className="w-1 h-5 bg-red-500 animate-pulse delay-75 rounded-full" />
              <span className="w-1 h-2 bg-red-500 animate-pulse delay-150 rounded-full" />
              <span className="w-1 h-6 bg-red-500 animate-pulse delay-100 rounded-full" />
              <span className="w-1 h-3 bg-red-500 animate-pulse delay-200 rounded-full" />
              <span className="text-[10px] font-telemetry text-red-400 font-bold ml-1.5 uppercase">
                COMMS ENCRYPTED
              </span>
            </div>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="font-racing text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h3>
        
        <div className="text-xs sm:text-sm font-telemetry text-neutral-400 uppercase tracking-wider mt-1">
          {tagline}
        </div>

        {/* Dramatic Quote Box */}
        {quote && (
          <div className="my-5 p-4 rounded-xl bg-neutral-950/80 border-l-4 border-red-500 border-y border-r border-neutral-800/80">
            <p className="font-racing text-lg sm:text-xl italic font-semibold text-neutral-100 leading-snug">
              {quote}
            </p>
            {speaker && (
              <div className="text-xs font-telemetry text-neutral-400 mt-2 text-right">
                — {speaker}
              </div>
            )}
          </div>
        )}

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mt-3">
          {description}
        </p>

        {/* Stats Strip */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-neutral-800/80">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-neutral-900/80 border border-neutral-800 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-telemetry">{s.label}:</span>
                <span className="text-xs font-bold text-white font-telemetry">{s.value}</span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
