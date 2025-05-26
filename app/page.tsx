import Image from "next/image";
import Navbar from "./components/Navbar";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import Button from "./components/Button";
import HeroSection from "./sections/HeroSection";
import Link from "next/link";
import AboutSection from "./sections/AboutSection";

const fair = Playfair_Display({
  variable: "--font-fair",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="flex flex-col text-white items-center pt-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
