import React, { useState } from 'react'

export default function Filter({ name }) {
    return (
        <div className={`cursor-pointer flex items-center justify-around gap-x-2 py-2 px-3 rounded-md tracking-wider border font-thin hover:bg-zinc-100`}>
            <div className='px-2 rounded-md bg-red-400 text-white font-semibold'>1</div>
            <div className='text-lg'>{name}</div>
        </div>
    )
}
