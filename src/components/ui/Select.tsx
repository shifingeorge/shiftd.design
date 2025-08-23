// src/components/ui/Select.tsx
import React, { useId, useMemo, useState } from 'react';
import { ChevronDown, Check, Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from './Button';
import Input from './Input';

export type SelectOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
  description?: string;
};

export interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
  className?: string;
  options?: SelectOption[];
  value?: string | number | Array<string | number>;
  defaultValue?: string | number | Array<string | number>;
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  error?: string | boolean;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  id?: string;
  name?: string;
  onChange?: (value: string | number | Array<string | number>) => void;
  onOpenChange?: (open: boolean) => void;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      options = [],
      value,
      defaultValue,
      placeholder = 'Select an option',
      multiple = false,
      disabled = false,
      required = false,
      label,
      description,
      error,
      searchable = false,
      clearable = false,
      loading = false,
      id,
      name,
      onChange,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const reactId = useId();
    const selectId = id || `select-${reactId}`;
    const listboxId = `${selectId}-listbox`;

    const filteredOptions = useMemo(() => {
      if (!searchable || !searchTerm) return options;
      const q = searchTerm.toLowerCase();
      return options.filter(
        (option) =>
          option.label.toLowerCase().includes(q) ||
          (option.value != null && String(option.value).toLowerCase().includes(q))
      );
    }, [options, searchable, searchTerm]);

    const getSelectedDisplay = () => {
      if (multiple) {
        const vals = Array.isArray(value) ? value : [];
        if (!vals.length) return placeholder;
        const selectedOptions = options.filter((opt) => vals.includes(opt.value));
        if (!selectedOptions.length) return placeholder;
        if (selectedOptions.length === 1) return selectedOptions[0].label;
        return `${selectedOptions.length} items selected`;
      }
      if (value === undefined || value === '') return placeholder;
      const selectedOption = options.find((opt) => opt.value === value);
      return selectedOption ? selectedOption.label : placeholder;
    };

    const handleToggle = () => {
      if (disabled) return;
      const next = !isOpen;
      setIsOpen(next);
      onOpenChange?.(next);
      if (!next) setSearchTerm('');
    };

    const handleOptionSelect = (option: SelectOption) => {
      if (multiple) {
        const current = Array.isArray(value) ? value : [];
        const exists = current.includes(option.value);
        const updated = exists ? current.filter((v) => v !== option.value) : [...current, option.value];
        onChange?.(updated);
      } else {
        onChange?.(option.value);
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleClear: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      onChange?.(multiple ? [] : '');
    };

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setSearchTerm(e.target.value);
    };

    const isSelected = (optionValue: string | number) =>
      multiple ? (Array.isArray(value) ? value.includes(optionValue) : false) : value === optionValue;

    const hasValue = multiple ? (Array.isArray(value) ? value.length > 0 : false) : value !== undefined && value !== '';

    // Normalize for hidden native <select> (string | string[])
    const nativeValue = multiple
      ? (Array.isArray(value) ? value.map((v) => String(v)) : [])
      : String(value ?? '');

    return (
      <div className={cn('relative', className)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              error ? 'text-destructive' : 'text-foreground'
            )}
          >
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}

        <div className="relative">
          <button
            ref={ref}
            id={selectId}
            type="button"
            className={cn(
              'flex h-10 w-full items-center justify-between rounded-md border border-input bg-popover text-foreground',
              'px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-destructive focus:ring-destructive',
              !hasValue && 'text-muted-foreground'
            )}
            onClick={handleToggle}
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? listboxId : undefined}
            {...props}
          >
            <span className="truncate">{getSelectedDisplay()}</span>

            <div className="flex items-center gap-1">
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}

              {clearable && hasValue && !loading && (
                <Button variant="ghost" size="icon" className="h-4 w-4" onClick={handleClear} aria-label="Clear selection">
                  <X className="h-3 w-3" />
                </Button>
              )}

              <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
            </div>
          </button>

          {/* Hidden native select for form submission */}
          <select
            name={name}
            value={nativeValue as any}
            onChange={() => {}}
            className="sr-only"
            tabIndex={-1}
            multiple={multiple}
            required={required}
          >
            {!multiple && <option value="">Select...</option>}
            {options.map((option) => (
              <option key={String(option.value)} value={String(option.value)}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown */}
          {isOpen && (
            <div
              id={listboxId}
              role="listbox"
              aria-labelledby={selectId}
              className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover text-foreground shadow-brand"
            >
              {searchable && (
                <div className="border-b p-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search options..." value={searchTerm} onChange={handleSearchChange} className="pl-8" />
                  </div>
                </div>
              )}

              <div className="max-h-60 overflow-auto py-1">
                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {searchTerm ? 'No options found' : 'No options available'}
                  </div>
                ) : (
                  filteredOptions.map((option) => {
                    const selected = isSelected(option.value);
                    return (
                      <div
                        key={String(option.value)}
                        role="option"
                        aria-selected={selected}
                        className={cn(
                          'relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none',
                          'hover:bg-accent hover:text-accent-foreground',
                          selected && 'bg-primary text-primary-foreground',
                          option.disabled && 'pointer-events-none opacity-50'
                        )}
                        onClick={() => !option.disabled && handleOptionSelect(option)}
                      >
                        <span className="flex-1">{option.label}</span>
                        {multiple && selected && <Check className="h-4 w-4" />}
                        {option.description && (
                          <span className="ml-2 text-xs text-muted-foreground">{option.description}</span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {description && !error && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        {error && <p className="mt-1 text-sm text-destructive">{typeof error === 'string' ? error : 'Invalid selection'}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;