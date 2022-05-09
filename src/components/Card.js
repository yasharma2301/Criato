import React from 'react'
import Rating from './Rating'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Card({ restaurant }) {
    return (
        <div className='h-min p-3 bg-white text-black rounded-xl cursor-pointer hover:shadow-lg border border-transparent hover:shadow-zinc-200 hover:border hover:border-zinc-200'>

            <div className='relative'>
                <div className='h-72 absolute top-0 rounded-xl bg-zinc-200 flex items-center justify-center w-full flex-col gap-1 text-zinc-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <div>No image available</div>
                </div>
                <LazyLoadImage
                    effect='blur'
                    className='w-max h-72 object-cover overflow-hidden rounded-xl'
                    placeholderSrc={'../../public/alt-image-building.png'}
                    alt="Restraunt Image"
                    src={restaurant.image}>
                </LazyLoadImage>
                {
                    !restaurant.open && (
                        <div className='h-72 absolute top-0 rounded-xl bg-black flex items-center justify-center w-full flex-col gap-1 text-white opacity-70'>
                            <div className='text-2xl font-semibold'>Closed Now</div>
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
