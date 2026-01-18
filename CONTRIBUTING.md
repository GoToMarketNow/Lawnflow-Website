# Contributing to LawnFlow.ai Marketing Website

Thank you for your interest in contributing to the LawnFlow.ai marketing website! This document provides guidelines and instructions for contributing.

## 🎯 Project Overview

This is a marketing website for LawnFlow.ai, built with React, TypeScript, Vite, and Tailwind CSS. The site showcases AI-powered lawn care management software for business owners, crews, and customers.

## 🔧 Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/lawnflow-marketing.git
   cd lawnflow-marketing
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or npm install
   ```

3. **Start Development Server**
   ```bash
   pnpm build
   # or npm run build
   ```

## 📋 Pull Request Process

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Use the design system tokens from `/src/styles/theme.css`
   - Test on mobile, tablet, and desktop viewports

3. **Commit Your Changes**
   Use conventional commit messages:
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug"
   git commit -m "docs: update documentation"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## 🎨 Code Style Guidelines

### TypeScript/React
```tsx
// Use functional components with TypeScript
export function MyComponent() {
  return (
    <div className="...">
      Content
    </div>
  );
}

// Use proper typing for props
interface MyComponentProps {
  title: string;
  isActive?: boolean;
}

export function MyComponent({ title, isActive = false }: MyComponentProps) {
  // Component logic
}
```

### Styling
```tsx
// Prefer Tailwind utilities
<div className="flex items-center gap-4 px-6 py-4">

// Use CSS variables for design tokens
<h1 style={{
  fontSize: "var(--text-h1)",
  color: "var(--text-primary)",
}}>

// Avoid inline styles for margins/padding (use Tailwind)
```

### File Organization
```
/src/app/components/[feature-name]/
  - component-name.tsx       (kebab-case)
  - index.ts                 (optional barrel export)

/src/app/pages/
  - page-name-page.tsx       (kebab-case with -page suffix)
```

## 🧩 Component Guidelines

### Creating New Components

1. **Location**: Place in appropriate folder
   - `/components/ui/` - Reusable UI primitives
   - `/components/layout/` - Layout components
   - `/components/[page]/` - Page-specific components

2. **Naming**: Use PascalCase for components
   ```tsx
   // MyComponent.tsx
   export function MyComponent() { }
   ```

3. **Props**: Always type props
   ```tsx
   interface MyComponentProps {
     title: string;
     children?: ReactNode;
   }
   ```

4. **Imports**: Use `@/` alias
   ```tsx
   import { Button } from "@/app/components/ui/button";
   ```

### Design System Usage

Always use design system tokens:
```tsx
// ✅ Good
<h1 style={{ fontSize: "var(--text-h1)" }}>

// ❌ Bad
<h1 style={{ fontSize: "56px" }}>
```

## 📱 Responsive Design

Test all changes on multiple viewports:
- **Mobile**: 390px
- **Tablet**: 834px
- **Desktop**: 1440px

```tsx
// Use Tailwind responsive modifiers
<div className="flex-col md:flex-row lg:gap-8">
```

## ✅ Checklist Before Submitting PR

- [ ] Code follows project style guidelines
- [ ] All new components are properly typed
- [ ] Design system tokens are used consistently
- [ ] Tested on mobile, tablet, and desktop
- [ ] No console errors or warnings
- [ ] Commit messages follow conventional format
- [ ] PR description is clear and complete

## 🐛 Reporting Bugs

Create an issue with:
1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Numbered steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, screen size

## 💡 Suggesting Features

Create an issue with:
1. **Feature Description**: Clear description
2. **Use Case**: Why this feature is needed
3. **Proposed Solution**: How it could work
4. **Alternatives**: Other approaches considered

## 📚 Resources

- **Design System**: `/src/app/design-system.ts`
- **Sprint Documentation**: `/SPRINT_*_DOCUMENTATION.md`
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **React Router**: [reactrouter.com](https://reactrouter.com)
- **Radix UI**: [radix-ui.com](https://radix-ui.com)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## 📞 Questions?

If you have questions, please:
1. Check existing documentation
2. Search existing issues
3. Create a new issue with your question

Thank you for contributing to LawnFlow.ai! 🌱
