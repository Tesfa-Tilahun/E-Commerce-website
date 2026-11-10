import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="logo" className="w-36 h-auto block" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer block' />

        <div className='group relative block'>
          <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='hover:text-black'>My Profile</p>
              <p className='hover:text-black'>Orders</p>
              <p className='hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className='relative block'>
          <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] top-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>0</p>
        </Link>

        <button type="button" onClick={() => setVisible(true)} className='sm:hidden p-0 bg-transparent border-0'>
          <img src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer' />
        </button>
      </div>

      <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 sm:hidden ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex items-center gap-3 h-14 px-4 border-b border-gray-200 bg-[#dfece8] text-gray-700'>
          <button type="button" onClick={() => setVisible(false)} className='flex items-center gap-2 bg-transparent border-0 p-0 text-base font-medium'>
            <span className='text-xl leading-none'>←</span>
            <span>Back</span>
          </button>
        </div>

        <nav className='flex flex-col bg-white'>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 text-lg font-medium uppercase text-gray-800' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 text-lg font-medium uppercase text-gray-800' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 text-lg font-medium uppercase text-gray-800' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 text-lg font-medium uppercase text-gray-800' to='/contact'>CONTACT</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
