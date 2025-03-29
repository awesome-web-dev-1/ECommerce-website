import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
    <div className='bg-black text-white w-full hidden md:block'>
        <div className="container flex items-center">
            <div className="flex items-center py-[15px] mx-auto gap-4">
                <p className='text-neutral-50'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link to='' className='hover:underline'>ShopNow</Link>
            </div>
            <select name="" id="" className='ml-auto text-neutral-50 p-[6px] bg-transparent cursor-pointer'>
                <option value="English">English</option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    </div>
  )
}

export default TopBar