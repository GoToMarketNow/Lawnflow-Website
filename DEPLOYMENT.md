# Deployment Guide

This guide covers deploying the LawnFlow.ai marketing website to various hosting platforms.

## 📋 Table of Contents
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Build Configuration](#build-configuration)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel](#vercel-recommended)
  - [Netlify](#netlify)
  - [AWS S3 + CloudFront](#aws-s3--cloudfront)
  - [GitHub Pages](#github-pages)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## ✅ Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Forms function properly (waitlist signup)
- [ ] Images and assets load correctly
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags are in place (if added)
- [ ] No console errors or warnings
- [ ] Build succeeds locally (`pnpm build`)

## 🔧 Build Configuration

### Build Command
```bash
pnpm build
# or
npm run build
```

### Output Directory
```
dist/
```

### Node Version
```
18.x or higher (LTS recommended)
```

## 🚀 Deployment Platforms

### Vercel (Recommended)

Vercel offers zero-configuration deployment with automatic HTTPS and global CDN.

#### Option 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

#### Option 2: Vercel Git Integration

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically deploy on every push to main

#### Environment Variables (Vercel)
```bash
# Add in Vercel Dashboard > Settings > Environment Variables
VITE_API_URL=https://api.lawnflow.ai
```

---

### Netlify

Netlify provides continuous deployment with form handling and serverless functions.

#### Option 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build**
   ```bash
   pnpm build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

#### Option 2: Netlify Git Integration

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Install command: `pnpm install`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will auto-deploy on git push

#### Create netlify.toml (Optional)
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### AWS S3 + CloudFront

For enterprise-grade hosting with full control.

#### 1. Build the Project
```bash
pnpm build
```

#### 2. Create S3 Bucket
```bash
aws s3 mb s3://lawnflow-marketing
```

#### 3. Configure Bucket for Static Hosting
```bash
aws s3 website s3://lawnflow-marketing \
  --index-document index.html \
  --error-document index.html
```

#### 4. Upload Files
```bash
aws s3 sync dist/ s3://lawnflow-marketing \
  --delete \
  --cache-control "max-age=31536000,public"
```

#### 5. Setup CloudFront Distribution
- Create distribution pointing to S3 bucket
- Set default root object to `index.html`
- Configure custom error pages (404 → /index.html)
- Add SSL certificate for HTTPS

#### 6. Configure DNS
- Point domain to CloudFront distribution
- Update A record to CloudFront domain

---

### GitHub Pages

Free hosting for public repositories.

#### 1. Install gh-pages
```bash
pnpm add -D gh-pages
```

#### 2. Update package.json
```json
{
  "scripts": {
    "deploy": "pnpm build && gh-pages -d dist"
  }
}
```

#### 3. Configure Base Path in vite.config.ts
```typescript
export default defineConfig({
  base: '/lawnflow-marketing/', // Repository name
  // ... rest of config
})
```

#### 4. Deploy
```bash
pnpm deploy
```

#### 5. Configure GitHub Pages
- Go to repository Settings > Pages
- Source: Deploy from branch `gh-pages`
- Folder: `/ (root)`

---

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Vercel automatically provisions SSL

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records
4. Netlify automatically provisions SSL

### AWS CloudFront
1. Request SSL certificate in ACM
2. Add alternate domain names (CNAMEs) to CloudFront
3. Update DNS A record to CloudFront distribution
4. Wait for DNS propagation (up to 48 hours)

---

## 🔐 Environment Variables

If you need environment variables (e.g., API endpoints):

### 1. Create .env file (local only)
```bash
# .env (NOT committed to git)
VITE_API_URL=https://api.lawnflow.ai
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

### 2. Access in Code
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. Platform-Specific Setup

**Vercel:**
- Dashboard > Settings > Environment Variables
- Add each variable with appropriate environment (Production/Preview/Development)

**Netlify:**
- Site settings > Build & deploy > Environment
- Add each variable

**GitHub Actions:**
- Repository Settings > Secrets and variables > Actions
- Add secrets for CI/CD workflows

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: `Module not found` error
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**Issue**: TypeScript errors
```bash
# Check TypeScript configuration
pnpm build --verbose
```

### Routing Issues (404 on Refresh)

**Issue**: Page refreshes return 404

**Solution**: Configure platform to redirect all routes to `index.html`

**Netlify**: Add `_redirects` file in `/public`:
```
/*    /index.html   200
```

**Vercel**: Add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Assets Not Loading

**Issue**: CSS/JS files return 404

**Solution**: Check `base` path in `vite.config.ts`
```typescript
export default defineConfig({
  base: '/', // Should be '/' for custom domains
})
```

### Environment Variables Not Working

**Issue**: `import.meta.env.VITE_*` is undefined

**Solution**: 
1. Ensure variable name starts with `VITE_`
2. Restart dev server after adding new variables
3. Check platform-specific environment variable configuration

---

## 📊 Performance Optimization

### Post-Deployment Checklist

- [ ] Enable gzip/brotli compression
- [ ] Configure CDN caching headers
- [ ] Enable HTTP/2
- [ ] Add security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Set up monitoring (Sentry, LogRocket, etc.)
- [ ] Configure analytics (Google Analytics, Plausible, etc.)
- [ ] Test Lighthouse score (aim for 90+)

### Recommended Headers

```
# netlify.toml or _headers file
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Cache-Control: public, max-age=31536000, immutable
```

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/build.yml`) that:
1. Runs on push to `main` and `develop` branches
2. Runs on pull requests to `main` and `develop`
3. Tests build on Node 18.x and 20.x
4. Uploads build artifacts
5. (Optional) Deploys to production

### Enable Auto-Deploy

**Vercel/Netlify:**
- Git integration enables automatic deploys
- Every push to main = production deploy
- Every PR = preview deploy

**Manual Deploy:**
- Use platform CLI in CI/CD workflow
- See commented section in `.github/workflows/build.yml`

---

## 📞 Support

If you encounter issues:
1. Check platform status pages
2. Review build logs for specific errors
3. Consult platform documentation
4. Create an issue in the repository

---

**Happy Deploying!** 🚀
