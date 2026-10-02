export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0C2233',
        gold: '#C49A4A',
        'light-bg': '#F9F8F6',
        'body-text': '#43474C',
        'muted-text': '#6B6E74',
      },
      // Text in gold uses a darker shade so it is readable on white (WCAG AA).
      // Use text-gold-bright for gold text on navy or dark photos.
      textColor: {
        gold: '#896C34',
        'gold-bright': '#C49A4A',
      },
      fontFamily: {
        heading: ['"EB Garamond"', 'Garamond', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        display: ['"EB Garamond"', 'Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
