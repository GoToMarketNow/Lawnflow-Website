#!/bin/bash
# LawnFlow.ai GitHub Deployment Script
# This script will push all changes to https://github.com/GoToMarketNow/Lawnflow-Website

set -e  # Exit on any error

echo "=========================================="
echo "LawnFlow.ai GitHub Deployment"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean up incorrect directory structure
echo -e "${BLUE}Step 1: Organizing file structure...${NC}"

# Create .github directory if it doesn't exist
mkdir -p .github/workflows
mkdir -p .github/ISSUE_TEMPLATE

# Move files to correct locations
if [ -d "workflows" ]; then
    echo "Moving workflows to .github/workflows..."
    cp -r workflows/* .github/workflows/ 2>/dev/null || true
fi

if [ -d "ISSUE_TEMPLATE" ]; then
    echo "Moving issue templates to .github/ISSUE_TEMPLATE..."
    cp -r ISSUE_TEMPLATE/* .github/ISSUE_TEMPLATE/ 2>/dev/null || true
fi

if [ -f "PULL_REQUEST_TEMPLATE.md" ]; then
    echo "Moving PR template to .github/..."
    cp PULL_REQUEST_TEMPLATE.md .github/
fi

# Handle LICENSE file
if [ -d "LICENSE" ]; then
    echo "Fixing LICENSE directory issue..."
    rm -rf LICENSE
fi

if [ -f "LICENSE.md" ]; then
    echo "Renaming LICENSE.md to LICENSE..."
    mv LICENSE.md LICENSE
fi

echo -e "${GREEN}✓ File structure organized${NC}"
echo ""

# Step 2: Initialize git if needed
echo -e "${BLUE}Step 2: Initializing Git repository...${NC}"

if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
else
    echo -e "${GREEN}✓ Git already initialized${NC}"
fi
echo ""

# Step 3: Configure remote
echo -e "${BLUE}Step 3: Configuring remote repository...${NC}"

REPO_URL="https://github.com/GoToMarketNow/Lawnflow-Website.git"

# Remove existing remote if it exists
git remote remove origin 2>/dev/null || true

# Add the remote
git remote add origin "$REPO_URL"
echo -e "${GREEN}✓ Remote configured: $REPO_URL${NC}"
echo ""

# Step 4: Configure git user (if not set)
echo -e "${BLUE}Step 4: Checking Git configuration...${NC}"

if [ -z "$(git config user.name)" ]; then
    echo "Please enter your Git username:"
    read GIT_USERNAME
    git config user.name "$GIT_USERNAME"
fi

if [ -z "$(git config user.email)" ]; then
    echo "Please enter your Git email:"
    read GIT_EMAIL
    git config user.email "$GIT_EMAIL"
fi

echo -e "${GREEN}✓ Git user configured${NC}"
echo ""

# Step 5: Stage all files
echo -e "${BLUE}Step 5: Staging all files...${NC}"

git add .

# Show what will be committed
echo ""
echo "Files to be committed:"
git status --short
echo ""

echo -e "${GREEN}✓ All files staged${NC}"
echo ""

# Step 6: Create commit
echo -e "${BLUE}Step 6: Creating commit...${NC}"

COMMIT_MESSAGE="Sprint 7 Complete: iPhone shell integration and comprehensive documentation

- Added clean black iPhone shell component for mobile mockups
- Created mobile app previews for Owner, Crew, and Customer experiences
- Integrated animated mobile experience showcase carousel
- Updated all pages with realistic iPhone mockups
- Created comprehensive documentation suite (11+ documents)
- Added GitHub templates for issues and PRs
- Configured CI/CD with GitHub Actions
- Updated to version 0.7.0

Complete documentation, ready for production deployment."

git commit -m "$COMMIT_MESSAGE"
echo -e "${GREEN}✓ Commit created${NC}"
echo ""

# Step 7: Set up main branch
echo -e "${BLUE}Step 7: Setting up main branch...${NC}"

git branch -M main
echo -e "${GREEN}✓ Branch renamed to 'main'${NC}"
echo ""

# Step 8: Push to GitHub
echo -e "${BLUE}Step 8: Pushing to GitHub...${NC}"
echo ""
echo -e "${RED}IMPORTANT: You will need to authenticate with GitHub.${NC}"
echo "If you have 2FA enabled, use a Personal Access Token instead of your password."
echo "Generate a token at: https://github.com/settings/tokens"
echo ""
echo "Press Enter to continue with the push..."
read

git push -u origin main --force

echo ""
echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
echo ""

# Step 9: Create develop branch
echo -e "${BLUE}Step 9: Creating develop branch...${NC}"

git checkout -b develop 2>/dev/null || git checkout develop
git push -u origin develop --force 2>/dev/null || true

echo -e "${GREEN}✓ Develop branch created and pushed${NC}"
echo ""

# Step 10: Clean up temporary files
echo -e "${BLUE}Step 10: Cleaning up...${NC}"

# Remove old directories if they exist
rm -rf workflows ISSUE_TEMPLATE 2>/dev/null || true

echo -e "${GREEN}✓ Cleanup complete${NC}"
echo ""

# Final summary
echo "=========================================="
echo -e "${GREEN}Deployment Complete!${NC}"
echo "=========================================="
echo ""
echo "Your repository is now available at:"
echo "https://github.com/GoToMarketNow/Lawnflow-Website"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Verify all files were uploaded correctly"
echo "3. Set up branch protection rules (Settings > Branches)"
echo "4. Configure repository settings (description, topics, etc.)"
echo "5. Review and configure GitHub Actions (Actions tab)"
echo ""
echo "Documentation available:"
echo "- README.md - Project overview"
echo "- DEPLOYMENT.md - Deployment guide"
echo "- CONTRIBUTING.md - Contribution guidelines"
echo "- DOCUMENTATION_INDEX.md - Complete documentation index"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
