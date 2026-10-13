# 🏎️ Formula 1 Archive — UI Component & Section Vocabulary Guide

Use this reference guide whenever you want to tweak, redesign, or adjust any element on the page. You can simply copy-paste or reference the **Section Name** and **Element Name** in your prompts!

---

## 🗺️ Page Structure Overview (Top to Bottom)

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. TOP STICKY HEADER (Header.jsx)                                      │
├────────────────────────────────────────────────────────────────────────┤
│ 2. ATMOSPHERIC SKY & CLOUDS (DaylightClouds.jsx)                       │
├────────────────────────────────────────────────────────────────────────┤
│ 3. WORLD CHAMPION ARCHIVE BADGE                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 4. ERA / CHAPTER BLOCK (SkyLayerMarker.jsx)                            │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SEASON STANDINGS CARD (SeasonCard.jsx)                              │
│    ├── Cockpit Horizon Header (Year + Tabs)                           │
│    ├── P1 Champion Apex Card                                           │
│    ├── P2 & P3 Step-Down Rows                                          │
│    └── P4–P10 Collapsible Standings Drawer                             │
├────────────────────────────────────────────────────────────────────────┤
│ 6. HISTORIC FLASHPOINT / MILESTONE CARD (MilestoneCard.jsx)            │
├────────────────────────────────────────────────────────────────────────┤
│ 7. DECADE ELEVATOR (DecadeElevator.jsx) [Fixed Right-Side Scrubber]    │
├────────────────────────────────────────────────────────────────────────┤
│ 8. SILVERSTONE 1950 BEDROCK FOOTER (BedrockFooter.jsx)                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Top Sticky Header (`Header.jsx`)

The bar pinned to the top of the browser window as you scroll. Streamlined and focused with zero test dropdown clutter:

| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`F1 Logo`** | The official red Formula 1 brand icon on the far left | *"In the Top Header, make the F1 logo smaller/larger"* |
| **`Global View Switcher`** | The Drivers vs Constructors toggle buttons on the right | *"In the Top Header, make the view switcher buttons rounded"* |

---

## 2. Era / Chapter Block (`SkyLayerMarker.jsx`)

The Grand Prix Codex landmark banner introducing each technological epoch (e.g. *The Ground Effect Aero Era*, *The Turbo-Hybrid Revolution*, *The Screaming V10 Golden Apex*).

```
┌────────────────────────────────────────────────────────────────────────┐
│  ● FIA REGULATION EPOCH 09 OF 09 • 2022–PRESENT    [I] [II] ... [IX]   │
├────────────────────────────────────────────────────────────────────────┤
│  [ IX ]  ACTIVE REGULATION                                  (IX Watermark)
│          The Ground Effect Aero Era                                    │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ ⚡ POWERTRAIN     │ 💨 AERODYNAMICS   │ 🛞 CHASSIS & TYRES             │
│ 1.6L V6 Turbo...  │ Venturi Tunnels   │ 18" Low-Profile Pirelli...     │
├───────────────────┴───────────────────┴────────────────────────────────┤
│  ▌ Sculpted venturi tunnels underneath the floor generate massive...   │
│    Read more about this era                                            │
└────────────────────────────────────────────────────────────────────────┘
```

| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Timeline Tracker Ribbon`** | The top bar displaying `Epoch 09 of 09` and stepper pills `[I]` through `[IX]` | *"In the Era Block, hide the 9-epoch timeline tracker on mobile"* |
| **`Ghosted Roman Watermark`** | The large translucent Roman numeral (`IX`) floating in the background | *"In the Era Block, make the ghosted watermark slightly more visible"* |
| **`Roman Chapter Badge`** | The square badge displaying **"IX"**, **"VIII"**, **"VII"**, etc. | *"In the Era Block, make the Roman chapter badge larger"* |
| **`Regulation Status Tag`** | The badge displaying `Active Regulation` or `Historic Archive` | *"In the Era Block, change the status tag to green"* |
| **`Era Title`** | The main headline: **"The Ground Effect Aero Era"** | *"In the Era Block, change the Era Title font size to 22px"* |
| **`3-Part Formula Grid`** | The 3 telemetry cards: **Powertrain Formula**, **Aero Philosophy**, and **Chassis & Tyres** | *"In the Era Block, change the formula grid icons to blue"* |
| **`Lore Compartment`** | The lower shelf separated by the dividing line | *"In the Era Block, give the Lore Compartment a darker background"* |
| **`Lore Description`** | The text: *"Sculpted venturi tunnels underneath the floor..."* | *"In the Era Block, make the Lore Description font slightly bigger"* |
| **`Read More Button`** | The *"Show less / Read more about this era"* toggle | *"In the Era Block, remove the Read More toggle and show full text"* |

---

## 3. Season Standings Card (`SeasonCard.jsx`)

The main white card for each championship year (e.g., 2025, 2024, 2023...).

### 3A. Card Header (Cockpit Horizon Bar)
| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Season Year`** | The large season number: **"2025"** | *"In Season Card, make the Season Year bolder"* |
| **`Regulation Era Subtitle`** | The text next to the year: `Ground Effect & Hybrid Era` | *"In Season Card, change the Regulation Era text color to blue"* |
| **`Engine Spec Tag`** | The spec note: `Engine Spec: 1.6L V6 Turbo...` | *"In Season Card, hide the Engine Spec Tag"* |
| **`Flight Tab Selector`** | The toggle buttons: `Drivers (P1–P10)` vs `Constructors (P1–P10)` | *"In Season Card, make the tab selector rounded pills"* |

### 3B. P1 Champion Apex Card (Top Podium Box)
| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Champion Portrait`** | The cut-out cutout photograph of the Champion driver | *"In Season Card, make the Champion Portrait circular"* |
| **`P1 Laurel Badge`** | The small golden laurel wreath badge overlapping the portrait | *"In Season Card, change the P1 badge color"* |
| **`Champion Subtitle`** | The line: `World Drivers' Champion • British` | *"In Season Card, change the Champion Subtitle to all caps"* |
| **`Champion Name`** | The prominent driver name: **"Lando Norris"** | *"In Season Card, increase the Champion Name font size"* |
| **`Team Badge`** | The team badge pill: `McLaren` | *"In Season Card, make the Team Badge have solid background"* |
| **`Chassis Tag`** | The pill: `Chassis: MCL38 / MCL39` | *"In Season Card, style the Chassis Tag with an outline"* |
| **`Points Counter`** | The burnt orange telemetry capsule displaying: `423 PTS` and `7 Wins` | *"In Season Card, change the Points Counter background"* |

### 3C. P2 & P3 Step-Down Podium Rows
| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`P2 / P3 Rank Badges`** | The square badges labeled `P2` and `P3` | *"In Season Card, make the P2 and P3 rank badges rounded circles"* |
| **`Podium Driver Names`** | **"Max Verstappen"**, **"Charles Leclerc"** | *"In Season Card, make P2 and P3 driver names slightly larger"* |
| **`Podium Team Label`** | `Red Bull Racing`, `Ferrari` | *"In Season Card, make the podium team label bold"* |
| **`Podium Points & Wins`** | `401 pts • 9 wins` | *"In Season Card, change the font of podium points"* |

### 3D. Collapsible Lower Standings (Positions 4 to 20)
| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Standings Expand Button`** | The bar: *"View Standings (P4 – P20)"* with the chevron | *"In Season Card, make the standings expand button full width with border"* |
| **`Standings Table Rows`** | The table list of drivers/teams ranked 4th through 20th | *"In Season Card, add alternating row colors in the standings table"* |

---

## 4. Historic Flashpoint / Milestone Card (`MilestoneCard.jsx`)

The special historical story bars that appear between seasons (e.g. *Senna vs Prost Suzuka 1989*, *Brawn GP Miracle 2009*, *Lauda Nürburgring Comeback*).

| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Milestone Icon Badge`** | The square icon badge on the left (flame, trophy, flag) | *"In Milestone Card, make the icon badge amber"* |
| **`Flashpoint Eyebrow`** | `1989 Historic Flashpoint • Title Decider` | *"In Milestone Card, change the Flashpoint Eyebrow color"* |
| **`Milestone Quote / Title`** | The italic quote or title: *“If you no longer go for a gap...”* | *"In Milestone Card, make the quote italic and larger"* |
| **`Read Story Button`** | The button on the right: *"Read Story / Close"* | *"In Milestone Card, make the Read Story button filled blue"* |
| **`Story Drawer`** | The expanded panel containing full lore, speaker quote, and stat pills | *"In Milestone Card, increase font size of the story description"* |

---

## 5. Decade Elevator Scrubber (`DecadeElevator.jsx`)

The telemetry flight rail capsule pinned to the right side of the screen on desktop screens:

| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Decade Scrubber Rail`** | The dark espresso glass rail on the right | *"In the Decade Elevator, move it slightly to the right"* |
| **`Decade Buttons`** | Buttons for `2020s`, `2010s`, `2000s`, down to `1950s` | *"In Decade Elevator, change active decade highlight color"* |
| **`Era Hover Tooltip`** | The floating era badge that appears to the left on hover | *"In Decade Elevator, change the hover tooltip text size"* |
| **`Genesis Button`** | The bottom anchor button: `1950 ↓` | *"In Decade Elevator, change the Genesis button label"* |

---

## 6. Silverstone 1950 Bedrock Footer (`BedrockFooter.jsx`)

The final landing pad at the bottom of the entire archive (where F1 began in May 1950).

| Element Name | What it is on screen | Example Prompt |
| :--- | :--- | :--- |
| **`Silverstone 1950 Headline`** | The large title: **"Silverstone 1950"** | *"In the Bedrock Footer, change the headline to 'The Genesis of Grand Prix'"* |
| **`Silverstone Lore Text`** | The narrative paragraph about the post-war RAF airfield | *"In the Bedrock Footer, make the lore text 2 columns"* |
| **`Ascend To Present Button`** | The return-to-surface button: `↑ Ascend to Present (2025)` | *"In the Bedrock Footer, make the ascend button larger"* |

---

## 7. Permanent Color System: Amber Walnut • Espresso Canvas

The application color system has been streamlined and locked into **Figma Scheme 13 (Amber Walnut • Espresso Canvas)**:

| Element | Hex Code | Visual Character |
| :--- | :--- | :--- |
| **Page Canvas** | `#4A413C` | Deep roasted walnut charcoal/espresso canvas |
| **Season Cards & Codex** | `#FFFFFF` | Floating crisp pure white surfaces with `#FAF8F5` linen insets |
| **Primary Buttons & Active State** | `#BB6C43` | Rich burnt terracotta amber |
| **Page Headlines & Markers** | `#EBEFEE` | High-contrast morning mist linen typography |
| **Metadata & Subtitles** | `#C8906D` | Amber clay tan |
| **Compartment Insets & Badges** | `#CCB499` / `#EDE2D4` | Warm walnut sand |

---

## 8. Permanent Typography System: Classic Vintage Journal

The typography has been locked into **Classic Vintage Journal**:
- **Editorial Headlines & Numerals (`font-editorial`)**: `Fraunces` (warm, soft-curved optical flare serif evocative of heritage Grand Prix annuals and vintage motorsport magazines).
- **Body & Data Telemetry (`font-body`)**: `Plus Jakarta Sans` (clean modern legibility for driver standings, points, and engineering telemetry).

---

## 💡 Quick Cheat Sheet: Example Prompts You Can Use Anytime

- *"In the **Era Block**, increase the **Era Title** font size and make the **Roman Chapter Badge** slightly smaller."*
- *"In the **Top Header**, change the **F1 Logo** size."*
- *"In the **Season Card**, make the **Season Year** softer and change the **Chassis Tag** background."*
- *"In the **Season Card**, in the **Constructors tab**, make the **P1 Champion Name** bolder."*
- *"In the **Milestone Card**, make the **Read Story Button** rounded."*
- *"In the **Decade Elevator**, make the active pill glow."*
- *"Switch palette to **Amber Walnut • Espresso Canvas**"* or *"Make the burnt amber buttons slightly darker"*.
