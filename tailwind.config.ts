import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mexican restaurant brand colors
        'mexican-red': '#D32F2F',
        'mexican-orange': '#FF6F00',
        'mexican-yellow': '#FBC02D',
        'mexican-blue': '#1976D2',
        'mexican-gold': '#FFD700',
        'mexican-cream': '#FFF8DC',
        'mexican-green': '#388E3C',
        'charcoal': '#333333',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
