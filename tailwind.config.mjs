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
        heading: ['Epilogue', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
