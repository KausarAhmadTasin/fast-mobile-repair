import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3811",
        secondary: "#151515",
        text: {
          light: "#3f3f46",
          dark: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
