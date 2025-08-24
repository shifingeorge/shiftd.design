import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User } from 'lucide-react';
import { gsap } from 'gsap';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    // Animation on mount
    gsap.fromTo('.modal-backdrop', 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo('.modal-content',
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out", delay: 0.1 }
    );

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    gsap.to('.modal-content', {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose
    });
    
    gsap.to('.modal-backdrop', {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });
  };

  return (
    <div 
      className="modal-backdrop fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title and Meta */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {project.category.replace('-', ' ').toUpperCase()}
              </span>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={16} />
                {project.year}
              </div>
              {project.client && (
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <User size={16} />
                  {project.client}
                </div>
              )}
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {project.title}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          {project.images.length > 1 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                View Live Site
              </a>
            )}
            
            <button
              onClick={handleClose}
              className="flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;