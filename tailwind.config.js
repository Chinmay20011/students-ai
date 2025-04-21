/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3366FF',
          light: '#667EFF',
          dark: '#254EDB'
        },
        secondary: {
          DEFAULT: '#6610f2',
          light: '#7d3cf9',
          dark: '#5200c9'
        },
        accent: {
          DEFAULT: '#9C27B0',
          light: '#BA68C8',
          dark: '#7B1FA2'
        },
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C'
        },
        warning: {
          DEFAULT: '#FF9800',
          light: '#FFB74D',
          dark: '#F57C00'
        },
        error: {
          DEFAULT: '#F44336',
          light: '#E57373',
          dark: '#D32F2F'
        },
        space: {
          dark: '#0a0b34',
          medium: '#141852',
          light: '#2b2f77'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s infinite',
        'pulse-glow': 'pulseGlow 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(51, 102, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(51, 102, 255, 0.8)' }
        }
      }
    },
  },
  plugins: [],
};