"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import Button from "./components/Button";
import HeroSection from "./sections/HeroSection";
import Link from "next/link";
import AboutSection from "./sections/AboutSection";
import { useState } from "react";
import SkillsSection from "./sections/SkillsSection";
import ProjectSection from "./sections/ProjectSection";

const fair = Playfair_Display({
  variable: "--font-fair",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
})

export default function Home() {
  const [username, setUsername] = useState('xCHLOMIx')

  return (
    <div className="flex flex-col w-full text-white items-center pt-4 pb-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
