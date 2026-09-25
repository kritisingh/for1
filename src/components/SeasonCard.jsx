import React, { useState, useEffect } from 'react';
import { Trophy, Car, ChevronDown, ChevronUp, Award, AlertCircle, Plane } from 'lucide-react';
import RealCarThumbnail from './RealCarThumbnail';
import { SEASON_CARD_PALETTES } from '../data/themeColors';
import { getLocalDriverPortrait } from '../data/localDriverPortraits';
import { getDriverPortrait } from '../data/driverPortraits';

export default function SeasonCard({ 
  season, 
  globalViewMode, 
  seasonCardPalette = 'oxford-midnight-bg',
  onSelectPalette
}) {
  const { year, era, heroCar, drivers, constructors, constructorsApplicable } = season;

  const [activeTab, setActiveTab] = useState(globalViewMode);
  const [isDriversExpanded, setIsDriversExpanded] = useState(false);
  const [isConstructorsExpanded, setIsConstructorsExpanded] = useState(false);

  useEffect(() => {
    setActiveTab(globalViewMode);
  }, [globalViewMode]);

  // Active color palette
  const pal = SEASON_CARD_PALETTES[seasonCardPalette] || SEASON_CARD_PALETTES['oxford-midnight-bg'];

  const driverList = drivers || [];
  const constructorList = constructors || [];

  const top3Drivers = driverList.slice(0, 3);
  const restDrivers = driverList.slice(3, 10);

  const top3Constructors = constructorList.slice(0, 3);
  const restConstructors = constructorList.slice(3, 10);

  const championTeam = top3Constructors[0]?.name || top3Drivers[0]?.team || 'Grand Prix';
  const championDriver = top3Drivers[0];
  const championPortrait = (championDriver?.name ? getLocalDriverPortrait(championDriver.name) : null) || championDriver?.portrait || (championDriver?.name ? getDriverPortrait(championDriver.name) : null);

  return (
    <div className="relative w-full select-none my-12 sm:my-16">
      
      {/* =========================================================================
          TOP INCOMING FLIGHT CONNECTOR (Vertical glideslope connecting downward)
          ========================================================================= */}
      <div className="flex flex-col items-center mb-3">
        <div 
          className="w-[1.5px] h-10 border-l-2 border-dashed transition-colors"
          style={{ borderColor: pal.connectorColor || pal.accentColor }} 
        />
        <div 
          className="p-1.5 rounded-full border mt-1 shadow-2xs transition-colors"
          style={{ 
            backgroundColor: pal.pageBg === '#FFFFFF' ? pal.bgCard : 'rgba(255, 255, 255, 0.20)',
            borderColor: pal.pageBg === '#FFFFFF' ? pal.borderSubtle : 'rgba(255, 255, 255, 0.40)',
            color: pal.pageBg === '#FFFFFF' ? pal.titleColor : '#FFFFFF'
          }}
        >
          <Plane className="w-3.5 h-3.5 transform rotate-180" />
        </div>
        <div 
          className="w-[1.5px] h-4 border-l-2 border-dashed transition-colors"
          style={{ borderColor: pal.connectorColor || pal.accentColor }} 
        />
      </div>

      {/* =========================================================================
          FLIGHT GLIDESLOPE CARD
          ========================================================================= */}
      <article 
        id={`year-${year}`} 
        className="scroll-mt-24 w-full max-w-3xl xl:max-w-4xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-300 shadow-[0_16px_45px_-8px_rgba(30,58,138,0.12),0_4px_12px_rgba(0,0,0,0.03)]"
        style={{
          backgroundColor: pal.bg,
          border: `1.5px solid ${pal.border}`
        }}
      >
        
        {/* Cockpit Horizon Header */}
        <div 
          className="p-6 sm:p-7 border-b backdrop-blur-md"
          style={{
            borderColor: pal.borderSubtle,
            background: `linear-gradient(180deg, ${pal.bgCard} 0%, ${pal.bg} 100%)`
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Year & Horizon Attitude Wings */}
            <div className="flex items-center gap-4">
              <span 
                className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-none drop-shadow-sm"
                style={{ color: pal.titleColor }}
              >
                {year}
              </span>
              
              <div className="h-10 w-[1.5px] opacity-25 hidden sm:block" style={{ backgroundColor: pal.titleColor }} />

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: pal.accentColor }} />
                  <span 
                    className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em]"
                    style={{ color: pal.subtextColor }}
                  >
                    {era?.name || 'Grand Prix Season'}
                  </span>
                </div>
                <span 
                  className="text-xs font-normal mt-0.5"
                  style={{ color: pal.bodyTextColor, opacity: 0.9 }}
                >
                  Engine Spec: <strong style={{ color: pal.titleColor }}>{era?.engine}</strong>
                </span>
              </div>
            </div>

            {/* Drivers vs Constructors Flight Selector */}
            <div 
              className="p-1 rounded-xl flex items-center text-xs font-medium border"
              style={{
                backgroundColor: pal.bgSubtle,
                borderColor: pal.borderSubtle
              }}
            >
              <button
                onClick={() => setActiveTab('drivers')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
                style={{
                  backgroundColor: activeTab === 'drivers' ? pal.titleColor : 'transparent',
                  color: activeTab === 'drivers' ? pal.bg : pal.bodyTextColor
                }}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Drivers (P1–P10)</span>
              </button>
              
              <button
                onClick={() => setActiveTab('constructors')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-semibold"
                style={{
                  backgroundColor: activeTab === 'constructors' ? pal.titleColor : 'transparent',
                  color: activeTab === 'constructors' ? pal.bg : pal.bodyTextColor
                }}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Constructors (P1–P10)</span>
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DRIVERS TAB: P1, P2, P3 + COLLAPSIBLE 4 TO 10 DRIVER STANDINGS
            ========================================================================= */}
        {activeTab === 'drivers' && (
          <div className="p-6 sm:p-7">
            
            {/* Step-Down Podium */}
            <div className="flex flex-col gap-3.5 mb-5">
              
              {/* P1 Champion Apex */}
              {top3Drivers[0] && (
                <div 
                  className="rounded-2xl p-5 relative overflow-hidden border shadow-sm"
                  style={{
                    backgroundColor: pal.bgCard,
                    borderColor: pal.border
                  }}
                >
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-2.5"
                    style={{ backgroundColor: top3Drivers[0].teamColor || '#FF8000' }}
                  />

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pl-1">
                    
                    {/* Driver Portrait in Clean Frame */}
                    <div className="relative shrink-0">
                      <div 
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border flex items-center justify-center relative shadow-xs"
                        style={{
                          backgroundColor: pal.bgSubtle,
                          borderColor: pal.borderSubtle
                        }}
                      >
                        {championPortrait ? (
                          <img 
                            src={championPortrait} 
                            alt={championDriver?.name || 'World Champion'}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => { 
                              e.target.style.display = 'none'; 
                              if (e.target.nextElementSibling) {
                                e.target.nextElementSibling.style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        <div 
                          className="w-full h-full flex items-center justify-center"
                          style={{ display: championPortrait ? 'none' : 'flex' }}
                        >
                          <Trophy className="w-7 h-7 opacity-25" style={{ color: pal.titleColor }} />
                        </div>
                      </div>

                      {/* Gold Laurel Badge */}
                      <div 
                        className="absolute -bottom-1 -right-1 font-editorial font-bold text-[10px] px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1"
                        style={{
                          backgroundColor: pal.titleColor,
                          color: pal.bg
                        }}
                      >
                        <Award className="w-3 h-3" />
                        <span>P1</span>
                      </div>
                    </div>

                    {/* Driver Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <div 
                        className="inline-flex items-center gap-2 text-xs font-semibold mb-0.5"
                        style={{ color: pal.subtextColor }}
                      >
                        <span>World Drivers' Champion</span>
                        <span>•</span>
                        <span>{top3Drivers[0].nationality}</span>
                      </div>
                      
                      <h3 
                        className="font-editorial text-2xl sm:text-3xl font-normal tracking-tight"
                        style={{ color: pal.titleColor }}
                      >
                        {top3Drivers[0].name}
                      </h3>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                        <span 
                          className="px-3 py-0.5 rounded-full text-xs font-semibold border"
                          style={{ 
                            backgroundColor: `${top3Drivers[0].teamColor}25`,
                            borderColor: `${top3Drivers[0].teamColor}60`,
                            color: pal.titleColor
                          }}
                        >
                          {top3Drivers[0].team}
                        </span>
                        <span 
                          className="text-xs px-3 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: pal.bgSubtle,
                            borderColor: pal.borderSubtle,
                            color: pal.bodyTextColor
                          }}
                        >
                          Chassis: <strong style={{ color: pal.titleColor }}>{heroCar}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Points & Wins */}
                    <div 
                      className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 px-4 py-2 sm:p-0 rounded-xl border sm:border-0"
                      style={{
                        backgroundColor: pal.bgSubtle,
                        borderColor: pal.borderSubtle
                      }}
                    >
                      <div className="text-right">
                        <div 
                          className="text-[10px] uppercase font-bold tracking-wider"
                          style={{ color: pal.subtextColor }}
                        >
                          Points
                        </div>
                        <div 
                          className="font-editorial text-2xl sm:text-3xl font-normal"
                          style={{ color: pal.titleColor }}
                        >
                          {top3Drivers[0].points}
                        </div>
                      </div>
                      <div 
                        className="text-right text-xs font-bold"
                        style={{ color: pal.accentColor }}
                      >
                        {top3Drivers[0].wins} {top3Drivers[0].wins === 1 ? 'Win' : 'Wins'}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Step-Down: P2 & P3 Rows */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-3 sm:pl-6 border-l-2 border-dashed"
                style={{ borderColor: pal.border }}
              >
                {top3Drivers.slice(1, 3).map((d, i) => (
                  <div 
                    key={d.name} 
                    className="p-3.5 rounded-xl flex items-center justify-between gap-3 relative overflow-hidden border transition-all"
                    style={{
                      backgroundColor: pal.bgCard,
                      borderColor: pal.borderSubtle
                    }}
                  >
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: d.teamColor || '#94A3B8' }}
                    />
                    <div className="flex items-center gap-3 pl-1.5">
                      <span 
                        className="text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: pal.bgSubtle,
                          borderColor: pal.borderSubtle,
                          color: pal.titleColor
                        }}
                      >
                        P{i + 2}
                      </span>
                      <div>
                        <div 
                          className="font-editorial font-bold text-base leading-tight"
                          style={{ color: pal.titleColor }}
                        >
                          {d.name}
                        </div>
                        <div 
                          className="text-xs font-medium mt-0.5"
                          style={{ color: pal.bodyTextColor, opacity: 0.8 }}
                        >
                          {d.team}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div 
                        className="font-editorial font-bold text-sm"
                        style={{ color: pal.titleColor }}
                      >
                        {d.points} pts
                      </div>
                      <div 
                        className="text-[10px] font-medium"
                        style={{ color: pal.subtextColor }}
                      >
                        {d.wins} {d.wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ===================================================================
                P4 TO P10 DRIVER STANDINGS (Hidden by default, user clicks to expand)
                =================================================================== */}
            {restDrivers.length > 0 && (
              <div className="mt-5">
                <button
                  onClick={() => setIsDriversExpanded(!isDriversExpanded)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    backgroundColor: pal.bgCard,
                    borderColor: pal.borderSubtle,
                    color: pal.titleColor
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pal.accentColor }} />
                    <span>Positions 4 – {driverList.length}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]" style={{ color: pal.subtextColor }}>
                    <span>{isDriversExpanded ? 'Hide Standings (P4 – P10)' : 'View Standings (P4 – P10)'}</span>
                    {isDriversExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isDriversExpanded && (
                  <div 
                    className="mt-2 divide-y rounded-xl overflow-hidden border shadow-xs animate-in fade-in duration-200"
                    style={{
                      backgroundColor: pal.bgCard,
                      borderColor: pal.borderSubtle
                    }}
                  >
                    {restDrivers.map(d => (
                      <div 
                        key={d.pos} 
                        className="p-3 sm:px-4 flex items-center justify-between text-xs transition-colors"
                        style={{
                          borderColor: pal.borderSubtle
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className="font-bold w-5"
                            style={{ color: pal.subtextColor }}
                          >
                            {d.pos}.
                          </span>
                          <span 
                            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs" 
                            style={{ backgroundColor: d.teamColor || '#888' }} 
                          />
                          <span 
                            className="font-semibold"
                            style={{ color: pal.titleColor }}
                          >
                            {d.name}
                          </span>
                          <span 
                            className="text-[11px] hidden sm:inline"
                            style={{ color: pal.bodyTextColor, opacity: 0.75 }}
                          >
                            ({d.team})
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span 
                            className="text-[11px] hidden sm:inline"
                            style={{ color: pal.subtextColor }}
                          >
                            {d.wins > 0 ? `${d.wins} wins` : '0 wins'}
                          </span>
                          <span 
                            className="font-bold"
                            style={{ color: pal.titleColor }}
                          >
                            {d.points} pts
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* =========================================================================
            CONSTRUCTORS TAB: P1, P2, P3 + COLLAPSIBLE 4 TO 10 CONSTRUCTOR STANDINGS
            ========================================================================= */}
        {activeTab === 'constructors' && (
          <div className="p-6 sm:p-7">
            
            {!constructorsApplicable ? (
              <div 
                className="p-6 rounded-2xl border flex items-start gap-3.5 text-left"
                style={{
                  backgroundColor: pal.bgCard,
                  borderColor: pal.border
                }}
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: pal.accentColor }} />
                <div>
                  <h4 
                    className="font-editorial font-bold text-base"
                    style={{ color: pal.titleColor }}
                  >
                    No Constructors' Championship in {year}
                  </h4>
                  <p 
                    className="mt-1 text-xs sm:text-sm leading-relaxed font-normal"
                    style={{ color: pal.bodyTextColor }}
                  >
                    Prior to <strong>1958</strong>, Formula 1 was contested exclusively for the Drivers' World Championship. 
                    The official <em>International Cup for F1 Manufacturers</em> was first awarded in 1958 to British constructor Vanwall.
                  </p>
                  <button
                    onClick={() => setActiveTab('drivers')}
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold hover:underline cursor-pointer"
                    style={{ color: pal.titleColor }}
                  >
                    View {year} Drivers' Championship (P1–P10) →
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Step-Down Constructors Podium */}
                <div className="flex flex-col gap-3.5 mb-5">
                  
                  {/* P1 Champion Constructor */}
                  {top3Constructors[0] && (
                    <div 
                      className="rounded-2xl p-5 relative overflow-hidden border shadow-sm"
                      style={{
                        backgroundColor: pal.bgCard,
                        borderColor: pal.border
                      }}
                    >
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-2.5"
                        style={{ backgroundColor: top3Constructors[0].teamColor || '#0284C7' }}
                      />

                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pl-1">
                        
                        <div className="shrink-0 transform hover:scale-105 transition-transform">
                          <RealCarThumbnail
                            year={year}
                            chassisName={heroCar}
                            teamName={top3Constructors[0].name}
                            size="sm"
                            showLabel={false}
                          />
                        </div>

                        <div className="flex-1 text-center sm:text-left">
                          <div 
                            className="inline-flex items-center gap-2 text-xs font-semibold mb-0.5"
                            style={{ color: pal.subtextColor }}
                          >
                            <span>Constructors' World Champion</span>
                            <span>•</span>
                            <span>{top3Constructors[0].nationality}</span>
                          </div>
                          
                          <h3 
                            className="font-editorial text-2xl sm:text-3xl font-normal tracking-tight"
                            style={{ color: pal.titleColor }}
                          >
                            {top3Constructors[0].name}
                          </h3>
                          
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                            <span 
                              className="text-xs px-3 py-0.5 rounded-full border shadow-2xs"
                              style={{
                                backgroundColor: pal.bgSubtle,
                                borderColor: pal.borderSubtle,
                                color: pal.bodyTextColor
                              }}
                            >
                              Winning Chassis: <strong style={{ color: pal.titleColor }}>{heroCar}</strong>
                            </span>
                          </div>
                        </div>

                        <div 
                          className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 px-4 py-2 sm:p-0 rounded-xl border sm:border-0"
                          style={{
                            backgroundColor: pal.bgSubtle,
                            borderColor: pal.borderSubtle
                          }}
                        >
                          <div className="text-right">
                            <div 
                              className="text-[10px] uppercase font-bold tracking-wider"
                              style={{ color: pal.subtextColor }}
                            >
                              Points
                            </div>
                            <div 
                              className="font-editorial text-2xl sm:text-3xl font-normal"
                              style={{ color: pal.titleColor }}
                            >
                              {top3Constructors[0].points}
                            </div>
                          </div>
                          <div 
                            className="text-xs font-bold text-right"
                            style={{ color: pal.accentColor }}
                          >
                            {top3Constructors[0].wins} {top3Constructors[0].wins === 1 ? 'Win' : 'Wins'}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* P2 & P3 Constructors */}
                  <div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-3 sm:pl-6 border-l-2 border-dashed"
                    style={{ borderColor: pal.border }}
                  >
                    {top3Constructors.slice(1, 3).map((c, i) => (
                      <div 
                        key={c.name} 
                        className="p-3.5 rounded-xl flex items-center justify-between gap-3 relative overflow-hidden border transition-all"
                        style={{
                          backgroundColor: pal.bgCard,
                          borderColor: pal.borderSubtle
                        }}
                      >
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1.5"
                          style={{ backgroundColor: c.teamColor || '#94A3B8' }}
                        />
                        <div className="flex items-center gap-3 pl-1.5">
                          <span 
                            className="text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              backgroundColor: pal.bgSubtle,
                              borderColor: pal.borderSubtle,
                              color: pal.titleColor
                            }}
                          >
                            P{i + 2}
                          </span>
                          <div>
                            <div 
                              className="font-editorial font-bold text-base leading-tight"
                              style={{ color: pal.titleColor }}
                            >
                              {c.name}
                            </div>
                            <div 
                              className="text-xs font-medium mt-0.5"
                              style={{ color: pal.bodyTextColor, opacity: 0.8 }}
                            >
                              {c.nationality}
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div 
                            className="font-editorial font-bold text-sm"
                            style={{ color: pal.titleColor }}
                          >
                            {c.points} pts
                          </div>
                          <div 
                            className="text-[10px] font-medium"
                            style={{ color: pal.subtextColor }}
                          >
                            {c.wins} {c.wins === 1 ? 'win' : 'wins'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ===================================================================
                    P4 TO P10 CONSTRUCTOR STANDINGS (Hidden by default, user clicks to expand)
                    =================================================================== */}
                {restConstructors.length > 0 && (
                  <div className="mt-5">
                    <button
                      onClick={() => setIsConstructorsExpanded(!isConstructorsExpanded)}
                      className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all cursor-pointer"
                      style={{
                        backgroundColor: pal.bgCard,
                        borderColor: pal.borderSubtle,
                        color: pal.titleColor
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pal.accentColor }} />
                        <span>Positions 4 – {constructorList.length}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]" style={{ color: pal.subtextColor }}>
                        <span>{isConstructorsExpanded ? 'Hide Standings (P4 – P10)' : 'View Standings (P4 – P10)'}</span>
                        {isConstructorsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isConstructorsExpanded && (
                      <div 
                        className="mt-2 divide-y rounded-xl overflow-hidden border shadow-xs animate-in fade-in duration-200"
                        style={{
                          backgroundColor: pal.bgCard,
                          borderColor: pal.borderSubtle
                        }}
                      >
                        {restConstructors.map(c => (
                          <div 
                            key={c.pos} 
                            className="p-3 sm:px-4 flex items-center justify-between text-xs transition-colors"
                            style={{
                              borderColor: pal.borderSubtle
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <span 
                                className="font-bold w-5"
                                style={{ color: pal.subtextColor }}
                              >
                                {c.pos}.
                              </span>
                              <span 
                                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs" 
                                style={{ backgroundColor: c.teamColor || '#888' }} 
                              />
                              <span 
                                className="font-semibold"
                                style={{ color: pal.titleColor }}
                              >
                                {c.name}
                              </span>
                              <span 
                                className="text-[11px] hidden sm:inline"
                                style={{ color: pal.bodyTextColor, opacity: 0.75 }}
                              >
                                ({c.nationality})
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <span 
                                className="text-[11px] hidden sm:inline"
                                style={{ color: pal.subtextColor }}
                              >
                                {c.wins > 0 ? `${c.wins} wins` : '0 wins'}
                              </span>
                              <span 
                                className="font-bold"
                                style={{ color: pal.titleColor }}
                              >
                                {c.points} pts
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

          </div>
        )}

      </article>

      {/* =========================================================================
          BOTTOM OUTGOING FLIGHT CONNECTOR (Connecting downward into next year)
          ========================================================================= */}
      <div className="flex flex-col items-center mt-3">
        <div 
          className="w-[1.5px] h-10 border-l-2 border-dashed transition-colors" 
          style={{ borderColor: pal.connectorColor || pal.accentColor }}
        />
        <div 
          className="w-2 h-2 rounded-full mt-1 transition-colors" 
          style={{ backgroundColor: pal.pageBg === '#FFFFFF' ? pal.accentColor : '#FFFFFF' }}
        />
      </div>

    </div>
  );
}
