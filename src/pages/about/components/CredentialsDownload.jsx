import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CredentialsDownload = () => {
  const [downloadType, setDownloadType] = useState('resume');
  
  const credentials = {
    resume: {
      title: 'One-Page Resume',
      subtitle: 'Quick Overview & Key Highlights',
      icon: 'FileText',
      color: 'brand-primary',
      description: 'Essential information formatted for busy stakeholders and initial screenings.',
      fileSize: '2.1 MB',
      lastUpdated: 'December 2024',
      includes: [
        'Contact information and availability',
        'Core skills matrix with proficiency levels',
        'Key achievements and impact metrics', 
        'Recent project highlights with outcomes',
        'Education and relevant certifications'
      ]
    },
    cv: {
      title: 'Detailed CV',
      subtitle: 'Comprehensive Professional History',
      icon: 'BookOpen',
      color: 'trust-builder',
      description: 'Complete career progression, project details, and professional development history.',
      fileSize: '3.7 MB',
      lastUpdated: 'December 2024',
      includes: [
        'Comprehensive work history with detailed responsibilities',
        'Complete project portfolio with methodologies used',
        'Speaking engagements and workshop facilitation',
        'Publications and community contributions',
        'Detailed education, certifications, and professional development'
      ]
    }
  };

  const speakingEngagements = [
    {
      title: 'Design Systems at Scale',
      event: 'UX Conference 2024',
      type: 'Keynote',
      audience: '500+ designers and developers',
      date: 'March 2024'
    },
    {
      title: 'The Hybrid Designer-Developer',
      event: 'Tech Talks Monthly',
      type: 'Panel Discussion',
      audience: '200+ professionals',
      date: 'January 2024'
    },
    {
      title: 'Accessible Design in Practice',
      event: 'Accessibility Summit',
      type: 'Workshop',
      audience: '50+ participants',
      date: 'November 2023'
    }
  ];

  const workshops = [
    {
      title: 'Design-to-Code Workflow',
      type: 'Full-day Workshop',
      focus: 'Bridging design and development teams',
      delivered: '12+ companies'
    },
    {
      title: 'Component-Driven Design',
      type: 'Half-day Session',
      focus: 'Scalable design system creation',
      delivered: '8+ teams'
    },
    {
      title: 'Inclusive Design Principles',
      type: 'Interactive Workshop',
      focus: 'Accessibility-first design approach',
      delivered: '15+ organizations'
    }
  ];

  const handleDownload = (type) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${type}...`);
    // You could track analytics here
    // gtag('event', 'download', { file_name: type });
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-4">
            <Icon name="Download" size={16} className="mr-2" />
            Credentials & Speaking
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            <span className="text-gradient-brand">Formal</span> Credentials & Thought Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Downloadable credentials, speaking engagement history, and workshop facilitation 
            that demonstrate both expertise and commitment to knowledge sharing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credentials Download */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-brand-md"
            >
              {/* Document Type Selector */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {Object?.entries(credentials)?.map(([key, cred]) => (
                  <button
                    key={key}
                    onClick={() => setDownloadType(key)}
                    className={`flex-1 p-4 rounded-xl border transition-all duration-300 text-left ${
                      downloadType === key
                        ? `bg-${cred?.color}/10 border-${cred?.color}`
                        : 'bg-background border-border hover:border-brand-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        downloadType === key ? `bg-${cred?.color}` : 'bg-muted'
                      }`}>
                        <Icon 
                          name={cred?.icon} 
                          size={20} 
                          className={downloadType === key ? 'text-white' : 'text-muted-foreground'} 
                        />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          downloadType === key ? `text-${cred?.color}` : 'text-primary'
                        }`}>
                          {cred?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{cred?.subtitle}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Document Details */}
              <motion.div
                key={downloadType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Document Info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${credentials?.[downloadType]?.color}/10 rounded-2xl flex items-center justify-center`}>
                      <Icon 
                        name={credentials?.[downloadType]?.icon} 
                        size={32} 
                        className={`text-${credentials?.[downloadType]?.color}`} 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {credentials?.[downloadType]?.title}
                      </h3>
                      <p className={`text-${credentials?.[downloadType]?.color} font-medium mb-2`}>
                        {credentials?.[downloadType]?.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {credentials?.[downloadType]?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* File Details */}
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">File Size:</span>
                      <span className="font-medium text-primary">{credentials?.[downloadType]?.fileSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span className="font-medium text-primary">{credentials?.[downloadType]?.lastUpdated}</span>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center">
                    <Icon name="List" size={18} className="mr-2" />
                    What's Included
                  </h4>
                  <div className="space-y-2">
                    {credentials?.[downloadType]?.includes?.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-trust-builder flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <div className="pt-6 border-t border-border">
                  <Button
                    variant="default"
                    size="lg"
                    className={`bg-${credentials?.[downloadType]?.color} hover:bg-${credentials?.[downloadType]?.color}/90 text-white w-full sm:w-auto`}
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => handleDownload(downloadType)}
                  >
                    Download {credentials?.[downloadType]?.title}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF format • No email required • Updated regularly
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Speaking & Workshops */}
          <div className="lg:col-span-1 space-y-6">
            {/* Speaking Engagements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-conversion-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mic" size={24} className="text-conversion-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Speaking Engagements</h3>
                  <p className="text-sm text-muted-foreground">Recent presentations</p>
                </div>
              </div>

              <div className="space-y-4">
                {speakingEngagements?.map((engagement, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-medium text-primary text-sm mb-1">{engagement?.title}</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Event:</span>
                        <span className="font-medium text-primary">{engagement?.event}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-conversion-accent">{engagement?.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Audience:</span>
                        <span className="text-primary">{engagement?.audience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Workshop Facilitation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-trust-builder" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Workshop Facilitation</h3>
                  <p className="text-sm text-muted-foreground">Training programs</p>
                </div>
              </div>

              <div className="space-y-4">
                {workshops?.map((workshop, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-medium text-primary text-sm mb-1">{workshop?.title}</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium text-primary">{workshop?.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Focus:</span>
                        <span className="text-trust-builder text-xs">{workshop?.focus}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Delivered:</span>
                        <span className="text-primary">{workshop?.delivered}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workshop CTA */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-xs text-muted-foreground mb-3">
                  Interested in workshop facilitation?
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-trust-builder text-trust-builder hover:bg-trust-builder hover:text-white w-full"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Workshop
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsDownload;