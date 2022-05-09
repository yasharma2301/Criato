import React, { useState } from 'react'

export default function FilterTabs({ closeModal }) {
    const [tab, setTab] = useState(0)

    return (
        <div className='flex'>
            <div className='flex flex-col bg-zinc-100'>
                <div className='p-5 hover:bg-zinc-200 cursor-pointer font-semibold tracking-wider text-lg'>
                    Sort By
                </div>
                <div className='p-5 hover:bg-zinc-200 cursor-pointer font-semibold tracking-wider text-lg'>
                    Cuisines
                </div>
            </div>
            <div className='w-full p-5'>
                Content
            </div>
        </div>
    )
}
