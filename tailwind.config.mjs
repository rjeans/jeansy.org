/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            h1: {
              fontWeight: '700',
              color: 'var(--text-primary)',
            },
            h2: {
              fontWeight: '600',
              color: 'var(--text-primary)',
            },
            h3: {
              fontWeight: '600',
              color: 'var(--text-primary)',
            },
            code: {
              color: 'var(--code-text)',
              backgroundColor: 'var(--code-bg)',
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