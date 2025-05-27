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
        <div className={`${jet.className} text-red not-dark:text-light-red flex justify-center max-md:text-sm max-sm:text-xs`}>
          <div className="bg-red/20 p-2 pr-4 border border-red not-dark:border-light-red rounded-full w-max">
            👋 Hello, I'm
          </div>
        </div>
        <h1 className={`${fair.className} text-font not-dark:text-light-font text-8xl max-md:text-7xl max-sm:text-6xl`}>Chlomi</h1>
        <p className="text-gray not-dark:text-light-gray text-2xl font-light  max-md:text-xl max-sm:text-lg">I design and build stuff for the web</p>
        <p className="max-md:text-sm max-sm:text-xs text-font not-dark:text-light-font">Design meets code — I’m an aspiring full-stack developer who makes apps that look good and work even better.</p>
        <div className="mt-10 max-md:mt-8 max-sm:mt-6">
          <Button text="Reach out" />
          <button className='px-7 p-3 text-font not-dark:text-light-font cursor-pointer rounded-2xl font-light w-max max-md:text-sm max-sm:text-xs max-md:rounded-xl max-sm:rounded-lg'>
            Download CV
          </button>
        </div>
      </div>
      <hr className="border h-24 border-gray not-dark:border-light-gray animate-pulse" />
    </section>
  )
}

export default HeroSection