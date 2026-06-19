/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Matter", ...defaultTheme.fontFamily.sans],
        mono: ["TT Firs Neue", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        primary: "#050794",
        secondary: "#FBAF1B",
        "primary-dark": "#000269",
        "deep-blue": "#0C0E83",
      },
    },
  },
  plugins: [],
};
