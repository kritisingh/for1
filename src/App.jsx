import React, { useState, useEffect, useMemo, useRef } from 'react';
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
      // Check year
      if (s.year.toString().includes(q)) return true;
      // Check era
      if (s.era?.name?.toLowerCase().includes(q)) return true;
      // Check drivers
      const matchesDriver = s.drivers?.some(d => 
        d.name?.toLowerCase().includes(q) || 
        d.team?.toLowerCase().includes(q)
      );
      if (matchesDriver) return true;
      // Check constructors
      const matchesConstructor = s.constructors?.some(c => 
        c.name?.toLowerCase().includes(q)
      );
      if (matchesConstructor) return true;

      return false;
    });
  }, [seasons, searchQuery]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white relative">
      
      {/* Top Sticky Telemetry Header */}
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

      {/* Floating Decade Elevator (Fast-Travel Scrub Bar) */}
      <DecadeElevator
        currentYear={currentYear}
        onJumpToYear={handleJumpToYear}
      />

      {/* Search status notification */}
      {searchQuery.trim() && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 px-4 flex items-center justify-between text-xs font-telemetry">
            <span className="text-neutral-300">
              Showing <strong className="text-red-400">{filteredSeasons.length}</strong> seasons matching "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-neutral-500 hover:text-white underline"
            >
              Clear filter
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

              {/* Dramatic Drive to Survive milestone interludes */}
              {!searchQuery && milestone && (
                <MilestoneCard milestone={milestone} />
              )}
            </React.Fragment>
          );
        })}

        {filteredSeasons.length === 0 && (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800 my-12">
            <div className="font-racing text-2xl text-neutral-300">No Seasons Found</div>
            <p className="text-sm text-neutral-500 font-telemetry mt-2">
              No results matched your search "{searchQuery}". Try searching "Schumacher", "Ferrari", "1994", or "Senna".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-telemetry text-white"
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
