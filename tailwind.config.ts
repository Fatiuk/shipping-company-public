import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mobmenu: "0 3px 3px rgb(0 0 0 / 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        oblue: {
          DEFAULT: "#0A3161",
          50: "#E6EAEF",
          100: "#CED5DF",
          200: "#9DACBF",
          300: "#6C83A0",
          400: "#3B5A80",
          500: "#0A3161",
          600: "#082749",
          700: "#061D32",
          800: "#04131A",
          900: "#020A0D",
          950: "#010305",
        },
        owhite: { DEFAULT: "#F4F4F2" },
        oaccent: {
          DEFAULT: "#B31942",
          400: "#E0A3B3",
          500: "#D1758D",
          600: "#C24767",
          700: "#B31942",
          800: "#8F142F",
          900: "#6B0F1C",
        },
      },
      fontFamily: {
        title: ["var(--font-title)", "sans-serif"],
        header: ["var(--font-header)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      rotate: {
        "135": "135deg",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
// const colorRays = "#ca325b";
// const colorSun = "#b31942";
// const colorMoon = "#0a3161";
