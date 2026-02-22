# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
