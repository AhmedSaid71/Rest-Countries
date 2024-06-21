/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-blue-700": "hsl(207, 26%, 17%)",
        "dark-gray": "hsl(0, 0%, 98%)",
        "dark-gray-500": "hsl(0, 0%, 52%)",
        "light-mode-text-color": "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
