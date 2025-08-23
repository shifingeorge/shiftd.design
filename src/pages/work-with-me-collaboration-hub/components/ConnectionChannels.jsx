import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConnectionChannels = () => {
  const channels = [
    {
      id: 'email',
      name: 'Email',
      icon: 'Mail',
      description: 'For detailed project discussions and formal inquiries',
      contact: 'hello@alena.design',
      responseTime: '24 hours',
      bestFor: 'Project proposals, detailed questions',
      action: 'Send Email',
      primary: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'Linkedin',
      description: 'Professional networking and quick questions',
      contact: '/in/alena-designer-developer',
      responseTime: '12 hours',
      bestFor: 'Quick questions, networking',
      action: 'Connect on LinkedIn'
    },
    {
      id: 'calendly',
      name: 'Schedule a Call',
      icon: 'Calendar',
      description: 'Book a 30-minute discovery call to discuss your project',
      contact: 'calendly.com/alena-design',
      responseTime: 'Immediate booking',
      bestFor: 'Project kickoffs, consultations',
      action: 'Book a Call'
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      icon: 'Twitter',
      description: 'Design insights, industry discussions, and quick updates',
      contact: '@alena_designs',
      responseTime: '6 hours',
      bestFor: 'Design discussions, industry insights',
      action: 'Follow on Twitter'
    }
  ];

  const handleChannelClick = (channel) => {
    switch (channel?.id) {
      case 'email':
        window.location.href = `mailto:${channel?.contact}?subject=Project Inquiry&body=Hi Alena,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0A%0D%0AProject Details:%0D%0A%0D%0ABest regards,`;
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/alena-designer-developer', '_blank');
        break;
      case 'calendly':
        window.open('https://calendly.com/alena-design/30min', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/alena_designs', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-primary mb-2">Multiple Ways to Connect</h3>
        <p className="text-muted-foreground">
          Choose the channel that works best for your needs. I'm responsive across all platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {channels?.map((channel) => (
          <div
            key={channel?.id}
            className={`bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-brand-md cursor-pointer ${
              channel?.primary 
                ? 'border-brand-primary bg-brand-primary/5' :'border-border hover:border-brand-primary/50'
            }`}
            onClick={() => handleChannelClick(channel)}
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                channel?.primary 
                  ? 'bg-brand-primary text-white' :'bg-muted text-brand-primary'
              }`}>
                <Icon name={channel?.icon} size={20} />
              </div>
              <div>
                <h4 className="font-medium text-primary">{channel?.name}</h4>
                {channel?.primary && (
                  <span className="text-xs bg-conversion-accent text-white px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {channel?.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Contact:</span>
                <span className="font-mono text-primary">{channel?.contact}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Response time:</span>
                <span className="font-medium text-trust-builder">{channel?.responseTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Best for:</span>
                <span className="text-primary text-right">{channel?.bestFor}</span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant={channel?.primary ? "default" : "outline"}
              fullWidth
              className={channel?.primary ? "bg-brand-primary hover:bg-brand-primary/90" : ""}
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={16}
            >
              {channel?.action}
            </Button>
          </div>
        ))}
      </div>
      {/* Additional Info */}
      <div className="bg-muted/50 rounded-xl p-6 text-center">
        <Icon name="MessageCircle" size={24} className="text-brand-primary mx-auto mb-3" />
        <h4 className="font-medium text-primary mb-2">Prefer a Different Channel?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          I'm also available on Slack, Discord, or whatever communication tool works best for your team.
          Just mention your preference in your initial message.
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>EST Timezone</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Globe" size={14} />
            <span>Remote Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionChannels;