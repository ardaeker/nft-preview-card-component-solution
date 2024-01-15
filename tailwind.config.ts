import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "card-mobile": "327px",
        "card-tablet": "350px",
      },
      borderRadius: {
        "card-xl": "15px",
        "card-avatar": "33px",
      },
      colors: {
        cyan: "#00FFF8",
        "soft-blue": "#8BACD9",
        "dark-blue": "#15263F",
        "light-blue": "#2E405A",
        "very-dark-blue": "#0D192C",
      },
      fontFamily: {
        outfit: [
          "var(--font-outfit)",
          {
            fontFeatureSettings: "'clig' off, 'liga' off",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
