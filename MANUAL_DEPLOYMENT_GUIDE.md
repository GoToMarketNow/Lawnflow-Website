# Manual GitHub Deployment Guide

Follow these steps to push all changes to your GitHub repository at:
**https://github.com/GoToMarketNow/Lawnflow-Website**

## Prerequisites

- Git installed on your system
- GitHub account access
- Repository access to GoToMarketNow/Lawnflow-Website

## Option 1: Automated Script (Recommended)

Run the automated deployment script:

```bash
chmod +x deploy-to-github.sh
./deploy-to-github.sh
```

The script will:
- ✅ Organize file structure correctly
- ✅ Initialize git repository
- ✅ Configure remote
- ✅ Stage and commit all files
- ✅ Push to GitHub (main and develop branches)
- ✅ Clean up temporary files

## Option 2: Manual Steps

If you prefer to do it manually, follow these steps:

### Step 1: Fix File Structure

```bash
# Create .github directory structure
mkdir -p .github/workflows
mkdir -p .github/ISSUE_TEMPLATE

# Move files to correct locations
mv workflows/* .github/workflows/ 2>/dev/null || true
mv ISSUE_TEMPLATE/* .github/ISSUE_TEMPLATE/ 2>/dev/null || true
mv PULL_REQUEST_TEMPLATE.md .github/

# Fix LICENSE file
rm -rf LICENSE  # Remove incorrect directory
mv LICENSE.md LICENSE  # Rename to proper name

# Clean up old directories
rm -rf workflows ISSUE_TEMPLATE
```

### Step 2: Initialize Git Repository

```bash
# Initialize git (if not already initialized)
git init

# Configure git user (if needed)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 3: Configure Remote Repository

```bash
# Remove existing remote (if any)
git remote remove origin 2>/dev/null || true

# Add your GitHub repository
git remote add origin https://github.com/GoToMarketNow/Lawnflow-Website.git

# Verify remote
git remote -v
```

### Step 4: Stage All Files

```bash
# Add all files to staging
git add .

# Check what will be committed
git status
```

### Step 5: Create Commit

```bash
# Create commit with descriptive message
git commit -m "Sprint 7 Complete: iPhone shell integration and comprehensive documentation

- Added clean black iPhone shell component for mobile mockups
- Created mobile app previews for Owner, Crew, and Customer experiences
- Integrated animated mobile experience showcase carousel
- Updated all pages with realistic iPhone mockups
- Created comprehensive documentation suite (11+ documents)
- Added GitHub templates for issues and PRs
- Configured CI/CD with GitHub Actions
- Updated to version 0.7.0

Complete documentation, ready for production deployment."
```

### Step 6: Set Main Branch

```bash
# Rename branch to main
git branch -M main
```

### Step 7: Push to GitHub

```bash
# Push to GitHub (you'll be prompted for credentials)
git push -u origin main --force
```

**Note:** If you have 2FA enabled on GitHub, you'll need to use a Personal Access Token instead of your password:
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy the token
5. Use the token as your password when prompted

### Step 8: Create Develop Branch (Optional)

```bash
# Create and push develop branch
git checkout -b develop
git push -u origin develop
```

## Verification Checklist

After pushing, verify on GitHub:

- [ ] All source files in `/src` directory
- [ ] All documentation files (README.md, CHANGELOG.md, etc.)
- [ ] `.github/workflows/build.yml` present
- [ ] `.github/ISSUE_TEMPLATE/` with bug_report.md and feature_request.md
- [ ] `.github/PULL_REQUEST_TEMPLATE.md` present
- [ ] LICENSE file (not directory) present
- [ ] package.json and other config files present
- [ ] Main branch set as default
- [ ] GitHub Actions workflow visible in Actions tab

## Post-Deployment Configuration

### 1. Repository Settings

Go to repository Settings and update:

- **Description**: AI-powered lawn and landscaping business management platform
- **Website**: https://lawnflow.ai (or your domain)
- **Topics**: `lawncare`, `landscaping`, `ai`, `react`, `typescript`, `vite`, `tailwind`, `marketing-site`

### 2. Branch Protection Rules

Set up protection for `main` branch:
1. Go to Settings > Branches
2. Add rule for `main`
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Include administrators (optional)

### 3. Enable GitHub Actions

1. Go to Actions tab
2. Enable workflows
3. The build workflow should appear and run automatically

### 4. Set Up Deployment (Optional)

If deploying to Vercel/Netlify:
1. Add deployment secrets in Settings > Secrets and variables > Actions
2. Update `.github/workflows/build.yml` with deployment step
3. Or use platform-specific Git integration

## Troubleshooting

### Issue: Authentication Failed

**Solution**: Use Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens
- Use token as password when prompted

### Issue: "refusing to merge unrelated histories"

**Solution**: Use force push (only if this is a new setup)
```bash
git push -u origin main --force
```

### Issue: Files not showing up

**Solution**: Check .gitignore isn't excluding files
```bash
cat .gitignore
# Make sure important files aren't listed
```

### Issue: LICENSE showing as directory

**Solution**: Remove directory and create file
```bash
rm -rf LICENSE
# Create LICENSE file with content
```

## Support

For issues or questions:
1. Check DOCUMENTATION_INDEX.md for relevant documentation
2. Review GITHUB_SETUP.md for detailed setup instructions
3. Create an issue in the repository (after pushing)

## Success Indicators

You'll know the deployment was successful when:
- ✅ Repository shows all files on GitHub
- ✅ GitHub Actions workflow passes
- ✅ README.md renders correctly on repository homepage
- ✅ Issue and PR templates work when creating new issues/PRs
- ✅ All documentation is accessible

---

**Repository URL**: https://github.com/GoToMarketNow/Lawnflow-Website

**Current Version**: 0.7.0

**Last Updated**: January 2026
