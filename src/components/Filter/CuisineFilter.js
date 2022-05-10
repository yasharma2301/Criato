import React from 'react'
import { useRestaurant } from '../../Context/useRestaurants'

export default function CuisineFilter() {
    const { cuisines, toggleCuisine } = useRestaurant();

    return (
        <div className='my-3 grid grid-cols-2 gap-5'>
            {
                cuisines?.map((c) => (
                    <label key={`${c.cuisine}-Cusine`} className='inline-flex items-center text-xl text-zinc-500' htmlFor={`${c.cuisine}-Cusine`}>
                        <input checked={c.checked} onChange={() => toggleCuisine(c)} type='checkbox' className='hidden' name={c.cuisine} id={`${c.cuisine}-Cusine`} />
                        <div className={`w-6 h-6 border-2 rounded-xl flex items-center justify-center mr-3 shrink-0 ${c.checked ? 'bg-red-400 border-red-400' : 'border-zinc-300'}`}>
                            {
                                c.checked && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )
                            }
                        </div>
                        {c.cuisine}
                    </label>
                ))
            }
        </div>
    )
}