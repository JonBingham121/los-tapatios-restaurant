import type { Metadata } from "next";
import { Bebas_Neue, Pacifico, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico'
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Los Tapatios Mexican Restaurant | Authentic Mexican Food",
  description: "Authentic Mexican cuisine serving St. George, Kanab, and Flagstaff. Family recipes, fresh ingredients, and warm hospitality.",
  keywords: "Mexican restaurant, authentic Mexican food, St. George restaurants, Kanab restaurants, Flagstaff restaurants, fajitas, tacos, margaritas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebasNeue.variable} ${pacifico.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
