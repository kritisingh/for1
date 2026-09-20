import React, { useState } from 'react';
import { getRealCarForYear } from '../data/realCarPhotos';

/**
 * Small, elegant real F1 car photo badge.
 * Always 100% visible (not hover-dependent), with NO "real car" text.
 */
export default function RealCarThumbnail({ 
  year = 2024, 
  chassisName, 
  teamName, 
  size = 'sm', // 'xs' | 'sm' | 'md' | 'lg'
  className = '',
  showLabel = true
}) {
  const [imgError, setImgError] = useState(false);

  const carData = getRealCarForYear(year);
  const displayChassis = chassisName || carData?.chassis || 'F1 Championship Car';
  const displayTeam = teamName || carData?.team || 'Formula 1';

  // Compact, delicate sizing - small, refined, and sticker-like (The Pudding style)
  const sizeClasses = {
    xs: 'w-24 h-14',
    sm: 'w-28 sm:w-32 h-16 sm:h-18',
    md: 'w-36 sm:w-40 h-20 sm:h-22',
    lg: 'w-44 sm:w-48 h-22 sm:h-24'
  };

  const currentSize = sizeClasses[size] || sizeClasses.sm;

  // Optimized photo URL (fast WebP cached via Cloudflare)
  const photoUrl = carData?.optimizedPhoto || carData?.photo || carData?.realPhoto;

  return (
    <div 
      className={`inline-flex flex-col items-center select-none ${className}`}
    >
      {/* Photo Badge - BORDERLESS, ALWAYS 100% VISIBLE (NOT HOVER-DEPENDENT) */}
      <div 
        className={`${currentSize} flex items-center justify-center relative select-none`}
      >
        {/* Real Car Photograph / Cutout (Pure borderless styling) */}
        {!imgError && photoUrl ? (
          <img
            src={photoUrl}
            alt={displayChassis}
            loading="lazy"
            referrerPolicy="no-referrer"
            className={`w-full h-full ${
              carData?.isCutout 
                ? 'object-contain filter drop-shadow-sm' 
                : 'object-cover rounded-xl shadow-2xs'
            }`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-stone-100/70 flex flex-col items-center justify-center text-center p-1 text-stone-500">
            <span className="font-semibold text-[11px] text-stone-700 leading-tight truncate max-w-[90%]">
              {displayChassis}
            </span>
            <span className="text-[9px] text-stone-400 mt-0.5">{year}</span>
          </div>
        )}
      </div>

      {/* Small Chassis & Team Label - ALWAYS VISIBLE */}
      {showLabel && (
        <div className="mt-1 text-center max-w-[130px]">
          <div className="text-[10px] font-bold text-stone-800 tracking-tight leading-tight truncate">
            {displayChassis}
          </div>
          <div className="text-[9px] text-stone-400 font-medium truncate">
            {displayTeam} • {year}
          </div>
        </div>
      )}
    </div>
  );
}
