import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkingStyles = () => {
  const [activeAssessment, setActiveAssessment] = useState(null);

  const workingStyles = [
    {
      title: 'Communication Style',
      icon: 'MessageCircle',
      assessment: 'Direct & Collaborative',
      description: 'I believe in clear, honest communication with regular check-ins and transparent progress updates.',
      strengths: ['Active listening', 'Clear documentation', 'Regular updates', 'Constructive feedback'],
      approach: 'I prefer structured communication with defined touchpoints and shared documentation that keeps everyone aligned.'
    },
    {
      title: 'Problem-Solving Approach',
      icon: 'Lightbulb',
      assessment: 'Systematic & Creative',
      description: 'I break complex problems into manageable pieces while maintaining creative flexibility for innovative solutions.',
      strengths: ['Root cause analysis', 'Creative ideation', 'Iterative refinement', 'Data-driven decisions'],
      approach: 'I start with understanding the core problem, explore multiple solutions, prototype quickly, and iterate based on feedback.'
    },
    {
      title: 'Collaboration Preference',
      icon: 'Users2',
      assessment: 'Cross-functional Partner',
      description: 'I thrive in diverse teams where design and development perspectives merge to create better outcomes.',
      strengths: ['Bridge building', 'Knowledge sharing', 'Inclusive decision making', 'Conflict resolution'],
      approach: 'I actively seek input from all stakeholders and create environments where everyone feels heard and valued.'
    },
    {
      title: 'Work Rhythm',
      icon: 'Clock',
      assessment: 'Focused Blocks & Flexibility',
      description: 'I work best with dedicated focus time balanced with collaborative sessions and strategic flexibility.',
      strengths: ['Deep focus sessions', 'Adaptive scheduling', 'Energy management', 'Priority balancing'],
      approach: 'I block time for complex work, remain available for urgent collaboration, and adjust based on project needs.'
    },
    {
      title: 'Decision Making',
      icon: 'Target',
      assessment: 'Data-Informed Intuition',
      description: 'I combine quantitative data with qualitative insights and experience-based intuition for balanced decisions.',
      strengths: ['Research synthesis', 'Stakeholder input', 'Risk assessment', 'Quick pivoting'],
      approach: 'I gather relevant data, consult with experts, consider user impact, and make timely decisions with room for iteration.'
    },
    {
      title: 'Learning Style',
      icon: 'BookOpen',
      assessment: 'Hands-on Experimenter',
      description: 'I learn best by doing, building, and teaching others while staying current with industry trends.',
      strengths: ['Rapid prototyping', 'Knowledge sharing', 'Continuous learning', 'Skill application'],
      approach: 'I learn through projects, experiment with new tools, share discoveries with teams, and apply learnings immediately.'
    }
  ];

  const compatibilityFactors = [
    {
      factor: 'Team Size',
      ideal: 'Small to Medium (3-8 people)',
      reasoning: 'Allows for meaningful relationships while maintaining efficient communication.'
    },
    {
      factor: 'Project Duration',
      ideal: '2-6 months',
      reasoning: 'Long enough for deep work and impact, short enough to maintain energy and focus.'
    },
    {
      factor: 'Feedback Culture',
      ideal: 'Open & Constructive',
      reasoning: 'Regular feedback loops help refine direction and improve outcomes continuously.'
    },
    {
      factor: 'Decision Speed',
      ideal: 'Thoughtful but Decisive',
      reasoning: 'Balance careful consideration with momentum to avoid analysis paralysis.'
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
          <span className="inline-flex items-center px-4 py-2 bg-conversion-accent/10 text-conversion-accent rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} className="mr-2" />
            Working Styles Assessment
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            How I <span className="text-gradient-brand">Collaborate</span> Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding working styles leads to better collaborations. Here's my honest 
            assessment to help potential partners evaluate our compatibility.
          </p>
        </motion.div>

        {/* Working Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workingStyles?.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300"
            >
              {/* Style Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name={style?.icon} size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{style?.title}</h3>
                    <p className="text-sm text-brand-primary font-medium">{style?.assessment}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveAssessment(activeAssessment === index ? null : index)}
                  iconName={activeAssessment === index ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                  className="flex-shrink-0"
                >
                  Details
                </Button>
              </div>

              {/* Style Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {style?.description}
              </p>

              {/* Strengths */}
              <div>
                <h4 className="text-sm font-medium text-primary mb-2">Key Strengths:</h4>
                <div className="flex flex-wrap gap-1">
                  {style?.strengths?.slice(0, 3)?.map((strength, strengthIndex) => (
                    <span
                      key={strengthIndex}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {strength}
                    </span>
                  ))}
                  {style?.strengths?.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-md">
                      +{style?.strengths?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeAssessment === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-2">My Approach:</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {style?.approach}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-2">All Strengths:</h5>
                        <div className="grid grid-cols-2 gap-1">
                          {style?.strengths?.map((strength, strengthIndex) => (
                            <div key={strengthIndex} className="flex items-center space-x-2">
                              <Icon name="Check" size={12} className="text-trust-builder flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Compatibility Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 shadow-brand-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="HeartHandshake" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Collaboration Compatibility</h3>
            <p className="text-muted-foreground">
              Factors that contribute to successful partnerships and project outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compatibilityFactors?.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{factor?.factor}</h4>
                    <p className="text-brand-primary font-medium text-sm mb-2">{factor?.ideal}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {factor?.reasoning}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Think we might be a good collaboration fit? Let's explore working together.
            </p>
            <Button
              variant="default"
              className="bg-cta hover:bg-cta/90 text-white"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Let's Discuss Collaboration
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingStyles;