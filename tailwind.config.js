/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#38B569",
          blue: "#152570",
        },
        background: "#F8F9FB",
      },
    },
  },
  plugins: [],
}