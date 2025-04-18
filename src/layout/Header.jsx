import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { navItems } from '../constant/data'
import {  IoCartOutline,  IoSearch} from 'react-icons/io5'
import { LuHeart } from 'react-icons/lu';
import MobileMenu from '../components/menu/MobileMenu';
import Menu from '../components/menu/Menu';
import Overlay from '../components/menu/Overlay';
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  const handleMenu = function(){
    setMenuOpen(prev => !prev)
  }
  return (
    <header className='pt-[40px] pb-[23px] w-full border-b '>
      <div className="container relative flex items-center justify-between flex-wrap gap-2">
        <Link to='/' className='font-bold text-2xl'>Exclusive</Link>
        <ul className='gap-12 hidden md:flex'>
          {navItems.map((item)=>(
            <li key={item.id}>
              <NavLink className={({isActive }) =>`hover:text-secondaryClr2 duration-200 ${isActive ? "text-secondaryClr2": null}`} to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
          <div className="relative bg-gray-50 h-[48px] px-5 rounded-[4px] w-full max-w-[400px] focus:border focus:border-secondaryClr2 ring-1 ring-neutral-700/50">
          <input type="search" name="" id="" placeholder='What are you looking for?' className='h-full' />
          <IoSearch className='absolute top-1/2 right-2 -translate-y-1/2' size={20}   />
        </div>
      <div className="md:items-center md:gap-6 hidden md:block">
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
      
      <Menu onClick={handleMenu} isOpen={menuOpen} />
      <Overlay onClick={handleMenu} isOpen={menuOpen}/>
      <MobileMenu onClick={handleMenu} isOpen={menuOpen}/>
      
     
      </div>
    </header>
  )
}

export default Header