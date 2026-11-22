# Aakashram S – Personal Developer Portfolio

A futuristic cyber-slate personal developer portfolio web application built with **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## ✨ Key Features & Interactive Architecture

- **Futuristic Cyber-Slate Aesthetic**: Deep obsidian background (`#090D16`), frosted glassmorphic cards (`backdrop-blur-xl`), subtle animated cyber-grid overlay, and glowing neon cyan (`#06B6D4`) + emerald (`#10B981`) accents.
- **Custom Magnetic Cursor & Spotlight**: Smooth trailing cursor follower with spring physics and radial mouse-tracking card spotlights.
- **Top Neon Scroll Progress Bar**: Sleek gradient progress bar tied to viewport scroll depth.
- **Hero Staggered Entrance & Interactive Constellation Canvas**: 60fps canvas particles connecting to cursor and nearby nodes, with a live typewriter cycling through developer roles.
- **Interactive 3D Tilt Project Cards**: Dynamic 3D tilt tracking cursor coordinates, animated glowing borders, and quick-preview modal.
- **Interactive Skills Filter & Infinite Marquee**: Category filter tabs ("All", "AI / ML", "Full-Stack", "Databases", "Core") with Framer Motion `layoutId` pill transitions, plus infinite smooth-scrolling tech marquee ticker.
- **Live AI & Code Playground Drawer/Modal**:
  1. *Number Guessing Game*: Playable game with hot/cold hints, remaining attempts, and victory confetti.
  2. *AgroAI Live Vision Scanner*: Simulated deep learning CNN inference with laser scan sweep, specimen selection, and organic remedies.
  3. *Talent Track Pose Lab*: Biomechanical sliders (velocity, cadence, knee angle) with live fatigue and form score metrics.
- **Interactive Code Editor Bio**: `aakashram.json` with syntax highlighting, copy snippet button, and terminal mode.
- **Hackathons & Awards Timeline**: Vertical animated milestone tracker highlighting SIH 2026 & 2025 wins, CIH 2026 shortlist, Figma Design award, and Team Leadership.
- **Contact & Click-to-Copy Badges**: Floating label inputs, magnetic submit button, celebratory confetti toast, and one-click copy badges with tooltips.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

## 🛠️ Customizing Your Data

All portfolio data (URLs, email, phone, bio, projects, awards, and skills) is cleanly isolated in:
```
src/data/portfolioData.js
```
Simply edit this file to update your GitHub link, LinkedIn profile, email, or resume URL.
