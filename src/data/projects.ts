// src/data/projects.ts
import type { Projects } from 'types/project';

const fallbackCover = '/assets/images/no_image.png';

const projects: Projects = [
  {
    id: 'shiftd-landing-2025',
    title: 'Shiftd.design Landing',
    year: '2025',
    role: 'UI/UX · Front‑end',
    blurb: 'Black‑first, red‑gradient portfolio built with React 19 + TypeScript.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Framer Motion'],
    cover: fallbackCover, // Replace with your cover: /projects/shiftd-landing.jpg
    url: 'https://shiftd.design'
  },
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics Dashboard',
    year: '2024',
    role: 'Product Design · Front‑end',
    blurb: 'Real‑time metrics with D3/Recharts, dark theme, and modular widgets.',
    tags: ['D3', 'Recharts', 'Redux Toolkit', 'A11y'],
    cover: fallbackCover,
    url: 'https://example.com'
  },
  {
    id: 'brand-system-kit',
    title: 'Brand System Kit',
    year: '2023',
    role: 'Brand · Design System',
    blurb: 'Tokens, components, and docs to scale product teams.',
    tags: ['Design System', 'Tokens', 'Figma', 'Docs'],
    cover: fallbackCover
  }
];

export default projects;