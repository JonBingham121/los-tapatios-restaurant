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
        // Los Tapatios Brand Colors
        'brand-red': '#B71C1C',
        'brand-gold': '#F4B400',
        'brand-cream': '#FFF8E8',
        'brand-green': '#4E7C35',
        'charcoal': '#2C2C2C',
        // Legacy aliases for existing components
        'mexican-red': '#B71C1C',
        'mexican-orange': '#B71C1C',
        'mexican-yellow': '#F4B400',
        'mexican-blue': '#1976D2',
        'mexican-gold': '#F4B400',
        'mexican-cream': '#FFF8E8',
        'mexican-green': '#4E7C35',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
