# 🚀 EXECUTE THESE COMMANDS

## Copy and paste these commands into your terminal

You are currently in the Figma Make environment. To deploy to GitHub, you need to run these commands in your **local terminal** where you can access git and GitHub.

---

## Step 1: Navigate to Project Directory

First, make sure you're in the LawnFlow marketing website directory:

```bash
# Navigate to your project directory
cd /path/to/lawnflow-marketing

# Verify you're in the right place (should show deploy-to-github.sh)
ls -la | grep deploy-to-github.sh
```

---

## Step 2: Make Script Executable

```bash
chmod +x deploy-to-github.sh
```

---

## Step 3: Run the Deployment Script

```bash
./deploy-to-github.sh
```

---

## What the Script Will Do

The script will automatically:

1. ✅ Create `.github` directory structure
2. ✅ Move `workflows/` to `.github/workflows/`
3. ✅ Move `ISSUE_TEMPLATE/` to `.github/ISSUE_TEMPLATE/`
4. ✅ Move `PULL_REQUEST_TEMPLATE.md` to `.github/`
5. ✅ Fix LICENSE (directory → file)
6. ✅ Initialize git repository
7. ✅ Configure remote: https://github.com/GoToMarketNow/Lawnflow-Website.git
8. ✅ Configure git user (will prompt if needed)
9. ✅ Stage all files
10. ✅ Create commit with descriptive message
11. ✅ Set branch to `main`
12. ✅ Push to GitHub (will prompt for credentials)
13. ✅ Create and push `develop` branch
14. ✅ Clean up temporary directories

---

## Authentication

When prompted for credentials:

**Username:** Your GitHub username

**Password:** Use a Personal Access Token (NOT your password)

### Get Your Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "LawnFlow Website Deploy"
4. Select scopes: `repo` (check the box)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Paste it when prompted for password

---

## Expected Output

You should see:
```
==========================================
LawnFlow.ai GitHub Deployment
==========================================

Step 1: Organizing file structure...
✓ File structure organized

Step 2: Initializing Git repository...
✓ Git initialized

Step 3: Configuring remote repository...
✓ Remote configured: https://github.com/GoToMarketNow/Lawnflow-Website.git

Step 4: Checking Git configuration...
✓ Git user configured

Step 5: Staging all files...
✓ All files staged

Step 6: Creating commit...
✓ Commit created

Step 7: Setting up main branch...
✓ Branch renamed to 'main'

Step 8: Pushing to GitHub...
[You'll be prompted for credentials here]
✓ Successfully pushed to GitHub!

Step 9: Creating develop branch...
✓ Develop branch created and pushed

Step 10: Cleaning up...
✓ Cleanup complete

==========================================
Deployment Complete!
==========================================

Your repository is now available at:
https://github.com/GoToMarketNow/Lawnflow-Website
```

---

## After Successful Push

1. **Verify on GitHub:**
   - Go to: https://github.com/GoToMarketNow/Lawnflow-Website
   - Check that all files are there
   - Verify README displays correctly

2. **Check GitHub Actions:**
   - Go to Actions tab
   - Verify build workflow runs successfully

3. **Configure Repository (Optional):**
   - Settings > General: Add description and topics
   - Settings > Branches: Set up branch protection
   - Settings > Pages: Configure GitHub Pages (if desired)

---

## Troubleshooting

### ❌ "Permission denied: deploy-to-github.sh"
**Solution:** Run `chmod +x deploy-to-github.sh` first

### ❌ "Authentication failed"
**Solution:** Make sure you're using a Personal Access Token, not your password

### ❌ "remote origin already exists"
**Solution:** The script handles this automatically, but if it persists:
```bash
git remote remove origin
git remote add origin https://github.com/GoToMarketNow/Lawnflow-Website.git
```

### ❌ Script not found
**Solution:** Make sure you're in the project root directory where deploy-to-github.sh exists

---

## Alternative: Manual Deployment

If the script doesn't work, you can deploy manually:

See `QUICK_START.md` for the 5-step manual process.

---

## Success Indicators

✅ Script completes without errors  
✅ GitHub shows all files at https://github.com/GoToMarketNow/Lawnflow-Website  
✅ README.md displays on repository homepage  
✅ GitHub Actions workflow appears in Actions tab  

---

**Ready? Run this command:**

```bash
chmod +x deploy-to-github.sh && ./deploy-to-github.sh
```

**Good luck! 🚀**
