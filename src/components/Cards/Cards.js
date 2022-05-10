import React, { useState } from 'react'
import { useRestaurant } from '../../Context/useRestaurants'
import Card from './Card';

export default function Cards() {
    const { restaurants } = useRestaurant()

    return (
        <div className='mb-20 custom-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                restaurants?.map(restaurant => (
                    <Card key={restaurant.id} restaurant={restaurant} />
                ))
            }
        </div>
    )
}