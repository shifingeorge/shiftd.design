import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ sections, activeSection, onSectionClick, scrollProgress }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-brand-md border border-border p-3">
        {/* Scroll Progress */}
        <div className="mb-4">
          <div className="w-1 h-20 bg-muted rounded-full relative mx-auto">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"
              style={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Section Navigation */}
        <div className="space-y-2">
          {sections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => onSectionClick(section?.id)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                activeSection === section?.id
                  ? 'bg-brand-primary text-white shadow-brand-sm'
                  : 'text-muted-foreground hover:text-primary hover:bg-muted'
              }`}
              title={section?.label}
            >
              <Icon name={section?.icon} size={18} />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {section?.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>

              {/* Active Indicator */}
              {activeSection === section?.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-brand-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-4 pt-4 border-t border-border">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 group"
            title="Back to Top"
          >
            <Icon name="ArrowUp" size={18} />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Back to Top
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;