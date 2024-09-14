/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
      },
      fontFamily: {
        "gt-america": ["GT-America"],
        "gt-america-ext": ["GT-America-Extended"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
