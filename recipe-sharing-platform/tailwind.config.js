/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ["./src/**/*.{js,ts,jsx,tsx}"],
    "./public/index.html",
  ],
  darkMode: false, // You can set it to 'media' or 'class' if needed

  theme: {
    extend: {},
  },
  plugins: [],
};
