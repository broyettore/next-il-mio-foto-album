import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
        <ul className='flex items-center'>
          <li>
            <Link href="/photos" className='text-emerald-800 font-semibold mx-3'>Gallery</Link>
          </li>
          <li>
            <Link href="https://localhost:7085/Identity/Account/Register" className='text-emerald-800 font-semibold mx-3'>Register</Link>
          </li>
          <li>
            <Link href="https://localhost:7085/Identity/Account/Login" className='text-emerald-800 font-semibold mx-3'>Login</Link>
          </li>
          <li>
          <button className="btn btn-outline btn-primary ms-3">Dark <FontAwesomeIcon icon={faMoon} /></button>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar