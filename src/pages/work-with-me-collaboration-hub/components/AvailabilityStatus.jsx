import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityStatus = () => {
  const currentDate = new Date();
  const currentMonth = currentDate?.toLocaleString('default', { month: 'long' });
  const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)?.toLocaleString('default', { month: 'long' });

  const availabilityData = {
    status: 'limited', // 'available', 'limited', 'booked'
    currentProjects: 3,
    maxProjects: 4,
    nextAvailable: `Early ${nextMonth}`,
    preferredProjects: [
      'Full-stack product design',
      'Design system creation',
      'Strategic UX consultation'
    ],
    notTakingOn: [
      'Logo design only',
      'Basic website builds',
      'Projects under $2,000'
    ]
  };

  const getStatusConfig = () => {
    switch (availabilityData?.status) {
      case 'available':
        return {
          color: 'text-trust-builder',
          bgColor: 'bg-trust-builder/10',
          borderColor: 'border-trust-builder/20',
          icon: 'CheckCircle',
          title: 'Available for New Projects',
          message: 'I have capacity for new projects and can start within 1-2 weeks.'
        };
      case 'limited':
        return {
          color: 'text-warning',
          bgColor: 'bg-warning/10',
          borderColor: 'border-warning/20',
          icon: 'Clock',
          title: 'Limited Availability',
          message: `Currently working on ${availabilityData?.currentProjects}/${availabilityData?.maxProjects} projects. Next availability: ${availabilityData?.nextAvailable}.`
        };
      case 'booked':
        return {
          color: 'text-error',
          bgColor: 'bg-error/10',
          borderColor: 'border-error/20',
          icon: 'XCircle',
          title: 'Fully Booked',
          message: 'Currently at capacity. Join the waitlist for future availability.'
        };
      default:
        return {};
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <div className={`${statusConfig?.bgColor} ${statusConfig?.borderColor} border rounded-xl p-6`}>
        <div className="flex items-start space-x-4">
          <div className={`${statusConfig?.color} mt-1`}>
            <Icon name={statusConfig?.icon} size={24} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${statusConfig?.color} mb-2`}>
              {statusConfig?.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {statusConfig?.message}
            </p>
            
            {availabilityData?.status !== 'booked' && (
              <Button
                variant="outline"
                className={`${statusConfig?.color} border-current hover:bg-current hover:text-white`}
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule a Call
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Project Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Currently Seeking */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Heart" size={20} className="text-trust-builder" />
            <h4 className="font-medium text-primary">Currently Seeking</h4>
          </div>
          <ul className="space-y-2">
            {availabilityData?.preferredProjects?.map((project, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-trust-builder mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{project}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Taking On */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="X" size={20} className="text-error" />
            <h4 className="font-medium text-primary">Not Currently Taking On</h4>
          </div>
          <ul className="space-y-2">
            {availabilityData?.notTakingOn?.map((project, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Minus" size={16} className="text-error mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-brand-primary mb-1">24h</div>
          <div className="text-xs text-muted-foreground">Response Time</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-brand-primary mb-1">98%</div>
          <div className="text-xs text-muted-foreground">On-Time Delivery</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-brand-primary mb-1">4.9</div>
          <div className="text-xs text-muted-foreground">Client Rating</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border text-center">
          <div className="text-2xl font-bold text-brand-primary mb-1">50+</div>
          <div className="text-xs text-muted-foreground">Projects Completed</div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;