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
      },
      secondary: color("secondary"),
      accent: {
        DEFAULT: color("accent"),
        dark: color("accent-dark"),
      },
      surface: color("surface"),
      ink: color("ink"),
      foreground: color("foreground"),
      muted: color("muted"),
      border: color("border"),
      danger: color("danger"),
    },
    fontFamily: {
      sans: ["var(--font-body)", "system-ui", "sans-serif"],
      display: ["var(--font-display)", "Georgia", "serif"],
    },
  },
  plugins: [],
};

export default config;
