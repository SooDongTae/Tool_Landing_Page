/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pageContainer/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    keyframes: {
      wheel: {
        to: {
          opacity: "0",
          top: "3rem",
        },
      },
    },
    animation: {
      wheel: "wheel 2s infinite",
    },
    extend: {
      fontFamily: {
        sans: ["GmarketSansMedium"],
      },
    },
    colors: {
      green: "#20c997",
      bgBlue: "#E1F5FE",
      textGray: "#777777",
    },
  },

  plugins: [],
};
