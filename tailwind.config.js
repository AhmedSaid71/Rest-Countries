/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-blue-700": "hsl(207, 26%, 17%)",
        // "dark-gray": "hsl(0, 0%, 60%)",
        "dark-gray": "#fafafafa",
        "dark-gray-500": "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [],
};
