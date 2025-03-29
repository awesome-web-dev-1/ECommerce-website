import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { navItems } from '../constant/data'
import {  IoCartOutline, IoHeart, IoMenu, IoSearch} from 'react-icons/io5'
import { LuHeart } from 'react-icons/lu';
const Header = () => {
  return (
    <header className='pt-[40px] pb-[23px] border-b '>
      <div className="container flex items-center justify-between">
        <Link to='/' className='font-bold text-2xl'>Exclusive</Link>
      <ul className='gap-12 hidden md:flex'>
        {navItems.map((item)=>(
          <li key={item.id}>
            <NavLink className={({isActive }) =>`hover:text-secondaryClr2 duration-200 ${isActive ? "text-secondaryClr2": null}`} to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>

      <div className="md:items-center md:gap-6 hidden md:flex">
        <div className="relative bg-gray-50 h-[38px] px-5 rounded-[4px]">
          <input type="search" name="" id="" placeholder='What are you looking for?' className='h-full' />
          <IoSearch className='absolute top-1/2 right-2 -translate-y-1/2' size={20}   />
        </div>
        <div className="flex gap-4">
          <button>
            <LuHeart className='cursor-pointer hover:text-secondaryClr2' size={24} />
          </button>

          <button className='relative'>
            <IoCartOutline size={24} className='hover:text-secondaryClr2' />
            <div className="h-5 w-5 bg-secondaryClr2 absolute -top-2 -right-2 rounded-full text-white text-[13px] font-semibold">1</div>
          </button>
        </div>
      </div>

      <button className="md:hidden">
        <IoMenu size={30} />
      </button>

      </div>
    </header>
  )
}

export default Header