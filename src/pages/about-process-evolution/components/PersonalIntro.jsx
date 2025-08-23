import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PersonalIntro = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-brand-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-conversion-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Personal Photo and Visual Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main Photo Container */}
              <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl p-8 shadow-brand-lg">
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-4xl font-mono">A</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Professional photo placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-cta rounded-2xl flex items-center justify-center shadow-brand-md"
              >
                <Icon name="Palette" size={28} color="white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-trust-builder rounded-xl flex items-center justify-center shadow-brand-md"
              >
                <Icon name="Code2" size={20} color="white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Statement and Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <span className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Making Technology More Human
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              >
                Hi, I'm Alena
                <span className="block text-gradient-brand">
                  Design-Developer Hybrid
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 text-lg text-muted-foreground leading-relaxed"
              >
                <p>
                  My journey began with pixels and prototypes, but somewhere along the way, 
                  I discovered that the most impactful design happens when you understand 
                  both sides of the screen.
                </p>
                <p>
                  Today, I bridge the gap between beautiful design and functional code, 
                  creating digital experiences that don't just look good—they work 
                  brilliantly and feel intuitively human.
                </p>
              </motion.div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cta mb-1">2</div>
                <div className="text-sm text-muted-foreground">Skill Domains</div>
              </div>
            </motion.div>

            {/* Mission Statement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-brand-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Icon name="Target" size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">My Mission</h3>
                  <p className="text-muted-foreground">
                    To create digital products that feel less like technology and more like 
                    thoughtful solutions designed by humans, for humans.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;