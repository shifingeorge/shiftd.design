import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl p-8 border border-brand-primary/10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Project Impact</h2>
        <p className="text-muted-foreground">
          Measurable results from design and development work
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name={stat?.icon} size={24} className="text-white" />
            </div>
            
            <motion.div
              className="text-3xl font-bold text-brand-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {stat?.value}
            </motion.div>
            
            <div className="text-sm text-muted-foreground font-medium">
              {stat?.label}
            </div>
            
            {stat?.description && (
              <div className="text-xs text-muted-foreground mt-1 opacity-75">
                {stat?.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} />
            <span>Updated {new Date()?.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={16} />
            <span>Growing Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;