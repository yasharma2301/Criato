import React, { useState } from 'react'
import { useRestaurant } from '../Context/useRestaurants'

import Image from 'next/image'
import Card from './Card';

export default function Cards() {
    // const { restraunts, setRestraunts } = useRestaurant()
    // console.log(restraunts)
    const restaurants = [{ "name": "Purple Martini", "reviews": 123927041, "cuisine": ["North Indian", "Chinese"], "deliveryTimeInMinutes": 26, "costForTwo": 428, "promoted": false, "open": true, "image": "https://b.zmtcdn.com/data/pictures/9/130309/ede93f0fd84236b70bc5f046e03b921a_featured_v2.jpg", "id": "-yJ_uh1sUhaTeo4zZ2nzO" }, { "name": "Britto's Restaurant & Bar", "rating": 4, "reviews": 294891440, "cuisine": ["Desserts", "Drinks"], "deliveryTimeInMinutes": 100, "costForTwo": 4569, "promoted": false, "open": false, "image": "https://b.zmtcdn.com/data/pictures/3/16512333/1cbd58aca0606763252de99898865801_featured_v2.jpg", "id": "G8YlXkJzMLcPzb_OC0ZDu" }, { "name": "Tomato's Beachside Kitchen", "rating": 3, "reviews": 307726994, "cuisine": ["Italian", "Desserts"], "deliveryTimeInMinutes": 11, "costForTwo": 372, "promoted": false, "open": true, "image": "https://b.zmtcdn.com/data/pictures/0/19305830/3a64c51a863148c348fb557b160a1ebf_featured_v2.jpg", "id": "L1SVL3mi3fdc54_k6LyCv" }, { "name": "Olive Bar & Kitchen", "rating": 3, "reviews": 140243728, "cuisine": ["North Indian", "Chinese"], "deliveryTimeInMinutes": 69, "costForTwo": 94, "promoted": true, "open": true, "image": "https://b.zmtcdn.com/data/pictures/1/18678821/ec24d3f2ed14f17b6608d4186f93ade3_featured_v2.jpg", "id": "Q9tjMVM7TR5W9uD9SVz8g" }, { "name": "Yazu - Pan Asian Beach Club", "rating": 1, "reviews": 113901159, "cuisine": ["Japanese", "Chinese"], "deliveryTimeInMinutes": 42, "costForTwo": 2176, "promoted": true, "open": true, "image": "https://b.zmtcdn.com/data/pictures/4/19309524/9e8e3d5bb9b6ba5a782bc63febd218f5_featured_v2.jpg", "id": "NpgywEKcRVAtiBd6L39oD" }, { "name": "Bay 15", "rating": 4, "reviews": 22659372, "cuisine": ["Japanese", "North Indian"], "deliveryTimeInMinutes": 37, "costForTwo": 2635, "promoted": true, "open": true, "image": "https://b.zmtcdn.com/data/pictures/9/16524239/29fd724641727d01a70b1b3fe6306c6e_featured_v2.jpg", "id": "PnfwAg5J7J_HYUE3cEHjM" }, { "name": "Salt Bar And Restaurant With a Very Very Very Long Name Who Received The Award For Longest Named Restaurant In The World", "rating": 3, "reviews": 718028991, "cuisine": ["Drinks", "North Indian"], "deliveryTimeInMinutes": 110, "costForTwo": 3261, "promoted": true, "open": false, "image": "https://b.zmtcdn.com/data/pictures/5/18919365/027f77b9a3736d4845e27e67dcb18280_featured_v2.jpg", "id": "mcGFH_L0AF8hy6RANKh2K" }, { "name": "Martin's Corner", "rating": 2, "reviews": 189945459, "cuisine": ["Italian", "North Indian"], "deliveryTimeInMinutes": 12, "costForTwo": 190, "promoted": false, "open": false, "image": "https://b.zmtcdn.com/data/pictures/chains/8/16519168/6d2acbc3913d3ee1158f75d1bd218e49_featured_v2.jpg", "id": "mrQWldF3KHGLtr4zqsTG8" }, { "name": "Toro Toro", "rating": 4, "reviews": 277916975, "cuisine": ["Japanese", "North Indian", "Italian", "Drinks", "Desserts", "Goan", "Mexican", "European"], "deliveryTimeInMinutes": 95, "costForTwo": 1300, "promoted": false, "open": true, "image": "https://b.zmtcddn.com/data/pictures/4/19309524/9e8e3d5bb9b6ba5a782bc63febddd218f5_featured_v2.jpg", "id": "3neX38e9jD0qHG7XVcYlz" }]

    return (
        <div className='mb-20 custom-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                restaurants.map(restaurant => (
                    <Card key={restaurant.id} restaurant={restaurant}/>
                ))
            }
        </div>
    )
}