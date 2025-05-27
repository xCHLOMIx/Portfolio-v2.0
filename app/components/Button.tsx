import React from 'react'

interface prop {
    text: string
}

const Button: React.FC<prop> = ({ text }) => {
    return (
        <button className='px-7 p-3 cursor-pointer hover:-translate-y-0.5 hover:translate-x-0.5 transition duration-300 bg-font not-dark:bg-light-font rounded-2xl text-alt not-dark:text-light-alt font-light w-max max-md:text-sm max-sm:text-xs max-md:rounded-xl max-sm:rounded-lg'>{text}</button>
    )
}

export default Button