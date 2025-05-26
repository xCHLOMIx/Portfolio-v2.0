"use client"
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import Button from './Button';
import Link from 'next/link';

interface Link {
    text: string
}

const links: Link[] = [
    { text: "home" },
    { text: "about" },
    { text: "projects" }
]

const Navbar = () => {
    const [theLink, setTheLink] = useState<string>('home')
    const [menu, setMenu] = useState<boolean>(false)
    return (
        <div className='bg-alt/40 not-dark:bg-light-alt/40 border z-10 border-stroke not-dark:border-light-stroke backdrop-blur-sm p-2 w-11/12 max-w-6xl m-auto fixed pl-4 flex justify-between rounded-3xl max-md:rounded-2xl max-sm:rounded-xl items-center'>
            <h1 className='font-bold text-font not-dark:text-light-font text-2xl max-md:text-xl max-sm:text-lg'>Chlomi</h1>
            <div className='gap-2 flex max-md:hidden'>
                {links.map((link) => (
                    <a href={`#${link.text}`} key={link.text}>
                        <div onClick={() => setTheLink(link.text)} className={`link ${theLink.includes(link.text) ? "bg-alt2/5 transition duration-1000" : "bg-alt2/0 transition hover:bg-alt2/3 duration-300"} `} key={link.text}>
                            <span>{link.text}</span>
                        </div>
                    </a>
                ))}
                <Button text='Get in touch' />
            </div>
            <div onClick={() => setMenu(!menu)} className='bg-font not-dark:bg-light-font text-alt not-dark:text-light-alt p-3 rounded-2xl max-md:rounded-xl max-sm:rounded-lg md:hidden cursor-pointer relative backdrop-blur-lg'>
                <CiMenuFries className='w-6 h-auto max-sm:w-5' />
                <div className={`${menu ? "" : "hidden"} gap-2 flex flex-col absolute p-2 top-[130%] right-0 rounded-3xl max-md:rounded-2xl max-sm:rounded-2xl bg-bg-alt border border-stroke not-dark:border-light-stroke`}>
                    {links.map((link) => (
                        <a href={`#${link.text}`} key={link.text}>
                            <div onClick={() => setTheLink(link.text)} className={`link text-start ${theLink.includes(link.text) ? "bg-alt2/5 not-dark:bg-light-alt2/5 transition duration-1000" : "bg-alt2/0 transition hover:bg-alt2/3 not-dark:hover:bg-light-alt2/3 duration-300"} `}>
                                <span>{link.text}</span>
                            </div>
                        </a>
                    ))}
                    <button className='px-7 p-3 bg-font not-dark:bg-light-font rounded-2xl text-alt not-dark:text-light-alt font-light w-max max-md:text-sm max-sm:text-xs max-md:rounded-xl max-sm:rounded-lg'>Get in touch</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar