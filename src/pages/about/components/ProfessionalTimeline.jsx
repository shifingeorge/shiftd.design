import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfessionalTimeline = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineItems = [
    {
      year: "2017",
      title: "The Design Foundation",
      subtitle: "Visual Design & User Research",
      description: "Started as a visual designer, falling in love with user research and the psychology behind great interfaces. Learned the importance of empathy-driven design.",
      skills: ["Adobe Creative Suite", "User Research", "Prototyping", "Design Thinking"],
      achievement: "Designed my first mobile app that reached 10K+ users",
      icon: "Palette"
    },
    {
      year: "2019", 
      title: "The Technical Awakening",
      subtitle: "First Lines of Code",
      description: "Grew frustrated with design handoffs getting 'lost in translation.' Started learning HTML, CSS, and JavaScript to better communicate with developers.",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "Design Systems"],
      achievement: "Built my first interactive prototype from scratch",
      icon: "Code2"
    },
    {
      year: "2020",
      title: "The Integration Phase",
      subtitle: "Design + Development Fusion",
      description: "Realized I could build what I designed. Started taking on full-stack design projects, learning React and modern development workflows.",
      skills: ["React", "Node.js", "Git", "Agile Methodology"],
      achievement: "Shipped 3 end-to-end products independently",
      icon: "Zap"
    },
    {
      year: "2021",
      title: "The Specialization",
      subtitle: "Design Systems & Component Architecture",
      description: "Focused on scalable design systems and component libraries. Discovered my passion for creating tools that empower other creators.",
      skills: ["Design Systems", "Component Libraries", "Storybook", "TypeScript"],
      achievement: "Created design system adopted by 5+ teams",
      icon: "Grid3X3"
    },
    {
      year: "2023",
      title: "The Hybrid Evolution",
      subtitle: "Strategic Design-Development Leadership",
      description: "Evolved into a unique position where I can architect both user experiences and technical solutions, bridging the gap between design and engineering teams.",
      skills: ["Design Strategy", "Technical Architecture", "Team Leadership", "Product Strategy"],
      achievement: "Led cross-functional team of 12 designers and developers",
      icon: "Crown"
    },
    {
      year: "2025",
      title: "The Future Vision",
      subtitle: "Thoughtful Innovation Focus",
      description: "Now focusing on projects that matter—products that genuinely improve lives while pushing the boundaries of what's possible at the intersection of design and code.",
      skills: ["AI Integration", "Accessibility", "Sustainable Design", "Inclusive Innovation"],
      achievement: "Available for meaningful collaborations",
      icon: "Rocket"
    }
  ];

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
          <span className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-4">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Professional Evolution
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            The Journey to <span className="text-gradient-brand">Hybrid Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every career pivot, skill acquisition, and breakthrough moment that shaped 
            my unique approach to solving complex design and technical challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-3">
              {timelineItems?.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeTimeline === index
                      ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' :'bg-card border-border hover:border-brand-primary/50 text-muted-foreground hover:text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTimeline === index ? 'bg-brand-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={item?.icon} size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-sm">{item?.year}</div>
                      <div className="text-sm font-medium truncate">{item?.title}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Timeline Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTimeline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl border border-border p-8 shadow-brand-md"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                      <Icon name={timelineItems?.[activeTimeline]?.icon} size={32} color="white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {timelineItems?.[activeTimeline]?.year}
                      </div>
                      <div className="text-lg font-semibold text-muted-foreground">
                        {timelineItems?.[activeTimeline]?.title}
                      </div>
                      <div className="text-brand-primary font-medium">
                        {timelineItems?.[activeTimeline]?.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {timelineItems?.[activeTimeline]?.description}
                  </p>
                </div>

                {/* Skills Acquired */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4 flex items-center">
                    <Icon name="BookOpen" size={18} className="mr-2" />
                    Key Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {timelineItems?.[activeTimeline]?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full border border-brand-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievement Highlight */}
                <div className="bg-gradient-to-r from-trust-builder/10 to-conversion-accent/10 rounded-xl p-6 border border-trust-builder/20">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-trust-builder rounded-lg flex items-center justify-center">
                      <Icon name="Trophy" size={18} color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Key Achievement</h4>
                      <p className="text-muted-foreground">
                        {timelineItems?.[activeTimeline]?.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setActiveTimeline(Math.max(0, activeTimeline - 1))}
                disabled={activeTimeline === 0}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setActiveTimeline(Math.min(timelineItems?.length - 1, activeTimeline + 1))}
                disabled={activeTimeline === timelineItems?.length - 1}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;