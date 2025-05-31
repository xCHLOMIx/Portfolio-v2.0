import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFigma } from 'react-icons/fa6';

const ProjectSection = () => {
    return (
        <div id='projects' className='w-11/12 max-w-4xl flex flex-col gap-14 max-md:gap-14 max-sm:gap-10 items-center'>
            <h1 className='text-3xl max-md:text-2xl  max-sm:text-xl text-font not-dark:text-light-font font-semibold'>My Projects</h1>
            <div className='w-full grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <div className='bg-alt4 p-4 not-dark:bg-light-alt4 gap-5 border flex flex-col items-end justify-between rounded-3xl overflow-hidden border-stroke hover:border-white/15 not-dark:hover:border-black/15 transition duration-300 not-dark:border-light-stroke'>
                    <div className='bg-alt-gray not-dark:bg-light-alt-gray alt-gray p-1 px-3 rounded-xl outline-7 outline-alt3 not-dark:outline-black/20 text-light-font not-dark:text-font'>
                        <span>01</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-font not-dark:text-light-font text-xl max-md:text-lg max-sm:text-base'>Skuul</h2>
                        <p className='text-sm max-md:text-xs max-sm:text-[10px] text-font not-dark:text-light-font'>
                            A Library Management System built
                            using the MERN Stack that has features
                            like borrowing books, returning them
                            as well as student and admin registration
                            and authentication
                        </p>
                        <div className='self-end flex gap-2 bg-alt/80 not-dark:bg-white p-1 mt-2 rounded-full  border border-stroke not-dark:border-light-stroke'>
                            <Link href='https://github.com/xCHLOMIx/Skuul' className='' target='_blank'>
                                <div className='hover:bg-light-alt-gray not-dark:hover:bg-alt-gray rounded-full p-1.5 duration-300 transition'>
                                    <FaGithub className='w-8 max-md:w-6 h-auto text-gray not-dark:text-light-gray transition duration-300 cursor-pointer hover:text-white/80 not-dark:hover:text-black/80' />
                                </div>
                            </Link>
                            <Link href='https://www.figma.com/design/XHeVUhXHQuWwEE963AxUmk/Skuul?node-id=0-1&t=p3573NC6BmSyoVqr-1' target='_blank'>
                                <div className='hover:bg-light-alt-gray not-dark:hover:bg-alt-gray rounded-full p-1.5 duration-300 transition'>
                                    <FaFigma className='w-8 max-md:w-6 h-auto text-gray not-dark:text-light-gray transition duration-300 cursor-pointer hover:text-white/80 not-dark:hover:text-black/80' />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <img src="/skuul.png" alt="" className='rounded-xl border not-dark:border-light-stroke border-stroke' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection