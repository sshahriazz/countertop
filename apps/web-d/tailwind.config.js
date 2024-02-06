/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const style = require("./tailwind_style.json");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      borderRadius: style.radius,
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "countertop",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        spacingUnit: 4,
        disabledOpacity: ".5",
        dividerWeight: "1px",
        borderWidth: style.borderWidth,
      },
      themes: {
        light: style.light,
      },
    }),
  ],
};