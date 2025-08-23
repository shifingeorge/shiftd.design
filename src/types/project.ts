// src/types/project.ts

/**
 * Core project shape used across the portfolio.
 * Matches current components (ProjectCard, Projects page).
 */
export interface Project {
  id: string;
  title: string;
  cover: string;          // public path to cover image (e.g., /projects/cover.jpg)
  year?: string;          // e.g., "2024"
  role?: string;          // e.g., "Product Design · Front‑end"
  blurb?: string;         // short description
  tags?: string[];        // tech/skills badges
  url?: string;           // live link
  repo?: string;          // GitHub repo
  slug?: string;          // optional: for detail pages
}

export type Projects = Project[];