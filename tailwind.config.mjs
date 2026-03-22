export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0C2233',
        gold: '#C49A4A',
        'light-bg': '#f9f8f6',
        'body-text': '#555555',
        'muted-text': '#888888',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        body: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
