import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PersonalIntro from './components/PersonalIntro';
import ProfessionalTimeline from './components/ProfessionalTimeline';
import ProcessInsights from './components/ProcessInsights';
import SkillsMatrix from './components/SkillsMatrix';
import WorkingStyles from './components/WorkingStyles';
import TestimonialsSection from './components/TestimonialsSection';
import ValuesFramework from './components/ValuesFramework';
import CredentialsDownload from './components/CredentialsDownload';

const AboutProcessEvolution = () => {
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
        <title>About & Process Evolution | Alena - Design-Developer Journey</title>
        <meta 
          name="description" 
          content="Discover Alena's evolution from designer to design-developer hybrid. Learn about her unique process, methodology, and the 'why' behind her positioning in the creative technology space." 
        />
        <meta name="keywords" content="Design Process, Developer Journey, Hybrid Skills, Design Methodology, Career Evolution, Professional Development" />
        <meta property="og:title" content="About & Process Evolution - Alena's Journey" />
        <meta property="og:description" content="The story behind the evolution from designer to design-developer hybrid" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About & Process Evolution - Alena" />
        <meta name="twitter:description" content="Discover the journey from designer to design-developer hybrid" />
        <link rel="canonical" href="/about-process-evolution" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Personal Introduction - Authentic photo and mission statement */}
          <PersonalIntro />
          
          {/* Professional Timeline - Interactive career journey */}
          <ProfessionalTimeline />
          
          {/* Process Insights - Methodology and frameworks */}
          <ProcessInsights />
          
          {/* Skills Matrix - Interactive proficiency visualization */}
          <SkillsMatrix />
          
          {/* Working Styles - Collaboration approaches */}
          <WorkingStyles />
          
          {/* Client Testimonials - Strategic integration */}
          <TestimonialsSection />
          
          {/* Values Framework - Thoughtful Innovation philosophy */}
          <ValuesFramework />
          
          {/* Credentials Download - Resume and CV access */}
          <CredentialsDownload />
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
                  Making technology more human through thoughtful design 
                  and clean code implementation.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/case-studies-hub-project-storytelling" className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                    Case Studies
                  </a>
                  <a href="/homepage-creative-portfolio-hub" className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                    Portfolio Hub
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
                  <p className="text-white/80">Available for speaking engagements</p>
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

export default AboutProcessEvolution;