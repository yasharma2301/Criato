import React from 'react'
import SearchBox from './SearchBox'
import FilterDialog from './FilterDialog'

export default function Filters() {
  return (
    <div className='flex items-center gap-x-4 gap-y-2 flex-wrap my-6'>
        <SearchBox />
        <FilterDialog/>
    </div>
  )
}
