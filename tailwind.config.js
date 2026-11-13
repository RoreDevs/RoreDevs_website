/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Colour system ───────────────────────────────────────────────
      // Warm "ember" identity. The whole primary scale is generated at the
      // brand hue (27.7°) so every step shares the same hue family — the
      // previous scale was Tailwind orange, which changed hue mid-ramp.
      colors: {
        primary: {
          DEFAULT: "#78350F", // brand — unchanged
          50:  "#FAF6F1",
          100: "#F4E9DE",
          200: "#E9D5C2",
          300: "#D8B79B",
          400: "#C2926C",
          500: "#A9724A",
          600: "#8D5731",
          700: "#78350F", // brand sits at 700 so the ramp is monotonic
          800: "#612C0E",
          900: "#4B220B",
          950: "#251105",
        },

        // Warm neutrals
        surface: {
          white: "#FFFFFF",
          bone:  "#FAF8F5",
          soft:  "#F4EFE9",
          muted: "#EFE8E0",
          inverse: "#1A1614",
        },

        // Text
        ink: {
          DEFAULT:   "#1A1614", // warm near-black
          secondary: "#4A423C",
          muted:     "#6E645C",
          inverse:   "#FAF8F5",
        },

        // Borders
        border: {
          DEFAULT: "#E7DFD6",
          strong:  "#D3C7BA",
          input:   "#9C8D7E", // ≥3:1 against white (WCAG 1.4.11)
        },

        // Status — text colours verified ≥4.5:1 on their tints
        success: { DEFAULT: "#146C34", light: "#E7F4EB" },
        warning: { DEFAULT: "#92400E", light: "#FEF3C7" },
        danger:  { DEFAULT: "#B42318", light: "#FEF3F2" },
      },

      // ── Typography ──────────────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      fontSize: {
        // Fluid display scale — solves 320px overflow and oversized mobile
        // headings without arbitrary fixed widths.
        "display-2xl": ["clamp(2.5rem, 6.2vw, 4.25rem)",   { lineHeight: "1.04", letterSpacing: "-0.028em", fontWeight: "700" }],
        "display-xl":  ["clamp(2.125rem, 4.6vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.024em", fontWeight: "700" }],
        "display-lg":  ["clamp(1.875rem, 3.6vw, 2.5rem)",  { lineHeight: "1.12", letterSpacing: "-0.02em",  fontWeight: "600" }],
        "display-md":  ["clamp(1.625rem, 2.6vw, 2.125rem)",{ lineHeight: "1.18", letterSpacing: "-0.018em", fontWeight: "600" }],
        "display-sm":  ["clamp(1.375rem, 2vw, 1.75rem)",   { lineHeight: "1.28", letterSpacing: "-0.012em", fontWeight: "600" }],
      },

      // ── Radius — slightly tighter than before, borders carry the depth ──
      borderRadius: {
        DEFAULT: "0.625rem",
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
      },

      // ── Elevation — reserved for genuinely raised surfaces ──────────
      boxShadow: {
        soft:     "0 1px 2px 0 rgb(26 22 20 / 0.04)",
        card:     "0 1px 2px 0 rgb(26 22 20 / 0.04), 0 8px 24px -16px rgb(26 22 20 / 0.18)",
        elevated: "0 24px 48px -24px rgb(26 22 20 / 0.28)",
      },

      maxWidth: {
        content: "72rem", // 1152px, scales to 1280 at xl
        prose:   "40rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
