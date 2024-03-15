/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "old-page": "url('https://wallpaperaccess.com/full/5430872.jpg')",
        "lc1": "url('./src/images/background1')",
      },
    },
  },
  plugins: [],
};
