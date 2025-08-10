# ShortCastTV 🎬

A TikTok-style short video browsing interface built with **React + Vite**, designed for performance, keyboard interaction, and clean multimedia UX. It simulates a smart TV-like video feed experience and demonstrates frontend skills aligned with modern short-form entertainment platforms.

🌐 [Live Demo](https://shortcasttv.vercel.app/)

---

## 📌 Features

- 📱 Responsive vertical video layout (1080 × 1920)
- 🎮 Arrow key navigation (↑ / ↓)
- ⏯️ Custom play/pause overlay using SVG
- 🧠 Manual lazy rendering (active + next video only)
- ⚡ Performance profiling with Chrome DevTools & Lighthouse
- 🎨 Overlay UI for title, username, and views
- 🧱 Modular, hook-based component structure (`useRef`, `useEffect`, `useState`)

---

## 🧪 Tech Stack

- **React** (Vite)
- **HTML5 Video API**
- **JavaScript (ES6+)**
- **CSS3**
- **Chrome DevTools**

---

## 📈 Lighthouse Audit (Mobile)

| Metric        | Score |
|---------------|-------|
| Performance   | 63    |
| Accessibility | 100   |
| Best Practices| 96    |
| SEO           | 83    |

[📄 View Full Report](./public/lighthouse-report.html)

---

## 🔧 Optimization Plan

To improve the performance score (currently 63), the following optimizations are planned:

- Compress video assets to reduce payload size (~56MB total)
- Preload upcoming videos to improve Largest Contentful Paint (LCP)
- Use `React.lazy()` and `Suspense` to defer non-critical components

---

## 🚀 Run Locally

```bash
git clone https://github.com/Isha2004-coder/shortcasttv.git
cd shortcasttv
npm install
npm run dev


