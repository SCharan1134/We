/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms", // Adds a 500ms transition duration class
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#1A1A1A",
        third: "#2C2C2C",
        ascent: "#000000",
      },
    },
  },
  plugins: [],
};
