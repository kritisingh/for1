/**
 * Formula 1 Design System — Permanent Color Palette
 * 
 * Chosen Theme: Figma Website Color Scheme 13 (Amber Walnut • Espresso Canvas)
 * - Deep Walnut Espresso Canvas: #4A413C
 * - Floating Crisp White Season Cards: #FFFFFF
 * - Burnt Amber Accents & CTAs: #BB6C43
 * - Morning Mist Linen Text: #EBEFEE
 * - Warm Walnut Sand: #CCB499
 * - Amber Clay Tan: #C8906D
 */

export const THEME_PALETTE = {
  id: 'amber-walnut-dark',
  name: 'Amber Walnut • Espresso Canvas',
  subname: 'Figma Scheme 13 • Deep Walnut Espresso Page with Crisp White Cards',
  fontGroup: 'warm',
  fontLabel: 'Walnut Espresso Canvas',
  tag: 'Figma Scheme 13',
  badge: 'Selected',
  emoji: '🪵',
  pageBg: '#4A413C',          // Deep Walnut Espresso Canvas (#4A413C)
  pageTextColor: '#EBEFEE',    // Morning Mist Linen Text (#EBEFEE)
  headerBg: 'rgba(74, 65, 60, 0.96)',
  glow: 'radial-gradient(circle, rgba(187, 108, 67, 0.45) 0%, rgba(200, 144, 109, 0.20) 60%, transparent 100%)',
  bg: '#FFFFFF',              // Crisp Pure White Cards
  bgCard: '#FAF8F5',          // Warm Walnut Linen Inner Card
  bgSubtle: '#CCB499',        // Walnut Sand
  border: 'rgba(74, 65, 60, 0.16)',
  borderSubtle: 'rgba(74, 65, 60, 0.08)',
  titleColor: '#4A413C',      // Deep Walnut Charcoal
  accentColor: '#BB6C43',     // Burnt Amber
  popColor: '#BB6C43',        // Burnt Amber
  subtextColor: '#C8906D',    // Amber Clay Tan
  bodyTextColor: '#4A413C',   // Deep Walnut Espresso
  badgeBg: '#EDE2D4',         // Soft Walnut Sand
  badgeText: '#4A413C',
  badgeBorder: 'rgba(74, 65, 60, 0.18)',
  tableRowHover: 'rgba(187, 108, 67, 0.06)',
  navActiveBg: '#BB6C43',     // Burnt Amber Active Pill
  navActiveText: '#FFFFFF',
  navText: '#EBEFEE',
  navBorder: 'rgba(235, 239, 238, 0.25)',
  navBg: 'rgba(255, 255, 255, 0.12)',
  connectorColor: 'rgba(187, 108, 67, 0.55)',
  primaryDot: '#EBEFEE',
  secondaryDot: '#BB6C43',
  description: 'Figma Scheme 13 Deep Walnut Espresso Canvas (#4A413C) with floating crisp white cards and burnt amber accents.'
};

export const SEASON_CARD_PALETTES = {
  'amber-walnut-dark': THEME_PALETTE,
  'espresso-canvas': THEME_PALETTE,
  // Fallbacks for any legacy session IDs to prevent broken renders
  'amber-walnut-morning': THEME_PALETTE,
  'amber-walnut-sand': THEME_PALETTE,
  'happy-hues-11': THEME_PALETTE,
  'happy-hues-11-dark': THEME_PALETTE,
  'oxford-midnight-bg': THEME_PALETTE
};

export const PALETTE_GROUPS = [
  {
    groupName: 'Selected Palette',
    palettes: ['amber-walnut-dark']
  }
];

export const LIGHT_THEMES = [];
