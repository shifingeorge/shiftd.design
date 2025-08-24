import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = ({ selectedService, recommendation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: selectedService || '',
    budget: '',
    timeline: '',
    message: '',
    hearAbout: '',
    newsletter: false,
    updates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'full-stack', label: 'Full-Stack Product Design' },
    { value: 'design-system', label: 'Design System Creation' },
    { value: 'rapid-prototyping', label: 'Rapid Prototyping' },
    { value: 'consultation', label: 'Consultation Services' },
    { value: 'other', label: 'Other (please specify)' }
  ];

  const budgetOptions = [
    { value: 'startup', label: '$2,000 - $5,000' },
    { value: 'small', label: '$5,000 - $15,000' },
    { value: 'medium', label: '$15,000 - $35,000' },
    { value: 'large', label: '$35,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'rush', label: '1-2 weeks (Rush - 25% premium)' },
    { value: 'fast', label: '3-4 weeks' },
    { value: 'standard', label: '1-2 months' },
    { value: 'extended', label: '3+ months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const hearAboutOptions = [
    { value: 'search', label: 'Google Search' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'portfolio', label: 'Portfolio Site' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 border border-border text-center">
        <div className="w-16 h-16 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-trust-builder" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! I'll review your project details and get back to you within 24 hours with next steps.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              company: '',
              projectType: selectedService || '',
              budget: '',
              timeline: '',
              message: '',
              hearAbout: '',
              newsletter: false,
              updates: false
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 border border-border space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-primary mb-2">Let's Start a Conversation</h3>
        <p className="text-muted-foreground">
          Tell me about your project and let's explore how we can work together
        </p>
      </div>
      {/* Recommendation Display */}
      {recommendation && (
        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={20} className="text-brand-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-primary mb-1">Recommended for You</h4>
              <p className="text-sm text-muted-foreground">{recommendation?.message}</p>
            </div>
          </div>
        </div>
      )}
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
          placeholder="john@company.com"
          required
        />
      </div>
      <Input
        label="Company/Organization"
        type="text"
        name="company"
        value={formData?.company}
        onChange={handleInputChange}
        placeholder="Your Company Name (Optional)"
      />
      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Project Type"
          options={projectTypeOptions}
          value={formData?.projectType}
          onChange={(value) => handleSelectChange('projectType', value)}
          placeholder="Select project type..."
          required
        />
        <Select
          label="Budget Range"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleSelectChange('budget', value)}
          placeholder="Select budget range..."
          required
        />
      </div>
      <Select
        label="Preferred Timeline"
        options={timelineOptions}
        value={formData?.timeline}
        onChange={(value) => handleSelectChange('timeline', value)}
        placeholder="Select timeline..."
        required
      />
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          Project Details
        </label>
        <textarea
          name="message"
          value={formData?.message}
          onChange={handleInputChange}
          placeholder={`Tell me about your project:\n\n• What problem are you solving?\n• Who is your target audience?\n• What's your vision for the solution?\n• Any specific requirements or constraints?`}
          rows={6}
          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
          required
        />
      </div>
      <Select
        label="How did you hear about me?"
        options={hearAboutOptions}
        value={formData?.hearAbout}
        onChange={(value) => handleSelectChange('hearAbout', value)}
        placeholder="Select an option..."
      />
      {/* Preferences */}
      <div className="space-y-3">
        <Checkbox
          label="Subscribe to design insights newsletter"
          checked={formData?.newsletter}
          onChange={(e) => handleInputChange(e)}
          name="newsletter"
        />
        <Checkbox
          label="Get updates about new case studies and projects"
          checked={formData?.updates}
          onChange={(e) => handleInputChange(e)}
          name="updates"
        />
      </div>
      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        fullWidth
        loading={isSubmitting}
        className="bg-cta hover:bg-cta/90"
        iconName="Send"
        iconPosition="right"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        I typically respond within 24 hours. For urgent projects, feel free to reach out on LinkedIn.
      </p>
    </form>
  );
};

export default ContactForm;