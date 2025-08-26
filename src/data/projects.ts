// src/data/projects.ts
export type Platform = 'behance' | 'medium' | 'dribbble' | 'site' | 'Website';

export type Project = {
  id: string;
  year: number;
  title: string;
  blurb: string;
  roles: string[];
  cover: string;      // single cover image
  platform: Platform;
  url: string;        // external link
  accent?: string;    // optional subtle accent ring (hex or rgba)
};

export const projects: Project[] = [
  {
    id: 'Luna-Bloom-2025',
    year: 2025,
    title: 'Luna Bloom',
    blurb: 'A landing page for a well aesthetic flower shop',
    roles: ['UX/UI', 'Web dev', 'Vibe coding'],
    cover: '/media/case-studies/luna-bloom/cover.png',
    platform: 'Website',
    url: 'https://lunabloom.in/',
    accent: '#ef4444',
  },
  {
    id: 'Dresso-2024',
    year: 2024,
    title: 'Dresso',
    blurb: 'AI-Powered Style Companion — Smart Wardrobe, Effortless Fashion (Personal Project)',
    roles: ['Product', 'UX', 'UI', 'Case Study'],
    cover: '/media/case-studies/dresso/cover.jpg',
    platform: 'medium',
    url: 'https://medium.com/@shif.td/dresso-ai-powered-fashion-companion-7cc2dca86a54',
  }
];