import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "game-spelling-bee": "rgb(247,218,33)",
        "game-connections": "rgb(179,167,254)",
        "game-letter-boxed": "rgb(252,113,107)",
        "game-wordle": "#e3e3e1",
      },
    },
  },
  plugins: [],
};
export default config;
