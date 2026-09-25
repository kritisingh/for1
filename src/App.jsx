import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import DaylightClouds from './components/DaylightClouds';
import DecadeElevator from './components/DecadeElevator';
import SeasonCard from './components/SeasonCard';
import MilestoneCard from './components/MilestoneCard';
import SkyLayerMarker from './components/SkyLayerMarker';
import LandingSection from './components/LandingSection';
import BedrockFooter from './components/BedrockFooter';
import BackgroundRealCars from './components/BackgroundRealCars';
import Lenis from 'lenis';
import f1Data from './data/f1Data.json';
import { SEASON_CARD_PALETTES } from './data/themeColors';

const ERA_CHAPTERS = {
  2025: {
    year: 2025,
    name: 'The Ground Effect Aero Era',
    subName: 'Chapter IX • 2022 – Present',
    description: 'Sculpted venturi tunnels underneath the floor generate massive downforce, enabling close wheel-to-wheel duels at 220 mph.'
  },
  2021: {
    year: 2021,
    name: 'The Turbo-Hybrid Revolution',
    subName: 'Chapter VIII • 2014 – 2021',
    description: '1.6L turbocharged V6 engines paired with complex 120kW electric motor-generators. The most thermally efficient racing engines ever built.'
  },
  2013: {
    year: 2013,
    name: 'The Screaming V8 Era',
    subName: 'Chapter VII • 2006 – 2013',
    description: '2.4L naturally aspirated V8 engines singing at 18,000 RPM, exhaust blown diffusers, and Red Bull with Sebastian Vettel capturing 4 consecutive world titles.'
  },
  2005: {
    year: 2005,
    name: 'The Screaming V10 Golden Apex',
    subName: 'Chapter VI • 1995 – 2005',
    description: '3.0L naturally aspirated V10 powerhouses screaming up to 19,000+ RPM. Schumacher and Ferrari set benchmarks of relentless dominance.'
  },
  1994: {
    year: 1994,
    name: 'The 3.5L Atmospheric Era',
    subName: 'Chapter V • 1989 – 1994',
    description: 'High-revving 3.5L atmospheric V10 and V12 engines, active suspension wizardry, and the legendary clash of titans: Senna, Prost, Mansell, and young Schumacher.'
  },
  1988: {
    year: 1988,
    name: 'The 1,400 HP Turbo Monsters',
    subName: 'Chapter IV • 1977 – 1988',
    description: 'Qualifying boost dialled up to 5.5 bar producing flame-spitting power slides and legendary rivalries between Senna, Prost, and Mansell.'
  },
  1976: {
    year: 1976,
    name: 'Airboxes, Wings & Garage Innovators',
    subName: 'Chapter III • 1966 – 1976',
    description: 'Towering periscope airboxes, monstrous rear wings, the iconic Cosworth DFV V8, and the visceral Hunt vs Lauda duel.'
  },
  1965: {
    year: 1965,
    name: 'The 1.5L Rear-Engine Revolution',
    subName: 'Chapter II • 1961 – 1965',
    description: 'Lightweight monocoque engineering, rear-mounted compact engines, and the supreme mastery of Jim Clark and Lotus.'
  },
  1958: {
    year: 1958,
    name: 'The Silverstone Genesis',
    subName: 'Chapter I • 1950 – 1960',
    description: 'Front-engine cigar-shaped torpedoes with wire wheels, leather helmets, and drum brakes racing on post-war British airfields.'
  }
};

export default function App() {
  const seasons = f1Data.seasons || [];
  const milestones = f1Data.milestones || [];
  const latestYear = seasons[0]?.year || 2025;

  const [globalViewMode, setGlobalViewMode] = useState('drivers');
  const [currentYear, setCurrentYear] = useState(latestYear);
  const [seasonCardStyle, setSeasonCardStyle] = useState('glideslope');
  // Permanently locked in: Oxford Midnight Canvas (User-Selected Favorite)
  const [seasonCardPalette, setSeasonCardPalette] = useState('oxford-midnight-bg');

  const activePal = SEASON_CARD_PALETTES[seasonCardPalette] || SEASON_CARD_PALETTES['oxford-midnight-bg'];

  // Permanently locked in: Inertial Air Glide (Aerodynamic smooth inertial scrolling)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.4,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Map milestones by afterYear for O(1) lookup
  const milestonesByYear = useMemo(() => {
    const map = {};
    for (const m of milestones) {
      map[m.afterYear] = m;
    }
    return map;
  }, [milestones]);

  // Track active year with IntersectionObserver
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
  }, [seasons]);

  // Current era description based on active year
  const currentEra = useMemo(() => {
    const s = seasons.find(item => item.year === currentYear);
    return s?.era?.name || 'Grand Prix Era';
  }, [currentYear, seasons]);

  // Smooth scroll helper
  const handleJumpToYear = targetYear => {
    const latestYear = seasons[0]?.year;
    if (targetYear === latestYear && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(`year-${targetYear}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredSeasons = seasons;

  return (
    <div 
      className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900 font-body overflow-x-hidden transition-colors duration-500"
      style={{ 
        backgroundColor: activePal.pageBg || '#FFFFFF',
        color: activePal.bodyTextColor || '#1E40AF'
      }}
    >
      {/* Top Sticky Header with Theme Palette Switcher */}
      <Header
        viewMode={globalViewMode}
        setViewMode={setGlobalViewMode}
        onJumpToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        palette={activePal}
        currentPaletteId={seasonCardPalette}
        onSelectPalette={setSeasonCardPalette}
      />

      {/* Daylight Atmospheric Sky Background with Royal Blue Atmospheric Glow */}
      <div className="absolute top-0 left-0 right-0 h-[450px] pointer-events-none overflow-hidden z-0">
        <DaylightClouds />
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] rounded-full opacity-40 blur-3xl pointer-events-none transition-all duration-700"
          style={{
            background: activePal.glow || 'radial-gradient(circle, rgba(37, 99, 235, 0.32) 0%, rgba(30, 64, 175, 0.12) 60%, transparent 100%)'
          }}
        />
      </div>

      {/* Decade Side Scrubber */}
      <DecadeElevator
        currentYear={currentYear}
        onJumpToYear={handleJumpToYear}
        palette={activePal}
      />

      {/* Main Continuous Descent Stream */}
      <main className="px-4 pt-4 sm:pt-6 pb-12 max-w-5xl mx-auto relative z-10">

        {/* World Champion Archive Badge */}
        <div className="pt-2 sm:pt-4 pb-4 text-center select-none">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-2xs transition-colors"
            style={{
              backgroundColor: activePal.pageBg === '#FFFFFF' ? (activePal.navBg || 'rgba(30, 64, 175, 0.06)') : 'rgba(255, 255, 255, 0.15)',
              borderColor: activePal.pageBg === '#FFFFFF' ? (activePal.navBorder || 'rgba(30, 64, 175, 0.18)') : 'rgba(255, 255, 255, 0.28)',
              color: activePal.pageBg === '#FFFFFF' ? (activePal.navText || '#1E3A8A') : '#FFFFFF'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activePal.pageBg === '#FFFFFF' ? (activePal.accentColor || '#3B82F6') : '#93C5FD' }} />
            <span className="tracking-[0.2em] uppercase text-[10px] sm:text-[11px] font-bold">
              World Champion Archive
            </span>
          </div>
        </div>

        {filteredSeasons.map(season => {
          const milestone = milestonesByYear[season.year];
          const eraChapter = ERA_CHAPTERS[season.year];

          return (
            <React.Fragment key={season.year}>
              
              {/* Era Chapter Divider with Smooth Downforce Cushion Landing */}
              {eraChapter && (
                <LandingSection 
                  effect="ground-cushion" 
                  delay={0}
                  className="snap-section"
                >
                  <SkyLayerMarker 
                    layer={eraChapter} 
                    palette={seasonCardPalette}
                  />
                </LandingSection>
              )}

              {/* Season Standings Card with Floating Real Car in Sky Margin */}
              <div className="relative max-w-3xl xl:max-w-4xl mx-auto">
                <BackgroundRealCars year={season.year} />
                <LandingSection 
                  effect="ground-cushion" 
                  delay={80}
                  className="snap-section"
                >
                  <SeasonCard
                    season={season}
                    globalViewMode={globalViewMode}
                    seasonCardStyle={seasonCardStyle}
                    onSelectStyle={setSeasonCardStyle}
                    seasonCardPalette={seasonCardPalette}
                    onSelectPalette={setSeasonCardPalette}
                  />
                </LandingSection>
              </div>

              {/* Story milestone lore with Smooth Downforce Cushion Landing */}
              {milestone && (
                <LandingSection 
                  effect="ground-cushion" 
                  delay={120}
                  className="snap-section"
                >
                  <MilestoneCard 
                    milestone={milestone} 
                    palette={seasonCardPalette}
                  />
                </LandingSection>
              )}

            </React.Fragment>
          );
        })}
      </main>

      {/* Ground Touchdown at Silverstone Airfield (1950) */}
      <BedrockFooter 
        onReturnToSurface={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        palette={activePal}
      />

    </div>
  );
}
