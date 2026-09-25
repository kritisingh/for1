/**
 * Curated Modern, Subtle, Trendy Light Color Palettes.
 * Crafted specifically for an elegant, editorial design aesthetic.
 */
export const LIGHT_THEMES = [
  {
    id: 'sage',
    name: 'Pistachio Sage',
    subname: 'Modern Botanical Minimalism',
    bg: '#EFF5EE',       // Pale pistachio / matcha sage whisper
    cardBg: '#FFFFFF',
    border: '#DCE8DB',
    headerBg: 'rgba(239, 245, 238, 0.96)',
    accent: '#059669',
    accentLight: '#D1FAE5',
    accentText: '#065F46',
    swatchColor: '#DFEDE0',
    swatchBorder: '#B8D8BA',
    tag: 'Botanical & Calming',
    emoji: '🌿',
    description: 'A delicate whisper of pale pistachio and matcha sage green. Calming, contemporary, and grounded in modern Scandinavian botanical aesthetics.'
  },
  {
    id: 'butter',
    name: 'Butter Yellow',
    subname: 'Trending Soft Chiffon Cream',
    bg: '#FEF9E7',       // Trending butter yellow / soft chiffon
    cardBg: '#FFFFFF',
    border: '#F5ECCB',
    headerBg: 'rgba(254, 249, 231, 0.96)',
    accent: '#D97706',
    accentLight: '#FEF3C7',
    accentText: '#B45309',
    swatchColor: '#FDF2C8',
    swatchBorder: '#EEDC9A',
    tag: 'Trending & Warm',
    emoji: '🧈',
    description: 'Soft butter yellow — the #1 trending luxury tone in fashion and interior design. Warm, creamy, and evocative of morning sunlight on vellum paper.'
  },
  {
    id: 'mimosa',
    name: 'Solar Mimosa',
    subname: 'Sun-Drenched Golden Warmth',
    bg: '#FDF5DF',       // Golden honey / mimosa glow
    cardBg: '#FFFFFF',
    border: '#F1E3B8',
    headerBg: 'rgba(253, 245, 223, 0.96)',
    accent: '#CA8A04',
    accentLight: '#FEF9C3',
    accentText: '#854D0E',
    swatchColor: '#FBE8B3',
    swatchBorder: '#E5CD82',
    tag: 'Golden & Cheerful',
    emoji: '☀️',
    description: 'A richer, sun-drenched golden mimosa hue. Bright, warm, and full of vintage Grand Prix racing optimism.'
  },
  {
    id: 'lavender',
    name: 'Morning Mist',
    subname: 'Ethereal Pale Lilac',
    bg: '#F5F4F8',       // Delicate lilac / cloud grey
    cardBg: '#FFFFFF',
    border: '#ECE7F2',
    headerBg: 'rgba(245, 244, 248, 0.96)',
    accent: '#7C3AED',
    accentLight: '#EDE9FE',
    accentText: '#5B21B6',
    swatchColor: '#EBE7F4',
    swatchBorder: '#D4CDE6',
    tag: 'Dreamy & Modern',
    emoji: '☁️',
    description: 'An ethereal pale lilac-grey that feels airy, creative, and gentle. Adds a subtle digital-native sophistication.'
  },
  {
    id: 'alabaster',
    name: 'Warm Alabaster',
    subname: 'The Pudding / Kinfolk Editorial',
    bg: '#FAF8F5',       // Soft warm linen / alabaster
    cardBg: '#FFFFFF',
    border: '#EFECE6',
    headerBg: 'rgba(250, 248, 245, 0.96)',
    accent: '#E11D48',
    accentLight: '#FEE2E2',
    accentText: '#9F1239',
    swatchColor: '#FAF8F5',
    swatchBorder: '#E5DFD5',
    tag: 'Warm & Organic',
    emoji: '📜',
    description: 'Soft warm linen tone that replaces stark clinical white with a cozy, inviting editorial paper texture.'
  },
  {
    id: 'blush',
    name: 'Blush Cashmere',
    subname: 'Soft Rose Quartz & Silk',
    bg: '#FBF5F5',       // Petal-soft warm blush
    cardBg: '#FFFFFF',
    border: '#F4E7E7',
    headerBg: 'rgba(251, 245, 245, 0.96)',
    accent: '#BE123C',
    accentLight: '#FFE4E6',
    accentText: '#881337',
    swatchColor: '#F7EBEB',
    swatchBorder: '#EAD1D1',
    tag: 'Soft Feminine Chic',
    emoji: '🌸',
    description: 'A delicate, petal-soft blush inspired by luxury editorial magazines. Warm, contemporary, and distinctly chic.'
  },
  {
    id: 'sky',
    name: 'Nordic Sky',
    subname: 'Crisp Porcelain & Pale Blue',
    bg: '#F2F6F9',       // Cool morning breeze
    cardBg: '#FFFFFF',
    border: '#DFEAF2',
    headerBg: 'rgba(242, 246, 249, 0.96)',
    accent: '#0284C7',
    accentLight: '#E0F2FE',
    accentText: '#0369A1',
    swatchColor: '#E2EEF6',
    swatchBorder: '#C8DEEE',
    tag: 'Crisp & Airy',
    emoji: '🌊',
    description: 'A refreshing morning sky breeze. Crisp, cool porcelain tint evoking speed, altitude, and clarity.'
  },
  {
    id: 'chalk',
    name: 'Pure Gallery',
    subname: 'Museum Gallery White',
    bg: '#FFFFFF',       // Pure clean white
    cardBg: '#FFFFFF',
    border: '#E7E5E4',
    headerBg: 'rgba(255, 255, 255, 0.96)',
    accent: '#E11D48',
    accentLight: '#FEE2E2',
    accentText: '#9F1239',
    swatchColor: '#FFFFFF',
    swatchBorder: '#D6D3D1',
    tag: 'Pure & Clean',
    emoji: '🏛️',
    description: 'Crisp, high-contrast gallery white for maximum photographic focus and clean Scandinavian typography.'
  }
];

/**
 * Curated Section Color Combinations for the Flight Glideslope Season Cards.
 * Features Green background + Yellow font, plus historical and technical pairings.
 */
export const SEASON_CARD_PALETTES = {
  // =========================================================================
  // OXFORD MIDNIGHT ROYAL CANVAS (Permanent Selection)
  // =========================================================================
  'oxford-midnight-bg': {
    id: 'oxford-midnight-bg',
    name: 'Oxford Midnight Canvas',
    subname: 'Midnight Oxford Blue Page with White Cards',
    fontGroup: 'blue',
    fontLabel: 'Oxford Navy Page',
    tag: 'Oxford Midnight',
    badge: 'Selected',
    emoji: '🏛️',
    pageBg: '#0F1E36',          // Oxford Midnight Navy-Royal
    pageTextColor: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(15, 30, 54, 0.15) 60%, transparent 100%)',
    bg: '#FFFFFF',
    bgCard: '#FAFBFD',
    bgSubtle: '#F1F5F9',
    border: '#CBD5E1',
    borderSubtle: 'rgba(15, 30, 54, 0.12)',
    titleColor: '#0F1E36',
    accentColor: '#1D4ED8',
    subtextColor: '#1E3A8A',
    bodyTextColor: '#1E293B',
    badgeBg: '#F1F5F9',
    badgeText: '#0F1E36',
    badgeBorder: '#CBD5E1',
    tableRowHover: 'rgba(15, 30, 54, 0.04)',
    navActiveBg: '#0F1E36',
    navActiveText: '#FFFFFF',
    navText: '#0F1E36',
    navBorder: 'rgba(15, 30, 54, 0.20)',
    navBg: '#F8FAFC',
    connectorColor: 'rgba(255, 255, 255, 0.60)',
    primaryDot: '#0F1E36',
    secondaryDot: '#FFFFFF',
    description: 'Bespoke British luxury aesthetic: deepest Oxford midnight blue page canvas with crisp white cards.'
  },
  'royal-bg-white-cards': {
    id: 'royal-bg-white-cards',
    name: 'Royal Blue Canvas & White Cards',
    subname: 'Royal Blue Page Background with Pure White Cards',
    fontGroup: 'blue',
    fontLabel: 'Royal Blue Page Canvas',
    tag: 'Royal Blue Background',
    badge: 'Vibrant',
    emoji: '🔵',
    pageBg: '#1E3A8A',          // Royal Blue Page Background (Tailwind Blue 900)
    pageTextColor: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(37, 99, 235, 0.15) 60%, transparent 100%)',
    bg: '#FFFFFF',              // Pure White Card Surface
    bgCard: '#FFFFFF',          // Pure White Inner Card
    bgSubtle: '#F0F6FF',        // Soft Ice-Royal Blue Inset
    border: '#BFDBFE',          // Soft Royal Blue Border
    borderSubtle: 'rgba(30, 64, 175, 0.12)',
    titleColor: '#1E3A8A',      // Deep Royal Blue Font
    accentColor: '#2563EB',     // Vibrant Royal Blue Accent
    subtextColor: '#2563EB',    // Royal Blue Subtext & Metadata
    bodyTextColor: '#1E40AF',   // Rich Royal Blue Body Font
    badgeBg: '#EFF6FF',
    badgeText: '#1E3A8A',
    badgeBorder: '#BFDBFE',
    tableRowHover: 'rgba(37, 99, 235, 0.05)',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navText: '#1E3A8A',
    navBorder: 'rgba(30, 64, 175, 0.18)',
    navBg: '#F0F6FF',
    connectorColor: 'rgba(255, 255, 255, 0.65)',
    primaryDot: '#1E3A8A',
    secondaryDot: '#FFFFFF',
    description: 'Immersive Royal Blue page background with clean, high-contrast pure white cards, royal blue typography, and luminous white connectors.'
  },
  'cobalt-bg-white-cards': {
    id: 'cobalt-bg-white-cards',
    name: 'Electric Cobalt Canvas',
    subname: 'Vibrant Cobalt Page with Pure White Cards',
    fontGroup: 'blue',
    fontLabel: 'Electric Cobalt Page',
    tag: 'Vibrant Page',
    badge: 'High Energy',
    emoji: '⚡',
    pageBg: '#1D4ED8',          // Electric Cobalt Blue Page Background
    pageTextColor: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(29, 78, 216, 0.15) 60%, transparent 100%)',
    bg: '#FFFFFF',
    bgCard: '#F8FAFF',
    bgSubtle: '#EBF3FF',
    border: '#93C5FD',
    borderSubtle: 'rgba(29, 78, 216, 0.14)',
    titleColor: '#1D4ED8',
    accentColor: '#0284C7',
    subtextColor: '#2563EB',
    bodyTextColor: '#1E3A8A',
    badgeBg: '#DBEAFE',
    badgeText: '#1D4ED8',
    badgeBorder: '#93C5FD',
    tableRowHover: 'rgba(29, 78, 216, 0.06)',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navText: '#1D4ED8',
    navBorder: 'rgba(29, 78, 216, 0.22)',
    navBg: '#EFF6FF',
    connectorColor: 'rgba(255, 255, 255, 0.70)',
    primaryDot: '#1D4ED8',
    secondaryDot: '#FFFFFF',
    description: 'High-energy modern electric cobalt page background with crisp white floating cards and azure highlights.'
  },

  // =========================================================================
  // WHITE BACKGROUND & BLUE FONT
  // =========================================================================
  'royal-white': {
    id: 'royal-white',
    name: 'Classic Royal on White',
    subname: 'Pure White Background & Deep Royal Blue Font',
    fontGroup: 'blue',
    fontLabel: 'Royal Blue Font',
    tag: 'White Bg & Blue Font',
    badge: 'Recommended',
    emoji: '💎',
    pageBg: '#FFFFFF',          // Pure Crisp White Background
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(147, 197, 253, 0.08) 60%, transparent 100%)',
    bg: '#FFFFFF',              // Pure Crisp White Card Surface
    bgCard: '#FFFFFF',          // Pure White Inner Card
    bgSubtle: '#F0F6FF',        // Soft Ice Blue Inset
    border: '#BFDBFE',          // Soft Royal Blue Border
    borderSubtle: 'rgba(30, 64, 175, 0.12)',
    titleColor: '#1E3A8A',      // Deep Royal Blue Font (Years, Driver Names, Titles)
    accentColor: '#2563EB',     // Vibrant Royal Blue Accent
    subtextColor: '#2563EB',    // Royal Blue Subtext & Metadata
    bodyTextColor: '#1E40AF',   // Royal Blue Body Font
    badgeBg: '#EFF6FF',
    badgeText: '#1E3A8A',
    badgeBorder: '#BFDBFE',
    tableRowHover: 'rgba(37, 99, 235, 0.05)',
    navActiveBg: '#1D4ED8',     // Solid Royal Blue for Active Controls
    navActiveText: '#FFFFFF',   // White Text for Active Controls
    navText: '#1E3A8A',         // Royal Blue for Inactive Controls
    navBorder: 'rgba(30, 64, 175, 0.18)',
    navBg: '#F0F6FF',
    connectorColor: 'rgba(37, 99, 235, 0.40)',
    primaryDot: '#FFFFFF',
    secondaryDot: '#1E3A8A',
    description: 'Crisp editorial look with pure white background and pure white cards framed by clean soft blue borders, with deep Royal Blue typography, titles, and accents.'
  },
  'electric-azure-white': {
    id: 'electric-azure-white',
    name: 'Electric Azure on White',
    subname: 'Pure White & Saturated Cobalt Blue Font',
    fontGroup: 'blue',
    fontLabel: 'Electric Cobalt Font',
    tag: 'Vibrant & Modern',
    badge: 'High Contrast',
    emoji: '⚡',
    pageBg: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(56, 189, 248, 0.08) 60%, transparent 100%)',
    bg: '#FFFFFF',
    bgCard: '#F8FAFF',
    bgSubtle: '#EBF3FF',
    border: '#93C5FD',
    borderSubtle: 'rgba(29, 78, 216, 0.14)',
    titleColor: '#1D4ED8',
    accentColor: '#0284C7',
    subtextColor: '#2563EB',
    bodyTextColor: '#1E3A8A',
    badgeBg: '#DBEAFE',
    badgeText: '#1D4ED8',
    badgeBorder: '#93C5FD',
    tableRowHover: 'rgba(29, 78, 216, 0.06)',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navText: '#1D4ED8',
    navBorder: 'rgba(29, 78, 216, 0.22)',
    navBg: '#EFF6FF',
    connectorColor: 'rgba(29, 78, 216, 0.40)',
    primaryDot: '#FFFFFF',
    secondaryDot: '#1D4ED8',
    description: 'Vibrant modern telemetry style: pure white background and surfaces combined with electric cobalt and azure blue typography for ultra-crisp legibility.'
  },
  'oxford-navy-white': {
    id: 'oxford-navy-white',
    name: 'Oxford Midnight on White',
    subname: 'Pure White & Deepest Oxford Blue Font',
    fontGroup: 'blue',
    fontLabel: 'Oxford Navy Font',
    tag: 'Classic Heritage',
    badge: 'Luxury',
    emoji: '🏛️',
    pageBg: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(15, 30, 54, 0.12) 0%, rgba(148, 163, 184, 0.08) 60%, transparent 100%)',
    bg: '#FFFFFF',
    bgCard: '#FAFBFD',
    bgSubtle: '#F1F5F9',
    border: '#CBD5E1',
    borderSubtle: 'rgba(15, 30, 54, 0.12)',
    titleColor: '#0F1E36',
    accentColor: '#1D4ED8',
    subtextColor: '#1E3A8A',
    bodyTextColor: '#1E293B',
    badgeBg: '#F1F5F9',
    badgeText: '#0F1E36',
    badgeBorder: '#CBD5E1',
    tableRowHover: 'rgba(15, 30, 54, 0.04)',
    navActiveBg: '#0F1E36',
    navActiveText: '#FFFFFF',
    navText: '#0F1E36',
    navBorder: 'rgba(15, 30, 54, 0.20)',
    navBg: '#F8FAFC',
    connectorColor: 'rgba(15, 30, 54, 0.35)',
    primaryDot: '#FFFFFF',
    secondaryDot: '#0F1E36',
    description: 'Timeless British luxury aesthetic: crisp pure white canvas with deepest Oxford midnight blue serif typography.'
  },
  'french-bleu-white': {
    id: 'french-bleu-white',
    name: 'Bleu de France on White',
    subname: 'Pure White & Historic Racing Blue Font',
    fontGroup: 'blue',
    fontLabel: 'Bleu de France Font',
    tag: 'Vintage Racing',
    badge: 'Heritage',
    emoji: '🏎️',
    pageBg: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.95)',
    glow: 'radial-gradient(circle, rgba(37, 90, 168, 0.14) 0%, rgba(147, 197, 253, 0.08) 60%, transparent 100%)',
    bg: '#FFFFFF',
    bgCard: '#FFFFFF',
    bgSubtle: '#F0F5FC',
    border: '#BFD4EE',
    borderSubtle: 'rgba(37, 90, 168, 0.14)',
    titleColor: '#255AA8',
    accentColor: '#1D498A',
    subtextColor: '#255AA8',
    bodyTextColor: '#1E3A8A',
    badgeBg: '#F0F5FC',
    badgeText: '#255AA8',
    badgeBorder: '#BFD4EE',
    tableRowHover: 'rgba(37, 90, 168, 0.05)',
    navActiveBg: '#255AA8',
    navActiveText: '#FFFFFF',
    navText: '#255AA8',
    navBorder: 'rgba(37, 90, 168, 0.20)',
    navBg: '#F0F5FC',
    connectorColor: 'rgba(37, 90, 168, 0.35)',
    primaryDot: '#FFFFFF',
    secondaryDot: '#255AA8',
    description: 'Vintage Grand Prix Bugatti and Alpine heritage: pure gallery white with Bleu de France typography.'
  },

  // =========================================================================
  // INVERTED OPTIONS (Blue Decks & White Font)
  // =========================================================================
  'royal-monaco': {
    id: 'royal-monaco',
    name: 'Royal Monaco (Blue Card)',
    subname: 'Royal Blue Decks & Crisp White Font',
    fontGroup: 'white',
    fontLabel: 'Crisp White Font',
    tag: 'Classic Royal Blue',
    badge: 'Recommended',
    emoji: '👑',
    pageBg: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.94)',
    glow: 'radial-gradient(circle, rgba(37, 99, 235, 0.32) 0%, rgba(30, 64, 175, 0.12) 60%, transparent 100%)',
    bg: '#1E3A8A',           // Deep Royal Blue
    bgCard: '#172554',       // Midnight Royal Navy
    bgSubtle: '#1E293B',     // Slate Inset
    border: '#3B82F6',       // Electric Blue Accent Border
    borderSubtle: 'rgba(255, 255, 255, 0.16)',
    titleColor: '#FFFFFF',   // Pure White
    accentColor: '#60A5FA',  // Luminous Azure
    subtextColor: '#BFDBFE', // Pale Ice Blue
    bodyTextColor: '#F8FAFC',// Bright White
    badgeBg: 'rgba(255, 255, 255, 0.12)',
    badgeText: '#FFFFFF',
    badgeBorder: 'rgba(255, 255, 255, 0.28)',
    tableRowHover: 'rgba(255, 255, 255, 0.08)',
    navActiveBg: '#1D4ED8',
    navActiveText: '#FFFFFF',
    navText: '#1E3A8A',
    navBorder: 'rgba(30, 58, 138, 0.18)',
    navBg: 'rgba(30, 58, 138, 0.06)',
    connectorColor: 'rgba(37, 99, 235, 0.50)',
    primaryDot: '#1E40AF',
    secondaryDot: '#FFFFFF',
    description: 'The iconic Grand Prix aesthetic: commanding Royal Blue cockpit decks with brilliant crisp white typography and vivid electric azure accents on a pure gallery white canvas.'
  },
  'azure-porcelain': {
    id: 'azure-porcelain',
    name: 'Azure Porcelain',
    subname: 'Pure White Deck with Royal Blue Ink',
    fontGroup: 'dark',
    fontLabel: 'Royal Blue Ink Font',
    tag: 'Minimalist White Card',
    badge: 'Editorial',
    emoji: '❄️',
    pageBg: '#F8FAFC',
    headerBg: 'rgba(248, 250, 252, 0.94)',
    glow: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(147, 197, 253, 0.12) 60%, transparent 100%)',
    bg: '#FFFFFF',           // Crisp White Deck
    bgCard: '#F0F6FE',       // Porcelain Azure
    bgSubtle: '#E2EDFD',     // Ice Inset
    border: '#93C5FD',       // Sky Border
    borderSubtle: 'rgba(30, 64, 175, 0.12)',
    titleColor: '#1E3A8A',   // Deep Royal Blue
    accentColor: '#2563EB',  // Vibrant Royal Blue
    subtextColor: '#1D4ED8', // Navy Blue
    bodyTextColor: '#0F172A',// Slate Obsidian
    badgeBg: 'rgba(37, 99, 235, 0.08)',
    badgeText: '#1E3A8A',
    badgeBorder: 'rgba(37, 99, 235, 0.25)',
    tableRowHover: 'rgba(37, 99, 235, 0.04)',
    navActiveBg: '#1E3A8A',
    navActiveText: '#FFFFFF',
    navText: '#1E3A8A',
    navBorder: 'rgba(30, 64, 175, 0.16)',
    navBg: 'rgba(30, 64, 175, 0.06)',
    connectorColor: 'rgba(37, 99, 235, 0.35)',
    primaryDot: '#FFFFFF',
    secondaryDot: '#1E3A8A',
    description: 'Clean Scandinavian editorial minimalism. Crisp white surfaces framed by royal blue borders, ice-tinted porcelain insets, and dark royal blue typography.'
  },
  'electric-cobalt': {
    id: 'electric-cobalt',
    name: 'Electric Cobalt',
    subname: 'Vibrant Cobalt & Luminous White',
    fontGroup: 'white',
    fontLabel: 'Bright White Font',
    tag: 'High Velocity',
    badge: 'Modern Aero',
    emoji: '⚡',
    pageBg: '#F0F4FA',
    headerBg: 'rgba(240, 244, 250, 0.94)',
    glow: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(56, 189, 248, 0.20) 60%, transparent 100%)',
    bg: '#1D4ED8',           // Vibrant Cobalt
    bgCard: '#1E3A8A',       // Deep Cobalt
    bgSubtle: '#172554',     // Dark Cobalt
    border: '#60A5FA',       // Cyan-Blue Glow
    borderSubtle: 'rgba(255, 255, 255, 0.22)',
    titleColor: '#FFFFFF',   // Brilliant White
    accentColor: '#38BDF8',  // Electric Cyan
    subtextColor: '#BAE6FD', // Pale Cyan
    bodyTextColor: '#F0F9FF',// Frost White
    badgeBg: 'rgba(255, 255, 255, 0.15)',
    badgeText: '#FFFFFF',
    badgeBorder: 'rgba(255, 255, 255, 0.35)',
    tableRowHover: 'rgba(255, 255, 255, 0.10)',
    navActiveBg: '#2563EB',
    navActiveText: '#FFFFFF',
    navText: '#1D4ED8',
    navBorder: 'rgba(29, 78, 216, 0.20)',
    navBg: 'rgba(29, 78, 216, 0.06)',
    connectorColor: 'rgba(56, 189, 248, 0.50)',
    primaryDot: '#1D4ED8',
    secondaryDot: '#38BDF8',
    description: 'High-octane modern Formula 1 night telemetry vibe. Electric cobalt blue surfaces accented with neon cyan highlights and brilliant white text.'
  },
  'royal-oxford': {
    id: 'royal-oxford',
    name: 'Royal Oxford & Silver',
    subname: 'Oxford Midnight & Polished Silver White',
    fontGroup: 'white',
    fontLabel: 'Silver White Font',
    tag: 'Luxury Chronograph',
    badge: 'Timeless',
    emoji: '🏛️',
    pageBg: '#FAFBFD',
    headerBg: 'rgba(250, 251, 253, 0.94)',
    glow: 'radial-gradient(circle, rgba(30, 58, 138, 0.25) 0%, rgba(148, 163, 184, 0.15) 60%, transparent 100%)',
    bg: '#0F1E36',           // Oxford Midnight
    bgCard: '#182A4A',       // Deep Oxford
    bgSubtle: '#0B1526',     // Inset Obsidian
    border: 'rgba(203, 213, 225, 0.35)', // Silver Border
    borderSubtle: 'rgba(255, 255, 255, 0.14)',
    titleColor: '#FFFFFF',   // Pure White
    accentColor: '#93C5FD',  // Ice Blue Highlight
    subtextColor: '#CBD5E1', // Platinum Silver
    bodyTextColor: '#F1F5F9',// Crisp Silver White
    badgeBg: 'rgba(255, 255, 255, 0.10)',
    badgeText: '#FFFFFF',
    badgeBorder: 'rgba(203, 213, 225, 0.30)',
    tableRowHover: 'rgba(255, 255, 255, 0.06)',
    navActiveBg: '#0F1E36',
    navActiveText: '#FFFFFF',
    navText: '#0F1E36',
    navBorder: 'rgba(15, 30, 54, 0.20)',
    navBg: 'rgba(15, 30, 54, 0.06)',
    connectorColor: 'rgba(30, 58, 138, 0.40)',
    primaryDot: '#0F1E36',
    secondaryDot: '#E2E8F0',
    description: 'Prestige luxury and chronograph-inspired styling. Deep Oxford midnight blue paired with cool platinum silver borders and pure white typography.'
  },
  'french-racing': {
    id: 'french-racing',
    name: 'French Racing Blue',
    subname: 'Historic Bleu de France & Gallery White',
    fontGroup: 'white',
    fontLabel: 'Pure White Font',
    tag: 'Historic Heritage',
    badge: 'Vintage',
    emoji: '🏎️',
    pageBg: '#FFFFFF',
    headerBg: 'rgba(255, 255, 255, 0.94)',
    glow: 'radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(96, 165, 250, 0.15) 60%, transparent 100%)',
    bg: '#255AA8',           // French Racing Blue
    bgCard: '#1D498A',       // Deep Alpine Blue
    bgSubtle: '#16396E',
    border: 'rgba(255, 255, 255, 0.30)',
    borderSubtle: 'rgba(255, 255, 255, 0.16)',
    titleColor: '#FFFFFF',
    accentColor: '#93C5FD',
    subtextColor: '#DBEAFE',
    bodyTextColor: '#F8FAFC',
    badgeBg: 'rgba(255, 255, 255, 0.14)',
    badgeText: '#FFFFFF',
    badgeBorder: 'rgba(255, 255, 255, 0.32)',
    tableRowHover: 'rgba(255, 255, 255, 0.08)',
    navActiveBg: '#255AA8',
    navActiveText: '#FFFFFF',
    navText: '#255AA8',
    navBorder: 'rgba(37, 90, 168, 0.20)',
    navBg: 'rgba(37, 90, 168, 0.06)',
    connectorColor: 'rgba(37, 90, 168, 0.45)',
    primaryDot: '#255AA8',
    secondaryDot: '#FFFFFF',
    description: 'Evocative of historic Bugatti, Matra, and Alpine Formula 1 teams in Bleu de France. Saturated, authentic, and distinctly European.'
  },

  // =========================================================================
  // 1. BLACK FONT ON LIGHT GREEN (Editorial, High-Contrast, Literary)
  // =========================================================================
  'celadon-black': {
    id: 'celadon-black',
    name: 'Pale Celadon',
    fontGroup: 'black',
    fontLabel: 'Jet Black Font',
    tag: 'Light Celadon Card',
    emoji: '🌱',
    bg: '#D4E6D6',           // Light celadon green
    bgCard: '#E2EFE3',       // Porcelain surface
    bgSubtle: '#C4DDC7',     // Inset tone
    border: '#9EC2A0',       // Botanical border
    borderSubtle: 'rgba(0, 0, 0, 0.12)',
    titleColor: '#000000',   // Pure Black
    accentColor: '#047857',  // Rich Emerald
    subtextColor: '#1A3320', // Charcoal Forest Green
    bodyTextColor: '#111827',// Obsidian Black
    badgeBg: 'rgba(0, 0, 0, 0.08)',
    badgeText: '#000000',
    badgeBorder: 'rgba(0, 0, 0, 0.25)',
    tableRowHover: 'rgba(0, 0, 0, 0.05)'
  },
  'frosted-black': {
    id: 'frosted-black',
    name: 'Frosted Pistachio',
    fontGroup: 'black',
    fontLabel: 'Ink Black Font',
    tag: 'Airy Matcha Mist',
    emoji: '✨',
    bg: '#E2EDE3',           // Airy matcha mist
    bgCard: '#ECF5ED',       // Luminous frosted surface
    bgSubtle: '#D1E5D3',
    border: '#B0CEB3',
    borderSubtle: 'rgba(0, 0, 0, 0.10)',
    titleColor: '#000000',   // Pure Black
    accentColor: '#059669',  // Vibrant Mint Emerald
    subtextColor: '#1F2E22',
    bodyTextColor: '#0F172A',
    badgeBg: 'rgba(0, 0, 0, 0.08)',
    badgeText: '#000000',
    badgeBorder: 'rgba(0, 0, 0, 0.22)',
    tableRowHover: 'rgba(0, 0, 0, 0.04)'
  },
  'sage-black': {
    id: 'sage-black',
    name: 'Soft Sage',
    fontGroup: 'black',
    fontLabel: 'Pitch Black Font',
    tag: 'Botanical Sage',
    emoji: '🌿',
    bg: '#C5DAC7',           // Soft botanical sage
    bgCard: '#D3E4D5',
    bgSubtle: '#B5CFB8',
    border: '#91B894',
    borderSubtle: 'rgba(0, 0, 0, 0.12)',
    titleColor: '#000000',
    accentColor: '#15803D',
    subtextColor: '#1A3020',
    bodyTextColor: '#111827',
    badgeBg: 'rgba(0, 0, 0, 0.08)',
    badgeText: '#000000',
    badgeBorder: 'rgba(0, 0, 0, 0.25)',
    tableRowHover: 'rgba(0, 0, 0, 0.05)'
  },
  'matcha-black': {
    id: 'matcha-black',
    name: 'Matcha Light',
    fontGroup: 'black',
    fontLabel: 'Carbon Black Font',
    tag: 'Warm Japanese Tea',
    emoji: '🍵',
    bg: '#B8D6BC',           // Velvety matcha green
    bgCard: '#C7E2CA',
    bgSubtle: '#A7C9AB',
    border: '#82B386',
    borderSubtle: 'rgba(0, 0, 0, 0.14)',
    titleColor: '#000000',
    accentColor: '#166534',
    subtextColor: '#162E1A',
    bodyTextColor: '#0F172A',
    badgeBg: 'rgba(0, 0, 0, 0.08)',
    badgeText: '#000000',
    badgeBorder: 'rgba(0, 0, 0, 0.28)',
    tableRowHover: 'rgba(0, 0, 0, 0.06)'
  },
  'olive-black': {
    id: 'olive-black',
    name: 'Olive Tea',
    fontGroup: 'black',
    fontLabel: 'Obsidian Black Font',
    tag: 'Earthy Olive Tone',
    emoji: '🫒',
    bg: '#C2D5B5',           // Soft muted olive green
    bgCard: '#CEE0C2',
    bgSubtle: '#B2C9A4',
    border: '#8EA87E',
    borderSubtle: 'rgba(0, 0, 0, 0.12)',
    titleColor: '#000000',
    accentColor: '#3F6212',
    subtextColor: '#1E2E14',
    bodyTextColor: '#111827',
    badgeBg: 'rgba(0, 0, 0, 0.08)',
    badgeText: '#000000',
    badgeBorder: 'rgba(0, 0, 0, 0.25)',
    tableRowHover: 'rgba(0, 0, 0, 0.05)'
  },

  // =========================================================================
  // 2. YELLOW / CREAM FONT ON GREEN (Vibrant, Racing Heritage)
  // =========================================================================
  'laurel-leaf': {
    id: 'laurel-leaf',
    name: 'Laurel Leaf',
    fontGroup: 'yellow',
    fontLabel: 'Buttercream Font',
    tag: '~25% Lighter',
    emoji: '🍃',
    bg: '#274D34',           // Medium-dark British laurel leaf
    bgCard: '#315C3F',
    bgSubtle: '#1E3E29',
    border: 'rgba(254, 240, 138, 0.32)',
    borderSubtle: 'rgba(255, 255, 255, 0.14)',
    titleColor: '#FEF08A',   // Buttercream yellow
    accentColor: '#FDE047',  // Lemon highlight
    subtextColor: '#FDF6B2', // Pale butter metadata
    bodyTextColor: '#EBF5ED',// Mint white
    badgeBg: 'rgba(254, 240, 138, 0.16)',
    badgeText: '#FEF08A',
    badgeBorder: 'rgba(254, 240, 138, 0.35)',
    tableRowHover: 'rgba(254, 240, 138, 0.08)'
  },
  'matcha-moss': {
    id: 'matcha-moss',
    name: 'Matcha Moss',
    fontGroup: 'yellow',
    fontLabel: 'Warm Cream Font',
    tag: '~45% Lighter',
    emoji: '🍵',
    bg: '#3B6547',           // Velvety matcha green
    bgCard: '#477454',
    bgSubtle: '#2F5338',
    border: 'rgba(254, 243, 199, 0.35)',
    borderSubtle: 'rgba(255, 255, 255, 0.16)',
    titleColor: '#FEF3C7',   // Chiffon cream
    accentColor: '#FDE047',
    subtextColor: '#FEF9C3',
    bodyTextColor: '#F4FAF6',
    badgeBg: 'rgba(254, 243, 199, 0.18)',
    badgeText: '#FEF3C7',
    badgeBorder: 'rgba(254, 243, 199, 0.38)',
    tableRowHover: 'rgba(254, 243, 199, 0.09)'
  },
  'meadow-sage': {
    id: 'meadow-sage',
    name: 'Meadow Sage',
    fontGroup: 'yellow',
    fontLabel: 'Sunlit Yellow Font',
    tag: '~60% Lighter',
    emoji: '🌿',
    bg: '#4D7A59',           // Fresh Scandinavian meadow sage
    bgCard: '#5A8A67',
    bgSubtle: '#3F6649',
    border: 'rgba(254, 249, 195, 0.42)',
    borderSubtle: 'rgba(255, 255, 255, 0.20)',
    titleColor: '#FEF9C3',   // Sunlit cream
    accentColor: '#FDE047',
    subtextColor: '#FFFBEB',
    bodyTextColor: '#FFFFFF',
    badgeBg: 'rgba(254, 249, 195, 0.20)',
    badgeText: '#FEF9C3',
    badgeBorder: 'rgba(254, 249, 195, 0.45)',
    tableRowHover: 'rgba(254, 249, 195, 0.12)'
  },
  'eucalyptus-butter': {
    id: 'eucalyptus-butter',
    name: 'Deep Eucalyptus',
    subname: 'British Eucalyptus & Buttercream',
    fontGroup: 'yellow',
    fontLabel: 'Buttercream Font',
    tag: 'Current Dark Tone',
    emoji: '🌲',
    pageBg: '#FDF5DF',
    headerBg: 'rgba(253, 245, 223, 0.94)',
    glow: 'radial-gradient(circle, rgba(254, 240, 138, 0.6) 0%, rgba(251, 191, 36, 0.25) 60%, transparent 100%)',
    bg: '#1C3825',           // Deep Eucalyptus
    bgCard: '#244730',
    bgSubtle: '#152C1D',
    border: 'rgba(254, 240, 138, 0.28)',
    borderSubtle: 'rgba(255, 255, 255, 0.12)',
    titleColor: '#FEF08A',
    accentColor: '#FDE047',
    subtextColor: '#FDF6B2',
    bodyTextColor: '#E8F3EA',
    badgeBg: 'rgba(254, 240, 138, 0.14)',
    badgeText: '#FEF08A',
    badgeBorder: 'rgba(254, 240, 138, 0.35)',
    tableRowHover: 'rgba(254, 240, 138, 0.08)',
    navActiveBg: '#1C3825',
    navActiveText: '#FEF08A',
    navText: '#1C3825',
    navBorder: 'rgba(28, 56, 37, 0.20)',
    navBg: 'rgba(28, 56, 37, 0.06)',
    connectorColor: 'rgba(28, 56, 37, 0.35)',
    primaryDot: '#1C3825',
    secondaryDot: '#FEF08A',
    description: 'Deep British racing eucalyptus green paired with warm buttercream yellow typography.'
  }
};

/**
 * Curated Palette Groups for UI Switcher
 */
export const PALETTE_GROUPS = [
  {
    groupName: 'Selected Permanent Theme',
    palettes: ['oxford-midnight-bg', 'royal-bg-white-cards', 'cobalt-bg-white-cards']
  },
  {
    groupName: 'White Background & Blue Font',
    palettes: ['royal-white', 'electric-azure-white', 'oxford-navy-white', 'french-bleu-white']
  },
  {
    groupName: 'Inverted: Blue Decks & White Font',
    palettes: ['royal-monaco', 'electric-cobalt', 'royal-oxford', 'french-racing']
  },
  {
    groupName: 'Previous Green & Butter Themes',
    palettes: ['sage-black', 'eucalyptus-butter', 'celadon-black', 'laurel-leaf']
  }
];

