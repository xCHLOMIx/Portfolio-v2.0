import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { TbSend } from 'react-icons/tb'

const Footer = () => {
    return (
        <div id='contact' className='bg-footer not-dark:bg-light-footer relative flex px-6 max-md:px-10 flex-col items-center pt-14 max-md:pt-10 max-sm:pt-10 pb-6 w-full mt-28 rounded-t-4xl'>
            <form action="">
                <h1 className='text-3xl max-md:text-2xl max-sm:text-xl text-font not-dark:text-light-font'>Get in touch</h1>
                <div className='mt-10'>
                    <p className='font-light text-gray not-dark:text-light-alt-gray max-md:text-sm max-sm:text-xs'>Contact directly at <a href='' className='text-white not-dark:text-black font-bold hover:underline'>gutabarwaa@gmail.com</a> or through this form</p>
                    <div className='flex flex-col gap-3 mt-2'>
                        <input className='input' type="email" placeholder='Your email' />
                        <textarea name="" className='input' id="" placeholder='Your message...' rows={10}></textarea>
                    </div>
                    <div className='flex items-center gap-4 mt-4'>
                        <button className='p-3 cursor-pointer px-4 hover:rounded-full transition duration-1000 bg-font not-dark:bg-light-font text-bg not-dark:text-light-bg flex items-center gap-2 rounded-2xl max-md:rounded-xl max-lg:rounded-lg'>
                            <span className='max-md:text-sm max-sm:text-xs'>Submit</span>
                            <TbSend className='w-5 max-md:w-4 h-auto' />
                        </button>
                        <div className='flex gap-3 items-center sm:hidden'>
                            <span className='text-gray not-dark:text-light-alt-gray'>or</span>
                            <div className='hover:bg-alt3 p-2 rounded-lg duration-300 transition cursor-pointer'>
                                <FaLinkedin className='w-6 h-auto text-font not-dark:text-light-font' />
                            </div>
                            <div className='hover:bg-alt3 p-2 rounded-lg duration-300 transition cursor-pointer'>
                                <FaGithub className='w-6 h-auto text-font not-dark:text-light-font' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 justify-self-center'>
                    <p className='text-gray flex items-center gap-3 max-md:text-sm max-sm:text-xs'><span className='text-lg max-md:text-base max-sm:text-xs'>&copy;</span> 2024 Chlomi. All rights reserved.</p>
                </div>
            </form>
            <div className='flex flex-col max-sm:hidden items-center absolute bottom-0 left-3 gap-5'>
                <div className='hover:bg-alt3 not-dark:hover:bg-white p-2 rounded-lg duration-300 transition cursor-pointer'>
                    <FaLinkedin className='w-6 h-auto text-font not-dark:text-light-font' />
                </div>
                <div className='hover:bg-alt3 not-dark:hover:bg-white p-2 rounded-lg duration-300 transition cursor-pointer'>
                    <FaGithub className='w-6 h-auto text-font not-dark:text-light-font' />
                </div>
                <hr className='h-28 border border-gray not-dark:border-light-gray' />
            </div>
        </div>
    )
}

export default Footer