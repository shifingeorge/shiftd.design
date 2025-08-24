import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const taglines = [
    "Design that works, code that delights",
    "Building products that enhance lives",
    "Where user needs meet technical possibilities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-brand-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-conversion-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-trust-builder/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Where Design Thinking
            <br />
            <span className="text-gradient-brand">Meets Clean Code</span>
          </h1>
          
          <div className="h-8 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl text-muted-foreground font-medium"
              >
                {taglines?.[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Interactive Demo Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 flex justify-center"
        >
          <div
            className="relative w-80 h-48 bg-card rounded-xl shadow-brand-md border border-border cursor-pointer transition-all duration-500 hover:shadow-brand-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-4">
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  <motion.div
                    key="wireframe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {/* Wireframe State */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 border-2 border-dashed border-muted-foreground/40 rounded"></div>
                        <div className="h-4 bg-muted-foreground/20 rounded flex-1"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted-foreground/20 rounded w-3/4"></div>
                        <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <div className="h-8 bg-muted-foreground/20 rounded w-20"></div>
                        <div className="h-8 border-2 border-dashed border-muted-foreground/40 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground font-mono">
                      wireframe.sketch
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="polished"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {/* Polished State */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                          <Icon name="Zap" size={16} color="white" />
                        </div>
                        <div className="h-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded flex-1"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-primary/80 rounded w-3/4"></div>
                        <div className="h-3 bg-muted-foreground/60 rounded w-1/2"></div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <div className="h-8 bg-cta rounded-lg w-20 flex items-center justify-center">
                          <span className="text-xs text-white font-medium">Action</span>
                        </div>
                        <div className="h-8 border border-border rounded-lg w-20 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground font-medium">Cancel</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-trust-builder font-mono">
                      production.ready
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Hover Indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon name="MousePointer" size={12} />
                <span>Hover to see the magic</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-cta hover:bg-cta/90 text-white shadow-brand-md hover:shadow-brand-lg transition-all duration-300"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
          >
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={20}
          >
            Let's Collaborate
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;