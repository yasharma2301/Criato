import React, { useState } from 'react'
import SortBy from './SortBy'
import CuisineFilter from './CuisineFilter'

const tabs = [
    { name: 'Sort By', component: <SortBy /> },
    { name: 'Cuisines', component: <CuisineFilter /> },
]

export default function FilterTabs({ closeModal }) {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className='flex min-h-full'>
            <div className='flex flex-col bg-zinc-100'>
                {
                    tabs.map((tab, idx) => {
                        return (
                            <div key={`${tab.name}-Tab`} onClick={() => setTabIndex(idx)} className={`${idx === tabIndex ? 'border-red-400' : 'border-transparent'} border-l-8  p-5 hover:bg-zinc-200 cursor-pointer font-semibold tracking-wider text-lg`}>
                                {tab.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full p-5'>
                {
                    tabIndex === 0 ? <SortBy /> : <CuisineFilter />
                }
            </div>
        </div>
    )
}
