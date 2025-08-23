// src/components/ui/Input.tsx
import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string | boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      description,
      error,
      required = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Stable unique ID if not provided
    const reactId = useId();
    const inputId = id || `input-${reactId}`;

    // Base input classes
    const baseInputClasses =
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background ' +
      'file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
      'disabled:cursor-not-allowed disabled:opacity-50';

    // Checkbox
    if (type === 'checkbox') {
      return (
        <input
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          {...props}
        />
      );
    }

    // Radio
    if (type === 'radio') {
      return (
        <input
          type="radio"
          className={cn(
            'h-4 w-4 rounded-full border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          {...props}
        />
      );
    }

    // Text-like inputs
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              error ? 'text-destructive' : 'text-foreground'
            )}
          >
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}

        <input
          type={type}
          className={cn(
            baseInputClasses,
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          aria-describedby={
            description && !error ? `${inputId}-desc` : error ? `${inputId}-err` : undefined
          }
          {...props}
        />

        {description && !error && (
          <p id={`${inputId}-desc`} className="text-sm text-muted-foreground">
            {description}
          </p>
        )}

        {error && (
          <p id={`${inputId}-err`} className="text-sm text-destructive">
            {typeof error === 'string' ? error : 'Invalid input'}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;