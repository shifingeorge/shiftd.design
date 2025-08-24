import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ study, index, onExpand }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={study?.heroImage}
          alt={study?.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full">
            {study?.category}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-brand-primary/90 backdrop-blur-sm text-xs font-medium text-white rounded-full">
            {study?.duration}
          </span>
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
            {study?.title}
          </h3>
          <p className="text-white/90 text-sm line-clamp-2">
            {study?.subtitle}
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Problem Statement */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-brand-primary mb-2 flex items-center">
            <Icon name="Target" size={16} className="mr-2" />
            Challenge
          </h4>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {study?.problem}
          </p>
        </div>

        {/* Solution Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-trust-builder mb-2 flex items-center">
            <Icon name="Lightbulb" size={16} className="mr-2" />
            Solution
          </h4>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {study?.solution}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {study?.metrics?.slice(0, 2)?.map((metric, idx) => (
            <div key={idx} className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-bold text-brand-primary">
                {metric?.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-secondary mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {study?.techStack?.slice(0, 4)?.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {study?.techStack?.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{study?.techStack?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="default"
            className="flex-1 bg-cta hover:bg-cta/90"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            onClick={() => onExpand(study?.id)}
          >
            View Case Study
          </Button>
          {study?.liveUrl && (
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconSize={16}
              onClick={() => window.open(study?.liveUrl, '_blank')}
            >
              Live
            </Button>
          )}
        </div>
      </div>
      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CaseStudyCard;