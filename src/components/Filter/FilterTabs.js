import React, { useState } from 'react'
import SortBy from './SortBy'
import CuisineFilter from './CuisineFilter'

const tabs = [
    { name: 'Sort By' },
    { name: 'Cuisines' },
]

export default function FilterTabs({ closeModal }) {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className='flex min-h-full flex-col md:flex-row'>
            <div className='flex flex-row md:flex-col bg-zinc-100'>
                {
                    tabs.map((tab, idx) => {
                        return (
                            <div key={`${tab.name}-Tab`} onClick={() => setTabIndex(idx)} className={`${idx === tabIndex ? 'border-red-400' : 'border-transparent'} md:border-l-8 border-b-8 md:border-b-0 p-5 hover:bg-zinc-200 cursor-pointer font-semibold tracking-wider text-lg `}>
                                {tab.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full p-5 flex items-center justify-center'>
                {
                    tabIndex === 0 ? <SortBy /> : <CuisineFilter />
                }
            </div>
        </div>
    )
}
