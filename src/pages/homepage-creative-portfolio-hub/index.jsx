import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import DesignGallery from './components/DesignGallery';
import CodeExperiments from './components/CodeExperiments';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';

const HomepageCreativePortfolioHub = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Alena - Where Design Thinking Meets Clean Code | Creative Portfolio</title>
        <meta 
          name="description" 
          content="Discover Alena's unique blend of design thinking and technical execution. Explore case studies, design work, and code experiments that showcase the intersection of beautiful design and functional development." 
        />
        <meta name="keywords" content="UI/UX Designer, Frontend Developer, Design Systems, React Developer, Portfolio, Creative Design" />
        <meta property="og:title" content="Alena - Where Design Thinking Meets Clean Code" />
        <meta property="og:description" content="Creative portfolio showcasing the perfect blend of design and development expertise" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alena - Creative Portfolio Hub" />
        <meta name="twitter:description" content="Where Design Thinking Meets Clean Code" />
        <link rel="canonical" href="/homepage-creative-portfolio-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section - Dynamic introduction with interactive elements */}
          <HeroSection />
          
          {/* Featured Case Studies - Curated project showcases with impact metrics */}
          <FeaturedCaseStudies />
          
          {/* Design Gallery - Interactive portfolio with filtering */}
          <DesignGallery />
          
          {/* Code Experiments - Live demos of technical skills */}
          <CodeExperiments />
          
          {/* Social Proof - Client testimonials and metrics */}
          <SocialProof />
          
          {/* Call to Action - Conversion-focused contact section */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-mono">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alena</h3>
                    <p className="text-sm text-white/70 font-mono">Design × Code</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Creating digital experiences that bridge the gap between beautiful design 
                  and functional code, one project at a time.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/case-studies-hub-project-storytelling" className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                    Case Studies
                  </a>
                  <a href="/about-process-evolution" className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                    About & Process
                  </a>
                  <a href="/work-with-me-collaboration-hub" className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                    Work With Me
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-white/80">hello@alena.design</p>
                  <p className="text-white/80">Available for projects starting January 2025</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} Alena. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageCreativePortfolioHub;