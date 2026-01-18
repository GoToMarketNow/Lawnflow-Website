# LawnFlow Website - File Inventory

**Date:** 2026-01-18
**Total Files:** 102 TypeScript/TSX files

## Directory Tree

```
/workspaces/Lawnflow-Website/
├── agents/ (6 files)
│   ├── agents-grid-section.tsx (202 lines) - DUPLICATE
│   ├── agents-grid-section-updated.tsx (518 lines)
│   ├── agents-hero.tsx
│   ├── agents-page-footer.tsx
│   ├── collaboration-diagram.tsx
│   └── human-in-loop-section.tsx
│
├── compare/ (6 files)
│   ├── compare-accordion.tsx (523 lines)
│   ├── compare-callout.tsx
│   ├── compare-final-cta.tsx
│   ├── compare-hero.tsx
│   ├── compare-intro.tsx
│   └── comparison-table.tsx
│
├── competitive/ (2 files)
│   ├── competitive-matrix.tsx
│   └── positioning-section.tsx
│
├── figma/ (1 file)
│   └── ImageWithFallback.tsx
│
├── for-crews/ (2 files)
│   ├── crew-day-plan-section.tsx
│   └── for-crews-hero.tsx
│
├── for-customers/ (2 files)
│   ├── customer-app-section.tsx
│   └── for-customers-hero.tsx
│
├── for-owners/ (3 files)
│   ├── before-after-section.tsx
│   ├── for-owners-hero.tsx
│   └── owner-dashboard-showcase.tsx
│
├── home/ (10 files)
│   ├── capabilities-section.tsx
│   ├── competitive-callout.tsx
│   ├── final-cta-section.tsx
│   ├── hero-section.tsx (193 lines) - DUPLICATE
│   ├── mobile-experience-showcase.tsx
│   ├── new-hero-section.tsx (221 lines)
│   ├── outcomes-section.tsx
│   ├── problem-section.tsx
│   ├── solution-section.tsx
│   └── three-audiences-section.tsx
│
├── how-it-works/ (6 files)
│   ├── agent-cards-section.tsx
│   ├── how-it-works-hero.tsx
│   ├── lifecycle-timeline.tsx
│   ├── meet-agents-cta.tsx
│   ├── screen-previews-section.tsx
│   └── trust-ladder-section.tsx
│
├── layout/ (6 files)
│   ├── cards.tsx
│   ├── cta-band.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── section-container.tsx
│   └── testimonial-card.tsx
│
├── screens/ (9 files)
│   ├── command-center-screen.tsx
│   ├── crew-mobile-screen.tsx (585 lines) - DUPLICATE
│   ├── crew-mobile-screen-updated.tsx (422 lines)
│   ├── customer-mobile-screen.tsx (734 lines) - DUPLICATE
│   ├── customer-mobile-screen-updated.tsx (460 lines)
│   ├── quote-copilot-screen.tsx
│   ├── schedule-optimizer-screen.tsx
│   ├── screens-hero.tsx
│   └── user-flows-section.tsx
│
└── ui/ (47 files)
    ├── accordion.tsx
    ├── alert.tsx
    ├── alert-dialog.tsx
    ├── aspect-ratio.tsx
    ├── avatar.tsx
    ├── badge.tsx
    ├── breadcrumb.tsx
    ├── button.tsx
    ├── calendar.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── chart.tsx
    ├── checkbox.tsx
    ├── collapsible.tsx
    ├── command.tsx
    ├── context-menu.tsx
    ├── dialog.tsx
    ├── drawer.tsx
    ├── dropdown-menu.tsx
    ├── form.tsx
    ├── hover-card.tsx
    ├── input.tsx
    ├── input-otp.tsx
    ├── iphone-shell.tsx
    ├── label.tsx
    ├── menubar.tsx
    ├── mobile-app-preview.tsx
    ├── navigation-menu.tsx
    ├── pagination.tsx
    ├── pill.tsx
    ├── popover.tsx
    ├── progress.tsx
    ├── radio-group.tsx
    ├── resizable.tsx
    ├── scroll-area.tsx
    ├── select.tsx
    ├── separator.tsx
    ├── sheet.tsx
    ├── sidebar.tsx (726 lines - LARGE)
    ├── skeleton.tsx
    ├── slider.tsx
    ├── sonner.tsx
    ├── switch.tsx
    ├── table.tsx
    ├── tabs.tsx
    ├── textarea.tsx
    └── toggle-group.tsx
```

## File Count by Directory

| Directory | Count | Total Lines (approx) |
|-----------|-------|---------------------|
| ui/ | 47 | ~5,558 |
| home/ | 10 | ~1,200 |
| screens/ | 9 | ~2,800 |
| agents/ | 6 | ~850 |
| compare/ | 6 | ~800 |
| how-it-works/ | 6 | ~700 |
| layout/ | 6 | ~600 |
| for-owners/ | 3 | ~350 |
| competitive/ | 2 | ~250 |
| for-crews/ | 2 | ~250 |
| for-customers/ | 2 | ~250 |
| figma/ | 1 | ~50 |
| **TOTAL** | **102** | **~13,658** |

## Duplicate Files Analysis

### 1. agents-grid-section.tsx vs agents-grid-section-updated.tsx
- **Old:** 202 lines, 3 agents with basic info
- **New:** 518 lines, 9 agents with detailed capabilities
- **Action:** DELETE old version
- **Savings:** 202 lines

### 2. hero-section.tsx vs new-hero-section.tsx
- **Old:** 193 lines, basic hero
- **New:** 221 lines, adds waitlist form, mobile app preview, video
- **Action:** DELETE old version
- **Savings:** 193 lines

### 3. crew-mobile-screen.tsx vs crew-mobile-screen-updated.tsx
- **Old:** 585 lines, verbose implementation
- **New:** 422 lines, refactored, uses IPhoneShell component
- **Action:** DELETE old version
- **Savings:** 585 lines

### 4. customer-mobile-screen.tsx vs customer-mobile-screen-updated.tsx
- **Old:** 734 lines, verbose implementation
- **New:** 460 lines, refactored, cleaner layout
- **Action:** DELETE old version
- **Savings:** 734 lines

**Total Duplicate Code:** 1,714 lines to be removed

## Broken Import Analysis

### Files with `./utils` imports (41 files in /ui/)
All UI components except:
- accordion.tsx
- aspect-ratio.tsx
- iphone-shell.tsx
- pill.tsx
- sidebar.tsx
- sonner.tsx

These 41 files import `cn` from `"./utils"` but the file doesn't exist.

### Files with `@/app/components/ui/*` imports (21 files)

**home/**
- final-cta-section.tsx
- hero-section.tsx
- new-hero-section.tsx
- competitive-callout.tsx
- mobile-experience-showcase.tsx

**layout/**
- header.tsx
- section-container.tsx
- cta-band.tsx

**for-owners/**
- owner-dashboard-showcase.tsx

**for-crews/**
- crew-day-plan-section.tsx

**for-customers/**
- customer-app-section.tsx

**screens/**
- customer-mobile-screen-updated.tsx
- crew-mobile-screen-updated.tsx

**agents/**
- agents-page-footer.tsx

**how-it-works/**
- meet-agents-cta.tsx

**ui/**
- mobile-app-preview.tsx

Plus ~5 more files

## Largest Files (Potential Optimization Candidates)

1. **customer-mobile-screen.tsx** - 734 lines (DUPLICATE - will be deleted)
2. **sidebar.tsx** - 726 lines (likely unused in marketing site)
3. **crew-mobile-screen.tsx** - 585 lines (DUPLICATE - will be deleted)
4. **compare-accordion.tsx** - 523 lines
5. **agents-grid-section-updated.tsx** - 518 lines
6. **customer-mobile-screen-updated.tsx** - 460 lines
7. **crew-mobile-screen-updated.tsx** - 422 lines

## Potentially Unused UI Components

These are from a component library (Radix UI wrappers) and may not all be used:

- **sidebar.tsx** (726 lines) - Desktop sidebar, uncommon in marketing sites
- **menubar.tsx** - Desktop menu bar
- **chart.tsx** - Recharts integration
- **context-menu.tsx** - Right-click menus
- **command.tsx** - Command palette
- **breadcrumb.tsx** - Breadcrumb navigation
- **pagination.tsx** - Pagination controls
- **input-otp.tsx** - OTP input

Note: These should be verified during usage analysis rather than blindly removed.

## Import Patterns

### Current Broken Patterns
```typescript
// Pattern 1: Missing utils (41 files)
import { cn } from "./utils"  // ❌ File doesn't exist

// Pattern 2: Wrong @/app path (21 files)
import { Button } from "@/app/components/ui/button"  // ❌ Wrong path

// Pattern 3: Correct React Router imports
import { Link } from "react-router-dom"  // ✅ Works
```

### Target Corrected Patterns
```typescript
// After refactoring
import { cn } from "@/lib/utils"  // ✅ Correct
import { Button } from "@/components/ui/button"  // ✅ Correct
import { Link } from "react-router-dom"  // ✅ Unchanged
```

## Component Dependencies

### External Libraries Used
- **Radix UI:** accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs
- **React Hook Form:** form.tsx
- **Recharts:** chart.tsx
- **Embla Carousel:** carousel.tsx
- **React Day Picker:** calendar.tsx
- **Lucide React:** Icons throughout
- **clsx + tailwind-merge:** For cn() utility (MISSING)

## Styling Approach

- **Primary:** Tailwind CSS v4 with utility classes
- **Variables:** CSS custom properties (`var(--primary-green)`, `var(--text-body)`, etc.)
- **No CSS files:** All styling is component-level
- **Unused:** @emotion/react, @emotion/styled, @mui/material (installed but not used)

## Asset Files

**Status:** No image, font, or static asset files found in standard locations

Assets are likely:
- Hosted externally
- Or will be added to `/public/` directory

## Configuration Files

- **package.json** - 43+ dependencies, 4 unused
- **vite.config.ts** - React + Tailwind plugins, alias to ./src
- **postcss.config.mjs** - Empty (Tailwind v4 handles PostCSS)
- **index.html** - Standard React SPA entry
- **tsconfig.json** - MISSING ❌
- **.eslintrc.json** - MISSING ❌
- **.prettierrc** - MISSING ❌
- **.gitignore** - Present

## Routes Detected (from Header component)

Based on navigation in `layout/header.tsx`:

1. `/` - Home
2. `/how-it-works` - How It Works
3. `/for-owners` - For Owners
4. `/for-crews` - For Crews
5. `/for-customers` - For Customers
6. `/compare` - Compare
7. `/agents` - Agents (inferred)
8. `/waitlist` - Waitlist (inferred)

## Summary

- **Total Components:** 102
- **Ready to move:** 98 (after deleting 4 duplicates)
- **Need import fixes:** ~62 files
- **New files needed:** 16 (configs, entry points, pages, docs)
- **Dependencies to remove:** 4 packages
- **Directories to create:** 10+ under /src/
- **Directories to remove:** 11 (old root-level dirs)

---

**Refactoring Impact:**
- **Files created:** 16
- **Files moved:** 98
- **Files deleted:** 4
- **Files modified:** ~72 (import path fixes)
- **Net reduction:** 1,714 lines of duplicate code removed
