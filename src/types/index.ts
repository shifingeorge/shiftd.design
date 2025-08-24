export interface Project {
  id: string;
  title: string;
  category: 'web-design' | 'mobile-app' | 'branding' | 'ui-ux';
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  year: number;
  client?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'tools';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}