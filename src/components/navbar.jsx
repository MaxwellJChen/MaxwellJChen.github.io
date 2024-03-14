import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='p-3 w-screen '>
        <ul className='flex list-none space-x-3 text-lg'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar