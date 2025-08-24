import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesFramework = () => {
  const [expandedValue, setExpandedValue] = useState(null);

  const coreValues = [
    {
      title: 'Thoughtful Innovation',
      subtitle: 'Purpose-Driven Technology',
      icon: 'Brain',
      color: 'brand-primary',
      description: 'Technology should solve real problems and improve lives, not just showcase technical prowess.',
      principles: [
        'Question whether technology is truly needed',
        'Prioritize user benefit over technical complexity', 
        'Consider long-term impact and sustainability',
        'Choose established solutions over bleeding-edge when appropriate'
      ],
      application: 'I research extensively before proposing solutions, always asking "Does this genuinely improve the user experience?" rather than "What\'s the latest trend we can implement?"',
      examples: [
        'Simplified a complex dashboard by removing 60% of features users never used',
        'Chose progressive enhancement over a JavaScript-heavy solution for better accessibility',
        'Advocated for user research over assumptions when stakeholders wanted quick fixes'
      ]
    },
    {
      title: 'Inclusive by Design',
      subtitle: 'Accessibility as Foundation',
      icon: 'Heart',
      color: 'trust-builder',
      description: 'Every person deserves equal access to digital experiences, regardless of ability or circumstance.',
      principles: [
        'Design for edge cases and diverse needs from day one',
        'Test with real users who have varying abilities',
        'Follow accessibility guidelines as minimum, not maximum',
        'Consider cognitive load and clarity in all interfaces'
      ],
      application: 'I integrate accessibility considerations into wireframes, use semantic HTML structures, test with screen readers, and conduct usability sessions with diverse user groups.',
      examples: [
        'Achieved WCAG 2.1 AA compliance on all projects by default',
        'Implemented keyboard navigation that\'s actually intuitive',
        'Created design systems with accessible color contrast and focus states'
      ]
    },
    {
      title: 'Transparent Process',
      subtitle: 'Open Communication & Documentation',
      icon: 'Eye',
      color: 'cta',
      description: 'Clear communication and thorough documentation prevent misunderstandings and enable better collaboration.',
      principles: [
        'Document decisions and their reasoning',
        'Share progress regularly with stakeholders',
        'Explain technical concepts in accessible language',
        'Welcome questions and provide honest timelines'
      ],
      application: 'I maintain shared project documentation, provide regular updates with both progress and blockers, and create resources that help teammates understand my work.',
      examples: [
        'Created decision logs that saved hours of repeated discussions',
        'Built interactive style guides that served as living documentation',
        'Hosted knowledge-sharing sessions for cross-functional understanding'
      ]
    },
    {
      title: 'Sustainable Craft',
      subtitle: 'Long-term Quality & Maintenance',
      icon: 'Leaf',
      color: 'conversion-accent',
      description: 'Good design and code should be maintainable, scalable, and environmentally conscious.',
      principles: [
        'Write code that future developers (including me) will understand',
        'Create design systems that scale without constant oversight',
        'Consider performance and environmental impact of technical choices',
        'Plan for maintainability from the beginning, not as an afterthought'
      ],
      application: 'I focus on clean code practices, comprehensive documentation, component reusability, and performance optimization that reduces server load and energy consumption.',
      examples: [
        'Built component libraries that reduced code duplication by 70%',
        'Optimized images and lazy-loading to improve page load times by 40%',
        'Created design documentation that enabled team members to work independently'
      ]
    }
  ];

  const commitmentAreas = [
    {
      area: 'Continuous Learning',
      commitment: 'Dedicate 10% of time to learning new skills and staying current with industry developments',
      icon: 'BookOpen'
    },
    {
      area: 'Knowledge Sharing',
      commitment: 'Contribute to the design and development community through mentoring and content creation',
      icon: 'Share2'
    },
    {
      area: 'Ethical Practice',
      commitment: 'Decline projects that could harm users or society, regardless of financial benefit',
      icon: 'Shield'
    },
    {
      area: 'Environmental Responsibility',
      commitment: 'Consider environmental impact in all technical and design decisions',
      icon: 'Leaf'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
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
            <Icon name="Compass" size={16} className="mr-2" />
            Values & Philosophy
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            <span className="text-gradient-brand">Thoughtful Innovation</span> Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every decision I make, from choosing technologies 
            to designing interfaces to building sustainable collaborations.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="space-y-6 mb-16">
          {coreValues?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Value Header */}
              <button
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${value?.color}/10 rounded-2xl flex items-center justify-center`}>
                      <Icon name={value?.icon} size={32} className={`text-${value?.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{value?.title}</h3>
                      <p className={`text-${value?.color} font-medium mb-2`}>{value?.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value?.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Icon 
                      name={expandedValue === index ? "ChevronUp" : "ChevronDown"} 
                      size={24} 
                      className="text-muted-foreground" 
                    />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedValue === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="p-6 bg-muted/20">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Principles */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Icon name="List" size={18} className="mr-2" />
                            Core Principles
                          </h4>
                          <div className="space-y-2">
                            {value?.principles?.map((principle, principleIndex) => (
                              <div key={principleIndex} className="flex items-start space-x-2">
                                <div className={`w-1.5 h-1.5 bg-${value?.color} rounded-full mt-2 flex-shrink-0`} />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {principle}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Application */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Icon name="Wrench" size={18} className="mr-2" />
                            How I Apply This
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value?.application}
                          </p>
                        </div>

                        {/* Examples */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Icon name="CheckCircle" size={18} className="mr-2" />
                            Real Examples
                          </h4>
                          <div className="space-y-2">
                            {value?.examples?.map((example, exampleIndex) => (
                              <div key={exampleIndex} className="flex items-start space-x-2">
                                <Icon name="ArrowRight" size={12} className={`text-${value?.color} mt-1 flex-shrink-0`} />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {example}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Commitment Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 shadow-brand-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">My Commitments</h3>
            <p className="text-muted-foreground">
              Specific ways I hold myself accountable to these values in daily practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitmentAreas?.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={commitment?.icon} size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{commitment?.area}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {commitment?.commitment}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values in Action CTA */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <h4 className="font-semibold text-primary mb-2">Values in Action</h4>
            <p className="text-muted-foreground mb-4">
              These aren't just ideals—they shape every project decision and collaboration approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/case-studies-hub-project-storytelling" 
                className="inline-flex items-center px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="Eye" size={16} className="mr-2" />
                See Values in Projects
              </a>
              <a 
                href="/work-with-me-collaboration-hub" 
                className="inline-flex items-center px-6 py-3 border border-border hover:border-brand-primary text-muted-foreground hover:text-primary rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="Handshake" size={16} className="mr-2" />
                Collaborate with Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesFramework;