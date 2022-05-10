import React from 'react'
import { useRestaurant } from '../../Context/useRestaurants'
import Card from './Card';

export default function Cards() {
    const { restaurants } = useRestaurant()

    return (
        <div>
            {
                (!restaurants || restaurants?.length == 0) && (
                    <div className='flex flex-col rounded-xl items-center justify-center text-zinc-700 font-medium text-lg my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className='text-center'>Aw! snap<br />Couldn't find anything</div>
                    </div>
                )
            }
            <div className='mb-20 custom-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    restaurants?.map(restaurant => (
                        <Card key={restaurant.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>

    )
}