import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useScrollAnimation } from '../../hooks/useGSAP';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(headerRef, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 }
  });

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    skillBars.forEach((bar, index) => {
      const skill = skills[index];
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });
  }, []);

  const skillCategories = {
    design: skills.filter(skill => skill.category === 'design'),
    development: skills.filter(skill => skill.category === 'development'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  const SkillCategory = ({ title, skillList, color }: { title: string; skillList: typeof skills; color: string }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className={`text-2xl font-bold mb-6 ${color}`}>{title}</h3>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium">{skill.name}</span>
              <span className="text-slate-500 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className={`skill-bar-fill h-2 rounded-full bg-gradient-to-r ${
                  skill.category === 'design' ? 'from-blue-500 to-blue-600' :
                  skill.category === 'development' ? 'from-green-500 to-green-600' :
                  'from-orange-500 to-orange-600'
                }`}
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning design, development, and the latest tools 
            to bring ideas to life in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Design" 
            skillList={skillCategories.design} 
            color="text-blue-600" 
          />
          <SkillCategory 
            title="Development" 
            skillList={skillCategories.development} 
            color="text-green-600" 
          />
          <SkillCategory 
            title="Tools" 
            skillList={skillCategories.tools} 
            color="text-orange-600" 
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '30+', label: 'Happy Clients' },
            { number: '15+', label: 'Awards Won' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;