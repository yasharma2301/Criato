import React from 'react'

export default function FilterItem({ name, onClick }) {
    return (
        <div onClick={onClick} className={`cursor-pointer flex items-center justify-around gap-1 py-3 px-3 rounded-md tracking-wider bg-red-400 text-white font-semibold'}`}>
            <div className='text-lg'>{name}</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    )
}
