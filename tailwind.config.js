import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Matter", ...defaultTheme.fontFamily.sans],
        mono: ["TT Firs Neue", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem",
      },
      colors: {
        primary: "var(--color-primary)",
        primary2: "var(--color-primary-2)",
        secondary: "var(--color-secondary)",
        default: "var(--color-default)",
        "light-blue": "var(--color-light-blue)",
        // gray-30 and gray-2 are safe — they don't conflict with Tailwind's gray scale
        "gray-30": "var(--color-gray-30)",
        "gray-2": "var(--color-gray-2)",
        "primary-light": "var(--color-primary-light)",
        "primary-light-2": "var(--color-primary-light-2)",
        "secondary-light": "var(--color-secondary-light)",
        // blue2, sky-blue, utiva-green, deep-blue are safe
        blue2: "var(--color-blue-2)",
        "sky-blue": "var(--color-sky-blue)",
        "utiva-green": "var(--color-utiva-green)",
        "deep-blue": "var(--color-deep-blue)",
        // NOTE: "gray" and "blue" are intentionally omitted here because adding them
        // as flat values overwrites Tailwind's built-in gray-* and blue-* scales,
        // which the existing components rely on (text-gray-500, text-blue-200, etc.)
      },
    },
  },
  plugins: [],
};
