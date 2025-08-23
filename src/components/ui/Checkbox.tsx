// src/components/ui/Checkbox.tsx
import React, {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

type Size = 'sm' | 'default' | 'lg';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  className?: string;
  indeterminate?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string | boolean;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-4 w-4',
  default: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      id,
      checked,
      defaultChecked,
      indeterminate = false,
      disabled = false,
      required = false,
      label,
      description,
      error,
      size = 'default',
      onChange,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const checkboxId = id || `checkbox-${reactId}`;
    const descId = description && !error ? `${checkboxId}-desc` : undefined;
    const errId = error ? `${checkboxId}-err` : undefined;

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    // Reflect 'indeterminate' state on the native input
    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = !!indeterminate && !checked;
      }
    }, [indeterminate, checked]);

    const ariaChecked =
      indeterminate && !checked ? 'mixed' : checked ? true : false;

    return (
      <div className={cn('flex items-start gap-2', className)}>
        <div className="relative flex items-center">
          {/* Visually hidden native input (focus + semantics) */}
          <input
            ref={innerRef}
            id={checkboxId}
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            required={required}
            aria-checked={ariaChecked}
            aria-invalid={!!error || undefined}
            aria-describedby={errId ?? descId}
            onChange={onChange}
            {...props}
          />

          {/* Visual control box */}
          <label
            htmlFor={checkboxId}
            className={cn(
              'grid place-items-center rounded-sm border ring-offset-background',
              'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              sizeClasses[size],
              // Base styles
              'border-input bg-background text-foreground cursor-pointer transition-colors',
              // Selected states (use accent color for brand)
              (checked || (indeterminate && !checked)) &&
                'bg-accent text-accent-foreground border-accent',
              // Error state
              error && 'border-destructive peer-focus-visible:ring-destructive'
            )}
          >
            {checked && !indeterminate && <Check className="h-3 w-3" />}
            {indeterminate && <Minus className="h-3 w-3" />}
          </label>
        </div>

        {(label || description || error) && (
          <div className="flex-1 space-y-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  'cursor-pointer text-sm font-medium leading-none',
                  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                  error ? 'text-destructive' : 'text-foreground'
                )}
              >
                {label}
                {required && <span className="ml-1 text-destructive">*</span>}
              </label>
            )}

            {description && !error && (
              <p id={descId} className="text-sm text-muted-foreground">
                {description}
              </p>
            )}

            {error && (
              <p id={errId} className="text-sm text-destructive">
                {typeof error === 'string' ? error : 'Invalid selection'}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface CheckboxGroupProps
  extends React.ComponentPropsWithoutRef<'fieldset'> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string | boolean;
  required?: boolean;
}

export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(function CheckboxGroup(
  { className, children, label, description, error, required = false, disabled, ...props },
  ref
) {
  const reactId = useId();
  const groupId = props.id || `checkbox-group-${reactId}`;
  const descId = description && !error ? `${groupId}-desc` : undefined;
  const errId = error ? `${groupId}-err` : undefined;

  return (
    <fieldset
      ref={ref}
      id={groupId}
      disabled={disabled}
      aria-describedby={errId ?? descId}
      className={cn('space-y-3', className)}
      {...props}
    >
      {label && (
        <legend
          className={cn(
            'text-sm font-medium',
            error ? 'text-destructive' : 'text-foreground'
          )}
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </legend>
      )}

      {description && !error && (
        <p id={descId} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}

      <div className="space-y-2">{children}</div>

      {error && (
        <p id={errId} className="text-sm text-destructive">
          {typeof error === 'string' ? error : 'Please review your selection'}
        </p>
      )}
    </fieldset>
  );
});