/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient':
          'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
        'custom-gradient':
          'linear-gradient(to right, rgba(27, 253, 156, 0.1) 100%, transparent 0%, transparent 0%, rgba(27, 253, 156, 0.1) 100%)',
      },
      boxShadow: {
        'custom-inset': 'inset 0 0 10px #359797',
        'custom-outer': '0 0 24px 12px #359799',
      },
      fontFamily: {
        sans: ['var(--font-sora)', ...fontFamily.sans],
        code: 'var(--font-code)',
        grotesk: 'var(--font-grotesk)',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({})
      addComponents({
        '.container': {
          '@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]':
            {},
        },
        '.h1': {
          '@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]':
            {},
        },

        '.body-1': {
          '@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8':
            {},
        },
        '.body-2': {
          '@apply font-light text-[0.875rem] leading-6 md:text-base': {},
        },

        '.tagline': {
          '@apply font-grotesk font-light text-xs tracking-tagline uppercase':
            {},
        },
        '.quote': {
          '@apply font-code text-lg leading-normal': {},
        },
        '.button': {
          '@apply font-code text-xs font-bold uppercase tracking-wider': {},
        },
      })
      addUtilities({
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        },
      })
    }),
  ],
}
