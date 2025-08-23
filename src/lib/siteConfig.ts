// src/lib/siteConfig.ts

export interface SiteLinks {
  email?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  behance?: string;
}

export interface SiteConfig {
  name: string;          // brand name/handle
  owner: string;         // your name
  title: string;         // default <title>
  description: string;   // default meta description
  url?: string;          // canonical URL
  ogImage?: string;      // default OG image path
  tagline: string;       // short hero tagline
  availableForWork?: boolean;
  links: SiteLinks;
}

const siteConfig: SiteConfig = {
  name: 'shiftd.design',
  owner: 'Shifin',
  title: 'shiftd.design — Shifin',
  description:
    'UI/UX designer & vibe coder crafting landing pages, creative strategy, and problem-solving — black-first with red gradient accents.',
  url: 'https://shiftd.design',
  ogImage: '/og.png',
  tagline:
    'Designing experiences, coding vibes — solving problems with creativity and strategy.',
  availableForWork: true,
  links: {
    email: 'hi@shiftd.design',
    instagram: '', // e.g., https://instagram.com/your-handle
    github: '',    // e.g., https://github.com/your-handle
    linkedin: '',  // e.g., https://linkedin.com/in/your-handle
    behance: ''    // e.g., https://behance.net/your-handle
  }
};

export default siteConfig;