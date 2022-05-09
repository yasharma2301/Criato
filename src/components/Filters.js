import React from 'react'
import SearchBox from './SearchBox'
import FilterDialog from './FilterDialog'

export default function Filters() {
  return (
    <div className='bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-x-4 gap-y-2 flex-wrap py-4 z-10 custom-container'>
        <SearchBox />
        <FilterDialog />
      </div>
    </div>

  )
}
