import type { Config } from "tailwindcss";

// Wandelt einen Variablennamen in eine Tailwind-Farbe um, die Transparenz kann
const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    // Bewusst "colors" statt "extend": Es gibt nur diese Namen.
    // Feste Werte wie text-white oder bg-green-400 funktionieren nicht mehr.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: color("primary"),
        light: color("primary-light"),
        dark: color("primary-dark"),
      },
      secondary: color("secondary"),
      accent: color("accent"),
      background: color("background"),
      surface: {
        DEFAULT: color("surface"),
        alt: color("surface-alt"),
      },
      foreground: color("foreground"),
      muted: color("muted"),
      subtle: color("subtle"),
      border: color("border"),
      danger: color("danger"),
    },
  },
  plugins: [],
};

export default config;
