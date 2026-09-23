import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1215",
        paper: "#F7F6F3",
        structure: "#3A4148",
        signal: "#C4491F",
        line: "#D8D5CE",
        "line-dark": "#2A3036",
        muted: "#8A9199",
      },
      fontFamily: {
        sans: ["'General Sans'", "'Inter Tight'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        line: "68ch",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
