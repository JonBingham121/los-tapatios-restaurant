import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
