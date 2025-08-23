import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "FinTech Mobile Banking Revolution",
      category: "UI/UX Design & Development",
      description: "Redesigned mobile banking experience for 2M+ users, focusing on accessibility and seamless transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      metrics: {
        userSatisfaction: "+45%",
        taskCompletion: "+60%",
        developmentTime: "-30%"
      },
      technologies: ["React Native", "TypeScript", "Figma", "Node.js"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "E-commerce Platform Optimization",
      category: "Full-Stack Development",
      description: "Built scalable e-commerce solution with advanced analytics and personalized user experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      metrics: {
        conversionRate: "+85%",
        pageSpeed: "+40%",
        revenue: "+120%"
      },
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Healthcare Dashboard System",
      category: "Data Visualization",
      description: "Created intuitive dashboard for healthcare professionals to monitor patient data and analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      metrics: {
        efficiency: "+70%",
        errorReduction: "-55%",
        userAdoption: "+90%"
      },
      technologies: ["D3.js", "React", "Python", "MongoDB"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into projects where design thinking meets technical execution, 
            creating solutions that truly make a difference.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies?.map((study, index) => (
            <motion.div
              key={study?.id}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-brand-sm hover:shadow-brand-lg transition-all duration-500 border border-border"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study?.image}
                  alt={study?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${study?.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full">
                    {study?.category}
                  </span>
                </div>

                {/* Metrics Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white space-y-2">
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(study?.metrics)?.map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-conversion-accent">{value}</div>
                          <div className="text-xs capitalize opacity-90">{key?.replace(/([A-Z])/g, ' $1')?.trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {study?.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {study?.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study?.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/case-studies-hub-project-storytelling"
                  className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-medium"
                >
                  <span>View Case Study</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-primary/20 rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/case-studies-hub-project-storytelling"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-medium hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span>View All Case Studies</span>
            <Icon name="ExternalLink" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;