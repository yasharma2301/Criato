import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='h-14 flex items-center custom-container'>
      <h3 className='text-4xl font-black tracking-wider cursor-pointer select-none italic'>
        <Link href="/">
          Criato
        </Link>
      </h3>
    </div>
  )
}
