import React from 'react'
import SearchBox from './SearchBox'
import FilterDialog from './FilterDialog'
import { useRestaurant } from '../../Context/useRestaurants'
import FilterItem from './FilterItem'
import { useState } from 'react'

export default function Filters() {
  const { searchQuery, removeFromSearch, sortQuery, setSortQuery, cuisines, setCuisines, addToSearch } = useRestaurant();

  const [search, setSearch] = useState('')

  const onChange = (e) => setSearch(e.target.value)

  const onClick = () => {
    if (search === '') return;
    addToSearch(search)
    setSearch('');
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  const toggleCuisine = (c) => {
    const cuisine = c.cuisine;
    setCuisines(cuisines.map(item => {
      if (item.cuisine === cuisine) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  }

  return (
    <div className='bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-x-4 gap-y-2 flex-wrap md:py-4 py-2 z-10 custom-container'>
        <SearchBox onChange={onChange} onClick={onClick} onKeyUp={onKeyUp} value={search} placeholder="Search By Name" />
        <FilterDialog />
        {
          searchQuery?.map(query => (<FilterItem key={`${query}-search-item`} name={query} onClick={() => removeFromSearch(query)} />))
        }
        {
          sortQuery && (<FilterItem key={`${sortQuery}-sort-item`} name={sortQuery} onClick={() => setSortQuery('')} />)
        }
        {
          cuisines?.map(cuisineItem => (cuisineItem.checked && (<FilterItem key={`${cuisineItem.cuisine}-cuisine-item`} name={cuisineItem.cuisine} onClick={() => toggleCuisine(cuisineItem)} />)))
        }
      </div>
    </div>

  )
}
