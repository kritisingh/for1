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
    fontGroup: 'yellow',
    fontLabel: 'Buttercream Font',
    tag: 'Current Dark Tone',
    emoji: '🌲',
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
    tableRowHover: 'rgba(254, 240, 138, 0.08)'
  }
};
