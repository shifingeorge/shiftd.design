// src/components/ui/Button.tsx
import React, { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import Icon from '../AppIcon';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
    'disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        danger: 'bg-error text-error-foreground hover:bg-error/90'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        xs: 'h-8 rounded-md px-2 text-xs',
        xl: 'h-12 rounded-md px-10 text-base'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  iconName?: string | null;
  iconPosition?: 'left' | 'right';
  iconSize?: number | null;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      loading = false,
      iconName = null,
      iconPosition = 'left',
      iconSize = null,
      fullWidth = false,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Icon size mapping based on button size
    const iconSizeMap: Record<NonNullable<ButtonVariantProps['size']>, number> = {
      xs: 12,
      sm: 14,
      default: 16,
      lg: 18,
      xl: 20,
      icon: 16
    };
    const calculatedIconSize =
      iconSize ?? iconSizeMap[(size as keyof typeof iconSizeMap) || 'default'];

    // Loading spinner
    const LoadingSpinner = () => (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V2a10 10 0 100 20v-2A8 8 0 014 12z"
        />
      </svg>
    );

    const hasChildren = !!children;

    const renderIcon = () => {
      if (!iconName) return null;
      return (
        <Icon
          name={iconName}
          size={calculatedIconSize}
          className={cn(
            hasChildren && iconPosition === 'left' && 'mr-2',
            hasChildren && iconPosition === 'right' && 'ml-2'
          )}
        />
      );
    };

    const classes = cn(buttonVariants({ variant, size }), fullWidth && 'w-full', className);
    const isDisabled = disabled || loading;

    // Fallback button element (most common usage)
    const renderFallbackButton = () => (
      <button
        className={classes}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {iconName && iconPosition === 'left' && renderIcon()}
        {children}
        {iconName && iconPosition === 'right' && renderIcon()}
      </button>
    );

    // When asChild is true, we need to merge styles/content into the single child
    if (asChild) {
      try {
        if (!children || React.Children.count(children) !== 1) {
          return renderFallbackButton();
        }
        const child = React.Children.only(children) as React.ReactElement<any>;

        if (!React.isValidElement(child)) {
          return renderFallbackButton();
        }

        const content = (
          <>
            {loading && <LoadingSpinner />}
            {iconName && iconPosition === 'left' && renderIcon()}
            {child.props?.children}
            {iconName && iconPosition === 'right' && renderIcon()}
          </>
        );

        const clonedChild = React.cloneElement(child, {
          className: cn(classes, child.props?.className),
          'aria-busy': loading || undefined,
          'aria-disabled': isDisabled || undefined,
          children: content
        });

        // Slot will pass the remaining props/handlers to the child
        return (
          <Comp ref={ref} {...props} onClick={onClick}>
            {clonedChild}
          </Comp>
        );
      } catch {
        return renderFallbackButton();
      }
    }

    return renderFallbackButton();
  }
);

Button.displayName = 'Button';

export default Button;