# 🏎️ The F1 Descent (1950 – 2025)

An immersive, continuous deep-scrolling journey through 76 seasons of Formula 1 history—inspired by Neal Agarwal's *The Deep Sea* ([neal.fun/deep-sea](https://neal.fun/deep-sea/)) and Netflix's *Drive to Survive*.

Designed for curious newcomers starting in **2026** who want to explore the lore, technical revolutions, and championship battles of Grand Prix racing without getting lost in dry corporate spreadsheets.

---

## 🌟 Features

- **Continuous Vertical Time-Descent**:
  - Starts at the surface (**2025**) and plunges down to the bedrock (**1950 Silverstone**).
  - Real-time depth telemetry HUD (`DEPTH: 2025` down to `1950`).

- **Dual Championship Perspectives**:
  - **🏆 Drivers' Championship**: Driver portraits, names, points, race wins, nationality flags, and team affiliations.
  - **🏎️ Constructors' Championship**: Team car badges, points, wins, and iconic chassis models.
  - **Master HUD Switcher**: Toggle all 76 seasons at once (`Drivers` vs `Constructors`) with local per-season overrides.

- **Podium Spotlight & Expandable Standings**:
  - **P1 World Champion**: Hero card with team livery accent, chassis details, and gold badge.
  - **P2 & P3**: Sleek runner-up podium cards.
  - **Expandable Drawer**: `Expand Standings (P4 – P10)` revealing full top-10 point tallies.

- **Pre-1958 Historical Nuance**:
  - Dedicated historical marker for seasons 1950–1957 explaining that the Constructors' Cup was introduced in 1958.

- **Netflix-Style *Drive to Survive* Milestones**:
  - Interspersed dramatic dossier cards:
    - `⚠️ 2021 Abu Dhabi`: Michael Masi & Toto Wolff radio controversy.
    - `🔬 2018 Safety Revolution`: Titanium Halo saves Grosjean & Leclerc.
    - `⚡ 2014 Hybrid Dawn`: Thermal efficiency & Mercedes 8-year reign.
    - `💨 2011 DRS Introduced`: Drag Reduction System arrives.
    - `🏆 2009 Brawn GP`: Underdog fairy-tale for £1 with the double diffuser.
    - `👑 2004 Peak V10 Apex`: Schumacher & F2004 19,000 RPM symphony.
    - `🛡️ 1994 Imola Rebirth`: Safety revolution following Senna & Ratzenberger.
    - `🤖 1992 Williams FW14B`: Active suspension & fly-by-wire cyber racing.
    - `⚔️ 1989 Suzuka War`: Senna vs Prost chicane collision.
    - `🔬 1981 Carbon Monocoque`: John Barnard's MP4/1 transforms safety.
    - `🌪️ 1978 Lotus 79`: Colin Chapman's ground-effect suckdown.
    - `🔥 1976 Hunt vs Lauda`: The 42-day comeback from the Nürburgring inferno.
    - `🪽 1968 Aerodynamics Born`: Wings bolted to suspension uprights.
    - `🏆 1958 Constructors Genesis`: Vanwall wins inaugural team cup.
    - `🏁 1950 The Bedrock`: 13 May 1950, Silverstone airfield genesis.

- **Time-Elevator & Fast-Travel**:
  - Sticky right-hand decade elevator (`2020s`, `2010s`, `2000s`, `90s`, `80s`, `70s`, `60s`, `50s`) with smooth camera glides.
  - Real-time search bar filtering across drivers, teams, eras, and years.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Chakra Petch*, *JetBrains Mono*, *Plus Jakarta Sans*)
- **Data**: Verified zero-latency bundled dataset across 76 Grand Prix seasons (1950–2025)

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.