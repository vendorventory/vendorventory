/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This must be at the root.
  darkMode: 'class', 
  content: [
    // CRITICAL: Ensure 'app' is included so Tailwind sees your files.
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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