/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#242B33",
        "custom-gray-light": "rgba(45, 52, 60, 0.38)",
      },
    },
  },
  plugins: [],
};
