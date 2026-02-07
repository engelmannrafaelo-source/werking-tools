# WerkING Tools Homepage

**Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
**Type**: Static Marketing Website (One-Pager)
**URL**: werking-tools.at (geplant)

## Quick Start

```bash
npm run dev:local       # Dev Server auf Port 3016
npm run build:local     # Production Build
npm run start:local     # Production Server auf Port 3006
```

## Struktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout (Fonts, Meta)
│   ├── page.tsx            # Homepage (13 Sections)
│   ├── impressum/page.tsx
│   └── datenschutz/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky, scroll-aware, mobile
│   │   └── Footer.tsx      # Dark navy, Kontakt, Links
│   └── home/
│       ├── Hero.tsx                # "AI-Workflows mit Handschlagsqualitaet"
│       ├── Handschlagsqualitaet.tsx # Ingenieurs-Siegel
│       ├── ProblemSection.tsx       # 40-60% Doku-Zeit
│       ├── WorkflowVsChatbot.tsx    # Schachbrett-Analogie
│       ├── Platform.tsx             # Nutzen/Bauen/Verkaufen
│       ├── Products.tsx             # 4 Produkt-Karten
│       ├── HowItWorks.tsx           # 3 Steps
│       ├── Stats.tsx                # Animated Numbers
│       ├── Trust.tsx                # Sicherheit & Vertrauen
│       ├── KnowHow.tsx             # Know-how bleibt intern
│       ├── Foerderung.tsx           # KMU.DIGITAL / FFG
│       ├── AboutFounder.tsx         # Rafael Bio
│       └── CTA.tsx                  # Kontakt
└── lib/
    └── constants.ts        # Site Config, Products, Stats
```

## Design System

- **Gold**: #DEC15E (Primary Action, CTAs)
- **Navy**: #0A0F1E (Dark Background, Headlines)
- **Fonts**: Space Grotesk (Headlines), Inter (Body)
- **Brand**: Werk**ING** Tools (ING = Gold Gradient)

## Content-Quellen

Alle Texte kommen aus den Business-Docs:
- `business/marketing/campaigns.md` (Homepage-Struktur)
- `business/shared/VISION.md` (USPs, Differenzierung)
- `business/marketing/brand-guidelines.md` (Farben, Fonts, Tone)
- `business/marketing/value-proposition.md` (Messaging)

## Ports

| Modus | Port |
|-------|------|
| Build | 3006 |
| Dev   | 3016 |

---

*Erstellt: 07.02.2026*
