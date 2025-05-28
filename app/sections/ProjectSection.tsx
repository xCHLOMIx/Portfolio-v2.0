import Image from 'next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
    return (
        <div id='projects' className='w-full max-w-2xl max-md:max-w-11/12 flex flex-col items-center gap-16 max-md:gap-14 max-sm:gap-10 justify-center'>
            <h1 className='text-3xl max-md:text-2xl max-sm:text-xl text-font not-dark:text-light-font font-semibold'>My Projects</h1>
            <div className='bg-alt4 not-dark:bg-light-alt4 border gap-4 flex items-end justify-between rounded-3xl overflow-hidden w-full h-[280px] border-stroke not-dark:border-light-stroke'>
                <div className='w-2/3 h-full max-sm:h-3/4 flex items-end'>
                    <img src="/skuul.png" alt="" className='max-sm:h-full rounded-tr-2xl border-r border-t border-stroke not-dark:border-light-stroke max-sm:object-cover' />
                </div>
                <div className='flex h-full flex-col items-end justify-center gap-5 relative pr-4 py-4 w-max max-w-1/3'>
                    <div className='text-right flex flex-col gap-2'>
                        <h2 className='text-font not-dark:text-light-font text-2xl font-semibold max-md:text-xl max-sm:text-lg'>Skuul</h2>
                        <p className='text-right text-font-alt not-dark:text-light-font-alt font-light text-sm max-md:text-xs max-sm:text[10px]'>
                            A Library Management System built
                            using the MERN Stack that has features
                            like borrowing books, returning them
                            as well as student and admin registration
                            and authentication
                        </p>
                    </div>
                    <div className='bottom-3 right-3 gap-3 flex items-center'>
                        <FaGithub className='w-10 max-md:w-8 h-auto text-gray not-dark:text-light-gray transition duration-300 cursor-pointer hover:text-white/80 not-dark:hover:text-black/80' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection