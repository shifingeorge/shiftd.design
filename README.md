
```markdown
# Shifin Portfolio — React 19 + TypeScript 5

A modern, creative portfolio built with **React 19** and **TypeScript 5 (strict)**, designed and developed by **Shifin** — a UI/UX designer & creative coder who blends design vision with technical precision.

> **Tagline:** *Designing experiences, coding vibes — solving problems with creativity and strategy.*

---

## 🎨 Brand & Style

- **Theme:** Dark‑first (black surfaces) with red accent + gradient utilities
- **Fonts:** Space Grotesk (headings), Inter (body)
- **Design Approach:** Minimal, bold, immersive
- **Focus:** Landing pages, creative problem‑solving, and strategic design

---

## 🌐 Socials

- [Instagram](https://instagram.com/)
- [GitHub](https://github.com/)
- [LinkedIn](https://linkedin.com/)
- [Behance](https://behance.net/)

---

## 🚀 Features

- **React 19** — Latest React with concurrent features
- **TypeScript 5 (strict)** — Strong typing across `.ts`/`.tsx`
- **Vite 5** — Lightning‑fast dev/build
- **Tailwind CSS 3** — Dark mode via `class`, brand‑aligned theme
- **React Router v6** — Declarative routing
- **Framer Motion** — Smooth UI animations
- **React Hook Form** — Efficient form handling
- **Redux Toolkit** *(optional)* — Scalable state management
- **D3.js / Recharts** *(optional)* — Data visualization
- **Jest + RTL** *(optional)* — Testing setup

---

## 📋 Prerequisites

- **Node.js** ≥ 18.18 (Node 20 LTS recommended)
- npm or yarn

---

## 🛠️ Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

---

## 📁 Project Structure

```shell
shiftd.design/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── lib/              # Utilities & helpers
│   ├── data/             # Typed data (projects, config)
│   ├── styles/           # Tailwind & global styles
│   ├── App.tsx           # Main app component
│   ├── Routes.tsx        # App routes
│   └── main.tsx          # Entry point
├── siteConfig.ts         # Brand & meta config
├── tailwind.config.ts    # Tailwind theme & plugins
├── vite.config.ts        # Vite + path aliases
├── tsconfig.json         # TS strict config
└── package.json          # Dependencies & scripts
```

---

## 🧩 Adding Routes

```tsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/Home";
import AboutPage from "pages/About";

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
  ]);
```

---

## 🎨 Styling

Tailwind CSS configuration includes:

- `@tailwindcss/forms`
- `@tailwindcss/typography`
- `@tailwindcss/aspect-ratio`
- `@tailwindcss/container-queries`
- Brand‑aligned dark theme with red gradient utilities

---

## 📱 Responsive Design

- Fully responsive using Tailwind breakpoints
- Mobile‑first approach with adaptive layouts

---

## 📦 Deployment

```bash
npm run build
# or
yarn build
```

Deploy the `dist/` folder to your hosting provider (Vercel, Netlify, etc.).

---

## 🙏 Acknowledgments

- Designed & developed by **Shifin** — UI/UX Designer & Creative Coder
- Built with ❤️ using React 19, TypeScript 5, Vite, and Tailwind CSS
- Inspired by creativity, strategy, and problem‑solving
```