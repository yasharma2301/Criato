import React, { useState } from 'react'

export default function FilterItem({ name }) {
    const [active, setActive] = useState(false)

    const toggleActive = () => setActive(!active)

    return (
        <div onClick={toggleActive} className={`cursor-pointer flex items-center justify-around gap-1 py-2 px-3 rounded-md tracking-wider ${active ? 'bg-purple-400 text-white font-semibold' : 'border font-thin'}`}>
            <div className='text-lg'>{name}</div>
            {
                active && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )
            }
        </div>
    )
}
