# UI Vault

A GSAP-powered design warehouse: 27 production-grade UI components and full-page designs with rich animations, a professional inspector panel, and all self-contained HTML.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Live Demo](https://harashima-eng.github.io/ui-vault/)**

## Features

- **27 designs** across 10 categories with GSAP animations (ScrollTrigger, Flip, TextPlugin)
- **Inspector panel** — Figma-style design token editor with 12 color palettes, 6 fonts, shape controls, and 8 named presets (Nord, Dracula, Tokyo Night, etc.)
- **Animation controls** on every design page (Replay, 0.3x, 1x, 3x speed)
- **Search** with 150ms debounce across titles, categories, and tags
- **10 categories** with sidebar filtering and item counts
- **Grid and list views** persisted in localStorage
- **Favorites system** with star toggle and localStorage persistence
- **Dark/light mode** with system preference detection
- **Full-screen preview panel** with iframe rendering and inspector sidebar
- **Per-design notes** with auto-save (500ms debounce)
- **Lazy loading** via IntersectionObserver for iframe thumbnails
- **Keyboard navigation** (Escape, Enter, Space)
- **Mobile responsive** with hamburger menu and overlay sidebar

## Design Collection

| # | Design | Category | Type | Key GSAP Technique |
|---|--------|----------|------|-------------------|
| 1 | Gradient Mesh Hero | Heroes | full-page | Custom property hue rotation, blob drift timelines |
| 2 | Glassmorphism Cards | Cards | component | Stagger entrance, hover lift sequences |
| 3 | Analytics Dashboard | Dashboards | full-page | Number countup, bar chart grow, panel slide-ins |
| 4 | Floating Pill Navigation | Navigation | component | Flip-powered pill indicator |
| 5 | Multi-Step Wizard Form | Forms | component | Step transitions, progress fill, shake validation |
| 6 | Bento Grid Feature Showcase | Layouts | full-page | Stagger entrance, scroll reveal |
| 7 | Neon Pricing Table | Pricing | component | Glow pulse, staggered card entrance |
| 8 | Testimonial Marquee | Sections | component | GSAP infinite marquee, timeScale pause |
| 9 | Split Login Screen | Forms | full-page | 6 orbital drift timelines, form stagger |
| 10 | Premium Mega Footer | Footers | component | Scroll-reveal columns, social icon staggers |
| 11 | Kinetic Typography Hero | Heroes | full-page | Word-by-word stagger, accent pulse |
| 12 | Toast Notification Stack | Cards | component | Slide-in, progress bars, replay-all |
| 13 | Vertical Sidebar Navigation | Navigation | component | Width/opacity collapse, drawer slide |
| 14 | GSAP Scroll Showcase | GSAP | full-page | Pin, scrub, parallax, horizontal scroll, countup |
| 15 | GSAP Text Effects | GSAP | full-page | Typewriter, scramble, character reveal, gradient sweep |
| 16 | GSAP Flip Gallery | GSAP | full-page | Grid/list/masonry switching, category filtering |
| 17 | GSAP Micro Interactions | GSAP | full-page | Magnetic buttons, liquid toggles, tilt cards |
| 18 | Command Palette | Cards | component | Overlay scaleIn, stagger results, keyboard nav |
| 19 | Data Table | Dashboards | component | Row stagger, sort flash, bulk action slideIn |
| 20 | Kanban Board | Layouts | full-page | Column stagger, card entrance, hover lift |
| 21 | Feature Comparison | Pricing | component | Column scaleIn, price countup, toggle Flip |
| 22 | Team Showcase | Sections | component | 3D card flip, scroll reveal, stagger entrance |
| 23 | FAQ Accordion | Sections | component | Height animation, Flip filter, search reveal |
| 24 | Chat Widget | Cards | component | Bubble pulse, window scaleIn, message stagger |
| 25 | File Upload Dropzone | Forms | component | Progress animation, checkmark scaleIn, error shake |
| 26 | Blog Post Layout | Layouts | full-page | Scroll parallax, reading progress scrub, TOC highlight |
| 27 | Image Gallery Lightbox | Sections | component | Lightbox zoom, slide transitions, scroll reveal |

## GSAP Stack

All animations use [GSAP 3.12.5](https://gsap.com/) via CDN:

- **Core** — timelines, stagger, easing
- **ScrollTrigger** — scroll-driven animations, pin, scrub
- **Flip** — layout transition animations
- **TextPlugin** — typewriter and text swap effects

Shared utility library: `animations/gsap-utils.js` (UV namespace)

## Usage

Just open `index.html` in any modern browser. No build step, no server, no npm.

```
ui-vault/
  index.html              # Main warehouse app
  catalog.json            # Design metadata with GSAP info
  animations/gsap-utils.js  # Shared GSAP utility library
  designs/                # 27 self-contained HTML files
```

## Adding New Designs

1. Create a self-contained HTML file in `designs/`
2. Add GSAP CDN scripts and `../animations/gsap-utils.js`
3. Add an entry to `catalog.json`:
   ```json
   {
     "id": "my-new-design",
     "title": "My New Design",
     "category": "Cards",
     "type": "component",
     "tags": ["tag1", "tag2", "gsap"],
     "filePath": "designs/my-new-design.html",
     "description": "Short description of the design.",
     "dateAdded": "2026-02-22",
     "gsap_features": ["fadeIn", "hoverScale"],
     "animation_count": 3,
     "plugins_used": ["ScrollTrigger"]
   }
   ```
4. Add the same entry to the `CATALOG_DATA` array in `index.html`
5. Call `UV.addControlPanel()` for animation speed controls

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- GSAP 3.12.5 via CDN (ScrollTrigger, Flip, TextPlugin)
- CSS Custom Properties for theming
- IntersectionObserver for lazy loading
- localStorage for preferences, favorites, and notes
- System font stack (no external fonts)

## Design Principles

- Every design is a single, self-contained HTML file
- All animations powered by GSAP (zero CSS transitions/keyframes for motion)
- `prefers-reduced-motion` respected via JS check in every file
- No stacked `backdrop-filter` (GPU safety)
- Semantic HTML with ARIA labels and keyboard accessibility

## Roadmap

- GSAP ScrollSmoother integration
- Export theme as JSON/CSS
- Responsive preview breakpoints in inspector

## License

[MIT](LICENSE)
