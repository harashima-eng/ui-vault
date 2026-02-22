# UI Vault

A personal design warehouse: 13 production-grade UI components and full-page designs, all self-contained HTML with zero dependencies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Live Demo](https://harashima-eng.github.io/ui-vault/)**

## Features

- **Search** with 150ms debounce across titles, categories, and tags
- **9 categories** with sidebar filtering and item counts
- **Grid and list views** persisted in localStorage
- **Favorites system** with star toggle and localStorage persistence
- **Dark/light mode** with system preference detection
- **Full-screen preview panel** with iframe rendering
- **Per-design notes** with auto-save (500ms debounce)
- **Lazy loading** via IntersectionObserver for iframe thumbnails
- **Keyboard navigation** (Escape, Enter, Space)
- **Mobile responsive** with hamburger menu and overlay sidebar

## Design Collection

| # | Design | Category | Type | Key Technique |
|---|--------|----------|------|---------------|
| 1 | Gradient Mesh Hero | Heroes | full-page | @property OKLCH gradient animation |
| 2 | Glassmorphism Cards | Cards | component | backdrop-filter blur, ambient orbs |
| 3 | Analytics Dashboard | Dashboards | full-page | CSS bar charts, KPI stat cards |
| 4 | Floating Pill Navigation | Navigation | component | Sliding translateX pill indicator |
| 5 | Multi-Step Wizard Form | Forms | component | Progress stepper, slide transitions |
| 6 | Bento Grid Feature Showcase | Layouts | full-page | CSS Grid mixed-size bento cells |
| 7 | Neon Pricing Table | Pricing | component | Neon glow box-shadows on black |
| 8 | Testimonial Marquee | Sections | component | CSS-only dual-row infinite scroll |
| 9 | Split Login Screen | Forms | full-page | 50/50 split with floating shapes |
| 10 | Premium Mega Footer | Footers | component | Gradient border, 4-column grid |
| 11 | Kinetic Typography Hero | Heroes | full-page | Word-by-word staggered animation |
| 12 | Toast Notification Stack | Cards | component | Slide-in with progress bars |
| 13 | Vertical Sidebar Navigation | Navigation | component | Collapsible with Teams section |

## Usage

Just open `index.html` in any modern browser. No build step, no server, no dependencies.

```
ui-vault/
  index.html          # Main warehouse app
  catalog.json        # Design metadata
  designs/            # 13 self-contained HTML files
```

## Adding New Designs

1. Create a self-contained HTML file in `designs/`
2. Add an entry to `catalog.json`:
   ```json
   {
     "id": "my-new-design",
     "title": "My New Design",
     "category": "Cards",
     "type": "component",
     "tags": ["tag1", "tag2"],
     "filePath": "designs/my-new-design.html",
     "description": "Short description of the design.",
     "dateAdded": "2026-02-22"
   }
   ```
3. Add the same entry to the `CATALOG_DATA` array in `index.html`

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- CSS Custom Properties for theming
- IntersectionObserver for lazy loading
- localStorage for preferences, favorites, and notes
- System font stack (no external fonts)

## Design Principles

- Every design is a single, self-contained HTML file
- No external CSS/JS dependencies in any design
- `prefers-reduced-motion` support in all animations
- No `transition: all` (specific properties only)
- No stacked `backdrop-filter` (GPU safety)
- Semantic HTML with ARIA labels and keyboard accessibility

## Roadmap

- GSAP integration: replace CSS animations with GSAP-powered choreography
- Interactive theming: swap color palettes and typography per design
- More design components across all categories

## License

[MIT](LICENSE)
