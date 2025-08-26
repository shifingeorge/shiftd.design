// src/data/projects.ts
export type Platform = 'behance' | 'medium' | 'dribbble' | 'site';

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
    id: 'native-ed-2024',
    year: 2024,
    title: 'Native Ed',
    blurb: 'A website simplifying access to Native American educational resources.',
    roles: ['UX/UI', 'Web dev', 'Branding'],
    cover: '/media/case-studies/native-ed/cover.jpg',
    platform: 'behance',
    url: 'https://www.behance.net/your-native-ed',
    accent: '#ef4444',
  },
  {
    id: 'calm-reads-2023',
    year: 2023,
    title: 'Calm Reads',
    blurb: 'A distraction‑free reading experience with high contrast and rhythm.',
    roles: ['Product', 'UX', 'UI'],
    cover: '/media/case-studies/calm-reads/cover.jpg',
    platform: 'medium',
    url: 'https://medium.com/@you/calm-reads',
  },
  // Add more…
];