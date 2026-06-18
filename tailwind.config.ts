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
        'brand-brown': '#241611',
        'brand-orange': '#D96B27',
      },
      fontFamily: {
        'headline': ['var(--font-bebas)', 'sans-serif'],
        'accent': ['var(--font-pacifico)', 'cursive'],
        'sans': ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
