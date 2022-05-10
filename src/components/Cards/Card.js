import React, { useState } from 'react'
import Rating from './Rating'

export default function Card({ restaurant }) {
    const [imageError, setImageError] = useState(true)

    return (
        <div className='h-min p-3 bg-white text-black rounded-xl cursor-pointer hover:shadow-lg border border-transparent hover:shadow-zinc-200 hover:border hover:border-zinc-200'>
            <div className='relative'>

                <img className='absolute top-0 w-full h-72 object-cover overflow-hidden rounded-xl'
                    loading="lazy"
                    src={restaurant.image}
                    alt=""
                    onError={e => {
                        if (imageError) {
                            setImageError(false);
                            e.target.src = '/fallback.jpg'
                        }
                    }} />

                <div className='w-full h-72  rounded-xl bg-zinc-200 flex items-center justify-center flex-col gap-1 text-zinc-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                </div>
                {
                    restaurant?.promoted && (
                        <div className='absolute top-3 left-2 bg-yellow-400 p-1 text-white font-bold rounded-lg'>
                            Criato&apos;s Choice
                        </div>
                    )
                }
                {
                    restaurant?.deliveryTimeInMinutes && (
                        <div className='absolute bottom-4 right-2 text-sm bg-zinc-200/[.60] px-2 py-1 text-zinc-800 font-bold rounded-lg border border-gray-300'>
                            {`Delivery: ${restaurant.deliveryTimeInMinutes} min`}
                        </div>
                    )
                }
                {
                    !restaurant.open && (
                        <div className='h-72 absolute top-0 rounded-xl bg-black flex items-center justify-center w-full flex-col gap-1 text-white opacity-70'>
                            <div className='text-2xl font-semibold'>Closed</div>
                        </div>
                    )
                }
            </div>

            <div className='flex items-center justify-between mt-2 gap-8'>
                <div className='font-semibold text-xl text-ellipsis overflow-hidden whitespace-nowrap'>{restaurant.name}</div>
                <Rating rating={restaurant.rating} />
            </div>
            <div className='flex items-center justify-between mt-2 gap-2 text-xl text-zinc-500'>
                <div className='text-ellipsis overflow-hidden whitespace-nowrap'>{restaurant.cuisine.join(', ')}</div>
                <div className='whitespace-nowrap'>{`₹${restaurant.costForTwo} for two`}</div>
            </div>


        </div>
    )
}
