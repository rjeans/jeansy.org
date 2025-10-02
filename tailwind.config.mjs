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
            lineHeight: '1.8',
            a: {
              color: 'var(--link-color)',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'var(--link-hover)',
              },
            },
            h1: {
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '0',
              marginBottom: '1.25rem',
            },
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            em: {
              color: 'var(--text-secondary)',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1.5rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
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
            pre: {
              backgroundColor: 'var(--code-bg)',
              color: 'var(--code-text)',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
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