// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        bg: '#f9f9f9',
        text: '#333',
        'section-bg': '#ffffff',
        accent: '#4CAF50',
        'accent-dark': '#2E7D32',
        error: '#ff4444',
        'twitter-blue': '#1DA1F2',
        dark: '#121212',
        'dark-section': '#1e1e1e',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
        dark: '0 4px 12px rgba(0, 0, 0, 0.3)',
        hover: '0 12px 24px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent-dark'),
              },
            },
            h1: { color: theme('colors.text') },
            h2: { color: theme('colors.text') },
            h3: { color: theme('colors.text') },
            strong: { color: theme('colors.text') },
            code: { color: theme('colors.accent-dark') },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              color: theme('colors.text'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent-dark'),
              },
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.200') },
            h3: { color: theme('colors.gray.300') },
            strong: { color: theme('colors.gray.100') },
            code: { color: theme('colors.accent') },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
