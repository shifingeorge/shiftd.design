import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DetailedCaseStudy = ({ study, onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'discovery', label: 'Discovery', icon: 'Search' },
    { id: 'design', label: 'Design', icon: 'Palette' },
    { id: 'development', label: 'Development', icon: 'Code' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef?.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef?.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    const contentElement = contentRef?.current;
    if (contentElement) {
      contentElement?.addEventListener('scroll', handleScroll);
      return () => contentElement?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
      <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${title} - After`}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${title} - Before`}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => {
            const rect = e?.currentTarget?.parentElement?.getBoundingClientRect();
            const handleMouseMove = (e) => {
              const newPosition = ((e?.clientX - rect?.left) / rect?.width) * 100;
              setSliderPosition(Math.max(0, Math.min(100, newPosition)));
            };
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Icon name="Move" size={16} className="text-primary" />
          </div>
        </div>
        <div className="absolute top-4 left-4 px-2 py-1 bg-black/70 text-white text-xs rounded">
          Before
        </div>
        <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded">
          After
        </div>
      </div>
    );
  };

  const CodeSnippet = ({ code, language, title }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-gray-300 text-sm font-medium">{title}</span>
        <span className="text-gray-400 text-xs">{language}</span>
      </div>
      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card rounded-xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl"
          onClick={(e) => e?.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                <Icon name="FolderOpen" size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">{study?.title}</h2>
                <p className="text-muted-foreground text-sm">{study?.category}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              iconName="X"
              iconSize={20}
              onClick={onClose}
            />
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-muted">
            <div 
              className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-1 p-4 border-b border-border overflow-x-auto">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === section?.id
                    ? 'bg-brand-primary text-white' :'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Project Overview</h3>
                    <p className="text-muted-foreground mb-6">{study?.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study?.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study?.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Project Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="text-primary">{study?.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team Size:</span>
                          <span className="text-primary">{study?.teamSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">My Role:</span>
                          <span className="text-primary">{study?.role}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study?.metrics?.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 bg-muted rounded-lg">
                            <div className="text-xl font-bold text-brand-primary">
                              {metric?.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric?.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={study?.heroImage}
                    alt={study?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Discovery Section */}
            {activeSection === 'discovery' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Discovery & Research</h3>
                  <p className="text-muted-foreground mb-6">
                    Understanding the problem space through user research, competitive analysis, and stakeholder interviews.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Icon name="Users" size={18} className="mr-2" />
                        User Research
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Conducted 15 user interviews with target audience</li>
                        <li>• Analyzed user behavior through analytics data</li>
                        <li>• Created user personas and journey maps</li>
                        <li>• Identified key pain points and opportunities</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Icon name="BarChart3" size={18} className="mr-2" />
                        Key Findings
                      </h4>
                      <div className="space-y-3">
                        {study?.keyFindings?.map((finding, idx) => (
                          <div key={idx} className="p-3 bg-muted rounded-lg">
                            <div className="font-medium text-primary text-sm">{finding?.title}</div>
                            <div className="text-muted-foreground text-xs mt-1">{finding?.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Research Artifacts</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study?.researchImages?.map((image, idx) => (
                          <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={image?.url}
                              alt={image?.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Design Section */}
            {activeSection === 'design' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Design Exploration</h3>
                  <p className="text-muted-foreground mb-6">
                    Iterative design process from wireframes to high-fidelity prototypes.
                  </p>
                </div>

                <BeforeAfterSlider
                  beforeImage={study?.beforeImage}
                  afterImage={study?.afterImage}
                  title="Design Comparison"
                />

                <div className="grid lg:grid-cols-3 gap-6">
                  {study?.designProcess?.map((step, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                        <Icon name={step?.icon} size={20} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-primary">{step?.title}</h4>
                      <p className="text-muted-foreground text-sm">{step?.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {study?.designImages?.map((image, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image?.url}
                          alt={image?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{image?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Development Section */}
            {activeSection === 'development' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Technical Implementation</h3>
                  <p className="text-muted-foreground mb-6">
                    Bringing designs to life with clean, maintainable code and modern development practices.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Architecture</h4>
                      <p className="text-muted-foreground text-sm mb-4">{study?.architecture}</p>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-primary text-sm">Tech Stack</h5>
                        <div className="flex flex-wrap gap-2">
                          {study?.techStack?.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {study?.keyFeatures?.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Icon name="Check" size={16} className="text-trust-builder mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CodeSnippet
                      title="Component Structure"
                      language="React"
                      code={study?.codeSnippet}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Results Section */}
            {activeSection === 'results' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Results & Impact</h3>
                  <p className="text-muted-foreground mb-6">
                    Measurable outcomes and lessons learned from the project implementation.
                  </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                  {study?.metrics?.map((metric, idx) => (
                    <div key={idx} className="text-center p-6 bg-muted rounded-lg">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        {metric?.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">What Worked Well</h4>
                    <ul className="space-y-3">
                      {study?.successes?.map((success, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon name="CheckCircle" size={18} className="text-trust-builder mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{success}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-4">Lessons Learned</h4>
                    <ul className="space-y-3">
                      {study?.lessons?.map((lesson, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon name="Lightbulb" size={18} className="text-warning mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {study?.testimonial && (
                  <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="Quote" size={24} className="text-brand-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-primary italic mb-4">{study?.testimonial?.quote}</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Icon name="User" size={18} className="text-muted-foreground" />
                          </div>
                          <div>
                            <div className="font-medium text-primary text-sm">{study?.testimonial?.author}</div>
                            <div className="text-muted-foreground text-xs">{study?.testimonial?.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-border">
            <div className="flex items-center space-x-4">
              {study?.liveUrl && (
                <Button
                  variant="outline"
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={16}
                  onClick={() => window.open(study?.liveUrl, '_blank')}
                >
                  View Live Site
                </Button>
              )}
              {study?.githubUrl && (
                <Button
                  variant="ghost"
                  iconName="Github"
                  iconSize={16}
                  onClick={() => window.open(study?.githubUrl, '_blank')}
                >
                  Code
                </Button>
              )}
            </div>
            
            <Button
              variant="default"
              className="bg-cta hover:bg-cta/90"
              iconName="MessageCircle"
              iconPosition="right"
              iconSize={16}
            >
              Discuss This Project
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailedCaseStudy;