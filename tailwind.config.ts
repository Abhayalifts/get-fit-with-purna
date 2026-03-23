import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        foreground: "#0f172a",
        charcoal: "#1f2937",
        accent: "#16a34a",
        borderSoft: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        premium: "0 20px 60px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(22, 163, 74, 0.16), transparent 45%)"
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
