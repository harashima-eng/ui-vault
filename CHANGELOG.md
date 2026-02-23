# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2026-02-23

### Added

- 15 new design components (42 total), informed by internet-sourced UX research:
  - Sticky Header (Navigation) — partially persistent pattern per NN/g guidelines, scroll-triggered shrink/reveal
  - Tab Bar (Navigation) — GSAP Flip-powered sliding underline indicator, spring-physics animation, badges, keyboard nav
  - Breadcrumb Navigation (Navigation) — 3 style variants, collapsible ellipsis dropdown per Smashing Magazine pattern
  - Pagination Controls (Navigation) — 3 variants (classic, prev/next, load more), skeleton loading transition
  - Video Hero (Heroes) — GSAP-driven living gradient bg, word-by-word text reveal, floating particles, pulse rings
  - Minimal Footer (Footers) — centered and split layout variants, newsletter signup, social icons
  - Stats Counter (Sections) — 4 KPI cards per Nastengraph anatomy (5 required elements), scroll-triggered countup
  - Timeline (Sections) — alternating left/right cards, self-drawing center line via ScrollTrigger scrub
  - Logo Cloud (Sections) — dual-row infinite marquee per Smashing Magazine technique, hover pause
  - Product Card Grid (Cards) — e-commerce cards with Flip filter, star ratings, Add to Cart micro-interaction
  - Notification Center (Cards) — bell dropdown per Carbon Design System, read/unread distinction, swipe dismiss
  - Settings Page (Layouts) — 5-section sidebar navigation, GSAP toggle switches, cross-fade transitions
  - 404 Error Page (Layouts) — glitch chromatic aberration, floating orbital shapes, click easter egg
  - Stats Dashboard (Dashboards) — 4 KPI cards with sparklines, bar chart, activity feed, traffic sources
  - Loading States (Cards) — 6 loading patterns: skeleton, spinner, progress bar, dot loader, shimmer, placeholder

### Changed

- catalog.json version bumped to 4
- Design count: 27 to 42
- Category rebalancing: Navigation 2→6, Footers 1→2, Heroes 2→3, Dashboards 2→3, Sections 4→7, Cards 5→8, Layouts 3→5

## [3.0.0] - 2026-02-23

### Added

- Professional Figma-style Inspector panel replacing the basic theme tray
  - 12 color palettes: Original, Ocean, Emerald, Sunset, Violet, Rose, Nord, Dracula, Solarized, Tokyo Night, Catppuccin, One Dark
  - Custom hex accent input with live preview
  - Background darkness slider (0-100%)
  - Surface tint slider (blends surface toward accent)
  - 6 font families: System, Serif, Mono, Rounded, Humanist, Condensed
  - Font size scale: Compact (14px), Default (16px), Relaxed (18px), Large (20px)
  - Font weight toggle: Light, Regular, Medium, Semi-bold
  - Line height slider (1.2-2.0)
  - Border radius slider (0-32px, fine step)
  - Border width toggle: None, Subtle, Medium, Bold
  - Shadow intensity slider
  - 8 named presets: Original, Nord, Dracula, Solarized, Tokyo Night, Catppuccin, One Dark, GitHub Dark
  - Reset button to clear all overrides
  - GSAP-animated accordion sections and sidebar slide
  - localStorage migration from v1.1 format
- 10 new design components (27 total):
  - Command Palette (Cards) — Spotlight-style search with keyboard nav
  - Data Table (Dashboards) — sortable, selectable, paginated
  - Kanban Board (Layouts) — 4-column task board with cards
  - Feature Comparison (Pricing) — 3-tier with monthly/yearly toggle
  - Team Showcase (Sections) — 3x2 grid with GSAP flip to bio
  - FAQ Accordion (Sections) — search, category tabs, GSAP height animation
  - Chat Widget (Cards) — floating bubble, expandable window, typing indicator
  - File Upload Dropzone (Forms) — drag/drop, progress bars, error states
  - Blog Post Layout (Layouts) — hero, sticky TOC, reading progress bar
  - Image Gallery Lightbox (Sections) — masonry grid, lightbox with keyboard nav

### Changed

- Theme system: inspector sidebar (280px) replaces collapsible tray
- Inspector toggles via gear icon in panel header
- Per-design theme data expanded: customHex, bgDarkness, surfaceTint, fontSize, fontWeight, lineHeight, borderWidth, shadowIntensity
- catalog.json version bumped to 3
- Design count: 17 to 27

### Removed

- Simple theme tray UI (replaced by inspector panel)

## [1.1.0] - 2026-02-23

### Added

- Interactive theming system in the preview panel
  - Collapsible "Theme" tray between iframe and notes section
  - 6 color palettes: Original, Ocean, Emerald, Sunset, Violet, Rose
  - 3 font families: System, Serif, Mono
  - Border-radius slider (0–24px)
  - Per-design theme maps that translate canonical properties to each design's CSS variable names
  - Per-design persistence in localStorage (`ui-vault-palette-{id}`)
  - GSAP-animated tray open/close
  - Hardcoded designs show disabled palette swatches (font override still works)
- Zero changes to existing design files — theming works by injecting CSS variable overrides into the iframe

## [2.0.0] - 2026-02-22

### Added

- GSAP 3.12.5 integration across all designs (Core, ScrollTrigger, Flip, TextPlugin)
- Shared GSAP utility library: `animations/gsap-utils.js` (UV namespace)
  - fadeIn, fadeOut, scaleIn, slideIn
  - scrollReveal, scrollParallax
  - hoverScale, hoverLift
  - typewriter, textRevealByLine
  - staggerSequence, initPage, flipLayout
  - addControlPanel (Replay, 0.3x, 1x, 3x speed)
- Animation control panel on every design page
- 4 new GSAP showcase components:
  - GSAP Scroll Showcase: horizontal scroll, pin, scrub, parallax, countup, pinned fade sequence
  - GSAP Text Effects: typewriter, character reveal, word bounce, scramble, gradient sweep, line slide, scale-blur
  - GSAP Flip Gallery: grid/list/masonry layout switching with Flip, category filtering
  - GSAP Micro Interactions: magnetic/ripple/elastic buttons, slide/bounce/liquid toggles, floating labels, tilt cards, loading animations
- GSAP metadata in catalog.json (gsap_features, animation_count, plugins_used)
- New "GSAP" category in sidebar (10 categories total)

### Changed

- All 13 original designs migrated from CSS animations to GSAP
  - 88 CSS transitions removed and replaced with GSAP interactions
  - 29 @keyframes rules removed and replaced with GSAP timelines
  - 32 CSS animation properties removed
- index.html: card entrance, star bounce, panel/sidebar slide, dark mode toggle all GSAP-powered
- prefers-reduced-motion now handled via JS (window.matchMedia) instead of CSS @media
- catalog.json version bumped to 2
- README updated for v2.0 with GSAP stack documentation
- Design count: 13 to 17

### Removed

- All CSS `transition:` properties used for animation (kept `:focus-visible` outlines)
- All `@keyframes` rules
- All CSS `animation:` properties

## [1.0.0] - 2026-02-22

### Added

- UI Vault warehouse app (index.html)
  - Full-text search with 150ms debounce
  - Category sidebar with counts (9 categories)
  - Grid and list view toggle (localStorage persisted)
  - Favorites system with star toggle (localStorage persisted)
  - Dark/light mode with system preference detection
  - Full-screen preview panel with iframe rendering
  - Per-design notes with auto-save
  - Lazy iframe loading via IntersectionObserver
  - Keyboard navigation (Escape, Enter, Space)
  - Mobile responsive with hamburger menu and overlay sidebar
- 13 self-contained design files:
  - Heroes: Gradient Mesh Hero, Kinetic Typography Hero
  - Cards: Glassmorphism Cards, Toast Notification Stack
  - Dashboards: Analytics Dashboard
  - Navigation: Floating Pill Navigation, Vertical Sidebar Navigation
  - Forms: Multi-Step Wizard Form, Split Login Screen
  - Layouts: Bento Grid Feature Showcase
  - Pricing: Neon Pricing Table
  - Sections: Testimonial Marquee
  - Footers: Premium Mega Footer
- catalog.json design metadata
- All designs include: prefers-reduced-motion support, system fonts, zero external dependencies
