import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessInsights = () => {
  const [activeFramework, setActiveFramework] = useState('design-thinking');

  const frameworks = {
    'design-thinking': {
      title: 'Design Thinking Framework',
      subtitle: 'Human-Centered Problem Solving',
      icon: 'Users',
      steps: [
        {
          name: 'Empathize',
          description: 'Deep user research and stakeholder interviews',
          icon: 'Heart',
          tools: ['User Interviews', 'Surveys', 'Observation', 'Journey Mapping']
        },
        {
          name: 'Define',
          description: 'Synthesize insights into clear problem statements',
          icon: 'Target',
          tools: ['Problem Statements', 'User Personas', 'Point of View', 'How Might We']
        },
        {
          name: 'Ideate',
          description: 'Generate diverse solutions through collaborative brainstorming',
          icon: 'Lightbulb',
          tools: ['Brainstorming', 'Mind Mapping', 'Sketching', 'Concept Selection']
        },
        {
          name: 'Prototype',
          description: 'Build testable representations of solutions',
          icon: 'Wrench',
          tools: ['Wireframes', 'Interactive Prototypes', 'Code Prototypes', 'Service Blueprints']
        },
        {
          name: 'Test',
          description: 'Validate solutions with real users and iterate',
          icon: 'CheckCircle',
          tools: ['Usability Testing', 'A/B Testing', 'Analytics', 'Feedback Loops']
        }
      ]
    },
    'development-approach': {
      title: 'Development Methodology',
      subtitle: 'Agile Implementation Process',
      icon: 'Code2',
      steps: [
        {
          name: 'Architecture',
          description: 'Plan scalable and maintainable code structure',
          icon: 'Building',
          tools: ['System Design', 'Component Architecture', 'Database Schema', 'API Design']
        },
        {
          name: 'Component Design',
          description: 'Build reusable and accessible UI components',
          icon: 'Grid3X3',
          tools: ['Design Systems', 'Storybook', 'Component Libraries', 'Accessibility Guidelines']
        },
        {
          name: 'Implementation',
          description: 'Write clean, tested, and documented code',
          icon: 'Terminal',
          tools: ['React/TypeScript', 'Testing Frameworks', 'Version Control', 'CI/CD Pipelines']
        },
        {
          name: 'Integration',
          description: 'Connect all pieces and ensure smooth data flow',
          icon: 'Link',
          tools: ['API Integration', 'State Management', 'Error Handling', 'Performance Optimization']
        },
        {
          name: 'Deployment',
          description: 'Launch with monitoring and continuous improvement',
          icon: 'Rocket',
          tools: ['Cloud Platforms', 'Monitoring Tools', 'Analytics', 'Maintenance Plans']
        }
      ]
    },
    'collaboration': {
      title: 'Collaboration Framework',
      subtitle: 'Cross-Functional Team Dynamics',
      icon: 'Users2',
      steps: [
        {
          name: 'Alignment',
          description: 'Establish shared understanding and goals',
          icon: 'Compass',
          tools: ['Kickoff Meetings', 'Goal Setting', 'Success Metrics', 'Communication Channels']
        },
        {
          name: 'Co-Creation',
          description: 'Involve stakeholders in the design process',
          icon: 'Palette',
          tools: ['Design Workshops', 'Collaborative Sketching', 'Stakeholder Reviews', 'Feedback Sessions']
        },
        {
          name: 'Transparency',
          description: 'Maintain open communication throughout the process',
          icon: 'Eye',
          tools: ['Progress Updates', 'Live Prototypes', 'Version History', 'Decision Documentation']
        },
        {
          name: 'Iteration',
          description: 'Rapid cycles of feedback and improvement',
          icon: 'RefreshCw',
          tools: ['Sprint Reviews', 'User Testing', 'Retrospectives', 'Continuous Integration']
        },
        {
          name: 'Delivery',
          description: 'Smooth handoffs and knowledge transfer',
          icon: 'Package',
          tools: ['Documentation', 'Code Comments', 'Training Sessions', 'Support Plans']
        }
      ]
    }
  };

  const frameworkKeys = Object.keys(frameworks);

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
          <span className="inline-flex items-center px-4 py-2 bg-trust-builder/10 text-trust-builder rounded-full text-sm font-medium mb-4">
            <Icon name="Cog" size={16} className="mr-2" />
            Process Transparency
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            My <span className="text-gradient-brand">Methodology</span> Revealed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every successful project is a proven process. Here's exactly how I approach 
            problems, make decisions, and ensure consistent quality outcomes.
          </p>
        </motion.div>

        {/* Framework Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          {frameworkKeys?.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFramework(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFramework === key
                  ? 'bg-brand-primary text-white shadow-brand-md'
                  : 'bg-card border border-border text-muted-foreground hover:border-brand-primary/50 hover:text-primary'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name={frameworks?.[key]?.icon} size={20} />
                <span>{frameworks?.[key]?.title}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Framework Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFramework}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-brand-md mb-8">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={frameworks?.[activeFramework]?.icon} size={32} color="white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {frameworks?.[activeFramework]?.title}
                </h3>
                <p className="text-muted-foreground">
                  {frameworks?.[activeFramework]?.subtitle}
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {frameworks?.[activeFramework]?.steps?.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Connection Line */}
                    {index < frameworks?.[activeFramework]?.steps?.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gradient-to-r from-brand-primary to-transparent z-0" />
                    )}
                    
                    <div className="relative bg-background border border-border rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>

                      {/* Step Icon */}
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                        <Icon name={step?.icon} size={24} className="text-primary" />
                      </div>

                      {/* Step Content */}
                      <h4 className="font-semibold text-primary mb-2">{step?.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step?.description}
                      </p>

                      {/* Tools */}
                      <div>
                        <div className="text-xs font-medium text-muted-foreground mb-2">Tools & Methods:</div>
                        <div className="space-y-1">
                          {step?.tools?.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-brand-primary rounded-full" />
                              <span className="text-xs text-muted-foreground">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decision Criteria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cta rounded-lg flex items-center justify-center">
                    <Icon name="Brain" size={20} color="white" />
                  </div>
                  <h4 className="font-semibold text-primary">Decision Making</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Every choice is evaluated against user impact, technical feasibility, and business value.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">User Impact</span>
                    <span className="text-cta">40%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Technical Feasibility</span>
                    <span className="text-trust-builder">35%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Business Value</span>
                    <span className="text-conversion-accent">25%</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-trust-builder rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={20} color="white" />
                  </div>
                  <h4 className="font-semibold text-primary">Quality Assurance</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Multiple validation layers ensure every deliverable meets the highest standards.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-trust-builder" />
                    <span className="text-muted-foreground">Automated Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-trust-builder" />
                    <span className="text-muted-foreground">Peer Review</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-trust-builder" />
                    <span className="text-muted-foreground">User Validation</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-conversion-accent rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} color="white" />
                  </div>
                  <h4 className="font-semibold text-primary">Continuous Improvement</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Every project teaches new lessons that refine and enhance future processes.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Icon name="BarChart3" size={12} className="text-conversion-accent" />
                    <span className="text-muted-foreground">Performance Metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MessageSquare" size={12} className="text-conversion-accent" />
                    <span className="text-muted-foreground">Feedback Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="RefreshCw" size={12} className="text-conversion-accent" />
                    <span className="text-muted-foreground">Process Iteration</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessInsights;