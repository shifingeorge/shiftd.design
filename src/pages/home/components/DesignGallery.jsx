import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DesignGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filters = [
    { id: 'all', label: 'All Work', icon: 'Grid3X3' },
    { id: 'branding', label: 'Branding', icon: 'Palette' },
    { id: 'ui-ux', label: 'UI/UX', icon: 'Smartphone' },
    { id: 'web', label: 'Web Design', icon: 'Monitor' },
    { id: 'print', label: 'Print', icon: 'FileText' }
  ];

  const designItems = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      description: "Complete brand identity for sustainable fashion startup",
      tools: ["Illustrator", "Figma"],
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile App Interface",
      category: "ui-ux",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      description: "Fitness tracking app with gamification elements",
      tools: ["Figma", "Principle"],
      year: "2024"
    },
    {
      id: 3,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Modern e-commerce platform for artisan goods",
      tools: ["Figma", "Webflow"],
      year: "2023"
    },
    {
      id: 4,
      title: "Annual Report Design",
      category: "print",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      description: "Corporate annual report with data visualization",
      tools: ["InDesign", "Illustrator"],
      year: "2023"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "ui-ux",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Analytics dashboard for project management tool",
      tools: ["Figma", "Framer"],
      year: "2024"
    },
    {
      id: 6,
      title: "Restaurant Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      description: "Complete brand package for farm-to-table restaurant",
      tools: ["Illustrator", "Photoshop"],
      year: "2023"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Creative portfolio for architectural firm",
      tools: ["Figma", "React"],
      year: "2024"
    },
    {
      id: 8,
      title: "Magazine Layout",
      category: "print",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Editorial design for technology magazine",
      tools: ["InDesign", "Photoshop"],
      year: "2023"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? designItems 
    : designItems?.filter(item => item?.category === activeFilter);

  return (
    <section className="py-20 bg-muted/30">
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
            Design Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A curated collection of visual design work spanning branding, digital interfaces, 
            and print design—each piece crafted with attention to detail and user experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => setActiveFilter(filter?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter?.id
                    ? 'bg-brand-primary text-white shadow-brand-sm'
                    : 'bg-card text-muted-foreground hover:text-primary hover:bg-muted border border-border'
                }`}
              >
                <Icon name={filter?.icon} size={16} />
                <span>{filter?.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems?.map((item, index) => (
              <motion.div
                key={item?.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-all duration-300 border border-border"
                onMouseEnter={() => setHoveredItem(item?.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{item?.title}</h3>
                      <p className="text-sm opacity-90 mb-2">{item?.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          {item?.tools?.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs opacity-75">{item?.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full capitalize">
                      {item?.category?.replace('-', '/')}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="Eye" size={16} color="white" />
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-1 group-hover:text-brand-primary transition-colors duration-300">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {item?.category?.replace('-', ' & ')}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-primary/20 rounded-xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-brand-primary/30 transition-all duration-300 cursor-pointer">
            <Icon name="Plus" size={18} />
            <span className="font-medium">View Complete Portfolio</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignGallery;