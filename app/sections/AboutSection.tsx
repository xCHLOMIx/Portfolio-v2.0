import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const fair = Playfair_Display({
  variable: "--font-fair",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
})

const AboutSection = () => {
    return (
        <section id="about" className="h-screen flex gap-16 flex-col w-11/12 max-w-4xl max-auto justify-center items-center">
            <h1 className="text-2xl text-font not-dark:text-light-font">About me</h1>
            <div className="grid grid-cols-4 max-md:grid-cols-3 gap-5 max-md:gap-4 max-sm:gap-2">
                <div className="bg-alt3 not-dark:bg-light-alt3 p-8 max-md:p-4 max-md:rounded-2xl max-sm:rounded-xl text-font not-dark:text-light-font max-md:text-sm max-sm:text-xs flex flex-col gap-3 font-light rounded-3xl col-span-3">
                    <p>I am <span className={`${fair.className} text-red not-dark:text-light-red font-bold`}>Chlomi.</span></p>
                    <p>A full-stack developer with passion to design and build websites that people enjoy using. I contribute to every step of the process.</p>
                    <p>Frontend and backend development are my top priorities</p>
                </div>
                <div className="bg-alt3 not-dark:bg-light-alt3 max-md:p-4 max-md:rounded-2xl max-sm:rounded-xl rounded-3xl flex justify-center items-center p-6">
                    <div className="w-full h-full rounded-full bg-black not-dark:bg-white overflow-hidden flex justify-center items-center">
                        <Image src="/pfp.png" alt="Picture" width={100} height={100} className="h-full w-full object-bottom" />
                    </div>
                </div>
                <div className="bg-alt3 not-dark:bg-light-alt3 max-md:p-4 max-md:rounded-2xl max-sm:rounded-xl min-h-32 rounded-3xl flex flex-col gap-2 justify-center items-center p-8">
                    <h2 className="font-bold text-6xl max-md:text-5xl max-sm:text-4xl text-font not-dark:text-light-font">10+</h2>
                    <span className="font-extralight max-md:text-sm max-sm:text-xs text-center text-font not-dark:text-light-font">Solo Projects</span>
                </div>
                <div className="bg-alt3 not-dark:bg-light-alt3 max-md:p-4 max-md:rounded-2xl max-sm:rounded-xl min-h-32 rounded-3xl flex flex-col gap-2 justify-center items-center p-8">
                    <h2 className="font-bold text-6xl max-md:text-5xl max-sm:text-4xl text-font not-dark:text-light-font">2</h2>
                    <span className="font-extralight max-md:text-sm max-sm:text-xs text-center text-font not-dark:text-light-font">Project Contributions</span>
                </div>
                <div className="bg-alt3 not-dark:bg-light-alt3 max-md:p-4 max-md:rounded-2xl max-sm:rounded-xl max-md:col-span-3 col-span-2 rounded-3xl">
                    f
                </div>
            </div>
        </section>
    )
}

export default AboutSection