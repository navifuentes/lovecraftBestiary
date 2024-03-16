/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "old-page": "url('https://wallpaperaccess.com/full/5430872.jpg')",
        lc1: "url('https://vignette1.wikia.nocookie.net/lovecraft/images/5/51/Wiki-background.png/revision/latest?cb=20150503183105')",
        lc2: "url('/background1.jpg')",
        map1: "url('/our-world-map.jpg')",
        map2: "url('/dreamlands-map.jpg')",
      },
    },
  },
  plugins: [],
};
