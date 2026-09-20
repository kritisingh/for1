import React from 'react';

/**
 * Ultra-soft, diffused atmospheric morning mist.
 * Completely organic and feathered (NO cartoon vector shapes, NO clip-art outlines).
 * Seamlessly blends with the Morning Mist palette like real daylight sky vapor.
 */
export default function DaylightClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      
      {/* Top Left Soft Daylight Vapor */}
      <div 
        className="absolute -top-20 -left-28 w-[46rem] h-[24rem] rounded-full opacity-50 blur-3xl animate-cloud-slow"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 75%)'
        }}
      />

      {/* Top Right Luminous Sky Haze */}
      <div 
        className="absolute -top-24 -right-24 w-[42rem] h-[26rem] rounded-full opacity-55 blur-3xl animate-cloud-fast"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(245, 243, 255, 0.5) 45%, transparent 75%)'
        }}
      />

      {/* Center Delicate Mist Drift */}
      <div 
        className="absolute top-36 left-1/2 -translate-x-1/2 w-[52rem] h-[18rem] rounded-full opacity-35 blur-3xl animate-cloud-slow"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 80%)'
        }}
      />

    </div>
  );
}
