import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FFCE31",
        lightyellow: "#FFF0BF",
        darkgrey: "#717171",
        divider: "#A8A8A8",
      },
      fontFamily: {
        raleway: ["Raleway", "serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
