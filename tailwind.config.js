/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        marcellus: ["Marcellus", "serif"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite", // 5s per rotation
      },
    },
  },
  plugins: [],
};
