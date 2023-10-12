import React from 'react'
import NavBar from './HeaderComponents/NavBar'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className='text-2xl font-bold text-emerald-800'>Loner's Diary</h1>
        </Link>
        <NavBar />
      </div>
    </header>
  )
}

export default Header