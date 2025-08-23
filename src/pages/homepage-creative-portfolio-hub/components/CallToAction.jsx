import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactMethods = [
    {
      icon: "Mail",
      label: "Email",
      value: "hello@alena.design",
      action: "mailto:hello@alena.design"
    },
    {
      icon: "MessageCircle",
      label: "Schedule Call",
      value: "15-min chat",
      action: "#"
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      value: "@alenadesign",
      action: "https://linkedin.com/in/alenadesign"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24 hours" },
    { label: "Project Start", value: "Within 1 week" },
    { label: "Satisfaction Rate", value: "98%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-brand-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-conversion-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Build
              <br />
              <span className="text-conversion-accent">Something Amazing?</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Let's collaborate to create digital experiences that not only look stunning but also deliver measurable results. From concept to code, I'll be your 
              partner in bringing ideas to life.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {quickStats?.map((stat, index) => (
                <motion.div
                  key={stat?.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-conversion-accent mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat?.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/work-with-me-collaboration-hub">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-conversion-accent hover:bg-conversion-accent/90 text-white shadow-brand-lg hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-1"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={20}
                  fullWidth
                >
                  Start a Project
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Schedule Call
              </Button>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                {contactMethods?.map((method, index) => (
                  <motion.a
                    key={method?.label}
                    href={method?.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-conversion-accent/20 rounded-xl flex items-center justify-center group-hover:bg-conversion-accent/30 transition-colors duration-300">
                      <Icon name={method?.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{method?.label}</div>
                      <div className="text-white/70 text-sm">{method?.value}</div>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-trust-builder/20 backdrop-blur-sm rounded-xl p-6 border border-trust-builder/30"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-trust-builder rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-trust-builder rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <div className="text-white font-medium">Available for New Projects</div>
                  <div className="text-white/70 text-sm">Starting January 2025</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4"
            >
              {['Github', 'Dribbble', 'Twitter', 'Instagram']?.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon name={social} size={20} color="white" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-white/20"
        >
          <p className="text-white/70 mb-4">
            Prefer to learn more about my process first?
          </p>
          <Link
            to="/about-process-evolution"
            className="inline-flex items-center space-x-2 text-white hover:text-conversion-accent transition-colors duration-300 font-medium"
          >
            <span>Explore My Journey & Process</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;