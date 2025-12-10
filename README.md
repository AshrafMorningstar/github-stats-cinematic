# 🎬 GitHub Stats Cinematic

> **Created by [AshrafMorningstar](https://github.com/AshrafMorningstar)**  
> _The Ultimate Premium GitHub Statistics Generator_

Transform your GitHub activity into **cinematic, premium-quality GIFs and videos** that wow your profile visitors. Built with **Remotion** for programmatic video generation and **GitHub Actions** for fully automated daily updates.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![Remotion](https://img.shields.io/badge/remotion-latest-purple)

---

## ✨ Features

### 🎨 **Premium Design**

- **Glassmorphism UI**: Frosted glass cards with backdrop blur effects
- **3D Animated Grid**: Infinite perspective grid background with smooth motion
- **Nebula Effects**: Dynamic radial gradients creating a deep space atmosphere
- **TypeWriter Animation**: Cinematic text reveal for username and handle
- **Lucide Icons**: Professional SVG icons for each statistic
- **Color-Coded Stats**: Each metric has its own vibrant accent color with glow effects

### 🤖 **Fully Automated**

- **Zero Maintenance**: Runs automatically via GitHub Actions every 24 hours
- **Auto-Commit**: Pushes updated GIFs back to your repository
- **Smart Data Fetching**: Uses GitHub GraphQL API for accurate statistics
- **Fallback Support**: Works with mock data if token is unavailable

### 📊 **Comprehensive Stats**

- Total Contributions
- Total Stars Earned
- Repository Count
- Commit Count
- Pull Requests
- Issues Solved

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- GitHub account
- Git installed

### Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/AshrafMorningstar/github-stats-cinematic.git
   cd github-stats-cinematic
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Preview locally**

   ```bash
   npm start
   ```

   This opens the Remotion Studio where you can see your stats animation in real-time.

4. **Render a GIF**
   ```bash
   npm run render:gif
   ```
   Output will be saved to `out/stats.gif`

---

## 🔧 Configuration

### GitHub Actions Setup

1. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/github-stats-cinematic.git
   git push -u origin main
   ```

2. **Enable Actions**
   - Go to your repository **Settings** → **Actions** → **General**
   - Under "Workflow permissions", select **Read and write permissions**
   - Click **Save**

3. **Trigger Workflow**
   - Navigate to **Actions** tab
   - Select "Generate Premium Stats"
   - Click **Run workflow**

The workflow will:

- Fetch your latest GitHub stats
- Render a premium GIF
- Commit and push it back to your repo automatically

### Customization

#### Change Username

Edit `src/scripts/fetch-data.ts`:

```typescript
const username = "YOUR_GITHUB_USERNAME";
```

#### Modify Design

Edit `src/Scenes/StatsScene.tsx` to customize:

- Colors
- Layout
- Animations
- Card styles

#### Adjust Duration

Edit `src/Root.tsx`:

```typescript
durationInFrames={300}  // 10 seconds at 30fps
fps={30}
```

---

## 📁 Project Structure

```
github-stats-cinematic/
├── .github/
│   └── workflows/
│       └── generate-stats.yml    # GitHub Actions workflow
├── src/
│   ├── Scenes/
│   │   └── StatsScene.tsx        # Main animation component
│   ├── components/
│   │   └── TypeWriter.tsx        # TypeWriter effect component
│   ├── data/
│   │   └── stats.json            # Cached statistics
│   ├── scripts/
│   │   └── fetch-data.ts         # GitHub API data fetcher
│   ├── Root.tsx                  # Remotion composition root
│   ├── index.ts                  # Entry point
│   └── style.css                 # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Tech Stack

- **[Remotion](https://www.remotion.dev/)** - React-based video creation
- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Octokit](https://github.com/octokit/octokit.js)** - GitHub API client
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

---

## 🎨 Design Philosophy

This project embodies the "**Best of Best**" design principles:

1. **Visual Excellence**: Every pixel is crafted for maximum impact
2. **Smooth Animations**: Spring physics and interpolation for natural motion
3. **Premium Feel**: Glassmorphism, glows, and depth create a luxury experience
4. **Professional Polish**: From TypeWriter effects to color-coded stats
5. **Zero Friction**: Fully automated - set it and forget it

---

## 📝 License

MIT License - feel free to use this for your own GitHub profile!

---

## 👤 Author

**AshrafMorningstar**

- GitHub: [@AshrafMorningstar](https://github.com/AshrafMorningstar)
- Project: [github-stats-cinematic](https://github.com/AshrafMorningstar/github-stats-cinematic)

---

## 🙏 Acknowledgments

- Inspired by the GitHub stats community
- Built with ❤️ using Remotion
- Designed for developers who appreciate premium aesthetics

---

**⭐ If you find this project useful, please consider giving it a star!**
