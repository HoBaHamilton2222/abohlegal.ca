export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0C2233',
        gold: '#C49A4A',
        'light-bg': '#F9F8F6',
        'body-text': '#43474C',
        'muted-text': '#74777D',
      },
      fontFamily: {
        heading: ['"Adobe Garamond Pro"', '"Adobe Garamond Pro Bold"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        display: ['"Adobe Garamond Pro"', '"Adobe Garamond Pro Bold"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
