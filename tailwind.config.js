/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Mono", "monospace"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#0A0A0F",
        surface: "#111118",
        border: "#1E1E2E",
        accent: "#7C3AED",
        "accent-2": "#06B6D4",
        muted: "#6B7280",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124,58,237,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
