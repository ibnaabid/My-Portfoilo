import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container": "#151515",
        "on-primary-container": "#FFFFFF",
        "surface-container-highest": "#1F1F1F",
        "secondary-container": "#2E2E2E",
        "primary": "#819A91", // Sage Green
        "primary-accent": "#B7A3E3", // Soft Purple
        "sage-green": "#819A91",
        "soft-purple": "#B7A3E3",
        "surface": "#080808", // Deep Obsidian
        "background": "#080808",
        "on-background": "#FFFFFF", // Pure White Text
        "outline": "#334155",
        "on-surface-variant": "#94A3B8",
        "stark-red": "#e62129",
        "iron-gold": "#f6c445",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "unit": "4px",
        "margin": "48px",
        "container-max": "1440px"
      },
      fontFamily: {
        "body-md": ["var(--font-inter)"],
        "label-caps": ["var(--font-space-grotesk)"],
        "headline-lg": ["var(--font-space-grotesk)"],
        "headline-md": ["var(--font-space-grotesk)"],
        "body-lg": ["var(--font-inter)"],
        "display-xl": ["var(--font-space-grotesk)"],
        "technical-sm": ["var(--font-space-grotesk)"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }],
        "label-caps": ["10px", { "lineHeight": "12px", "letterSpacing": "0.2em", "fontWeight": "700" }],
        "headline-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-md": ["32px", { "lineHeight": "40px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "letterSpacing": "0em", "fontWeight": "400" }],
        "display-xl": ["84px", { "lineHeight": "90px", "letterSpacing": "-0.04em", "fontWeight": "700" }],
        "technical-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.15em", "fontWeight": "500" }]
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
