/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#334155',
            lineHeight: '1.7',
            h1: {
              fontWeight: '700',
              color: '#1e293b',
            },
            h2: {
              fontWeight: '600',
              color: '#1e293b',
            },
            h3: {
              fontWeight: '600',
              color: '#1e293b',
            },
            code: {
              color: '#e11d48',
              backgroundColor: '#f8fafc',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};