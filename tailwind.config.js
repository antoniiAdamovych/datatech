/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#00C2CB",
        secondary: "#242834",
        dark: "#00060f",
        light: "#ffffff",
        muted: "#a5a5a5"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

