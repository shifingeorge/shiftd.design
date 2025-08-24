import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set(['.hero-title', '.hero-subtitle', '.hero-description', '.hero-cta', '.social-links'], {
        opacity: 0,
        y: 50
      });

      // Animation sequence
      tl.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to('.hero-description', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .to('.social-links', { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");

      // Floating animation for scroll indicator
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
          Designing
          <span className="block text-blue-600">Digital Experiences</span>
        </h1>
        
        <p className="hero-subtitle text-xl sm:text-2xl text-slate-600 mb-8 font-light">
          UI/UX Designer & Frontend Developer
        </p>
        
        <p className="hero-description text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I create beautiful, user-centered digital experiences that bridge the gap between design and development. 
          Specializing in modern web applications and mobile interfaces.
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToWork}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </button>
          <a
            href="#contact"
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium hover:border-slate-400 transition-all duration-300 hover:bg-slate-50"
          >
            Get In Touch
          </a>
        </div>

        <div className="social-links flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:scale-110 transform duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:scale-110 transform duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@johndoe.com"
            className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:scale-110 transform duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToWork}
          className="scroll-indicator text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;