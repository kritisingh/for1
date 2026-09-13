import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroSurface from './components/HeroSurface';
import DecadeElevator from './components/DecadeElevator';
import SeasonCard from './components/SeasonCard';
import MilestoneCard from './components/MilestoneCard';
import BedrockFooter from './components/BedrockFooter';
import DesignStudio from './components/DesignStudio';
import f1Data from './data/f1Data.json';

export default function App() {
  // Theme state: 'clean' (Neal.fun Clean) | 'editorial' (Modern Magazine) | 'twilight' (Velvety Dark)
  const [activeTheme, setActiveTheme] = useState('clean');
  const [globalViewMode, setGlobalViewMode] = useState('drivers');
  const [currentYear, setCurrentYear] = useState(2025);
  const [searchQuery, setSearchQuery] = useState('');

  const seasons = f1Data.seasons || [];
  const milestones = f1Data.milestones || [];

  // Map milestones by afterYear for O(1) lookup
  const milestonesByYear = useMemo(() => {
    const map = {};
    for (const m of milestones) {
      map[m.afterYear] = m;
    }
    return map;
  }, [milestones]);

  // Track active year depth with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && id.startsWith('year-')) {
              const y = parseInt(id.replace('year-', ''), 10);
              setCurrentYear(y);
            }
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    const yearElements = document.querySelectorAll('article[id^="year-"]');
    yearElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [seasons, searchQuery]);

  // Current era description based on active year
  const currentEra = useMemo(() => {
    const s = seasons.find(item => item.year === currentYear);
    return s?.era?.name || 'Modern Era';
  }, [currentYear, seasons]);

  // Smooth scroll helper
  const handleJumpToYear = targetYear => {
    if (targetYear === 2025 && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(`year-${targetYear}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter seasons based on search query
  const filteredSeasons = useMemo(() => {
    if (!searchQuery.trim()) return seasons;
    const q = searchQuery.toLowerCase().trim();

    return seasons.filter(s => {
      if (s.year.toString().includes(q)) return true;
      if (s.era?.name?.toLowerCase().includes(q)) return true;
      const matchesDriver = s.drivers?.some(d => 
        d.name?.toLowerCase().includes(q) || 
        d.team?.toLowerCase().includes(q)
      );
      if (matchesDriver) return true;
      const matchesConstructor = s.constructors?.some(c => 
        c.name?.toLowerCase().includes(q)
      );
      if (matchesConstructor) return true;
      return false;
    });
  }, [seasons, searchQuery]);

  // Dynamic theme wrapper styling
  const themeContainerClass = 
    activeTheme === 'twilight'
      ? 'bg-[#0E131B] text-slate-100 border-slate-800'
      : activeTheme === 'editorial'
        ? 'bg-[#F5F2EB] text-stone-900 border-stone-300'
        : 'bg-[#FAF8F5] text-stone-900 border-stone-200';

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${themeContainerClass}`}>
      
      {/* Design Direction Lab / Showcase Bar */}
      <DesignStudio
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        sampleSeason={seasons[1]} // 2024 sample
        sampleMilestone={milestones[0]} // 2021 sample
      />

      {/* Top Sticky Header */}
      <Header
        currentYear={currentYear}
        currentEra={currentEra}
        viewMode={globalViewMode}
        setViewMode={setGlobalViewMode}
        onJumpToYear={handleJumpToYear}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTheme={activeTheme}
      />

      {/* Surface Hero (2025 Entry) */}
      <HeroSurface
        onStartDive={() => handleJumpToYear(2025)}
        onJumpToYear={handleJumpToYear}
        activeTheme={activeTheme}
      />

      {/* Floating Decade Elevator */}
      <DecadeElevator
        currentYear={currentYear}
        onJumpToYear={handleJumpToYear}
        activeTheme={activeTheme}
      />

      {/* Search status notification */}
      {searchQuery.trim() && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="p-3 px-4 rounded-xl border flex items-center justify-between text-xs bg-black/5 dark:bg-white/5 border-inherit">
            <span>
              Showing <strong className="font-bold">{filteredSeasons.length}</strong> seasons matching "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="opacity-70 hover:opacity-100 underline"
            >
              Clear search
            </button>
          </div>
        </div>
      )}

      {/* Main Continuous Descent Stream */}
      <main className="px-4 py-6 max-w-5xl mx-auto">
        {filteredSeasons.map(season => {
          const milestone = milestonesByYear[season.year];

          return (
            <React.Fragment key={season.year}>
              <SeasonCard
                season={season}
                globalViewMode={globalViewMode}
                activeTheme={activeTheme}
              />

              {/* Dramatic story milestone interludes */}
              {!searchQuery && milestone && (
                <MilestoneCard 
                  milestone={milestone} 
                  activeTheme={activeTheme} 
                />
              )}
            </React.Fragment>
          );
        })}

        {filteredSeasons.length === 0 && (
          <div className="text-center py-20 rounded-2xl border border-inherit my-12 opacity-80">
            <div className="text-xl font-bold">No Seasons Found</div>
            <p className="text-xs mt-2 opacity-60">
              No results matched your search "{searchQuery}". Try searching "Schumacher", "Ferrari", "1994", or "Senna".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-lg border border-inherit text-xs font-medium"
            >
              Reset Search
            </button>
          </div>
        )}
      </main>

      {/* Bedrock Footer (1950 Silverstone) */}
      <BedrockFooter 
        onReturnToSurface={() => handleJumpToYear(2025)} 
        activeTheme={activeTheme} 
      />

    </div>
  );
}
