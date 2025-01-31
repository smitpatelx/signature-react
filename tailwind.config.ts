import type { Config } from "tailwindcss";
import tailwindForms from '@tailwindcss/forms';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        ['slide-up']: 'slide-up 300ms ease-out',
        ['border-animation']: 'border-animation 6s ease-in-out infinite both',
      },
      keyframes: {
        ['slide-up']: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ['border-animation']: {
          '0%': { transform: 'rotate(0deg) translate(-50%, -50%)', top: '-10%', left: '-30%' },
          '25%': { transform: 'rotate(0deg) translate(-50%, -50%)', top: '-10%', left: '70%' },
          '60%': { transform: 'rotate(180deg) translate(50%, 50%)', top: '110%', left: '70%' },
          '80%': { transform: 'rotate(180deg) translate(50%, 50%)', top: '110%', left: '-40%' },
          '100%': { transform: 'rotate(360deg) translate(-50%, -50%)', top: '-10%', left: '-50%' },
        },
      },
    },
  },
  plugins: [
    tailwindForms,
  ],
} satisfies Config;
