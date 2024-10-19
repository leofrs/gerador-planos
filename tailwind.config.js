/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#32d2bd",
        textSecondary: "#FCFCFF",
        textThird: "#0f182b",
        bgPrimary: "#0f182b",
        bgSecondary: "#32d2bd",
      },
    },
  },
  plugins: [],
};
