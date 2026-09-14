#!/bin/bash
echo "==================================================="
echo "  Pushing Portfolio to GitHub: Sok-Thavireak"
echo "==================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "[1/4] Initializing Git repository..."
    git init
    git branch -M main
else
    echo "[1/4] Git repository already initialized."
fi

echo "[2/4] Setting remote origin..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/SokThavireak/Sok-Thavireak.git

echo "[3/4] Staging and committing files..."
git add .
git commit -m "feat: fix HRMS modal image gallery and add all 13 screenshots"

echo "[4/4] Pushing to GitHub (main branch)..."
git push -u origin main --force

echo ""
echo "==================================================="
echo "  Finished! Check https://github.com/SokThavireak/Sok-Thavireak"
echo "==================================================="
