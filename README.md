# LawnFlow.ai Marketing Website

> AI-powered lawn and landscaping business management platform

A modern, comprehensive marketing website for LawnFlow.ai, showcasing AI agents that handle quoting, scheduling, dispatching, invoicing, and collections for lawn care businesses.

![LawnFlow.ai](https://img.shields.io/badge/Status-Active%20Development-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-cyan)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Pages](#pages)
- [Design System](#design-system)
- [Components](#components)
- [Deployment](#deployment)
- [Sprint History](#sprint-history)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

LawnFlow.ai is a comprehensive marketing website built to showcase an AI-powered platform for lawn care and landscaping businesses. The site features:

- **8+ Full Marketing Pages** with complete navigation
- **Three Primary Audiences**: Business Owners, Crew Members, and Customers
- **Real iPhone Mockups** showcasing mobile experiences
- **AI Agent Showcase** featuring detailed agent information and capabilities
- **Competitive Analysis** comparing LawnFlow to major competitors
- **Responsive Design** optimized for mobile, tablet, and desktop

## ✨ Features

### Core Features
- 🤖 **AI Agent Showcase** - Detailed information on InvoiceBuilAgent, BillingAgent, RemediationAgent, and more
- 📱 **Mobile-First Design** - Realistic iPhone mockups with embedded app views
- 🎨 **Comprehensive Design System** - Consistent brand colors, typography, and spacing
- 🔄 **Smooth Animations** - Using Motion (Framer Motion) for premium user experience
- 📊 **Competitive Matrix** - Side-by-side comparison with industry competitors
- 🎯 **Three Audience Segments** - Dedicated pages for Owners, Crews, and Customers
- 📧 **Waitlist Integration** - Email capture with confirmation flow
- 🌐 **Full Navigation** - Header, footer, and cross-page linking

### Technical Features
- ⚡ **Vite Build System** - Lightning-fast development and builds
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 🧩 **Radix UI Components** - Accessible, unstyled component primitives
- 🔗 **React Router** - Client-side routing with protected routes
- 📦 **Component Library** - 50+ reusable UI components
- 🎭 **Motion Animations** - Smooth, GPU-accelerated animations
- 📱 **Responsive Design** - Mobile-first with breakpoints at 390px, 834px, 1440px

## 🛠 Tech Stack

### Core
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety and developer experience
- **Vite 6.3.5** - Build tool and dev server
- **React Router DOM 7.12.0** - Client-side routing

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Custom CSS Variables** - Design system tokens in `/src/styles/theme.css`
- **Motion (Framer Motion) 12.23.24** - Animation library

### UI Components
- **Radix UI** - Accessible component primitives
  - Accordion, Dialog, Dropdown, Popover, Tabs, and more
- **Lucide React 0.487.0** - Icon library
- **Recharts 2.15.2** - Chart and data visualization
- **React Slick 0.31.0** - Carousel component
- **Sonner 2.0.3** - Toast notifications

### Development
- **@vitejs/plugin-react 4.7.0** - React plugin for Vite
- **PostCSS** - CSS transformations
- **pnpm** - Package manager

## 📁 Project Structure

```
lawnflow-marketing/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── agents/          # AI agent showcase components
│   │   │   ├── compare/         # Competitive comparison components
│   │   │   ├── for-crews/       # Crew-specific components
│   │   │   ├── for-customers/   # Customer-specific components
│   │   │   ├── for-owners/      # Owner-specific components
│   │   │   ├── home/            # Home page sections
│   │   │   ├── how-it-works/    # How It Works page components
│   │   │   ├── layout/          # Header, Footer, Navigation
│   │   │   ├── screens/         # Screen & Flow components
│   │   │   ├── ui/              # Reusable UI components
│   │   │   │   ├── iphone-shell.tsx           # iPhone mockup frame
│   │   │   │   ├── mobile-app-preview.tsx     # Pre-built mobile screens
│   │   │   │   └── [50+ UI components]
│   │   │   └── waitlist/        # Waitlist capture components
│   │   ├── pages/               # Page-level components
│   │   │   ├── home-page.tsx
│   │   │   ├── waitlist-page.tsx
│   │   │   ├── how-it-works-page.tsx
│   │   │   ├── for-owners-page.tsx
│   │   │   ├── for-crews-page.tsx
│   │   │   ├── for-customers-page.tsx
│   │   │   ├── agents-page.tsx
│   │   │   ├── screens-page.tsx
│   │   │   └── compare-page.tsx
│   │   ├── App.tsx              # Root component with routing
│   │   └── design-system.ts     # Design system documentation
│   └── styles/
│       ├── index.css            # Main entry CSS
│       ├── tailwind.css         # Tailwind imports
│       ├── theme.css            # CSS custom properties (design tokens)
│       └── fonts.css            # Font imports
├── SPRINT_1_DOCUMENTATION.md
├── SPRINT_2_DOCUMENTATION.md
├── SPRINT_3_DOCUMENTATION.md
├── SPRINT_7_DOCUMENTATION.md
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lawnflow-marketing.git
   cd lawnflow-marketing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm build
   # or
   npm run build
   ```

4. **Open in browser**
   ```
   The dev server will start at http://localhost:5173
   ```

## 💻 Development

### Available Scripts

```bash
# Build for production
pnpm build
npm run build

# Preview production build locally
pnpm preview
npm run preview
```

### Development Workflow

1. **Components** are located in `/src/app/components/`
2. **Pages** are in `/src/app/pages/`
3. **Styles** use Tailwind utilities and CSS variables from `/src/styles/theme.css`
4. **Routes** are defined in `/src/app/App.tsx`

### Adding a New Page

1. Create page component in `/src/app/pages/`
2. Create section components in `/src/app/components/[page-name]/`
3. Add route to `/src/app/App.tsx`
4. Add navigation link to `/src/app/components/layout/header.tsx`

Example:
```tsx
// src/app/pages/new-page.tsx
import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import { NewPageHero } from "@/app/components/new-page/hero";

export function NewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <NewPageHero />
      </main>
      <Footer />
    </div>
  );
}
```

## 📄 Pages

### Marketing Pages
1. **Home** (`/`) - Hero, problem/solution, three audiences, capabilities, outcomes
2. **Waitlist** (`/waitlist`) - Email capture and confirmation
3. **How It Works** (`/how-it-works`) - Agent cards, lifecycle timeline, trust ladder
4. **For Owners** (`/for-owners`) - Owner dashboard, before/after comparison
5. **For Crews** (`/for-crews`) - Crew mobile app, day plan features
6. **For Customers** (`/for-customers`) - Customer portal, feature grid
7. **Agents** (`/agents`) - Detailed AI agent information and collaboration
8. **Screens & Flows** (`/screens`) - Desktop and mobile screen previews
9. **Compare** (`/compare`) - Competitive value matrix with 7 categories

### Navigation Structure
```
Header Navigation:
├── How It Works
├── For Owners
├── For Crews
├── For Customers
├── Agents
└── Compare

Footer Navigation:
├── Product
│   ├── How It Works
│   ├── Agents
│   └── Screens & Flows
├── Audiences
│   ├── For Owners
│   ├── For Crews
│   └── For Customers
└── Company
    ├── Compare
    └── Waitlist
```

## 🎨 Design System

### Brand Colors
```css
--primary-green: #1F7A3A   /* Primary brand color */
--dark-green: #0F3D1E      /* Darker brand shade */
--cream: #F6F3EA           /* Background accent */
--accent-blue: #2563EB     /* Secondary accent */
--text-primary: #101828    /* Primary text */
--text-muted: #667085      /* Muted text */
--border-color: #EAECF0    /* Borders and dividers */
```

### Typography Scale
```css
--text-h1: 56px / 64px     /* Hero headlines */
--text-h2: 40px / 48px     /* Section headings */
--text-h3: 28px / 36px     /* Subsection headings */
--text-body: 16px / 24px   /* Body text */
--text-small: 14px / 20px  /* Small text */
```

### Spacing Scale
```css
--spacing-1: 4px
--spacing-2: 8px
--spacing-3: 12px
--spacing-4: 16px
--spacing-6: 24px
--spacing-8: 32px
--spacing-12: 48px
--spacing-16: 64px
--spacing-24: 96px
```

### Breakpoints
- **Mobile**: 390px
- **Tablet**: 834px
- **Desktop**: 1440px

### Using Design Tokens
```tsx
// In components, use CSS variables
<h1 style={{
  fontSize: "var(--text-h1)",
  lineHeight: "var(--text-h1-line)",
  color: "var(--text-primary)",
}}>
  Headline Text
</h1>

// Or use Tailwind utilities
<div className="text-[var(--text-primary)] bg-[var(--cream)]">
  Content
</div>
```

## 🧩 Components

### Key Reusable Components

#### IPhoneShell
Realistic iPhone frame for mobile mockups.
```tsx
import { IPhoneShell } from "@/app/components/ui/iphone-shell";

<IPhoneShell>
  <div className="bg-white min-h-[640px]">
    {/* Your app screen content */}
  </div>
</IPhoneShell>
```

#### MobileAppPreview
Pre-built mobile app screens for three user types.
```tsx
import { MobileAppPreview } from "@/app/components/ui/mobile-app-preview";

<MobileAppPreview variant="owner" />
<MobileAppPreview variant="crew" />
<MobileAppPreview variant="customer" />
```

#### Buttons
```tsx
import { Button } from "@/app/components/ui/button";

<Button size="lg" variant="default">
  Primary Button
</Button>
```

#### Cards
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Component Categories

- **Layout**: Header, Footer, Section Container
- **UI Primitives**: Button, Input, Card, Badge, etc.
- **Marketing**: Hero sections, CTA bands, testimonial cards
- **Mobile**: iPhone shell, mobile app previews
- **Interactive**: Accordions, tabs, carousels
- **Forms**: Input, textarea, checkbox, select

## 🚢 Deployment

### Build for Production
```bash
pnpm build
# or
npm run build
```

This creates an optimized production build in the `/dist` folder.

### Deployment Platforms

**Recommended:**
- **Vercel** - Zero-config deployment
  ```bash
  vercel
  ```

- **Netlify** - Drag and drop `/dist` folder
  ```bash
  netlify deploy --prod --dir=dist
  ```

- **AWS S3 + CloudFront** - Static site hosting
- **GitHub Pages** - Free hosting for public repos

### Environment Variables
Currently, the site uses no environment variables. If you add backend integration:

1. Create `.env` file (already in `.gitignore`)
2. Add variables prefixed with `VITE_`
3. Access via `import.meta.env.VITE_YOUR_VAR`

## 📚 Sprint History

The project was built through a series of focused sprints:

### Sprint 0-1: Foundation
- Established design system (colors, typography, spacing, breakpoints)
- Created foundational components (Header, Footer, Buttons, Cards)
- Built initial design documentation

### Sprint 2: Core Pages
- Home page with hero, problem/solution, capabilities
- How It Works page with agent cards and timeline
- Waitlist page with email capture

### Sprint 3: Audience Pages
- For Owners page (dashboard, before/after)
- For Crews page (mobile app preview, features)
- For Customers page (portal preview, benefits)

### Sprint 4-6: Advanced Features
- Agents page with detailed AI agent information
- Screens & Flows page with desktop and mobile previews
- Compare page with competitive value matrix
- Three Audiences Section on home page
- Updated hero section with waitlist capture

### Sprint 7: Mobile Experience (Current)
- Created reusable iPhone shell component
- Built mobile app previews for all three user types
- Added animated mobile experience showcase carousel
- Integrated iPhone mockups across all pages
- Enhanced visual consistency with clean black iPhone frames

**See detailed documentation in:**
- `SPRINT_1_DOCUMENTATION.md`
- `SPRINT_2_DOCUMENTATION.md`
- `SPRINT_3_DOCUMENTATION.md`
- `SPRINT_7_DOCUMENTATION.md`

## 📖 Documentation

### Comprehensive Documentation Suite

This project includes extensive documentation for all stakeholders:

#### For Everyone
- **[README.md](./README.md)** (This file) - Project overview and getting started
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - Complete documentation index and guide

#### For Contributors
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines and workflow
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** - Community standards

#### For Developers & Maintainers
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide for all platforms
- **[MAINTENANCE.md](./MAINTENANCE.md)** - Project maintenance procedures
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - GitHub repository setup guide

#### For Security
- **[SECURITY.md](./SECURITY.md)** - Security policy and vulnerability reporting

#### Project History
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and release notes
- **[SPRINT_*_DOCUMENTATION.md](./DOCUMENTATION_INDEX.md)** - Sprint-by-sprint development history

#### GitHub Templates
- **Bug Report Template** - `.github/ISSUE_TEMPLATE/bug_report.md`
- **Feature Request Template** - `.github/ISSUE_TEMPLATE/feature_request.md`
- **Pull Request Template** - `.github/PULL_REQUEST_TEMPLATE.md`

**👉 For a complete guide to all documentation, see [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)**

## 🤝 Contributing

### Branch Strategy
```
main          - Production-ready code
develop       - Development branch
feature/*     - New features
fix/*         - Bug fixes
docs/*        - Documentation updates
```

### Commit Convention
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes and commit with conventional commits
3. Push branch and create PR to `develop`
4. Request review
5. Merge after approval

## 📝 License

This project is proprietary and confidential.

## 🔗 Links

- **Website**: [lawnflow.ai](https://lawnflow.ai) (when deployed)
- **Repository**: [github.com/GoToMarketNow/Lawnflow-Website](https://github.com/GoToMarketNow/Lawnflow-Website)
- **Documentation**: See `/SPRINT_*_DOCUMENTATION.md` files
- **Design System**: See `/src/app/design-system.ts`

## 📞 Contact

For questions or support, contact the LawnFlow.ai team.

---

**Built with** ❤️ **by the LawnFlow.ai team**

Last Updated: January 2026