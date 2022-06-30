/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      navy: "#0a192f",
      darkNavy: "#020c1b",
      lightestNavy: "#112240",
      lightNavy: "#112240",
      slate: "#8892b0",
      darkSlate: "#495670",
      lightSlate: "#a8b2d1",
      "lightest-slate": "#ccd6f6",
      green: "#64ffda",
      rose:"#FF6489"
    },
  },
  variants:{
    fill:["hover"]
  },
  plugins: [
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};

        