import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        graphite: "#1A1B1F",
        silver: "#C7CDD7",
        cloud: "#F5F7FA",
        neon: "#9CF7D5",
        iris: "#A8B3FF"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(156,247,213,0.2), 0 20px 40px -20px rgba(168,179,255,0.5)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 0 0, rgba(255,255,255,0.08) 0 1px, transparent 1px 100%)"
      }
    }
  },
  plugins: []
};

export default config;
