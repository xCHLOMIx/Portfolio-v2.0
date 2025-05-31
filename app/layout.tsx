import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const fair = Playfair_Display({
  variable: "--font-fair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Chlomi",
  description: "Portfolio v2.0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/vercel.svg" type="image/png" />
      </head>
      <body className={`${inter.className} bar scroll-smooth antialiased bg-bg not-dark:bg-light-bg`}>
        {children}
      </body>
    </html>
  );
}
