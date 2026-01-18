# 🚀 Quick Start: Push to GitHub

This is your quick reference guide to push all changes to:
**https://github.com/GoToMarketNow/Lawnflow-Website**

## ⚡ Fastest Method (Automated Script)

```bash
# Make script executable and run
chmod +x deploy-to-github.sh
./deploy-to-github.sh
```

**That's it!** The script handles everything automatically.

---

## 📝 Manual Method (5 Steps)

If you prefer manual control:

### 1️⃣ Fix File Structure
```bash
mkdir -p .github/workflows .github/ISSUE_TEMPLATE
mv workflows/* .github/workflows/ 2>/dev/null || true
mv ISSUE_TEMPLATE/* .github/ISSUE_TEMPLATE/ 2>/dev/null || true
mv PULL_REQUEST_TEMPLATE.md .github/ 2>/dev/null || true
rm -rf LICENSE && mv LICENSE.md LICENSE 2>/dev/null || true
rm -rf workflows ISSUE_TEMPLATE 2>/dev/null || true
```

### 2️⃣ Initialize Git
```bash
git init
git remote add origin https://github.com/GoToMarketNow/Lawnflow-Website.git
```

### 3️⃣ Stage and Commit
```bash
git add .
git commit -m "Sprint 7 Complete: iPhone shell integration and comprehensive documentation"
```

### 4️⃣ Push to GitHub
```bash
git branch -M main
git push -u origin main --force
```

### 5️⃣ Create Develop Branch
```bash
git checkout -b develop
git push -u origin develop
```

---

## 🔐 Authentication

When prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your password)

**Get Token**: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Select `repo` scope
- Copy the token
- Paste as password when prompted

---

## ✅ Verify on GitHub

After pushing, check:
- [ ] All files uploaded correctly
- [ ] `.github/workflows/build.yml` exists
- [ ] Issue templates work
- [ ] README displays correctly

---

## 🆘 Troubleshooting

**Can't authenticate?**
→ Use Personal Access Token instead of password

**Files not showing?**
→ Check `.gitignore` isn't excluding them

**"refusing to merge unrelated histories"?**
→ Add `--force` to push command (safe for new setup)

---

## 📚 Need More Help?

See detailed guides:
- `MANUAL_DEPLOYMENT_GUIDE.md` - Complete step-by-step
- `GITHUB_SETUP.md` - Full setup instructions
- `DEPLOYMENT.md` - Deployment to hosting platforms

---

**Repository**: https://github.com/GoToMarketNow/Lawnflow-Website
**Version**: 0.7.0
**Status**: Ready to deploy! 🎉
