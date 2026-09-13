import React, { useState, useEffect } from 'react';
import { Trophy, Car, ChevronDown, ChevronUp, Award, Sparkles, AlertCircle } from 'lucide-react';

export default function SeasonCard({ season, globalViewMode }) {
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

  return (
    <article 
      id={`year-${year}`} 
      className="scroll-mt-24 w-full max-w-4xl mx-auto my-10 bg-[#151A23] border border-[#232B39] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#2F3A4D]"
    >
      
      {/* Card Header: Year, Era, and Tab Switcher */}
      <div className="p-4 sm:p-5 border-b border-[#202735] flex flex-wrap items-center justify-between gap-4 bg-[#12161F]/60">
        
        {/* Year & Era */}
        <div className="flex items-baseline gap-3.5">
          <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {year}
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              {era?.name || 'Grand Prix Era'}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-normal mt-0.5">
              {era?.engine}
            </span>
          </div>
        </div>

        {/* Local Tab Selector */}
        <div className="bg-[#10141C] p-1 rounded-xl border border-[#222A38] flex items-center text-xs font-medium">
          <button
            onClick={() => setActiveTab('drivers')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'drivers'
                ? 'bg-rose-500 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Drivers</span>
          </button>
          
          <button
            onClick={() => setActiveTab('constructors')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'constructors'
                ? 'bg-rose-500 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
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
              <div className="md:col-span-3 bg-[#191F2B] border border-[#273142] rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-md">
                
                {/* Team livery accent stripe */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: top3Drivers[0].teamColor || '#E11D48' }}
                />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  
                  {/* Driver Face / Portrait */}
                  <div className="relative shrink-0">
                    <div 
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#313C50] bg-[#12161E] flex items-center justify-center relative shadow-xs"
                      style={{ boxShadow: `0 0 24px ${top3Drivers[0].teamColor}25` }}
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
                      <span className="font-display font-bold text-xl text-slate-400 absolute">
                        {getInitials(top3Drivers[0].name)}
                      </span>
                    </div>

                    {/* Gold Champion Badge */}
                    <div className="absolute -bottom-1.5 -right-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-display font-bold text-[10px] px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>P1</span>
                    </div>
                  </div>

                  {/* Driver Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-0.5">
                      <span>World Champion</span>
                      <span className="text-slate-600">•</span>
                      <span>{top3Drivers[0].nationality}</span>
                    </div>
                    
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {top3Drivers[0].name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                        style={{ 
                          backgroundColor: `${top3Drivers[0].teamColor}20`,
                          borderColor: `${top3Drivers[0].teamColor}50`,
                          color: '#fff' 
                        }}
                      >
                        {top3Drivers[0].team}
                      </span>
                      <span className="text-xs text-slate-300 bg-[#12161F] border border-[#232B39] px-2.5 py-0.5 rounded-md">
                        Car: <strong className="text-white font-semibold">{heroCar}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Stats: Points & Wins */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 bg-[#12161F]/80 sm:bg-transparent px-3.5 py-2 sm:p-0 rounded-xl border sm:border-0 border-[#222A38]">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-medium tracking-wider text-slate-400">Points</div>
                      <div className="font-display text-xl sm:text-2xl font-bold text-white">
                        {top3Drivers[0].points}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-amber-400">
                        {top3Drivers[0].wins} {top3Drivers[0].wins === 1 ? 'Win' : 'Wins'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* P2 Runner-Up */}
            {top3Drivers[1] && (
              <div className="bg-[#181E29] border border-[#263040] rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: top3Drivers[1].teamColor || '#888' }}
                />
                <div className="flex items-center gap-2.5 pl-1.5">
                  <span className="text-xs font-bold text-slate-300 bg-[#12161F] border border-[#232B39] w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                    P2
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-sm leading-tight">
                      {top3Drivers[1].name}
                    </div>
                    <div className="text-xs text-slate-400 font-normal mt-0.5">
                      {top3Drivers[1].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display font-bold text-xs text-slate-200">
                    {top3Drivers[1].points} pts
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {top3Drivers[1].wins} {top3Drivers[1].wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            )}

            {/* P3 Third Place */}
            {top3Drivers[2] && (
              <div className="bg-[#181E29] border border-[#263040] rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: top3Drivers[2].teamColor || '#888' }}
                />
                <div className="flex items-center gap-2.5 pl-1.5">
                  <span className="text-xs font-bold text-amber-400 bg-[#12161F] border border-[#232B39] w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                    P3
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-sm leading-tight">
                      {top3Drivers[2].name}
                    </div>
                    <div className="text-xs text-slate-400 font-normal mt-0.5">
                      {top3Drivers[2].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display font-bold text-xs text-slate-200">
                    {top3Drivers[2].points} pts
                  </div>
                  <div className="text-[10px] text-slate-400">
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
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#12161F] border border-[#222A38] text-xs text-slate-400 hover:text-white hover:border-[#2C3648] transition-all"
              >
                <span>{isExpanded ? 'Hide Full Standings' : `Show Standings (P4 – P${driverList.length})`}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {isExpanded && (
                <div className="mt-2.5 divide-y divide-[#202735] border border-[#222A38] rounded-xl overflow-hidden bg-[#12161F]/60">
                  {restDrivers.map(d => (
                    <div key={d.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-[#181E29] transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-slate-500 w-5">
                          {d.pos}.
                        </span>
                        <span 
                          className="w-2 h-2 rounded-full shrink-0" 
                          style={{ backgroundColor: d.teamColor || '#666' }}
                        />
                        <span className="font-medium text-slate-200">
                          {d.name}
                        </span>
                        <span className="text-slate-500 text-[11px] hidden sm:inline">
                          ({d.team})
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-300">
                        <span className="text-slate-500 text-[11px] hidden sm:inline">
                          {d.wins > 0 ? `${d.wins} wins` : '-'}
                        </span>
                        <span className="font-bold text-white">
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
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3.5 text-left">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-amber-400 text-base">
                  No Constructors' Championship in {year}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Prior to <strong>1958</strong>, the FIA Formula 1 World Championship was awarded exclusively to drivers. 
                  The official <em>International Cup for F1 Manufacturers</em> was first awarded in 1958 to British garage Vanwall.
                </p>
                <button
                  onClick={() => setActiveTab('drivers')}
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 underline"
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
                  <div className="md:col-span-3 bg-[#191F2B] border border-[#273142] rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-md">
                    
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: top3Constructors[0].teamColor || '#E11D48' }}
                    />

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      
                      <div 
                        className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border border-[#313C50] bg-[#12161E] flex flex-col items-center justify-center relative shadow-xs shrink-0"
                        style={{ boxShadow: `0 0 24px ${top3Constructors[0].teamColor}25` }}
                      >
                        <Car 
                          className="w-8 h-8" 
                          style={{ color: top3Constructors[0].teamColor || '#E11D48' }} 
                        />
                        <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase">
                          {heroCar.split(' ')[0]}
                        </span>
                        <div className="absolute -bottom-1.5 -right-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-display font-bold text-[10px] px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>P1</span>
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-0.5">
                          <span>Constructors' Champion</span>
                          <span className="text-slate-600">•</span>
                          <span>{top3Constructors[0].nationality}</span>
                        </div>
                        
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {top3Constructors[0].name}
                        </h3>
                        
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                          <span className="text-xs text-slate-300 bg-[#12161F] border border-[#232B39] px-2.5 py-0.5 rounded-md">
                            Iconic Chassis: <strong className="text-white font-semibold">{heroCar}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0.5 bg-[#12161F]/80 sm:bg-transparent px-3.5 py-2 sm:p-0 rounded-xl border sm:border-0 border-[#222A38]">
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-medium tracking-wider text-slate-400">Points</div>
                          <div className="font-display text-xl sm:text-2xl font-bold text-white">
                            {top3Constructors[0].points}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-amber-400">
                            {top3Constructors[0].wins} {top3Constructors[0].wins === 1 ? 'Win' : 'Wins'}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* P2 Runner-Up Constructor */}
                {top3Constructors[1] && (
                  <div className="bg-[#181E29] border border-[#263040] rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: top3Constructors[1].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-2.5 pl-1.5">
                      <span className="text-xs font-bold text-slate-300 bg-[#12161F] border border-[#232B39] w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                        P2
                      </span>
                      <div>
                        <div className="font-display font-bold text-white text-sm leading-tight">
                          {top3Constructors[1].name}
                        </div>
                        <div className="text-xs text-slate-400 font-normal mt-0.5">
                          {top3Constructors[1].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-bold text-xs text-slate-200">
                        {top3Constructors[1].points} pts
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {top3Constructors[1].wins} {top3Constructors[1].wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                )}

                {/* P3 Constructor */}
                {top3Constructors[2] && (
                  <div className="bg-[#181E29] border border-[#263040] rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: top3Constructors[2].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-2.5 pl-1.5">
                      <span className="text-xs font-bold text-amber-400 bg-[#12161F] border border-[#232B39] w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                        P3
                      </span>
                      <div>
                        <div className="font-display font-bold text-white text-sm leading-tight">
                          {top3Constructors[2].name}
                        </div>
                        <div className="text-xs text-slate-400 font-normal mt-0.5">
                          {top3Constructors[2].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-bold text-xs text-slate-200">
                        {top3Constructors[2].points} pts
                      </div>
                      <div className="text-[10px] text-slate-400">
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
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#12161F] border border-[#222A38] text-xs text-slate-400 hover:text-white hover:border-[#2C3648] transition-all"
                  >
                    <span>{isExpanded ? 'Hide Constructor Standings' : `Show Constructors (P4 – P${constructorList.length})`}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2.5 divide-y divide-[#202735] border border-[#222A38] rounded-xl overflow-hidden bg-[#12161F]/60">
                      {restConstructors.map(c => (
                        <div key={c.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-[#181E29] transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-slate-500 w-5">
                              {c.pos}.
                            </span>
                            <span 
                              className="w-2 h-2 rounded-full shrink-0" 
                              style={{ backgroundColor: c.teamColor || '#666' }}
                            />
                            <span className="font-medium text-slate-200">
                              {c.name}
                            </span>
                            <span className="text-slate-500 text-[11px] hidden sm:inline">
                              ({c.nationality})
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-slate-300">
                            <span className="text-slate-500 text-[11px] hidden sm:inline">
                              {c.wins > 0 ? `${c.wins} wins` : '-'}
                            </span>
                            <span className="font-bold text-white">
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
