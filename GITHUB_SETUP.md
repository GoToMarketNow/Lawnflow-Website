# GitHub Repository Setup Script

This document contains the commands to set up your GitHub repository for the first time.

## Prerequisites

- Git installed on your machine
- GitHub account created
- GitHub repository created (empty)

## Initial Setup Commands

### 1. Initialize Git Repository (if not already initialized)

```bash
# Navigate to project directory
cd /path/to/lawnflow-marketing

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: LawnFlow.ai marketing website v0.7.0"
```

### 2. Connect to GitHub Repository

```bash
# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/lawnflow-marketing.git

# Verify remote
git remote -v
```

### 3. Create and Push Main Branch

```bash
# Rename branch to main (if it's currently master)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Create Develop Branch

```bash
# Create develop branch
git checkout -b develop

# Push develop branch
git push -u origin develop
```

### 5. Set Default Branch (on GitHub)

Go to your repository on GitHub:
1. Go to Settings > Branches
2. Set default branch to `main`
3. Save changes

## Branch Protection Rules

Set up branch protection for `main` and `develop`:

### For Main Branch:
1. Go to Settings > Branches > Branch protection rules
2. Add rule for `main`
3. Enable:
   - [x] Require pull request reviews before merging
   - [x] Require status checks to pass before merging
   - [x] Require branches to be up to date before merging
   - [x] Include administrators
4. Save changes

### For Develop Branch:
1. Add rule for `develop`
2. Enable:
   - [x] Require pull request reviews before merging
   - [x] Require status checks to pass before merging
3. Save changes

## GitHub Settings

### 1. Repository Settings

- **Description**: AI-powered lawn and landscaping business management platform
- **Website**: https://lawnflow.ai
- **Topics**: `lawncare`, `landscaping`, `ai`, `react`, `typescript`, `vite`, `tailwind`, `marketing-site`
- **Features**:
  - [x] Issues
  - [x] Pull Requests
  - [x] Discussions (optional)
  - [x] Projects (optional)
  - [x] Wiki (optional)

### 2. Enable GitHub Actions

1. Go to Actions tab
2. Enable GitHub Actions
3. The workflow in `.github/workflows/build.yml` will run automatically

### 3. Set Up Secrets (if deploying)

Go to Settings > Secrets and variables > Actions:

Add secrets for deployment (if using):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- Or similar for your hosting platform

### 4. Configure GitHub Pages (optional)

If using GitHub Pages:
1. Go to Settings > Pages
2. Source: Deploy from branch
3. Branch: `gh-pages`
4. Folder: `/` (root)
5. Save

## Verify Setup

After setup, verify:

```bash
# Check remotes
git remote -v

# Check branches
git branch -a

# Check current branch
git branch --show-current

# View commit history
git log --oneline
```

## First PR Workflow

Create your first pull request:

```bash
# Make sure you're on develop
git checkout develop

# Create feature branch
git checkout -b feature/test-pr

# Make a small change (e.g., update README)
echo "Test change" >> README.md

# Commit changes
git add README.md
git commit -m "docs: test pull request workflow"

# Push feature branch
git push -u origin feature/test-pr
```

Then on GitHub:
1. Go to Pull Requests
2. Click "New Pull Request"
3. Base: `develop`, Compare: `feature/test-pr`
4. Create pull request
5. Review and merge

## Team Collaboration Setup

### Add Collaborators

1. Go to Settings > Collaborators
2. Click "Add people"
3. Enter GitHub usernames
4. Assign appropriate role:
   - **Admin**: Full access
   - **Write**: Push access
   - **Read**: View only

### Set Up Code Owners (optional)

Create `.github/CODEOWNERS` file:

```
# Global owners
* @username

# Specific paths
/src/app/components/ @design-team
/src/styles/ @design-team
/.github/workflows/ @devops-team
/DEPLOYMENT.md @devops-team
```

## Troubleshooting

### Issue: "fatal: remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/yourusername/lawnflow-marketing.git
```

### Issue: "refusing to merge unrelated histories"

```bash
# Allow unrelated histories
git pull origin main --allow-unrelated-histories
```

### Issue: Authentication failed

```bash
# Use SSH instead of HTTPS
git remote set-url origin git@github.com:yourusername/lawnflow-marketing.git

# Or set up GitHub CLI
gh auth login
```

## Next Steps

After repository setup:

1. **Review all documentation** - Ensure URLs and usernames are updated
2. **Set up CI/CD** - Configure deployment pipeline
3. **Add team members** - Invite collaborators
4. **Create initial issues** - Plan next sprint
5. **Deploy to staging** - Test deployment process
6. **Set up monitoring** - Configure error tracking and analytics

## Quick Reference

### Common Git Commands

```bash
# Update local repository
git fetch origin
git pull origin develop

# Create feature branch
git checkout -b feature/feature-name

# Commit changes
git add .
git commit -m "type: description"

# Push changes
git push origin feature/feature-name

# Merge latest develop into feature
git fetch origin
git merge origin/develop

# Delete local branch
git branch -d feature/feature-name

# Delete remote branch
git push origin --delete feature/feature-name
```

### Commit Message Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

---

For more information, see:
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [README.md](./README.md)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
