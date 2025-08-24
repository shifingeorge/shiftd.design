import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useGSAP';
import { experiences } from '../../data/skills';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(imageRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 }
  });

  useScrollAnimation(contentRef, {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 }
  });

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-15"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                About Me
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a passionate UI/UX designer and frontend developer with over 5 years of experience 
                creating digital experiences that users love. My unique blend of design sensibility and 
                technical expertise allows me to bridge the gap between beautiful design and functional implementation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I believe great design should be both visually stunning and highly functional. My approach 
                combines user research, modern design principles, and cutting-edge development practices 
                to deliver solutions that exceed expectations.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-3 top-8 w-0.5 h-16 bg-slate-200"></div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 ${
                        exp.current ? 'bg-blue-600' : 'bg-slate-300'
                      }`}></div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-slate-900">{exp.title}</h4>
                          <span className="text-sm text-slate-500 mt-1 sm:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <ul className="text-slate-600 space-y-1">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className="text-sm leading-relaxed">• {desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;