import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    category: 'web-design',
    description: 'Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.',
    longDescription: 'Led the complete redesign of a major e-commerce platform serving over 1M users. The project involved extensive user research, prototyping, and A/B testing to optimize the shopping experience. Key improvements included a streamlined checkout process, enhanced product discovery, and mobile-first design approach.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    caseStudyUrl: '#',
    year: 2024,
    client: 'TechCorp Inc.'
  },
  {
    id: 'fitness-mobile-app',
    title: 'Fitness Tracking Mobile App',
    category: 'mobile-app',
    description: 'Native mobile app design for iOS and Android featuring workout tracking and social features.',
    longDescription: 'Designed a comprehensive fitness tracking mobile app from concept to final design. The app includes workout planning, progress tracking, social challenges, and gamification elements. Conducted user interviews and usability testing throughout the design process.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Figma', 'React Native', 'Firebase', 'Redux'],
    year: 2024,
    client: 'FitLife Studios'
  },
  {
    id: 'brand-identity-system',
    title: 'Tech Startup Brand Identity',
    category: 'branding',
    description: 'Complete brand identity system including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Developed a comprehensive brand identity for an emerging fintech startup. The project included logo design, brand guidelines, marketing collateral, and digital asset creation. The brand system was designed to convey trust, innovation, and accessibility.',
    image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    year: 2023,
    client: 'FinTech Innovations'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'ui-ux',
    description: 'Complex data visualization dashboard for a B2B SaaS platform with advanced filtering and reporting.',
    longDescription: 'Designed and developed a comprehensive analytics dashboard for a B2B SaaS platform. The project involved complex data visualization, user role management, and customizable reporting features. Worked closely with the development team to ensure technical feasibility.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com/dashboard',
    year: 2023,
    client: 'DataViz Solutions'
  }
];