import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProjectPlanner = ({ onRecommendation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'projectType',
      title: 'What type of project are you working on?',
      type: 'select',
      options: [
        { value: 'web-app', label: 'Web Application' },
        { value: 'mobile-app', label: 'Mobile Application' },
        { value: 'website', label: 'Marketing Website' },
        { value: 'design-system', label: 'Design System' },
        { value: 'prototype', label: 'Prototype/MVP' },
        { value: 'consultation', label: 'Strategic Consultation' }
      ]
    },
    {
      id: 'timeline',
      title: 'What\'s your ideal timeline?',
      type: 'select',
      options: [
        { value: 'rush', label: '1-2 weeks (Rush)' },
        { value: 'fast', label: '3-4 weeks' },
        { value: 'standard', label: '1-2 months' },
        { value: 'extended', label: '3+ months' },
        { value: 'flexible', label: 'Flexible timeline' }
      ]
    },
    {
      id: 'budget',
      title: 'What\'s your budget range?',
      type: 'select',
      options: [
        { value: 'startup', label: '$2,000 - $5,000' },
        { value: 'small', label: '$5,000 - $15,000' },
        { value: 'medium', label: '$15,000 - $35,000' },
        { value: 'large', label: '$35,000+' },
        { value: 'discuss', label: 'Let\'s discuss' }
      ]
    },
    {
      id: 'scope',
      title: 'What level of involvement do you need?',
      type: 'select',
      options: [
        { value: 'design-only', label: 'Design Only' },
        { value: 'design-dev', label: 'Design + Development' },
        { value: 'full-stack', label: 'Full-Stack Solution' },
        { value: 'consultation', label: 'Strategic Guidance' },
        { value: 'team-support', label: 'Team Support' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions?.[currentStep]?.id]: value };
    setAnswers(newAnswers);

    if (currentStep < questions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (finalAnswers) => {
    let recommendedService = 'consultation';
    let customMessage = '';

    // Logic to determine recommendation based on answers
    if (finalAnswers?.projectType === 'design-system') {
      recommendedService = 'design-system';
      customMessage = 'Perfect! Design systems are my specialty. I can create a scalable component library that will streamline your team\'s workflow.';
    } else if (finalAnswers?.scope === 'design-dev' || finalAnswers?.scope === 'full-stack') {
      recommendedService = 'full-stack';
      customMessage = 'Excellent! My hybrid design-development approach will be perfect for your project. We can move from concept to code seamlessly.';
    } else if (finalAnswers?.timeline === 'rush' || finalAnswers?.projectType === 'prototype') {
      recommendedService = 'rapid-prototyping';
      customMessage = 'Great choice! Rapid prototyping will help you validate your concept quickly and efficiently.';
    } else {
      customMessage = 'Based on your needs, I\'d recommend starting with a consultation to map out the best approach for your project.';
    }

    onRecommendation({
      service: recommendedService,
      message: customMessage,
      answers: finalAnswers
    });
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetPlanner = () => {
    setCurrentStep(0);
    setAnswers({});
    onRecommendation(null);
  };

  const currentQuestion = questions?.[currentStep];
  const progress = ((currentStep + 1) / questions?.length) * 100;

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-primary">Project Planner</h3>
        <span className="text-sm text-muted-foreground">
          {currentStep + 1} of {questions?.length}
        </span>
      </div>
      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-brand-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Question */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-primary mb-4">
          {currentQuestion?.title}
        </h4>

        <Select
          options={currentQuestion?.options}
          value={answers?.[currentQuestion?.id] || ''}
          onChange={handleAnswer}
          placeholder="Choose an option..."
          className="mb-4"
        />
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={goBack}
          disabled={currentStep === 0}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Back
        </Button>

        <Button
          variant="ghost"
          onClick={resetPlanner}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProjectPlanner;