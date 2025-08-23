/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // Always dark mode — .dark class will be applied globally in index.html
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border, #27272a)', // fallback: zinc-800
        input: 'var(--color-input, #18181b)', // fallback: zinc-900
        ring: 'var(--color-ring, #3b82f6)', // fallback: blue-500
        background: 'var(--color-background, #0f0f0f)',
        foreground: 'var(--color-foreground, #f9fafb)',
        primary: {
          DEFAULT: 'var(--color-primary, #d1d5db)', // gray-300
          foreground: 'var(--color-primary-foreground, #000000)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #a1a1aa)', // zinc-400
          foreground: 'var(--color-secondary-foreground, #000000)'
        },
        destructive: {
          DEFAULT: 'var(--color-destructive, #dc2626)', // red-600
          foreground: 'var(--color-destructive-foreground, #ffffff)'
        },
        muted: {
          DEFAULT: 'var(--color-muted, #27272a)', // zinc-800
          foreground: 'var(--color-muted-foreground, #a1a1aa)'
        },
        accent: {
          DEFAULT: 'var(--color-accent, #3b82f6)', // blue-500
          foreground: 'var(--color-accent-foreground, #ffffff)'
        },
        popover: {
          DEFAULT: 'var(--color-popover, #18181b)',
          foreground: 'var(--color-popover-foreground, #f9fafb)'
        },
        card: {
          DEFAULT: 'var(--color-card, #18181b)',
          foreground: 'var(--color-card-foreground, #f9fafb)'
        },
        success: {
          DEFAULT: 'var(--color-success, #16a34a)', // green-600
          foreground: 'var(--color-success-foreground, #ffffff)'
        },
        warning: {
          DEFAULT: 'var(--color-warning, #ca8a04)', // yellow-600
          foreground: 'var(--color-warning-foreground, #000000)'
        },
        error: {
          DEFAULT: 'var(--color-error, #dc2626)', // red-600
          foreground: 'var(--color-error-foreground, #ffffff)'
        },
        'brand-primary': 'var(--color-brand-primary, #818cf8)', // indigo-400
        'brand-secondary': 'var(--color-brand-secondary, #9333ea)', // purple-600
        'conversion-accent': 'var(--color-conversion-accent, #f97316)', // orange-500
        'trust-builder': 'var(--color-trust-builder, #10b981)', // emerald-500
        'cta': 'var(--color-cta, #4f46e5)' // indigo-600
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular']
      },
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
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-hover': 'var(--shadow-hover)'
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
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out'
      },
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
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)',
        'gradient-subtle': 'linear-gradient(90deg, transparent 0%, rgba(103, 126, 234, 0.1) 50%, transparent 100%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}