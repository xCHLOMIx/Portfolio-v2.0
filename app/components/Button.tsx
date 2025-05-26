import React from 'react'

interface prop {
    text: string
}

const Button: React.FC<prop> = ({ text }) => {
    return (
        <button className='px-7 p-3 cursor-pointer bg-font rounded-2xl text-alt font-light w-max max-md:text-sm max-sm:text-xs max-md:rounded-xl max-sm:rounded-lg'>{text}</button>
    )
}

export default Button