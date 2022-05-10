import React from 'react'
import SearchBox from './SearchBox'
import FilterDialog from './FilterDialog'
import { useRestaurant } from '../../Context/useRestaurants'
import FilterItem from './FilterItem'

export default function Filters() {
  const { searchQuery, removeFromSearch, sortQuery, setSortQuery, cuisines, toggleCuisine } = useRestaurant();

  return (
    <div className='bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-x-4 gap-y-2 flex-wrap py-4 z-10 custom-container'>
        <SearchBox />
        <FilterDialog />
        {
          searchQuery?.map(query => (<FilterItem key={`${query}-search-item`} name={query} onClick={() => removeFromSearch(query)} />))
        }
        {
          sortQuery && (<FilterItem key={`${sortQuery}-sort-item`} name={sortQuery} onClick={() => setSortQuery('')} />)
        }
        {
          cuisines?.map(cuisineItem => (cuisineItem.checked && (<FilterItem key={`${cuisineItem.cuisine}-cuisine-item`} name={cuisineItem.cuisine} onClick={() => toggleCuisine(cuisineItem)}/>)))
        }
      </div>
    </div>

  )
}
