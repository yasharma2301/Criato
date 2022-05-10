import React, { useState } from 'react'
import { useRestaurant } from '../../Context/useRestaurants'
import SearchBox from './SearchBox';

export default function CuisineFilter() {
    const { cuisines, setCuisines } = useRestaurant();
    const [cuisineQuery, setCuisineQuery] = useState('')
    const [filteredCuisines, setFilteredCuisines] = useState(cuisines)

    const toggleCuisine = (c) => {
        const cuisine = c.cuisine;
        setCuisines(cuisines.map(item => {
            if (item.cuisine === cuisine) {
                return { ...item, checked: !item.checked };
            }
            return item;
        }));
        setFilteredCuisines(cuisines.map(item => {
            if (item.cuisine === cuisine) {
                return { ...item, checked: !item.checked };
            }
            return item;
        }))
    }

    const onChange = (e) => {
        setCuisineQuery(e.target.value);
        setFilteredCuisines(cuisines.filter(c => c.cuisine.toLowerCase().includes(e.target.value.toLowerCase())))
    };

    return (
        <div className='flex flex-col'>
            <SearchBox placeholder="Filter Cuisines" value={cuisineQuery} onChange={onChange}/>
            <div className='my-3 grid grid-cols-2 gap-5'>
                {
                    filteredCuisines?.map((c) => (
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

        </div>
    )
}