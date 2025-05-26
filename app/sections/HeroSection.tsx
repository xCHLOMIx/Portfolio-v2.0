import React from 'react'
import Button from '../components/Button'
import { JetBrains_Mono, Playfair_Display } from 'next/font/google';

const fair = Playfair_Display({
  variable: "--font-fair",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
})

const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex flex-col gap-16 justify-center items-center">
            <div className="w-11/12 mx-auto text-center">
              <div className={`${jet.className} text-red max-md:text-sm max-sm:text-xs`}>👋 - Hello, I'm</div>
              <h1 className={`${fair.className} text-8xl max-md:text-7xl max-sm:text-6xl`}>Chlomi</h1>
              <p className="text-gray text-2xl font-light max-md:text-xl max-sm:text-lg">I design and build stuff for the web</p>
              <p className="max-md:text-sm max-sm:text-xs">Design meets code — I’m an aspiring full-stack developer who makes apps that look good and work even better.</p>
              <div className="mt-10 max-md:mt-8 max-sm:mt-6">
                <Button text="Reach out" />
                <button className='px-7 p-3 cursor-pointer rounded-2xl font-light w-max max-md:text-sm max-sm:text-xs max-md:rounded-xl max-sm:rounded-lg'>
                  Download CV
                </button>
              </div>
            </div>
            <hr className="border h-24 border-gray animate-pulse" />
          </section>
  )
}

export default HeroSection