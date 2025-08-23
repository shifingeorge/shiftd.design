import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-creative-portfolio-hub', icon: 'Home' },
    { name: 'Case Studies', path: '/case-studies-hub-project-storytelling', icon: 'FolderOpen' },
    { name: 'About', path: '/about-process-evolution', icon: 'User' },
    { name: 'Work With Me', path: '/work-with-me-collaboration-hub', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-brand-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/homepage-creative-portfolio-hub" 
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand-sm group-hover:shadow-brand-md transition-all duration-300">
                  <span className="text-white font-bold text-lg font-mono">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-conversion-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary group-hover:text-brand-primary transition-colors duration-300">
                  Alena
                </h1>
                <p className="text-xs text-muted-foreground font-mono">Design × Code</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActivePath(item?.path)
                      ? 'text-brand-primary bg-brand-primary/10' :'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </span>
                  {isActivePath(item?.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90 text-white shadow-brand-sm hover:shadow-brand-md transition-all duration-300"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40">
            <nav className="px-4 py-6 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-brand-primary bg-brand-primary/10 border-l-4 border-brand-primary' :'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <Icon name="ChevronRight" size={16} className="ml-auto text-brand-primary" />
                  )}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-6 border-t border-border mt-6">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-cta hover:bg-cta/90 text-white shadow-brand-sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Let's Talk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;