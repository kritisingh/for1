import React, { useState, useEffect } from 'react';
import { Trophy, Car, ChevronDown, ChevronUp, Award, Sparkles, AlertCircle } from 'lucide-react';

export default function SeasonCard({ season, globalViewMode, activeTheme = 'clean' }) {
  const { year, era, heroCar, champDriver, champConstructor, drivers, constructors, constructorsApplicable } = season;

  const [activeTab, setActiveTab] = useState(globalViewMode);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setActiveTab(globalViewMode);
  }, [globalViewMode]);

  const driverList = drivers || [];
  const constructorList = constructors || [];

  const top3Drivers = driverList.slice(0, 3);
  const restDrivers = driverList.slice(3, 10);

  const top3Constructors = constructorList.slice(0, 3);
  const restConstructors = constructorList.slice(3, 10);

  const getInitials = name => {
    if (!name) return 'F1';
    const parts = name.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  const isDark = activeTheme === 'twilight';
  const isEditorial = activeTheme === 'editorial';

  // Card styles
  const cardClass = isDark
    ? 'bg-slate-900/50 backdrop-blur-md border-slate-800 text-slate-100 rounded-2xl shadow-xl'
    : isEditorial
      ? 'bg-[#FCFBF8] border-stone-300 text-stone-900 rounded-lg shadow-none'
      : 'bg-white border-stone-200 text-stone-900 rounded-2xl shadow-sm';

  const headerBorder = isDark
    ? 'border-slate-800 bg-slate-950/40'
    : isEditorial
      ? 'border-stone-300 bg-stone-100/50'
      : 'border-stone-100 bg-stone-50/60';

  const tabContainerClass = isDark
    ? 'bg-slate-950 border-slate-800'
    : isEditorial
      ? 'bg-stone-200/80 border-stone-300'
      : 'bg-stone-100 border-stone-200';

  const activeTabClass = isDark
    ? 'bg-indigo-600 text-white font-semibold'
    : isEditorial
      ? 'bg-stone-900 text-white font-serif'
      : 'bg-rose-600 text-white font-semibold shadow-xs';

  const inactiveTabClass = isDark
    ? 'text-slate-400 hover:text-white'
    : 'text-stone-600 hover:text-stone-900';

  const heroP1Bg = isDark
    ? 'bg-slate-900/80 border-slate-700/70'
    : isEditorial
      ? 'bg-[#F9F7F1] border-stone-300'
      : 'bg-stone-50/70 border-stone-200/80';

  const runnerUpBg = isDark
    ? 'bg-slate-950/60 border-slate-800/80'
    : isEditorial
      ? 'bg-[#FAF8F5] border-stone-200'
      : 'bg-stone-50/50 border-stone-200/60';

  return (
    <article 
      id={`year-${year}`} 
      className={`scroll-mt-24 w-full max-w-4xl mx-auto my-10 border overflow-hidden transition-all duration-300 ${cardClass}`}
    >
      
      {/* Card Header: Year, Era, and Tab Switcher */}
      <div className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-4 ${headerBorder}`}>
        
        {/* Year & Era */}
        <div className="flex items-baseline gap-3">
          <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isEditorial ? 'font-editorial italic font-normal text-stone-950' : 'font-friendly'
          }`}>
            {year}
          </span>
          <div className="flex flex-col">
            <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 ${
              isDark ? 'text-indigo-400' : isEditorial ? 'text-stone-600 font-serif' : 'text-rose-600'
            }`}>
              <Sparkles className="w-3 h-3 opacity-80" />
              {era?.name || 'Grand Prix Era'}
            </span>
            <span className="text-[11px] opacity-60 font-sans hidden sm:inline">
              {era?.engine}
            </span>
          </div>
        </div>

        {/* Local Tab Selector */}
        <div className={`p-1 rounded-xl border flex items-center text-xs font-medium ${tabContainerClass}`}>
          <button
            onClick={() => setActiveTab('drivers')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'drivers' ? activeTabClass : inactiveTabClass
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Drivers</span>
          </button>
          
          <button
            onClick={() => setActiveTab('constructors')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'constructors' ? activeTabClass : inactiveTabClass
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Constructors</span>
          </button>
        </div>

      </div>

      {/* Content Body: DRIVERS TAB */}
      {activeTab === 'drivers' && (
        <div className="p-4 sm:p-6">
          
          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-4">
            
            {/* P1 Champion (Hero Card) */}
            {top3Drivers[0] && (
              <div className={`md:col-span-3 border rounded-xl p-4 sm:p-5 relative overflow-hidden transition-all ${heroP1Bg}`}>
                
                {/* Team livery accent stripe */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: top3Drivers[0].teamColor || '#E8002D' }}
                />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  
                  {/* Driver Face / Portrait */}
                  <div className="relative shrink-0">
                    <div 
                      className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border bg-neutral-200/40 flex items-center justify-center relative shadow-xs ${
                        isDark ? 'border-slate-700 bg-slate-800' : 'border-stone-200'
                      }`}
                    >
                      {top3Drivers[0].portrait ? (
                        <img 
                          src={top3Drivers[0].portrait} 
                          alt={top3Drivers[0].name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : null}
                      <span className="font-friendly font-bold text-xl opacity-60 absolute">
                        {getInitials(top3Drivers[0].name)}
                      </span>
                    </div>

                    {/* Gold Champion Badge */}
                    <div className="absolute -bottom-1.5 -right-1.5 bg-amber-400 text-stone-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow flex items-center gap-1 font-friendly">
                      <Award className="w-3 h-3" />
                      <span>P1</span>
                    </div>
                  </div>

                  {/* Driver Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-amber-600 mb-0.5">
                      <span>World Champion</span>
                      <span className="opacity-40">•</span>
                      <span>{top3Drivers[0].nationality}</span>
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight text-inherit ${
                      isEditorial ? 'font-editorial font-bold text-2xl sm:text-3xl' : 'font-friendly'
                    }`}>
                      {top3Drivers[0].name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                        style={{ 
                          backgroundColor: `${top3Drivers[0].teamColor}18`,
                          borderColor: `${top3Drivers[0].teamColor}50`,
                          color: isDark ? '#fff' : top3Drivers[0].teamColor
                        }}
                      >
                        {top3Drivers[0].team}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-md border ${
                        isDark ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-white border-stone-200 text-stone-600'
                      }`}>
                        Car: <strong className="text-inherit">{heroCar}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Stats: Points & Wins */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 px-3 py-1.5 rounded-xl border sm:border-0 border-inherit">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-medium tracking-wider opacity-60">Points</div>
                      <div className="text-xl sm:text-2xl font-bold font-friendly">
                        {top3Drivers[0].points}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-amber-600">
                        {top3Drivers[0].wins} {top3Drivers[0].wins === 1 ? 'Win' : 'Wins'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* P2 Runner-Up */}
            {top3Drivers[1] && (
              <div className={`border rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden ${runnerUpBg}`}>
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: top3Drivers[1].teamColor || '#888' }}
                />
                <div className="flex items-center gap-2.5 pl-1.5">
                  <span className={`text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-stone-200 text-stone-700 font-serif'
                  }`}>
                    P2
                  </span>
                  <div>
                    <div className="font-semibold text-sm leading-tight text-inherit">
                      {top3Drivers[1].name}
                    </div>
                    <div className="text-xs opacity-60 font-normal">
                      {top3Drivers[1].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-xs">
                    {top3Drivers[1].points} pts
                  </div>
                  <div className="text-[10px] opacity-60">
                    {top3Drivers[1].wins} {top3Drivers[1].wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            )}

            {/* P3 Third Place */}
            {top3Drivers[2] && (
              <div className={`border rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden ${runnerUpBg}`}>
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: top3Drivers[2].teamColor || '#888' }}
                />
                <div className="flex items-center gap-2.5 pl-1.5">
                  <span className={`text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-slate-800 text-amber-400' : 'bg-stone-200 text-amber-800 font-serif'
                  }`}>
                    P3
                  </span>
                  <div>
                    <div className="font-semibold text-sm leading-tight text-inherit">
                      {top3Drivers[2].name}
                    </div>
                    <div className="text-xs opacity-60 font-normal">
                      {top3Drivers[2].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-xs">
                    {top3Drivers[2].points} pts
                  </div>
                  <div className="text-[10px] opacity-60">
                    {top3Drivers[2].wins} {top3Drivers[2].wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Expandable Positions (P4 to P10) */}
          {restDrivers.length > 0 && (
            <div className="mt-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl border text-xs font-medium transition-all ${
                  isDark 
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white' 
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>{isExpanded ? 'Hide Full Standings' : `Show Standings (P4 – P${driverList.length})`}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {isExpanded && (
                <div className={`mt-2.5 divide-y border rounded-xl overflow-hidden ${
                  isDark ? 'divide-slate-800 border-slate-800 bg-slate-950/40' : 'divide-stone-200 border-stone-200 bg-white'
                }`}>
                  {restDrivers.map(d => (
                    <div key={d.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="font-medium opacity-50 w-5">
                          {d.pos}.
                        </span>
                        <span 
                          className="w-2 h-2 rounded-full shrink-0" 
                          style={{ backgroundColor: d.teamColor || '#666' }}
                        />
                        <span className="font-semibold text-inherit">
                          {d.name}
                        </span>
                        <span className="opacity-50 text-[11px] hidden sm:inline">
                          ({d.team})
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="opacity-50 text-[11px] hidden sm:inline">
                          {d.wins > 0 ? `${d.wins} wins` : '-'}
                        </span>
                        <span className="font-bold">
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

      {/* Content Body: CONSTRUCTORS TAB */}
      {activeTab === 'constructors' && (
        <div className="p-4 sm:p-6">
          
          {!constructorsApplicable ? (
            <div className={`p-5 rounded-xl border flex items-start gap-3.5 text-left ${
              isDark ? 'bg-amber-950/20 border-amber-500/30' : 'bg-amber-50/70 border-amber-200 text-stone-800'
            }`}>
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-700 text-base">
                  No Constructors' Championship in {year}
                </h4>
                <p className="mt-1 text-xs sm:text-sm opacity-80 leading-relaxed font-normal">
                  Prior to <strong>1958</strong>, Formula 1 was contested exclusively for the Drivers' Championship. 
                  The official <em>International Cup for F1 Manufacturers</em> was first awarded in 1958 to British constructor Vanwall.
                </p>
                <button
                  onClick={() => setActiveTab('drivers')}
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:underline"
                >
                  View {year} Drivers' Championship →
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Top 3 Constructors Podium */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-4">
                
                {/* P1 Champion Constructor */}
                {top3Constructors[0] && (
                  <div className={`md:col-span-3 border rounded-xl p-4 sm:p-5 relative overflow-hidden transition-all ${heroP1Bg}`}>
                    
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: top3Constructors[0].teamColor || '#E8002D' }}
                    />

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      
                      <div 
                        className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border flex flex-col items-center justify-center relative shadow-xs shrink-0 ${
                          isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-stone-200'
                        }`}
                      >
                        <Car 
                          className="w-8 h-8" 
                          style={{ color: top3Constructors[0].teamColor || '#E8002D' }} 
                        />
                        <span className="text-[9px] font-bold opacity-50 mt-1 uppercase">
                          {heroCar.split(' ')[0]}
                        </span>
                        <div className="absolute -bottom-1.5 -right-1.5 bg-amber-400 text-stone-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>P1</span>
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-amber-600 mb-0.5">
                          <span>Constructors' Champion</span>
                          <span className="opacity-40">•</span>
                          <span>{top3Constructors[0].nationality}</span>
                        </div>
                        
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight text-inherit ${
                          isEditorial ? 'font-editorial font-bold text-2xl sm:text-3xl' : 'font-friendly'
                        }`}>
                          {top3Constructors[0].name}
                        </h3>
                        
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                          <span className={`text-xs px-2.5 py-0.5 rounded-md border ${
                            isDark ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-white border-stone-200 text-stone-600'
                          }`}>
                            Iconic Chassis: <strong className="text-inherit">{heroCar}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 px-3 py-1.5 rounded-xl border sm:border-0 border-inherit">
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-medium tracking-wider opacity-60">Points</div>
                          <div className="text-xl sm:text-2xl font-bold font-friendly">
                            {top3Constructors[0].points}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-amber-600">
                            {top3Constructors[0].wins} {top3Constructors[0].wins === 1 ? 'Win' : 'Wins'}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* P2 Runner-Up Constructor */}
                {top3Constructors[1] && (
                  <div className={`border rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden ${runnerUpBg}`}>
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: top3Constructors[1].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-2.5 pl-1.5">
                      <span className={`text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-stone-200 text-stone-700 font-serif'
                      }`}>
                        P2
                      </span>
                      <div>
                        <div className="font-semibold text-sm leading-tight text-inherit">
                          {top3Constructors[1].name}
                        </div>
                        <div className="text-xs opacity-60 font-normal">
                          {top3Constructors[1].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-xs">
                        {top3Constructors[1].points} pts
                      </div>
                      <div className="text-[10px] opacity-60">
                        {top3Constructors[1].wins} {top3Constructors[1].wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                )}

                {/* P3 Constructor */}
                {top3Constructors[2] && (
                  <div className={`border rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden ${runnerUpBg}`}>
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: top3Constructors[2].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-2.5 pl-1.5">
                      <span className={`text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        isDark ? 'bg-slate-800 text-amber-400' : 'bg-stone-200 text-amber-800 font-serif'
                      }`}>
                        P3
                      </span>
                      <div>
                        <div className="font-semibold text-sm leading-tight text-inherit">
                          {top3Constructors[2].name}
                        </div>
                        <div className="text-xs opacity-60 font-normal">
                          {top3Constructors[2].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-xs">
                        {top3Constructors[2].points} pts
                      </div>
                      <div className="text-[10px] opacity-60">
                        {top3Constructors[2].wins} {top3Constructors[2].wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Expandable Positions (P4 to P10) */}
              {restConstructors.length > 0 && (
                <div className="mt-3">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl border text-xs font-medium transition-all ${
                      isDark 
                        ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white' 
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <span>{isExpanded ? 'Hide Constructor Standings' : `Show Constructors (P4 – P${constructorList.length})`}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className={`mt-2.5 divide-y border rounded-xl overflow-hidden ${
                      isDark ? 'divide-slate-800 border-slate-800 bg-slate-950/40' : 'divide-stone-200 border-stone-200 bg-white'
                    }`}>
                      {restConstructors.map(c => (
                        <div key={c.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="font-medium opacity-50 w-5">
                              {c.pos}.
                            </span>
                            <span 
                              className="w-2 h-2 rounded-full shrink-0" 
                              style={{ backgroundColor: c.teamColor || '#666' }}
                            />
                            <span className="font-semibold text-inherit">
                              {c.name}
                            </span>
                            <span className="opacity-50 text-[11px] hidden sm:inline">
                              ({c.nationality})
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="opacity-50 text-[11px] hidden sm:inline">
                              {c.wins > 0 ? `${c.wins} wins` : '-'}
                            </span>
                            <span className="font-bold">
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
  );
}
