import React, { useState } from 'react';
import { MessageSquareQuote, Radio, Wrench, Flag, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SEASON_CARD_PALETTES } from '../data/themeColors';

/**
 * Formula 1 Historic Milestone Card — Timeline Bookmark
 * 
 * Permanently locked design:
 * - Sleek, low-profile horizontal ribbon strip (~75px) that sits between seasons
 * - Interactive expandable drawer: click to unfold full story, quotes, and stats
 * - Strict font consistency: font-editorial for quotes & titles, font-body for text
 * - 100% Soft Sage palette matching SeasonCard and SkyLayerMarker
 */

export default function MilestoneCard({ milestone, palette = 'sage-black' }) {
  const { afterYear, type, badge, title, quote, speaker, description, stats } = milestone;

  const [isExpanded, setIsExpanded] = useState(false);

  // Soft Sage palette tokens
  const pal = SEASON_CARD_PALETTES[palette] || SEASON_CARD_PALETTES['sage-black'];

  // Clean raw emojis from badge text (e.g. "⚠️ RACE CONTROL CONTROVERSY" -> "RACE CONTROL CONTROVERSY")
  const cleanBadge = (badge || '').replace(/^[^\w\s]+/, '').trim();

  // Select appropriate motorsport icon
  const renderIcon = () => {
    switch (type) {
      case 'radio':
        return <Radio className="w-4 h-4" style={{ color: pal.accentColor }} />;
      case 'tech':
        return <Wrench className="w-4 h-4" style={{ color: pal.accentColor }} />;
      case 'dossier':
        return <Flag className="w-4 h-4" style={{ color: pal.accentColor }} />;
      default:
        return <AlertCircle className="w-4 h-4" style={{ color: pal.accentColor }} />;
    }
  };

  return (
    <aside 
      id={afterYear ? `milestone-${afterYear}` : undefined}
      className="w-full max-w-3xl xl:max-w-4xl mx-auto my-6 sm:my-8 select-none"
    >
      <div 
        className="w-full rounded-2xl border shadow-[0_8px_24px_-6px_rgba(10,35,18,0.12)] transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: pal.bg,
          borderColor: pal.border
        }}
      >
        {/* Main Ribbon Strip (Clickable to toggle) */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 sm:p-4.5 flex items-center justify-between gap-4 cursor-pointer hover:opacity-95 transition-all"
        >
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            {/* Motorsport Icon Badge */}
            <div 
              className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
              style={{ backgroundColor: pal.bgCard, borderColor: pal.borderSubtle }}
            >
              {renderIcon()}
            </div>

            {/* Teaser Metadata & Headline */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-wider" style={{ color: pal.subtextColor }}>
                <span>{afterYear} Historic Flashpoint</span>
                <span className="opacity-40">•</span>
                <span>{cleanBadge}</span>
              </div>
              
              <div className="font-editorial text-sm sm:text-base font-normal text-black truncate mt-0.5">
                {quote ? (
                  <span>“{quote}” — <span className="text-xs font-normal opacity-75">{title}</span></span>
                ) : (
                  <span>{title}</span>
                )}
              </div>
            </div>
          </div>

          {/* Expand / Collapse Action Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold shrink-0 transition-all shadow-2xs cursor-pointer hover:scale-102"
            style={{
              backgroundColor: pal.bgCard,
              borderColor: pal.borderSubtle,
              color: pal.titleColor
            }}
          >
            <span>{isExpanded ? 'Close' : 'Read Story'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Drawer Details */}
        {isExpanded && (
          <div 
            className="px-5 pb-5 pt-3 border-t transition-all duration-300"
            style={{ 
              borderColor: pal.borderSubtle, 
              backgroundColor: pal.bgCard 
            }}
          >
            {quote && speaker && (
              <div className="mb-2 text-xs font-semibold italic text-black" style={{ color: pal.subtextColor }}>
                Quote source: {speaker}
              </div>
            )}
            
            <p className="text-xs sm:text-sm font-normal leading-relaxed max-w-3xl" style={{ color: pal.bodyTextColor }}>
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t" style={{ borderColor: pal.borderSubtle }}>
                {stats.map((s, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2.5 py-1 rounded-lg border font-medium shadow-2xs"
                    style={{ 
                      backgroundColor: pal.bgSubtle, 
                      borderColor: pal.borderSubtle, 
                      color: pal.titleColor 
                    }}
                  >
                    <span style={{ color: pal.subtextColor }}>{s.label}: </span>
                    <strong>{s.value}</strong>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
