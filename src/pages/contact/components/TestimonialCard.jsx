import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-brand-md transition-all duration-300">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(testimonial?.rating)}
      </div>
      {/* Quote */}
      <blockquote className="text-muted-foreground mb-6 leading-relaxed">
        "{testimonial?.quote}"
      </blockquote>
      {/* Highlight */}
      {testimonial?.highlight && (
        <div className="bg-brand-primary/5 border-l-4 border-brand-primary pl-4 py-2 mb-6">
          <p className="text-sm font-medium text-brand-primary">
            "{testimonial?.highlight}"
          </p>
        </div>
      )}
      {/* Author */}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial?.author?.avatar}
          alt={testimonial?.author?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-primary">{testimonial?.author?.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial?.author?.title}</p>
          <p className="text-sm text-muted-foreground">{testimonial?.author?.company}</p>
        </div>
      </div>
      {/* Project Details */}
      {testimonial?.project && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Project:</span>
            <span className="font-medium text-primary">{testimonial?.project?.type}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium text-primary">{testimonial?.project?.duration}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;