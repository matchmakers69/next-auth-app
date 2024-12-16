import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      fontSize: {
        base: "1.4rem",
        sm: "1.6rem",
        md: "1.8rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
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
        body: "rgb(var(--body))",
        "button-brown-bg": "rgb(var(--button-brown-bg))",
        navy: "rgb(var(--navy))",
        "dark-green": "rgb(var(--dark-green))",
        "foreground-green": "rgb(var(--foreground-green))",
        "destructive-foreground": "rgb(var(--destructive-foreground))",
        destructive: "rgb(var(--destructive))",
        error: "rgb(var(--error))",
        "success-foreground": "rgb(var(--success-foreground))",
        success: "rgb(var(--success))",
        "border-bottom-light": "rgba(var(--border-bottom-light))",
        "foreground-blue": "rgb(var(--foreground-blue))",
        "light-blue": "rgb(var(--light-blue))",
        black: "rgb(var(--black))",
        white: "rgb(var(--white))",
        "light-grey": "rgb(var(--light-grey))",
        "dark-purple": "rgb(var(--dark-purple))",
        "bg-purple": "rgb(var(--bg-purple))",
        "text-light": "rgb(var(--text-light))",
        foreground: "rgb(var(--foreground))",

        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
