import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "3rem",
        sm: "4rem",
        lg: "6rem",
      },
    },
    extend: {
      backdropBlur: {
        'custom': '25px',
      },
      borderRadius: {
        lg: "10px",
        xl: '24px',
      },
      padding: {
        section: "clamp(1rem, 2.5vw, 3rem) clamp(0rem, 1.5vw, 1.5rem)"
      },
      fontSize: {
        xs: "1.2rem",
        base: "1.4rem",
        sm: "1.6rem",
        md: "1.8rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      borderColor: {
        'dark-border': 'hsla(0, 0%, 100%, 0.05)',
      },
      colors: {
        border: "rgb(var(--border))",
        "bg-facebook": "var(--facebook-color)",
        "bg-google": "var(--google-color)",
        "border-input-dark": "rgb(var(--border-input-dark))",
        "border-input-light": "rgb(var(--border-input-light) / 0.09)",
        ring: "rgb(var(--ring))",
        "ring-dark": "rgb(var(--ring-dark))",
        background: "rgb(var(--background))",
        body: "var(--body)",
        "sidebar-grey": "var(--sidebar-grey)",
        "destructive-foreground": "rgb(var(--destructive-foreground))",
        destructive: "rgb(var(--destructive))",
        error: "rgb(var(--error))",
        "success-foreground": "rgb(var(--success-foreground))",
        success: "rgb(var(--success))",
        "border-grey-light": "var(--border-grey-light)",
        "background-grey-light": "var(--background-grey-light)",
        "light-blue": "var(--light-blue)",
        black: "rgb(var(--black))",
        white: "rgb(var(--white))",
        "light-grey": "rgb(var(--light-grey))",
        "dark-grey": "var(--dark-grey)",
        "text-light": "var(--text-light)",
        "text-grey": "var(--text-grey)",
        foreground: "rgb(var(--foreground))",

        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
      },
      screens: {
        sm: "576px",
        "sm-max": { max: "576px" },
        md: "768px",
        "md-max": { max: "768px" },
        lg: "992px",
        "lg-max": { max: "992px" },
        xl: "1200px",
        "xl-max": { max: "1200px" },
        "2xl": "1320px",
        "2xl-max": { max: "1320px" },
        "3xl": "1600px",
        "3xl-max": { max: "1600px" },
        "4xl": "1850px",
        "4xl-max": { max: "1850px" },
      },
      backgroundImage: {
        authHeroImg: "url('/images/auth-icon.jpg')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scroll-touch': {
          '-webkit-overflow-scrolling': 'touch',
          'overflow-y': 'auto',
          'overscroll-behavior': 'contain',
        },
      });
    }),
  ],
} satisfies Config;
