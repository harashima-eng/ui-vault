# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
