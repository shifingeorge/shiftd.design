import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onSelect, isSelected }) => {
  return (
    <div 
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-brand-md ${
        isSelected 
          ? 'border-brand-primary bg-brand-primary/5 shadow-brand-sm' 
          : 'border-border bg-card hover:border-brand-primary/50'
      }`}
      onClick={() => onSelect(service?.id)}
    >
      {/* Popular Badge */}
      {service?.isPopular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-conversion-accent text-white px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isSelected ? 'bg-brand-primary text-white' : 'bg-muted text-brand-primary'
      }`}>
        <Icon name={service?.icon} size={24} />
      </div>
      {/* Content */}
      <h3 className="text-xl font-bold text-primary mb-2">{service?.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{service?.description}</p>
      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service?.features?.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Icon name="Check" size={16} className="text-trust-builder mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Pricing & Timeline */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-lg font-bold text-primary">{service?.startingPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Timeline</p>
          <p className="text-sm font-medium text-primary">{service?.timeline}</p>
        </div>
      </div>
      {/* Select Button */}
      <Button
        variant={isSelected ? "default" : "outline"}
        fullWidth
        className={isSelected ? "bg-brand-primary hover:bg-brand-primary/90" : ""}
      >
        {isSelected ? 'Selected' : 'Select Service'}
      </Button>
    </div>
  );
};

export default ServiceCard;