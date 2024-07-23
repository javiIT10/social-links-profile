/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        /* ## Colors */
        green: "hsl(75, 94%, 57%)",

        white: "hsl(0, 0%, 100%)",

        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)",
      },
      /*       boxShadow: {
        "3xl": "8px 8px 0px 0px rgba(18,18,18,1)",
      }, */
    },
  },
  plugins: [],
};
