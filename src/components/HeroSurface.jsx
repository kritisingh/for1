import React from 'react';
import DaylightClouds from './DaylightClouds';
import RealCarThumbnail from './RealCarThumbnail';
import DriverSketch from './DriverSketch';

export default function HeroSurface() {
  return (
    <section className="relative pt-8 pb-0 sm:pt-10 sm:pb-0 md:pt-12 md:pb-0 flex flex-col items-center justify-center text-center px-4 overflow-hidden select-none">
      
      {/* =========================================================================
          DAYLIGHT SKY & DRIFTING CLOUDS (Visual Sky Atmosphere)
          ========================================================================= */}
      <DaylightClouds />

      {/* Subtle morning sky sunlight glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] rounded-full pointer-events-none opacity-40 blur-3xl z-0"
        style={{
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.6) 0%, rgba(220, 235, 224, 0.4) 60%, transparent 100%)'
        }}
      />

      {/* =========================================================================
          AMBIENT BACKGROUND MACHINE & DRIVER SKETCH (Delicate, Non-Overlapping)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-between px-4 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        {/* Left: 2024 Champion Car */}
        <div className="hidden sm:block transform -rotate-6 transition-transform hover:scale-105 pointer-events-auto">
          <div className="animate-sticker-float">
            <RealCarThumbnail
              year={2024}
              chassisName="MCL38"
              teamName="McLaren"
              size="xs"
              showLabel={true}
            />
          </div>
        </div>

        {/* Right: Famous Driver Sketch (Daniel Ricciardo — The Honey Badger & Shoey) */}
        <div className="hidden sm:block transform rotate-6 transition-transform hover:scale-105 pointer-events-auto">
          <div className="animate-sticker-float-delayed">
            <DriverSketch driver="ricciardo" showTag={true} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          "Illustrated History of Grand Prix (1950 - 2025)"
          ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        
        <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-emerald-950 leading-tight">
          Illustrated History of Grand Prix (1950 - 2025)
        </h1>

        {/* Seamless Flight Vector connecting directly into Chapter IX */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center">
          <div className="w-[1.5px] h-8 border-l-2 border-dashed border-emerald-700/35" />
        </div>

      </div>

    </section>
  );
}
