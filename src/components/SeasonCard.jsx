import React, { useState, useEffect } from 'react';
import { Trophy, Car, ChevronDown, ChevronUp, Flag, Award, Sparkles, AlertCircle } from 'lucide-react';

export default function SeasonCard({ season, globalViewMode }) {
  const { year, era, heroCar, champDriver, champConstructor, drivers, constructors, constructorsApplicable } = season;

  // Local tab state: defaults to globalViewMode, but allows per-card override
  const [activeTab, setActiveTab] = useState(globalViewMode);
  const [isExpanded, setIsExpanded] = useState(false);

  // Sync with global view mode when global mode changes
  useEffect(() => {
    setActiveTab(globalViewMode);
  }, [globalViewMode]);

  // Safe fallback lists
  const driverList = drivers || [];
  const constructorList = constructors || [];

  const top3Drivers = driverList.slice(0, 3);
  const restDrivers = driverList.slice(3, 10);

  const top3Constructors = constructorList.slice(0, 3);
  const restConstructors = constructorList.slice(3, 10);

  // Fallback avatar helper
  const getInitials = name => {
    if (!name) return 'F1';
    const parts = name.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <article 
      id={`year-${year}`} 
      className="scroll-mt-24 w-full max-w-4xl mx-auto my-12 bg-neutral-900/70 backdrop-blur-md border border-neutral-800/80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-neutral-700/80"
    >
      
      {/* Card Header: Year, Era, and Tab Switcher */}
      <div className="p-4 sm:p-6 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4 bg-neutral-950/50">
        
        {/* Year & Era */}
        <div className="flex items-center gap-3">
          <span className="font-racing text-4xl sm:text-5xl font-black tracking-tight text-white">
            {year}
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-telemetry uppercase tracking-wider text-red-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {era?.name || 'Grand Prix Era'}
            </span>
            <span className="text-xs text-neutral-400 font-telemetry hidden sm:inline">
              {era?.engine}
            </span>
          </div>
        </div>

        {/* Local Tab Selector */}
        <div className="bg-neutral-900 p-1 rounded-xl border border-neutral-800 flex items-center text-xs font-medium">
          <button
            onClick={() => setActiveTab('drivers')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'drivers'
                ? 'bg-red-600 text-white shadow-md font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Drivers</span>
          </button>
          
          <button
            onClick={() => setActiveTab('constructors')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'constructors'
                ? 'bg-red-600 text-white shadow-md font-semibold'
                : 'text-neutral-400 hover:text-white'
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            
            {/* P1 Champion (Hero Card) */}
            {top3Drivers[0] && (
              <div className="md:col-span-3 bg-gradient-to-br from-neutral-850 to-neutral-900 border-2 border-amber-500/40 rounded-xl p-4 sm:p-5 relative overflow-hidden shadow-lg">
                
                {/* Team livery color accent line */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-2"
                  style={{ backgroundColor: top3Drivers[0].teamColor || '#E8002D' }}
                />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  
                  {/* Driver Face / Portrait */}
                  <div className="relative shrink-0">
                    <div 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-neutral-800 flex items-center justify-center shadow-md relative"
                      style={{ boxShadow: `0 0 20px ${top3Drivers[0].teamColor}33` }}
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
                      {/* Fallback Badge */}
                      <span className="font-racing font-bold text-2xl text-neutral-300 absolute">
                        {getInitials(top3Drivers[0].name)}
                      </span>
                    </div>

                    {/* Gold Champion Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-racing font-black text-xs px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>P1</span>
                    </div>
                  </div>

                  {/* Driver Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-telemetry uppercase tracking-wider text-amber-400 font-bold mb-1">
                      <span>WORLD CHAMPION</span>
                      <span className="text-neutral-600">•</span>
                      <span>{top3Drivers[0].nationality}</span>
                    </div>
                    
                    <h3 className="font-racing text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                      {top3Drivers[0].name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white border"
                        style={{ 
                          backgroundColor: `${top3Drivers[0].teamColor}22`,
                          borderColor: top3Drivers[0].teamColor || '#555' 
                        }}
                      >
                        {top3Drivers[0].team}
                      </span>
                      <span className="text-xs text-neutral-400 font-telemetry bg-neutral-800/80 px-2 py-0.5 rounded-md">
                        Car: <strong className="text-neutral-200">{heroCar}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Telemetry Stats: Points & Wins */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 bg-neutral-950/60 sm:bg-transparent px-4 py-2 sm:p-0 rounded-xl border sm:border-0 border-neutral-800">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-telemetry tracking-wider text-neutral-400">Points</div>
                      <div className="font-telemetry text-2xl sm:text-3xl font-bold text-white">
                        {top3Drivers[0].points}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-telemetry tracking-wider text-neutral-400">Wins</div>
                      <div className="font-telemetry text-sm font-semibold text-amber-400">
                        {top3Drivers[0].wins} {top3Drivers[0].wins === 1 ? 'Win' : 'Wins'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* P2 Runner-Up */}
            {top3Drivers[1] && (
              <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: top3Drivers[1].teamColor || '#888' }}
                />
                <div className="flex items-center gap-3 pl-2">
                  <span className="font-racing font-bold text-base text-neutral-400 bg-neutral-800 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                    P2
                  </span>
                  <div>
                    <div className="font-racing font-bold text-white text-base leading-tight">
                      {top3Drivers[1].name}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium">
                      {top3Drivers[1].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-telemetry font-bold text-sm text-neutral-200">
                    {top3Drivers[1].points} pts
                  </div>
                  <div className="text-[11px] text-neutral-500 font-telemetry">
                    {top3Drivers[1].wins} {top3Drivers[1].wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            )}

            {/* P3 Third Place */}
            {top3Drivers[2] && (
              <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: top3Drivers[2].teamColor || '#888' }}
                />
                <div className="flex items-center gap-3 pl-2">
                  <span className="font-racing font-bold text-base text-amber-700 bg-neutral-800 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                    P3
                  </span>
                  <div>
                    <div className="font-racing font-bold text-white text-base leading-tight">
                      {top3Drivers[2].name}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium">
                      {top3Drivers[2].team}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-telemetry font-bold text-sm text-neutral-200">
                    {top3Drivers[2].points} pts
                  </div>
                  <div className="text-[11px] text-neutral-500 font-telemetry">
                    {top3Drivers[2].wins} {top3Drivers[2].wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Expandable Positions (P4 to P10) */}
          {restDrivers.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs font-telemetry text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <span>{isExpanded ? 'Collapse Standings' : `Expand Standings (P4 – P${driverList.length})`}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isExpanded && (
                <div className="mt-3 divide-y divide-neutral-800/60 border border-neutral-800/80 rounded-xl overflow-hidden bg-neutral-950/40">
                  {restDrivers.map(d => (
                    <div key={d.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-neutral-900/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="font-telemetry font-bold text-neutral-500 w-6">
                          P{d.pos}
                        </span>
                        <span 
                          className="w-2 h-2 rounded-full shrink-0" 
                          style={{ backgroundColor: d.teamColor || '#666' }}
                        />
                        <span className="font-semibold text-neutral-200">
                          {d.name}
                        </span>
                        <span className="text-neutral-500 hidden sm:inline">
                          ({d.team})
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-300 font-telemetry">
                        <span className="text-neutral-500 text-[11px] hidden sm:inline">
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
          
          {/* Pre-1958 Historical Notice */}
          {!constructorsApplicable ? (
            <div className="p-6 rounded-xl bg-neutral-950/80 border border-amber-500/30 flex items-start gap-4 text-left">
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-racing font-bold text-amber-400 text-lg">
                  No Constructors' Championship in {year}
                </h4>
                <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                  Prior to <strong>1958</strong>, the FIA Formula 1 World Championship was awarded strictly to drivers. 
                  Manufacturers and privateer garages built the cars, but the official <em>International Cup for F1 Manufacturers</em> was only established in 1958 (won by Vanwall).
                </p>
                <button
                  onClick={() => setActiveTab('drivers')}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-telemetry font-semibold text-amber-400 hover:text-amber-300 underline"
                >
                  View {year} Drivers' Championship Standings →
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Top 3 Constructors Podium */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                
                {/* P1 Champion Constructor */}
                {top3Constructors[0] && (
                  <div className="md:col-span-3 bg-gradient-to-br from-neutral-850 to-neutral-900 border-2 border-amber-500/40 rounded-xl p-4 sm:p-5 relative overflow-hidden shadow-lg">
                    
                    {/* Team livery accent */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-2"
                      style={{ backgroundColor: top3Constructors[0].teamColor || '#E8002D' }}
                    />

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      
                      {/* Car / Constructor Icon */}
                      <div 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-amber-400/50 bg-neutral-950 flex flex-col items-center justify-center shadow-md relative shrink-0"
                        style={{ boxShadow: `0 0 20px ${top3Constructors[0].teamColor}33` }}
                      >
                        <Car 
                          className="w-10 h-10" 
                          style={{ color: top3Constructors[0].teamColor || '#E8002D' }} 
                        />
                        <span className="text-[10px] font-telemetry font-bold text-neutral-400 mt-1 uppercase">
                          {heroCar.split(' ')[0]}
                        </span>
                        {/* P1 Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-racing font-black text-xs px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>P1</span>
                        </div>
                      </div>

                      {/* Team Details */}
                      <div className="flex-1 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 text-xs font-telemetry uppercase tracking-wider text-amber-400 font-bold mb-1">
                          <span>CONSTRUCTORS' WORLD CHAMPION</span>
                          <span className="text-neutral-600">•</span>
                          <span>{top3Constructors[0].nationality}</span>
                        </div>
                        
                        <h3 className="font-racing text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                          {top3Constructors[0].name}
                        </h3>
                        
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                          <span className="text-xs text-neutral-300 font-telemetry bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-700/60">
                            Iconic Chassis: <strong className="text-white">{heroCar}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Telemetry Stats: Points & Wins */}
                      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 bg-neutral-950/60 sm:bg-transparent px-4 py-2 sm:p-0 rounded-xl border sm:border-0 border-neutral-800">
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-telemetry tracking-wider text-neutral-400">Points</div>
                          <div className="font-telemetry text-2xl sm:text-3xl font-bold text-white">
                            {top3Constructors[0].points}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-telemetry tracking-wider text-neutral-400">Wins</div>
                          <div className="font-telemetry text-sm font-semibold text-amber-400">
                            {top3Constructors[0].wins} {top3Constructors[0].wins === 1 ? 'Win' : 'Wins'}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* P2 Runner-Up Constructor */}
                {top3Constructors[1] && (
                  <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: top3Constructors[1].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-3 pl-2">
                      <span className="font-racing font-bold text-base text-neutral-400 bg-neutral-800 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                        P2
                      </span>
                      <div>
                        <div className="font-racing font-bold text-white text-base leading-tight">
                          {top3Constructors[1].name}
                        </div>
                        <div className="text-xs text-neutral-400 font-telemetry">
                          {top3Constructors[1].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-telemetry font-bold text-sm text-neutral-200">
                        {top3Constructors[1].points} pts
                      </div>
                      <div className="text-[11px] text-neutral-500 font-telemetry">
                        {top3Constructors[1].wins} {top3Constructors[1].wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                )}

                {/* P3 Constructor */}
                {top3Constructors[2] && (
                  <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between gap-3 relative overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: top3Constructors[2].teamColor || '#888' }}
                    />
                    <div className="flex items-center gap-3 pl-2">
                      <span className="font-racing font-bold text-base text-amber-700 bg-neutral-800 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                        P3
                      </span>
                      <div>
                        <div className="font-racing font-bold text-white text-base leading-tight">
                          {top3Constructors[2].name}
                        </div>
                        <div className="text-xs text-neutral-400 font-telemetry">
                          {top3Constructors[2].nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-telemetry font-bold text-sm text-neutral-200">
                        {top3Constructors[2].points} pts
                      </div>
                      <div className="text-[11px] text-neutral-500 font-telemetry">
                        {top3Constructors[2].wins} {top3Constructors[2].wins === 1 ? 'win' : 'wins'}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Expandable Positions (P4 to P10) */}
              {restConstructors.length > 0 && (
                <div className="mt-4">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs font-telemetry text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                  >
                    <span>{isExpanded ? 'Collapse Constructor Standings' : `Expand Constructors (P4 – P${constructorList.length})`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 divide-y divide-neutral-800/60 border border-neutral-800/80 rounded-xl overflow-hidden bg-neutral-950/40">
                      {restConstructors.map(c => (
                        <div key={c.pos} className="p-2.5 sm:px-4 flex items-center justify-between text-xs hover:bg-neutral-900/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="font-telemetry font-bold text-neutral-500 w-6">
                              P{c.pos}
                            </span>
                            <span 
                              className="w-2 h-2 rounded-full shrink-0" 
                              style={{ backgroundColor: c.teamColor || '#666' }}
                            />
                            <span className="font-semibold text-neutral-200">
                              {c.name}
                            </span>
                            <span className="text-neutral-500 text-[11px] hidden sm:inline">
                              ({c.nationality})
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-neutral-300 font-telemetry">
                            <span className="text-neutral-500 text-[11px] hidden sm:inline">
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
