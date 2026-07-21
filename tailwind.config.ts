import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
        },
        quinn: {
          black: "var(--quinn-black)",
          white: "var(--quinn-white)",
          teal: "var(--quinn-teal)",
          "teal-dark": "var(--quinn-teal-dark)",
          "teal-soft": "var(--quinn-teal-soft)",
          "teal-muted": "var(--quinn-teal-muted)",
          surface: "var(--quinn-surface)",
          border: "var(--quinn-border)",
          secondary: "var(--quinn-secondary)",
          muted: "var(--quinn-muted)",
          warm: "var(--quinn-warm)",
          "warm-surface": "var(--quinn-warm-surface)",
          highlight: "var(--quinn-highlight)",
          error: "var(--quinn-error)",
          warning: "var(--quinn-warning)"
        }
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.75rem",
        md: "0.75rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1rem"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(10, 10, 15, 0.04)",
        soft: "0 1px 2px rgba(10, 10, 15, 0.04)"
      },
      transitionDuration: {
        fast: "100ms",
        base: "200ms",
        slow: "350ms"
      },
      transitionTimingFunction: {
        quinn: "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
