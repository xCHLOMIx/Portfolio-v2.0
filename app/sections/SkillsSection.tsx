import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa6";
import { RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';

interface Skill {
    icon: any,
    text: string
}

const skills: Skill[] = [
    { icon: <FaFigma className='w-6 h-auto max-md:w-5' />, text: "Figma" },
    { icon: <FaHtml5 className='w-6 h-auto max-md:w-5' />, text: "HTML" },
    { icon: <FaCss3 className='w-6 h-auto max-md:w-5' />, text: "CSS" },
    { icon: <FaJs className='w-6 h-auto max-md:w-5' />, text: "Javascript" },
    { icon: <FaPython className='w-6 h-auto max-md:w-5' />, text: "Python" },
    { icon: <FaReact className='w-6 h-auto max-md:w-5' />, text: "React" },
    { icon: <RiNextjsLine className='w-6 h-auto max-md:w-5' />, text: "NextJS" },
    { icon: <FaNodeJs className='w-6 h-auto max-md:w-5' />, text: "NodeJS" },
    { icon: <SiExpress className='w-6 h-auto max-md:w-5' />, text: "Express" },
    { icon: <SiMongodb className='w-6 h-auto max-md:w-5' />, text: "MongoDB" },
    { icon: <FaPhp className='w-6 h-auto max-md:w-5' />, text: "PHP" },
    { icon: <FaLaravel className='w-6 h-auto max-md:w-5' />, text: "Laravel" },
    { icon: <FaReact className='w-6 h-auto max-md:w-5' />, text: "Django" },
]

const SkillsSection = () => {
    return (
        <div className='w-full flex flex-col items-center gap-16 max-md:gap-14 max-sm:gap-10 justify-center'>
            <h1 className='text-3xl max-md:text-2xl max-sm:text-xl text-font not-dark:text-light-font font-semibold'>Skills</h1>
            <div className='w-full flex max-w-4xl gap-3 max-md:gap-2 max-sm:gap-1 flex-wrap justify-center'>
                {skills.map((skill) => (
                    <div key={skill.text} className='text-font max-md:text-sm max-sm:text-xs w-max not-dark:text-light-font rounded-2xl max-md:rounded-xl max-sm:rounded-lg border border-stroke not-dark:border-light-stroke px-4 bg-alt4 not-dark:bg-light-alt4 p-3 max-md:p-2 max-md:px-3 max-sm:p-1.5 max-sm:px-2 flex items-center gap-2'>
                        {skill.icon}
                        {skill.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection