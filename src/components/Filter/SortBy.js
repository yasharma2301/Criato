import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { DELIVERY_EARLIEST, COST_LTH, RATING_HTL } from '../Constants'
import { useRestaurant } from '../../Context/useRestaurants'

export default function SortBy() {
    const { sortQuery, setSortQuery } = useRestaurant();

    const onChange = (value) => setSortQuery(value);

    return (
        <RadioGroup value={sortQuery} onChange={onChange}>
            <RadioGroup.Option value={RATING_HTL}>
                {({ checked }) => (
                    <RadioCard checked={checked} name={RATING_HTL} />
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value={COST_LTH}>
                {({ checked }) => (
                    <RadioCard checked={checked} name={COST_LTH} />
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value={DELIVERY_EARLIEST}>
                {({ checked }) => (
                    <RadioCard checked={checked} name={DELIVERY_EARLIEST} />
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value={''}>
                {({ checked }) => (
                    <RadioCard checked={checked} name={'None'} />
                )}
            </RadioGroup.Option>
        </RadioGroup>
    )
}

function RadioCard({ checked, name }) {
    return (
        <div className={`${checked ? 'bg-red-400 text-white font-bold' : 'text-zinc-400 font-semibold '} border-2 border-zinc-200 tracking-wide text-lg w-full p-4 px-5 my-4 rounded-lg flex gap-x-2 items-center justify-between cursor-pointer`}>
            <div>
                {name}
            </div>
            <div className='w-5 h-5 border-2 border-zinc-200 rounded-xl bg-white flex items-center justify-center'>
                {
                    checked && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )
                }
            </div>
        </div>
    )
}