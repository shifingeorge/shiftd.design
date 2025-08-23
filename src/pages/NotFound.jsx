// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');

  const handleGoBack = () => {
    if (window.history && window.history.length > 1) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-foreground/10 select-none">
            404
          </h1>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Page not found
        </h2>
        <p className="text-foreground/70 mb-8">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            icon={<Icon name="ArrowLeft" />}
            iconPosition="left"
            onClick={handleGoBack}
          >
            Go Back
          </Button>

          <Button
            variant="outline"
            icon={<Icon name="Home" />}
            iconPosition="left"
            onClick={handleGoHome}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;