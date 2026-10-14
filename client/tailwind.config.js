/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          primary: "#155EEF",
          electric: "#075BFF",
          cyan: "#00D9F5",
          navy: "#0B1028",
          "navy-light": "#141D3B",
          "navy-card": "#0F1634",
          "navy-dark": "#060A1C",
          violet: "#6D28D9",
          magenta: "#E83EBD",
          warm: "#FF8A35",
          soft: "#F6F8FC",
          border: "#E7EAF2",
          text: "#0B1028",
          secondary: "#59647D",
          muted: "#8B96A8",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(7, 91, 255, 0.25)",
        "glow-cyan": "0 0 50px -10px rgba(0, 217, 245, 0.3)",
        card: "0 4px 20px -2px rgba(11, 16, 40, 0.05)",
        "card-hover": "0 16px 36px -4px rgba(11, 16, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
