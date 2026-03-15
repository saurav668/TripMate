/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         primary: "hsl(12 76% 52%)",
        "primary-foreground": "hsl(35 30% 97%)",
        secondary: "hsl(182 42% 28%)",
        "secondary-foreground": "hsl(35 30% 97%)",
        warm: "hsl(28 60% 50%)",
        "warm-foreground": "hsl(35 30% 97%)",
        teal: "hsl(182 42% 28%)",
        "teal-foreground": "hsl(35 30% 97%)",
      },
    },
  },
   safelist: [
    "bg-primary", "text-primary-foreground",
    "bg-secondary", "text-secondary-foreground",
    "bg-warm", "text-warm-foreground",
    "bg-teal", "text-teal-foreground",
  ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-border": {
          border: "1px solid hsl(35 15% 88%)",
        },
      });
    },
  ],
};