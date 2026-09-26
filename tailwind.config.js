/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── RoreDevs Color Palette ──────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: "#78350F",
          50:  "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#78350F",
          950: "#431407",
        },
        success: {
          DEFAULT: "#16A34A",
          light: "#DCFCE7",
        },
        warning: {
          DEFAULT: "#D97706",
          light: "#FEF3C7",
        },
        danger: {
          DEFAULT: "#DC2626",
          light: "#FEE2E2",
        },
        // Backgrounds
        surface: {
          white: "#FFFFFF",
          soft:  "#F8FAFC",
          muted: "#F1F5F9",
        },
        // Text
        ink: {
          DEFAULT: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
        // Borders
        border: {
          DEFAULT: "#E2E8F0",
        },
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Large confident headings
        "display-2xl": ["4.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl":  ["3.75rem", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg":  ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-md":  ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.01em",  fontWeight: "600" }],
        "display-sm":  ["1.875rem",{ lineHeight: "1.3",  letterSpacing: "-0.01em",  fontWeight: "600" }],
      },

      // ── Border Radius ───────────────────────────────────────────────
      // rounded-2xl (16px) is the default for cards; 12px for smaller elements
      borderRadius: {
        DEFAULT: "0.75rem",   // 12px — default for inputs, badges
        xl:  "0.75rem",
        "2xl": "1rem",        // 16px — cards (primary radius)
        "3xl": "1.5rem",
      },

      // ── Box Shadows (soft, minimal) ─────────────────────────────────
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        card: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        elevated: "0 10px 15px -3px rgb(0 0 0 / 0.06), 0 4px 6px -4px rgb(0 0 0 / 0.06)",
      },

      // ── Spacing — generous whitespace ───────────────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
