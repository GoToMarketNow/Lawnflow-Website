# LawnFlow Website - Project Structure

**Post-Refactoring Structure** | **Updated:** 2026-01-18

## Directory Organization

```
/workspaces/Lawnflow-Website/
├── src/                          # Application source code
│   ├── main.tsx                  # Application entry point
│   ├── App.tsx                   # Root component with routing
│   ├── pages/                    # Page components (one per route)
│   │   ├── HomePage.tsx
│   │   ├── AgentsPage.tsx
│   │   ├── HowItWorksPage.tsx
│   │   ├── ForOwnersPage.tsx
│   │   ├── ForCrewsPage.tsx
│   │   ├── ForCustomersPage.tsx
│   │   ├── ComparePage.tsx
│   │   └── ScreensPage.tsx
│   ├── components/               # Reusable components
│   │   ├── layout/              # Layout components (Header, Footer)
│   │   ├── ui/                  # UI component library (47 components)
│   │   ├── agents/              # Agents page sections
│   │   ├── home/                # Home page sections
│   │   ├── screens/             # Screens page sections
│   │   ├── compare/             # Compare page sections
│   │   ├── competitive/         # Competitive positioning sections
│   │   ├── for-crews/           # For Crews page sections
│   │   ├── for-customers/       # For Customers page sections
│   │   ├── for-owners/          # For Owners page sections
│   │   └── how-it-works/        # How It Works page sections
│   ├── lib/                     # Utility functions
│   │   └── utils.ts             # Helper utilities (cn function)
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Tailwind CSS imports
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets
├── docs/                        # Documentation
│   ├── BASELINE.md              # Pre-refactoring state
│   ├── INVENTORY.md             # Complete file inventory
│   ├── STRUCTURE.md             # This file
│   └── CHANGES.md               # Change log
├── dist/                        # Build output (gitignored)
├── node_modules/                # Dependencies (gitignored)
├── package.json                 # Project configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
└── index.html                   # HTML entry point
```

## Import Path Conventions

This project uses TypeScript path aliases for cleaner imports:

### Path Alias Configuration

- **`@/*`** → `/src/*` (configured in `tsconfig.json` and `vite.config.ts`)

### Import Examples

```typescript
// ✅ Correct - Using @ alias
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import HomePage from "@/pages/HomePage"

// ❌ Incorrect - Relative paths from root
import { Button } from "../../../components/ui/button"

// ✅ Also acceptable - Relative paths from same directory
import { Card } from "./card"
```

## Component Organization

### Page Components (`/src/pages/`)

Each page component represents one route in the application:

- **Purpose:** Top-level route components
- **Naming:** PascalCase with "Page" suffix (e.g., `HomePage.tsx`)
- **Export:** Default export
- **Content:** Composes section components into full pages

**Example:**
```typescript
// src/pages/HomePage.tsx
import { NewHeroSection } from "@/components/home/new-hero-section"
import { ProblemSection } from "@/components/home/problem-section"

export default function HomePage() {
  return (
    <>
      <NewHeroSection />
      <ProblemSection />
    </>
  )
}
```

### Section Components (`/src/components/{feature}/`)

Section components are organized by the page/feature they belong to:

- **Purpose:** Major sections of a page (hero, CTA, features, etc.)
- **Naming:** Descriptive with "-section" suffix (e.g., `hero-section.tsx`)
- **Export:** Named export (e.g., `export function HeroSection()`)
- **Location:** Grouped in feature directories

**Example:**
```typescript
// src/components/home/hero-section.tsx
export function HeroSection() {
  return <section>...</section>
}
```

### Layout Components (`/src/components/layout/`)

Persistent layout elements used across pages:

- `header.tsx` - Site header with navigation
- `footer.tsx` - Site footer
- `section-container.tsx` - Consistent section wrapper
- `cta-band.tsx` - Call-to-action band
- `cards.tsx` - Card layout components
- `testimonial-card.tsx` - Testimonial display

### UI Components (`/src/components/ui/`)

Reusable UI primitives based on Radix UI:

- **47 components total**
- Includes: Button, Card, Dialog, Form, Input, Select, Tabs, etc.
- All import from `@/lib/utils` for the `cn()` helper
- Consistent styling with Tailwind CSS

## Styling Approach

### Tailwind CSS v4

- **Primary styling method:** Utility classes
- **Configuration:** Via `@tailwindcss/vite` plugin
- **Global styles:** `src/styles/globals.css`

```css
/* src/styles/globals.css */
@import "tailwindcss";
```

### CSS Variables

Components use CSS custom properties for theming:

```typescript
style={{
  color: "var(--primary-green)",
  fontSize: "var(--text-body)",
  fontWeight: "var(--font-weight-medium)"
}}
```

### Utility Helper

The `cn()` function combines clsx and tailwind-merge:

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn("base-class", isActive && "active-class")} />
```

## Routing

### Router Configuration

React Router DOM v7 with BrowserRouter:

```typescript
// src/App.tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/how-it-works" element={<HowItWorksPage />} />
  <Route path="/for-owners" element={<ForOwnersPage />} />
  <Route path="/for-crews" element={<ForCrewsPage />} />
  <Route path="/for-customers" element={<ForCustomersPage />} />
  <Route path="/agents" element={<AgentsPage />} />
  <Route path="/compare" element={<ComparePage />} />
  <Route path="/screens" element={<ScreensPage />} />
</Routes>
```

### Available Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page |
| `/how-it-works` | HowItWorksPage | Product explanation |
| `/for-owners` | ForOwnersPage | Business owner features |
| `/for-crews` | ForCrewsPage | Crew member features |
| `/for-customers` | ForCustomersPage | Customer features |
| `/agents` | AgentsPage | AI agents showcase |
| `/compare` | ComparePage | Product comparison |
| `/screens` | ScreensPage | UI/UX screenshots |

## Adding New Components

### Adding a New Page

1. Create page component in `/src/pages/`:
   ```typescript
   // src/pages/PricingPage.tsx
   export default function PricingPage() {
     return <div>Pricing content</div>
   }
   ```

2. Add route in `/src/App.tsx`:
   ```typescript
   import PricingPage from "./pages/PricingPage"

   // In Routes:
   <Route path="/pricing" element={<PricingPage />} />
   ```

3. Update Header navigation in `/src/components/layout/header.tsx`

### Adding a New Section Component

1. Create section file in appropriate feature directory:
   ```typescript
   // src/components/pricing/pricing-tiers.tsx
   export function PricingTiers() {
     return <section>...</section>
   }
   ```

2. Import and use in page component:
   ```typescript
   // src/pages/PricingPage.tsx
   import { PricingTiers } from "@/components/pricing/pricing-tiers"

   export default function PricingPage() {
     return <PricingTiers />
   }
   ```

### Adding a New UI Component

1. Create component in `/src/components/ui/`:
   ```typescript
   // src/components/ui/tooltip.tsx
   import { cn } from "@/lib/utils"

   export function Tooltip({ className, ...props }) {
     return <div className={cn("tooltip-base", className)} {...props} />
   }
   ```

2. Import where needed:
   ```typescript
   import { Tooltip } from "@/components/ui/tooltip"
   ```

## Development Workflow

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
# Opens on http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in /dist directory
```

### Preview Production Build
```bash
npm run preview
# Opens on http://localhost:4173
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix auto-fixable issues
```

### Formatting
```bash
npm run format      # Format with Prettier
```

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Build Tool** | Vite | 6.3.5 |
| **Framework** | React | 18.3.1 |
| **Language** | TypeScript | 5.9.3 |
| **Routing** | React Router DOM | 7.12.0 |
| **Styling** | Tailwind CSS | 4.1.12 |
| **Component Library** | Radix UI | Various |
| **Icons** | Lucide React | 0.487.0 |
| **Forms** | React Hook Form | 7.55.0 |
| **Animations** | Motion | 12.23.24 |
| **Notifications** | Sonner | 2.0.3 |
| **Linting** | ESLint | 9.39.2 |
| **Formatting** | Prettier | 3.8.0 |

## Key Files

### Configuration Files

- **`package.json`** - Project metadata, scripts, dependencies
- **`tsconfig.json`** - TypeScript compiler options, path aliases
- **`vite.config.ts`** - Vite bundler configuration
- **`.eslintrc.json`** - ESLint rules for code quality
- **`.prettierrc`** - Code formatting preferences
- **`.gitignore`** - Git exclusions

### Entry Points

- **`index.html`** - HTML entry point (references `/src/main.tsx`)
- **`src/main.tsx`** - JavaScript entry point (mounts React app)
- **`src/App.tsx`** - Root React component (routing)

## Best Practices

### Component Naming

- **Files:** kebab-case (e.g., `new-hero-section.tsx`)
- **Components:** PascalCase (e.g., `NewHeroSection`)
- **Utilities:** camelCase (e.g., `cn`, `formatDate`)

### Import Organization

```typescript
// 1. React and external libraries
import React, { useState } from "react"
import { Link } from "react-router-dom"

// 2. UI components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// 3. Layout components
import { Header } from "@/components/layout/header"

// 4. Utilities
import { cn } from "@/lib/utils"

// 5. Types
import type { User } from "@/types"
```

### Type Safety

- Prefer TypeScript over JavaScript
- Use strict mode (enabled in tsconfig.json)
- Define proper prop types for components
- Leverage type inference where possible

---

This structure provides a clear, maintainable foundation for ongoing development while following React and Vite best practices.
