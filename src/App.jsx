import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroSurface from './components/HeroSurface';
import DecadeElevator from './components/DecadeElevator';
import SeasonCard from './components/SeasonCard';
import MilestoneCard from './components/MilestoneCard';
import BedrockFooter from './components/BedrockFooter';
import f1Data from './data/f1Data.json';

export default function App() {
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

  return (
    <div className="min-h-screen bg-[#101319] text-[#F1F5F9] relative selection:bg-rose-500 selection:text-white">
      
      {/* Top Sticky Header */}
      <Header
        currentYear={currentYear}
        currentEra={currentEra}
        viewMode={globalViewMode}
        setViewMode={setGlobalViewMode}
        onJumpToYear={handleJumpToYear}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Surface Hero (2025 Entry) */}
      <HeroSurface
        onStartDive={() => handleJumpToYear(2025)}
        onJumpToYear={handleJumpToYear}
      />

      {/* Floating Decade Elevator */}
      <DecadeElevator
        currentYear={currentYear}
        onJumpToYear={handleJumpToYear}
      />

      {/* Search status notification */}
      {searchQuery.trim() && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="p-3 px-4 rounded-xl border border-[#27303E] bg-[#161B24] flex items-center justify-between text-xs">
            <span className="text-slate-300">
              Showing <strong className="text-rose-400 font-bold">{filteredSeasons.length}</strong> seasons matching "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-slate-400 hover:text-white underline"
            >
              Clear search
            </button>
          </div>
        </div>
      )}

      {/* Main Continuous Descent Stream */}
      <main className="px-4 py-8 max-w-5xl mx-auto">
        {filteredSeasons.map(season => {
          const milestone = milestonesByYear[season.year];

          return (
            <React.Fragment key={season.year}>
              <SeasonCard
                season={season}
                globalViewMode={globalViewMode}
              />

              {/* Dramatic story milestone interludes */}
              {!searchQuery && milestone && (
                <MilestoneCard milestone={milestone} />
              )}
            </React.Fragment>
          );
        })}

        {filteredSeasons.length === 0 && (
          <div className="text-center py-20 rounded-2xl border border-[#222A38] bg-[#161B24]/40 my-12">
            <div className="font-display text-xl font-bold text-slate-200">No Seasons Found</div>
            <p className="text-xs text-slate-400 mt-2">
              No results matched your search "{searchQuery}". Try searching "Schumacher", "Ferrari", "1994", or "Senna".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-xl bg-[#202735] hover:bg-[#2A3345] text-xs text-white font-medium transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}
      </main>

      {/* Bedrock Footer (1950 Silverstone) */}
      <BedrockFooter onReturnToSurface={() => handleJumpToYear(2025)} />

    </div>
  );
}
