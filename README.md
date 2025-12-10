# Premium GitHub Stats 🌟

> **Created by [AshrafMorningstar](https://github.com/AshrafMorningstar)**
> _The Best-in-Class GitHub Statistics Generator_

This project generates cinematic, premium-quality GIFs and videos displaying your GitHub statistics. It combines the power of **Remotion** for programmatic video generation with **GitHub Actions** for fully automated daily updates.

## ✨ Features

- **💎 Premium Design**: Glassmorphism, nebulas, and smooth animations that wow visitors.
- **🤖 Fully Automated**: Runs automatically on GitHub every 24 hours.
- **📊 Deep Stats**: Fetches detailed metrics (Lines of Code, Languages, Contributions) via GitHub GraphQL API.
- **🚀 Zero Maintenance**: Just set it up and forget it. It pushes updates to your repo automatically.

## 🛠️ Tech Stack

- **Remotion**: React-based video creation.
- **React**: Component architecture.
- **GitHub Actions**: CI/CD automation.
- **TypeScript**: Type-safe code.

## 🚀 Quick Start

### 1. Setup

The project is already configured. You just need to push it to GitHub.

### 2. Configure Secrets

1. Go to your repository **Settings** > **Secrets and variables** > **Actions**.
2. Make sure `GITHUB_TOKEN` has write permissions (usually default).
3. (Optional) If you need to access private repositories, add a Secret named `GH_TOKEN` with a Personal Access Token (PAT).

### 3. Run Manually

You can trigger the workflow manually from the **Actions** tab to see your first stats GIF!

## 📦 Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Preview the video:

   ```bash
   npm start
   ```

3. Render locally:
   ```bash
   npm run render:gif
   ```

## 🎨 Customization

Edit `src/Scenes/StatsScene.tsx` to change the design. The system is built with React, so you can use standard CSS/components.

---

_Created by [AshrafMorningstar](https://github.com/AshrafMorningstar) - The Best of Best._
