# LawnFlow Website - Pre-Refactoring Baseline

**Date:** 2026-01-18
**Branch:** main → refactor/cleanup-structure
**Status:** BROKEN - Cannot build or run

## Project Overview

- **Framework:** React 18.3.1 + Vite 6.3.5
- **Language:** TypeScript
- **Routing:** React Router DOM v7.12.0
- **Styling:** Tailwind CSS v4.1.12
- **Component Library:** Radix UI (primary) + Material UI (unused)
- **Total Files:** 102 TypeScript/TSX files

## Critical Blocking Issues

### 1. No Dependencies Installed ❌
- **Issue:** No lockfile exists (`package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`)
- **Impact:** Cannot run `npm run dev`, `npm run build`, or any scripts
- **Status:** BLOCKING

### 2. Missing Entry Point ❌
- **Issue:** `/src/main.tsx` referenced in `index.html` doesn't exist
- **Location:** `<script type="module" src="/src/main.tsx"></script>`
- **Impact:** Application cannot start
- **Status:** BLOCKING

### 3. Missing Utils File ❌
- **Issue:** 41 UI components import from `./utils` but file doesn't exist
- **Expected:** `/ui/utils.ts` or `/ui/utils.tsx`
- **Impact:** All UI components will fail to compile
- **Status:** BLOCKING

### 4. Broken Import Paths ❌
- **Issue:** 21+ files use `@/app/components/ui/*` imports
- **Reality:** Files are in `/ui/` directory (not `/app/components/ui/`)
- **Affected Files:**
  - `home/hero-section.tsx`
  - `home/new-hero-section.tsx`
  - `home/final-cta-section.tsx`
  - `layout/header.tsx`
  - `layout/cta-band.tsx`
  - Plus 16 more files
- **Impact:** TypeScript/build errors
- **Status:** BLOCKING

### 5. No TypeScript Configuration ❌
- **Issue:** No `tsconfig.json` exists
- **Impact:** Cannot run `npm run type-check`, no IDE support
- **Status:** BLOCKING

### 6. Wrong Directory Structure ❌
- **Issue:** Components scattered in root directories instead of `/src/`
- **Current:** `/ui/`, `/layout/`, `/home/`, `/agents/`, etc.
- **Expected:** Everything in `/src/`
- **Impact:** Doesn't follow Vite/React conventions
- **Status:** NON-BLOCKING but requires fixing

## Current Directory Structure

```
/workspaces/Lawnflow-Website/
├── agents/                    (6 TSX files)
├── compare/                   (6 TSX files)
├── competitive/               (2 TSX files)
├── figma/                     (1 TSX file)
├── for-crews/                 (2 TSX files)
├── for-customers/             (2 TSX files)
├── for-owners/                (3 TSX files)
├── home/                      (10 TSX files)
├── how-it-works/              (6 TSX files)
├── layout/                    (6 TSX files)
├── screens/                   (9 TSX files)
├── ui/                        (47 TSX files)
├── ISSUE_TEMPLATE/            (documentation)
├── LICENSE/                   (contains main.tsx with MIT license text)
├── workflows/                 (documentation)
├── guidelines/                (documentation)
├── vite.config.ts
├── package.json
├── index.html
└── postcss.config.mjs

Total: 102 TSX/TS files
```

## Component Inventory

### UI Components (47 files in `/ui/`)
- Radix UI wrapper components: accordion, alert, button, card, dialog, dropdown, form, select, tabs, etc.
- Custom components: iphone-shell, mobile-app-preview, pill
- **Issue:** All import from `./utils` which doesn't exist

### Layout Components (6 files in `/layout/`)
- header.tsx, footer.tsx, section-container.tsx, cta-band.tsx, cards.tsx, testimonial-card.tsx
- **Issue:** Use broken `@/app/components/ui/*` imports

### Page Sections (49 files across multiple directories)
- **home/** (10): hero, problem, solution, capabilities, outcomes, etc.
- **agents/** (6): agents-hero, agents-grid, collaboration-diagram, etc.
- **screens/** (9): command-center, quote-copilot, crew-mobile, customer-mobile, etc.
- **compare/** (6): compare-hero, comparison-table, compare-accordion, etc.
- **competitive/** (2): competitive-matrix, positioning-section
- **for-crews/** (2): for-crews-hero, crew-day-plan-section
- **for-customers/** (2): for-customers-hero, customer-app-section
- **for-owners/** (3): for-owners-hero, owner-dashboard-showcase, before-after-section
- **how-it-works/** (6): how-it-works-hero, agent-cards-section, lifecycle-timeline, etc.

## Known Duplicate Files

1. **agents-grid-section.tsx** vs **agents-grid-section-updated.tsx** (keep -updated)
2. **hero-section.tsx** vs **new-hero-section.tsx** (keep new-)
3. **crew-mobile-screen.tsx** vs **crew-mobile-screen-updated.tsx** (keep -updated)
4. **customer-mobile-screen.tsx** vs **customer-mobile-screen-updated.tsx** (keep -updated)

**Total duplicate code:** 1,714 lines

## Configuration Files

### package.json
- **Version:** 0.7.0
- **Scripts:**
  - `dev`: "vite"
  - `build`: "vite build"
  - `preview`: "vite preview"
  - `type-check`: "tsc --noEmit"
  - `lint`: "echo 'Linting not configured yet'" ❌
- **Dependencies:** 43+ packages declared but NOT installed
- **Unused deps:** @emotion/react, @emotion/styled, @mui/material, @mui/icons-material

### vite.config.ts
- React plugin configured
- Tailwind CSS plugin configured
- **Alias:** `@` → `./src` (but `/src/` doesn't exist!)

### index.html
- Standard React SPA structure
- References `/src/main.tsx` (doesn't exist!)

## What Works

- ✅ Git repository is clean
- ✅ Component source files have no syntax errors
- ✅ Package.json is valid JSON
- ✅ Vite configuration structure is correct (paths are wrong)
- ✅ All components use consistent patterns

## What Doesn't Work

- ❌ Cannot install dependencies (no lockfile)
- ❌ Cannot run dev server
- ❌ Cannot build
- ❌ Cannot type-check
- ❌ No linting configured
- ❌ Import paths are broken
- ❌ Entry point missing
- ❌ Utils file missing
- ❌ TypeScript not configured

## How to Reproduce Issues

```bash
# Try to install dependencies
npm install  # May succeed but dependencies not properly locked

# Try to run dev server
npm run dev  # Will fail - missing /src/main.tsx

# Try to build
npm run build  # Will fail - missing /src/main.tsx

# Try to type-check
npm run type-check  # Will fail - no tsconfig.json
```

## Expected State After Refactoring

After completing the refactoring:
1. ✅ All dependencies installed with lockfile
2. ✅ Proper `/src/` directory structure
3. ✅ `/src/main.tsx` entry point exists
4. ✅ `/src/lib/utils.ts` exists
5. ✅ All import paths corrected
6. ✅ `tsconfig.json` configured
7. ✅ ESLint + Prettier configured
8. ✅ `npm run dev` starts successfully
9. ✅ `npm run build` completes successfully
10. ✅ All 8 routes functional
11. ✅ No visual changes from original design

## Git Status

```
On branch refactor/cleanup-structure
nothing to commit, working tree clean
```

## Recent Commits (main branch)

```
c96ee60 - Add files via upload
3375165 - Initial Upload from Figma
7e2750c - Remove duplicate LawnFlow.ai Marketing Site zip file
b19bea8 - website push from figma
```

---

**Next Steps:** Follow the 8-phase refactoring plan to transform this broken codebase into a production-ready application.
