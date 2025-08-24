import { Skill, Experience } from '../types';

export const skills: Skill[] = [
  // Design Skills
  { name: 'UI/UX Design', level: 95, category: 'design' },
  { name: 'User Research', level: 90, category: 'design' },
  { name: 'Prototyping', level: 92, category: 'design' },
  { name: 'Visual Design', level: 88, category: 'design' },
  { name: 'Information Architecture', level: 87, category: 'design' },
  
  // Development Skills
  { name: 'React/Next.js', level: 90, category: 'development' },
  { name: 'TypeScript', level: 85, category: 'development' },
  { name: 'CSS/Tailwind', level: 92, category: 'development' },
  { name: 'Node.js', level: 80, category: 'development' },
  { name: 'Python', level: 75, category: 'development' },
  
  // Tools
  { name: 'Figma', level: 95, category: 'tools' },
  { name: 'Adobe Creative Suite', level: 88, category: 'tools' },
  { name: 'Framer', level: 85, category: 'tools' },
  { name: 'Webflow', level: 82, category: 'tools' },
  { name: 'Git/GitHub', level: 88, category: 'tools' }
];

export const experiences: Experience[] = [
  {
    id: 'senior-designer',
    title: 'Senior UI/UX Designer & Developer',
    company: 'Digital Innovations Lab',
    period: '2023 - Present',
    description: [
      'Lead design and development of web applications for Fortune 500 clients',
      'Manage end-to-end design process from research to implementation',
      'Collaborate with cross-functional teams to deliver pixel-perfect designs',
      'Mentor junior designers and conduct design reviews'
    ],
    current: true
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    company: 'TechStart Solutions',
    period: '2021 - 2023',
    description: [
      'Designed user interfaces for B2B SaaS products serving 10k+ users',
      'Conducted user research and usability testing to inform design decisions',
      'Collaborated with engineering teams to ensure design feasibility',
      'Increased user engagement by 40% through redesigned onboarding flow'
    ]
  },
  {
    id: 'ui-developer',
    title: 'Frontend Developer & Designer',
    company: 'Creative Agency Pro',
    period: '2019 - 2021',
    description: [
      'Developed responsive websites and web applications using React and Vue.js',
      'Created design systems and component libraries for client projects',
      'Worked with clients to understand requirements and deliver solutions',
      'Maintained and optimized existing client websites for performance'
    ]
  }
];