import React from 'react'
import Button from '../components/Button'
import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { FaFigma, FaReact } from 'react-icons/fa6';
import { SiMongodb } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';

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
      <div className='absolute animation not-dark:border-light-stroke not-dark:bg-light-alt4 not-dark:text-light-font left-2/12 max-md:p-1.5 max-md:hidden top-2/12 bg-alt4 p-2.5 rounded-xl border border-stroke'>
        <FaReact className='w-6 h-auto max-md:w-5' />
      </div>
      <div className='absolute animationTwo not-dark:border-light-stroke not-dark:bg-light-alt4 not-dark:text-light-font right-2/12 max-md:p-1.5 max-md:hidden top-3/12 bg-alt4 p-2.5 rounded-xl border border-stroke'>
        <FaFigma className='w-6 h-auto max-md:w-5' />
      </div>
      <div className='absolute animationThree not-dark:border-light-stroke not-dark:bg-light-alt4 not-dark:text-light-font right-4/12 max-md:p-1.5 max-md:hidden bottom-4/12 bg-alt4 max-lg:right-3/12 p-2.5 rounded-xl border border-stroke'>
        <SiMongodb className='w-6 h-auto max-md:w-5' />
      </div>
      <div className='absolute animationFour not-dark:border-light-stroke not-dark:bg-light-alt4 not-dark:text-light-font left-3/12 max-md:p-1.5 max-md:hidden bottom-5/12 max-md:bottom-3/12 bg-alt4 p-2.5 rounded-xl border border-stroke'>
        <RiNextjsLine className='w-6 h-auto max-md:w-5' />
      </div>
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
          <a href="#contact">
            <Button text="Reach out" />
          </a>
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