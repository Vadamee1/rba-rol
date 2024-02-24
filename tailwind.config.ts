import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "vadam-backg": 'url("/public/images/backgrounds/vadam-back.png")',
        "vadam-background": 'url("/images/backgrounds/wppVadam.jpg")',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#310413",
            foreground: "#FFFFFF",
            primary: "#004493",
          },
        },
      },
    }),
  ],
};
export default config;
