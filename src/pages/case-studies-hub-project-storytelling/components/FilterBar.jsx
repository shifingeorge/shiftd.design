import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  sortBy, 
  onSortChange,
  viewMode,
  onViewModeChange 
}) => {
  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'impact', label: 'Highest Impact', icon: 'TrendingUp' },
    { value: 'duration', label: 'Project Duration', icon: 'Calendar' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3' },
    { value: 'list', icon: 'List' }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-brand-sm border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Categories */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-primary mb-3 flex items-center">
            <Icon name="Filter" size={16} className="mr-2" />
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all' ?'bg-brand-primary text-white shadow-brand-sm' :'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-primary'
              }`}
            >
              All Projects
            </button>
            {categories?.map((category) => (
              <button
                key={category?.value}
                onClick={() => onCategoryChange(category?.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category?.value
                    ? 'bg-brand-primary text-white shadow-brand-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-primary'
                }`}
              >
                <Icon name={category?.icon} size={14} />
                <span>{category?.label}</span>
                <span className="text-xs opacity-75">({category?.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort and View Controls */}
        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e?.target?.value)}
              className="appearance-none bg-muted text-primary px-4 py-2 pr-8 rounded-lg text-sm font-medium border border-border focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            {viewModes?.map((mode) => (
              <button
                key={mode?.value}
                onClick={() => onViewModeChange(mode?.value)}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === mode?.value
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-muted-foreground hover:text-primary'
                }`}
                title={mode?.value === 'grid' ? 'Grid View' : 'List View'}
              >
                <Icon name={mode?.icon} size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Active Filters Display */}
      {selectedCategory !== 'all' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Active filter:</span>
              <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full flex items-center space-x-2">
                <span>{categories?.find(cat => cat?.value === selectedCategory)?.label}</span>
                <button
                  onClick={() => onCategoryChange('all')}
                  className="hover:bg-brand-primary/20 rounded-full p-0.5"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              iconSize={14}
              onClick={() => onCategoryChange('all')}
            >
              Clear All
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FilterBar;