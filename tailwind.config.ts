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
        deepPurple: "#6A0572",
        lavender: "#C77DFF",
        lightLilac: "#F5E6FE",
        midnightBlue: "#3D1E6D",
      },
      screens: {
        sm: "640px",  // Small screens (mobile)
        md: "768px",  // Medium screens (tablet)
        lg: "1024px", // Large screens (laptop)
        xl: "1280px", // Extra large screens (desktop)
      },
    },
  },
  plugins: [],
} satisfies Config;

