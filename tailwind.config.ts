import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f2f2ee",
        surface: {
          50: "#18181c",
          100: "#121215",
          200: "#0c0c0e",
          300: "#08080a",
          border: "rgba(242, 242, 238, 0.08)",
          borderHover: "rgba(242, 242, 238, 0.18)",
        },
        cred: {
          green: "#00E599",
          neon: "#00FF87",
          gold: "#D4AF37",
          champagne: "#F3ECE2",
          dark: "#0F0F12",
          card: "#121216",
        },
        accent: {
          primary: "#f2f2ee",
          secondary: "#8e8e93",
          emerald: "#10b981",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "'Big Shoulders Display'", "sans-serif"],
        sans: ["var(--font-geist-sans)", "'Geist'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "'Geist Mono'", "monospace"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
