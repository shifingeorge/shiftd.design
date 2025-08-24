import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProjectPlanner from './components/ProjectPlanner';
import ContactForm from './components/ContactForm';
import TestimonialCard from './components/TestimonialCard';
import FAQSection from './components/FAQSection';
import AvailabilityStatus from './components/AvailabilityStatus';
import ConnectionChannels from './components/ConnectionChannels';

const WorkWithMeCollaborationHub = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      id: 'full-stack',
      title: 'Full-Stack Product Design',
      icon: 'Layers',
      description: 'End-to-end design and development for web applications, from user research to deployment.',
      features: [
        'User research and persona development',
        'Information architecture and wireframing',
        'Visual design and prototyping',
        'Frontend development (React/Next.js)',
        'Backend integration and API development',
        'Testing, optimization, and deployment'
      ],
      startingPrice: '$15,000',
      timeline: '6-12 weeks',
      isPopular: true
    },
    {
      id: 'design-system',
      title: 'Design System Creation',
      icon: 'Grid3x3',
      description: 'Scalable component libraries and design systems that streamline your team\'s workflow.',
      features: [
        'Component audit and inventory',
        'Design token creation and documentation',
        'Reusable component library (Figma + Code)',
        'Style guide and usage documentation',
        'Team training and implementation support',
        'Maintenance and evolution guidelines'
      ],
      startingPrice: '$8,000',
      timeline: '3-6 weeks'
    },
    {
      id: 'rapid-prototyping',
      title: 'Rapid Prototyping',
      icon: 'Zap',
      description: 'Quick concept validation through interactive prototypes and MVP development.',
      features: [
        'Concept validation and user testing',
        'Interactive prototype development',
        'MVP design and basic development',
        'User feedback collection and analysis',
        'Iteration based on testing results',
        'Roadmap for full development'
      ],
      startingPrice: '$3,500',
      timeline: '1-3 weeks'
    },
    {
      id: 'consultation',
      title: 'Consultation Services',
      icon: 'MessageSquare',
      description: 'Strategic design-development guidance for teams and complex product decisions.',
      features: [
        'UX/UI audit and recommendations',
        'Technical architecture review',
        'Team process optimization',
        'Design-development workflow setup',
        'Strategic product planning',
        'Ongoing advisory support'
      ],
      startingPrice: '$500',
      timeline: '1-2 hours'
    }
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: `Working with Alena was a game-changer for our startup. Her ability to seamlessly move between design and development meant we could iterate incredibly fast. What would have taken months with separate designers and developers, she completed in 6 weeks.`,
      highlight: "She delivered a complete design system and working application in just 6 weeks.",
      author: {
        name: "Sarah Chen",
        title: "Co-founder & CEO",
        company: "TechFlow Solutions",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
      },
      project: {
        type: "Full-Stack Product Design",
        duration: "6 weeks"
      }
    },
    {
      id: 2,
      rating: 5,
      quote: `Alena's hybrid approach is exactly what we needed. She understood our technical constraints while creating beautiful, user-friendly designs. The handoff was seamless because she coded everything herself.`,
      highlight: "Zero design-development handoff issues and pixel-perfect implementation.",
      author: {
        name: "Marcus Rodriguez",
        title: "Product Manager",
        company: "InnovateLabs",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
      },
      project: {
        type: "Design System Creation",
        duration: "4 weeks"
      }
    },
    {
      id: 3,
      rating: 5,
      quote: `The consultation session with Alena completely transformed our approach to product development. Her insights into design-development integration saved us months of potential rework.`,
      highlight: "Strategic guidance that prevented months of potential rework.",
      author: {
        name: "Emily Watson",
        title: "Head of Design",
        company: "GrowthCorp",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      project: {
        type: "Strategic Consultation",
        duration: "2 hours"
      }
    }
  ];

  const tabs = [
    { id: 'services', label: 'Services', icon: 'Briefcase' },
    { id: 'planner', label: 'Project Planner', icon: 'Target' },
    { id: 'contact', label: 'Get in Touch', icon: 'MessageCircle' },
    { id: 'testimonials', label: 'Client Stories', icon: 'Star' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setActiveTab('contact');
  };

  const handleRecommendation = (rec) => {
    setRecommendation(rec);
    if (rec) {
      setSelectedService(rec?.service);
      setActiveTab('contact');
    }
  };

  return (
    <>
      <Helmet>
        <title>Work With Me - Collaboration Hub | Alena Portfolio</title>
        <meta name="description" content="Ready to bring your vision to life? Explore my services, get personalized recommendations, and start your project with a hybrid design-development approach." />
        <meta name="keywords" content="hire designer developer, full-stack design, design system creation, rapid prototyping, UX consultation" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Let's Create Something Amazing Together</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Work With Me
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your ideas into reality with a hybrid design-development approach. 
                From concept to code, I'll help you build products that users love and businesses thrive on.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  className="bg-cta hover:bg-cta/90 text-white shadow-brand-sm hover:shadow-brand-md"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => setActiveTab('planner')}
                >
                  Start Project Planner
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => setActiveTab('contact')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mb-16">
              <AvailabilityStatus />
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab?.id
                      ? 'bg-brand-primary text-white shadow-brand-sm'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Services Tab */}
            {activeTab === 'services' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Choose Your Collaboration Style
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Every project is unique. Select the service that best fits your needs, 
                    timeline, and budget. Not sure? Use the Project Planner for personalized recommendations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services?.map((service) => (
                    <ServiceCard
                      key={service?.id}
                      service={service}
                      onSelect={handleServiceSelect}
                      isSelected={selectedService === service?.id}
                    />
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-6">
                    Need something custom? Let's discuss your specific requirements.
                  </p>
                  <Button
                    variant="outline"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => setActiveTab('contact')}
                  >
                    Discuss Custom Project
                  </Button>
                </div>
              </div>
            )}

            {/* Project Planner Tab */}
            {activeTab === 'planner' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Project Planner
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Answer a few quick questions and get personalized service recommendations 
                    tailored to your project needs, timeline, and budget.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <ProjectPlanner onRecommendation={handleRecommendation} />
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Let's Start the Conversation
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Ready to bring your vision to life? Fill out the form below or choose 
                    your preferred way to connect. I'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <ContactForm 
                      selectedService={selectedService} 
                      recommendation={recommendation}
                    />
                  </div>
                  <div>
                    <ConnectionChannels />
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Client Success Stories
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hear from founders, product managers, and teams who've experienced 
                    the power of hybrid design-development collaboration.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials?.map((testimonial) => (
                    <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-6">
                    Want to see more detailed case studies?
                  </p>
                  <Button
                    variant="outline"
                    iconName="FolderOpen"
                    iconPosition="left"
                    onClick={() => window.location.href = '/case-studies-hub-project-storytelling'}
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to know about working with me, my process, 
                    and what makes the hybrid approach special.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <FAQSection />
                </div>

                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-6">
                    Still have questions? Let's chat!
                  </p>
                  <Button
                    variant="default"
                    className="bg-cta hover:bg-cta/90"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => setActiveTab('contact')}
                  >
                    Ask Me Anything
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's create something extraordinary together. Your success is my mission.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90 text-white shadow-brand-sm hover:shadow-brand-md"
                iconName="Rocket"
                iconPosition="left"
                onClick={() => setActiveTab('contact')}
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/alena-design/30min', '_blank')}
              >
                Schedule a Call
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>24h Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>NDA Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkWithMeCollaborationHub;