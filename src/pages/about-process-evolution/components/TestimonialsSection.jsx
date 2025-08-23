import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Alena's unique blend of design thinking and technical implementation is rare. She doesn't just create beautiful interfaces—she builds them with a deep understanding of both user needs and technical constraints.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Solutions",
      project: "E-commerce Platform Redesign",
      impact: "40% increase in conversion rates",
      avatar: "SC",
      category: "Design + Development"
    },
    {
      quote: "Working with Alena transformed our design process. Her systematic approach to design systems and component architecture reduced our development time by 60% while improving consistency across products.",
      author: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "StartupCo",
      project: "Design System Implementation",
      impact: "60% faster development cycles",
      avatar: "MR",
      category: "Technical Implementation"
    },
    {
      quote: "Alena's ability to facilitate collaboration between design and development teams is exceptional. She speaks both languages fluently and bridges gaps that typically slow down projects.",
      author: "Dr. Emily Watson",
      role: "Head of UX",
      company: "HealthTech Innovations",
      project: "Patient Portal Redesign",
      impact: "95% user satisfaction score",
      avatar: "EW",
      category: "Team Collaboration"
    },
    {
      quote: "The accessibility improvements Alena implemented weren\'t just compliant—they enhanced the experience for all users. Her inclusive design thinking is embedded in everything she creates.",
      author: "Jordan Kim",
      role: "Accessibility Consultant",
      company: "Inclusive Design Co",
      project: "Web Accessibility Audit",
      impact: "100% WCAG 2.1 AA compliance",
      avatar: "JK",
      category: "Inclusive Design"
    },
    {
      quote: "Alena's design strategy work helped us identify opportunities we hadn't considered. Her process is thorough, her insights are actionable, and her execution is flawless.",
      author: "Alex Thompson",
      role: "CEO",
      company: "GrowthCorp",
      project: "Product Strategy & UX",
      impact: "300% user engagement growth",
      avatar: "AT",
      category: "Strategic Design"
    },
    {
      quote: "The training sessions Alena led for our team were transformative. She has a gift for explaining complex concepts in accessible ways and creating learning environments that stick.",
      author: "Priya Patel",
      role: "Design Manager",
      company: "Enterprise Solutions",
      project: "Team Training & Workshops",
      impact: "Team productivity up 45%",
      avatar: "PP",
      category: "Knowledge Transfer"
    }
  ];

  const categories = ['All', 'Design + Development', 'Technical Implementation', 'Team Collaboration', 'Inclusive Design', 'Strategic Design', 'Knowledge Transfer'];

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
          <span className="inline-flex items-center px-4 py-2 bg-trust-builder/10 text-trust-builder rounded-full text-sm font-medium mb-4">
            <Icon name="Quote" size={16} className="mr-2" />
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            What <span className="text-gradient-brand">Collaborators</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from clients and collaborators who've experienced both 
            my design thinking and technical implementation capabilities firsthand.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-md transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <Icon name="Quote" size={24} className="text-brand-primary/30 mb-3" />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial?.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial?.avatar}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-primary text-sm">{testimonial?.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial?.role}</p>
                  <p className="text-xs font-medium text-brand-primary">{testimonial?.company}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-background rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Project:</span>
                  <span className="text-xs font-medium text-primary">{testimonial?.project}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Impact:</span>
                  <span className="text-xs font-bold text-trust-builder">{testimonial?.impact}</span>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
                    {testimonial?.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 shadow-brand-md"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Collaboration Impact</h3>
            <p className="text-muted-foreground">
              Measurable outcomes from design-development hybrid approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trust-builder/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-trust-builder" />
              </div>
              <div className="text-3xl font-bold text-trust-builder mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              <div className="text-xs text-muted-foreground mt-1">Across all projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-cta" />
              </div>
              <div className="text-3xl font-bold text-cta mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
              <div className="text-xs text-muted-foreground mt-1">Average time savings</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-conversion-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-conversion-accent" />
              </div>
              <div className="text-3xl font-bold text-conversion-accent mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
              <div className="text-xs text-muted-foreground mt-1">Successfully led</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
              <div className="text-xs text-muted-foreground mt-1">Long-term partnerships</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Want to add your success story to this collection?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/work-with-me-collaboration-hub" 
                className="inline-flex items-center px-6 py-3 bg-cta hover:bg-cta/90 text-white rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="ArrowRight" size={16} className="mr-2" />
                Start a Project
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-border hover:border-brand-primary text-muted-foreground hover:text-primary rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;