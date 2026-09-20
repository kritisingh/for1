import React, { useRef, useState, useEffect } from 'react';

/**
 * LandingSection — High-Visibility "Fly Down & Landing" Motion Container
 * 
 * Uses hardware-accelerated CSS keyframe animations:
 * 1. glide-settle: Descends 55px from above, settling cushioned with ground effect
 * 2. touchdown-flare: 3D perspective pitch tilt (7deg) leveling out flat onto tarmac
 * 3. cloud-break: Descends out of cloud mist (blur 14px) into crystalline focus
 * 4. ground-cushion: Rapid descent with downforce suction and micro-dampened spring
 */

export default function LandingSection({ 
  children, 
  delay = 0,
  className = ''
}) {
  const ref = useRef(null);
  const [hasLanded, setHasLanded] = useState(false);

  // Scroll detection via IntersectionObserver: triggers as each section enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already within viewport on initial load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setHasLanded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLanded(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!hasLanded) {
      return 'opacity-0 -translate-y-8 pointer-events-none transition-all duration-300';
    }
    return 'anim-landing-cushion';
  };

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}
