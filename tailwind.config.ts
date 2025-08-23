import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { lg: '1024px', xl: '1200px', '2xl': '1440px' }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular']
      },
      colors: {
        // Core dark palette + red accent
        base: {
          900: '#0b0b0f',
          800: '#0f0f14'
        },
        border: 'var(--color-border, rgba(255,255,255,0.08))',
        input: 'var(--color-input, #0f0f14)',
        ring: 'var(--color-ring, #ef4444)',

        background: 'var(--color-background, #0b0b0f)',
        foreground: 'var(--color-foreground, #f3f4f6)',

        primary: {
          DEFAULT: 'var(--color-primary, #f3f4f6)',
          foreground: 'var(--color-primary-foreground, #0b0b0f)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #a1a1aa)',
          foreground: 'var(--color-secondary-foreground, #0b0b0f)'
        },
        destructive: {
          DEFAULT: 'var(--color-destructive, #dc2626)',
          foreground: 'var(--color-destructive-foreground, #ffffff)'
        },
        muted: {
          DEFAULT: 'var(--color-muted, #121216)',
          foreground: 'var(--color-muted-foreground, #a1a1aa)'
        },
        accent: {
          DEFAULT: 'var(--color-accent, #ef4444)',
          dark: '#dc2626',
          foreground: 'var(--color-accent-foreground, #ffffff)'
        },
        popover: {
          DEFAULT: 'var(--color-popover, #0f0f14)',
          foreground: 'var(--color-popover-foreground, #f3f4f6)'
        },
        card: {
          DEFAULT: 'var(--color-card, #0f0f14)',
          foreground: 'var(--color-card-foreground, #f3f4f6)'
        },
        success: {
          DEFAULT: 'var(--color-success, #16a34a)',
          foreground: 'var(--color-success-foreground, #ffffff)'
        },
        warning: {
          DEFAULT: 'var(--color-warning, #ca8a04)',
          foreground: 'var(--color-warning-foreground, #0b0b0f)'
        },
        error: {
          DEFAULT: 'var(--color-error, #dc2626)',
          foreground: 'var(--color-error-foreground, #ffffff)'
        },

        // Brand gradient stops (red → orange)
        'brand-primary': 'var(--color-brand-primary, #f43f5e)', // rose-500
        'brand-secondary': 'var(--color-brand-secondary, #f97316)', // orange-500

        // Optional tokens you already had (kept for compatibility)
        'conversion-accent': 'var(--color-conversion-accent, #f97316)',
        'trust-builder': 'var(--color-trust-builder, #10b981)',
        cta: 'var(--color-cta, #dc2626)'
      },

      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,.4)',
        'brand-sm': '0 4px 12px rgba(0,0,0,.25)',
        'brand-md': '0 8px 24px rgba(0,0,0,.35)',
        'brand-lg': '0 16px 48px rgba(0,0,0,.45)',
        'brand-hover': '0 12px 36px rgba(0,0,0,.4)'
      },

      // Keep your custom scales (safe; won’t break defaults)
      spacing: {
        xs: 'var(--spacing-xs, 8px)',
        sm: 'var(--spacing-sm, 12px)',
        md: 'var(--spacing-md, 16px)',
        lg: 'var(--spacing-lg, 24px)',
        xl: 'var(--spacing-xl, 32px)',
        '2xl': 'var(--spacing-2xl, 48px)',
        '3xl': 'var(--spacing-3xl, 64px)',
        '4xl': 'var(--spacing-4xl, 96px)'
      },
      borderRadius: {
        'brand-sm': 'var(--radius-sm, 4px)',
        'brand-md': 'var(--radius-md, 8px)',
        'brand-lg': 'var(--radius-lg, 12px)',
        'brand-xl': 'var(--radius-xl, 16px)'
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '600ms'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },

      // Motion
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceGentle: {
          '0%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        float: 'float 6s ease-in-out infinite'
      },

      // Gradients
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, var(--color-brand-primary, #f43f5e) 0%, var(--color-brand-secondary, #f97316) 100%)',
        'gradient-red': 'linear-gradient(90deg, #f43f5e 0%, #ef4444 50%, #fb923c 100%)',
        'gradient-subtle': 'linear-gradient(90deg, transparent 0%, rgba(244,63,94,0.10) 50%, transparent 100%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
} satisfies Config; 