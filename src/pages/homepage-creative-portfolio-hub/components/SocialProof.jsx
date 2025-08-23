import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const clientLogos = [
    {
      name: "TechFlow",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
      industry: "SaaS"
    },
    {
      name: "GreenLeaf",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      industry: "Sustainability"
    },
    {
      name: "FinanceHub",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f07?w=120&h=60&fit=crop",
      industry: "FinTech"
    },
    {
      name: "HealthTech",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop",
      industry: "Healthcare"
    },
    {
      name: "EduPlatform",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=60&fit=crop",
      industry: "Education"
    },
    {
      name: "RetailMax",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      industry: "E-commerce"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `Alena's unique combination of design thinking and technical execution is exactly what our startup needed. She didn't just create beautiful interfaces—she built them too, saving us months of development time.`,
      rating: 5,
      project: "SaaS Dashboard Redesign"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GreenLeaf",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Working with Alena was transformative for our brand. Her ability to translate complex sustainability concepts into intuitive user experiences while maintaining our environmental values was remarkable.`,
      rating: 5,
      project: "Brand Identity & Web Platform"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Head of Design",
      company: "FinanceHub",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `Alena bridges the gap between design and development like no one else. Her code is as clean as her designs, and her user research insights drove measurable improvements in our conversion rates.`,
      rating: 5,
      project: "Mobile Banking App"
    }
  ];

  const metrics = [
    {
      value: "150+",
      label: "Projects Completed",
      icon: "CheckCircle"
    },
    {
      value: "50+",
      label: "Happy Clients",
      icon: "Users"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: "Heart"
    },
    {
      value: "3.2M+",
      label: "Users Impacted",
      icon: "TrendingUp"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-muted-foreground mb-8 font-medium">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos?.map((client, index) => (
              <motion.div
                key={client?.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center space-y-2"
              >
                <div className="w-24 h-12 bg-card rounded-lg border border-border flex items-center justify-center overflow-hidden group-hover:shadow-brand-sm transition-all duration-300">
                  <Image
                    src={client?.logo}
                    alt={client?.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {client?.industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {metrics?.map((metric, index) => (
            <motion.div
              key={metric?.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl mb-4">
                <Icon name={metric?.icon} size={24} color="white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {metric?.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {metric?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients who've experienced the impact of 
              thoughtful design combined with technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-brand-sm hover:shadow-brand-md transition-all duration-300 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} color="white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial?.rating })?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial?.role} at {testimonial?.company}
                    </div>
                    <div className="text-xs text-brand-primary font-medium mt-1">
                      {testimonial?.project}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-brand-primary/20 rounded-2xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-card rounded-2xl border border-border shadow-brand-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-conversion-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Featured in Design Weekly
              </span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" size={20} className="text-trust-builder" />
              <span className="text-sm font-medium text-muted-foreground">
                Top 1% Designer on Dribbble
              </span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-yellow-500" />
              <span className="text-sm font-medium text-muted-foreground">
                5.0 Average Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;