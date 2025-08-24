import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CodeExperiments = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const experiments = [
    {
      id: 1,
      title: "Interactive Data Visualization",
      description: "Real-time chart animations with D3.js and React hooks",
      technology: "D3.js + React",
      complexity: "Advanced",
      demoType: "chart",
      code: `const AnimatedChart = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return <BarChart data={data} />;
};`
    },
    {
      id: 2,
      title: "CSS Grid Layout Engine",
      description: "Dynamic grid system with responsive breakpoints",
      technology: "CSS Grid + JS",
      complexity: "Intermediate",
      demoType: "grid",
      code: `const GridSystem = ({ items, columns }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
    gap: '1rem',
    transition: 'all 0.3s ease'
  };
  
  return (
    <div style={gridStyle}>
      {items.map(item => <GridItem key={item.id} {...item} />)}
    </div>
  );
};`
    },
    {
      id: 3,
      title: "Micro-Interaction Library",
      description: "Reusable animation components with Framer Motion",
      technology: "Framer Motion",
      complexity: "Advanced",
      demoType: "animation",
      code: `const HoverCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % experiments?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDemoClick = (index) => {
    setIsAnimating(true);
    setActiveDemo(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const renderDemo = (experiment) => {
    switch (experiment?.demoType) {
      case 'chart':
        return (
          <div className="h-32 flex items-end justify-center space-x-2">
            {[40, 65, 30, 80, 45, 70, 55]?.map((height, index) => (
              <motion.div
                key={index}
                className="w-6 bg-gradient-to-t from-brand-primary to-brand-secondary rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        );
      
      case 'grid':
        return (
          <div className="grid grid-cols-3 gap-2 h-32">
            {Array.from({ length: 9 })?.map((_, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-conversion-accent/20 to-trust-builder/20 rounded-lg"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              />
            ))}
          </div>
        );
      
      case 'animation':
        return (
          <div className="h-32 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                borderRadius: ["25%", "50%", "25%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Code Experiments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive demos showcasing technical skills and creative problem-solving 
            through code—where functionality meets artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-2xl p-8 shadow-brand-md border border-border">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {experiments?.[activeDemo]?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {experiments?.[activeDemo]?.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    experiments?.[activeDemo]?.complexity === 'Advanced' ?'bg-red-100 text-red-700' :'bg-yellow-100 text-yellow-700'
                  }`}>
                    {experiments?.[activeDemo]?.complexity}
                  </span>
                </div>
              </div>

              {/* Live Demo */}
              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Live Demo</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                {renderDemo(experiments?.[activeDemo])}
              </div>

              {/* Technology Badge */}
              <div className="flex items-center space-x-2">
                <Icon name="Code" size={16} className="text-brand-primary" />
                <span className="text-sm font-medium text-brand-primary">
                  {experiments?.[activeDemo]?.technology}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-primary rounded-2xl p-6 shadow-brand-lg">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Terminal" size={16} color="white" />
                  <span className="text-white font-mono text-sm">experiment.jsx</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Code Content */}
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>{experiments?.[activeDemo]?.code}</code>
                </pre>
              </div>

              {/* Experiment Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {experiments?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDemoClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeDemo 
                        ? 'bg-conversion-accent scale-125' :'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experiment List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiments?.map((experiment, index) => (
              <div
                key={experiment?.id}
                onClick={() => handleDemoClick(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  index === activeDemo
                    ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' :'bg-card border-border hover:border-brand-primary/30 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Zap" size={20} />
                  <h4 className="font-semibold">{experiment?.title}</h4>
                </div>
                <p className="text-sm opacity-80 mb-3">{experiment?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono">{experiment?.technology}</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-medium hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <Icon name="Github" size={18} />
            <span>Explore on GitHub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExperiments;