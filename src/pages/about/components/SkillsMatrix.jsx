import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('design');
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = {
    design: {
      title: 'Design Skills',
      icon: 'Palette',
      color: 'brand-primary',
      skills: [
        { name: 'User Experience Design', level: 95, category: 'UX/UI' },
        { name: 'Visual Design', level: 92, category: 'Visual' },
        { name: 'Prototyping', level: 90, category: 'Prototyping' },
        { name: 'Design Systems', level: 88, category: 'Systems' },
        { name: 'User Research', level: 85, category: 'Research' },
        { name: 'Information Architecture', level: 87, category: 'IA' },
        { name: 'Accessibility Design', level: 83, category: 'A11y' },
        { name: 'Design Strategy', level: 80, category: 'Strategy' }
      ]
    },
    development: {
      title: 'Development Skills',
      icon: 'Code2',
      color: 'trust-builder',
      skills: [
        { name: 'React/TypeScript', level: 90, category: 'Frontend' },
        { name: 'HTML/CSS', level: 95, category: 'Frontend' },
        { name: 'JavaScript/ES6+', level: 88, category: 'Language' },
        { name: 'Node.js', level: 75, category: 'Backend' },
        { name: 'Git/Version Control', level: 85, category: 'Tools' },
        { name: 'Testing Frameworks', level: 80, category: 'Testing' },
        { name: 'API Integration', level: 82, category: 'Integration' },
        { name: 'Performance Optimization', level: 78, category: 'Optimization' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'Wrench',
      color: 'cta',
      skills: [
        { name: 'Figma', level: 95, category: 'Design' },
        { name: 'Adobe Creative Suite', level: 90, category: 'Design' },
        { name: 'Framer', level: 85, category: 'Prototyping' },
        { name: 'VS Code', level: 90, category: 'Development' },
        { name: 'Storybook', level: 82, category: 'Documentation' },
        { name: 'Notion', level: 88, category: 'Organization' },
        { name: 'Slack/Teams', level: 92, category: 'Communication' },
        { name: 'Jira/Linear', level: 80, category: 'Management' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: 'Users',
      color: 'conversion-accent',
      skills: [
        { name: 'Communication', level: 92, category: 'Interpersonal' },
        { name: 'Problem Solving', level: 90, category: 'Analytical' },
        { name: 'Project Management', level: 85, category: 'Management' },
        { name: 'Mentoring', level: 80, category: 'Leadership' },
        { name: 'Cross-functional Collaboration', level: 88, category: 'Teamwork' },
        { name: 'Adaptability', level: 93, category: 'Personal' },
        { name: 'Critical Thinking', level: 87, category: 'Analytical' },
        { name: 'Time Management', level: 85, category: 'Organization' }
      ]
    }
  };

  // Animate skill bars when category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills = {};
      skillCategories?.[activeCategory]?.skills?.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill?.name]: skill?.level
          }));
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-trust-builder';
    if (level >= 80) return 'bg-cta';
    if (level >= 70) return 'bg-conversion-accent';
    return 'bg-muted-foreground';
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-4">
            <Icon name="Target" size={16} className="mr-2" />
            Skills & Proficiency
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            <span className="text-gradient-brand">Interactive</span> Skills Matrix
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An honest assessment of my capabilities across design, development, 
            and collaboration domains. Click each category to explore proficiency levels.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {Object?.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                activeCategory === key
                  ? `bg-${category?.color}/10 border-${category?.color} shadow-brand-md`
                  : 'bg-card border-border hover:border-brand-primary/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                activeCategory === key
                  ? `bg-${category?.color}`
                  : 'bg-muted'
              }`}>
                <Icon 
                  name={category?.icon} 
                  size={24} 
                  className={activeCategory === key ? 'text-white' : 'text-muted-foreground'} 
                />
              </div>
              <h3 className={`font-semibold mb-1 ${
                activeCategory === key ? `text-${category?.color}` : 'text-primary'
              }`}>
                {category?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skillCategories?.[key]?.skills?.length} skills
              </p>
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl border border-border p-8 shadow-brand-md"
        >
          {/* Category Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-${skillCategories?.[activeCategory]?.color} rounded-2xl flex items-center justify-center`}>
                <Icon name={skillCategories?.[activeCategory]?.icon} size={32} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {skillCategories?.[activeCategory]?.title}
                </h3>
                <p className="text-muted-foreground">
                  Proficiency levels based on years of experience and project applications
                </p>
              </div>
            </div>
            
            {/* Legend */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-trust-builder rounded-full" />
                <span className="text-muted-foreground">Expert (90%+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cta rounded-full" />
                <span className="text-muted-foreground">Advanced (80%+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-conversion-accent rounded-full" />
                <span className="text-muted-foreground">Intermediate (70%+)</span>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <motion.div
                key={skill?.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="space-y-3"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary">{skill?.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{skill?.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getSkillColor(skill?.level)} text-white`}>
                        {getSkillLabel(skill?.level)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{skill?.level}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${animatedSkills?.[skill?.name] || 0}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${getSkillColor(skill?.level)} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Summary */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder mb-1">
                  {skillCategories?.[activeCategory]?.skills?.filter(s => s?.level >= 90)?.length}
                </div>
                <div className="text-sm text-muted-foreground">Expert Level Skills</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cta mb-1">
                  {Math.round(skillCategories?.[activeCategory]?.skills?.reduce((sum, skill) => sum + skill?.level, 0) / skillCategories?.[activeCategory]?.skills?.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Average Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion-accent mb-1">
                  {skillCategories?.[activeCategory]?.skills?.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Skills</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMatrix;