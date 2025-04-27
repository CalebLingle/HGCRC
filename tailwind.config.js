/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1991b8', // Blue
        'secondary': '#1e4220', // Forest Green
        'accent': '#f7d064', // Gold/Yellow
        'dark': '#111827', // Dark background
        'light': '#f9fafb', // Light background
      }
    },
  },
  plugins: [],
}

