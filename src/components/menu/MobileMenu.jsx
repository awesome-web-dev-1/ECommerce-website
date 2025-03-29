import React from 'react'
import {  IoCartOutline, IoGridOutline, IoHeartOutline, IoMenuOutline} from 'react-icons/io5'
import { LuHeart } from 'react-icons/lu';
const MobileMenu = ({ onClick }) => {
  return (
    <div className="fixed  bottom-0 flex gap-6 max-w-[300px] bg-white w-full justify-center border-t-2 items-center py-3 rounded-tl-md rounded-tr-md z-20 md:hidden">
        <button className="">
          <IoMenuOutline size={30} />
        </button>
        <button className='relative'>
            <LuHeart className='cursor-pointer hover:text-secondaryClr2' size={30} />
            <div className="h-5 w-5 bg-secondaryClr2 absolute -top-2 -right-2 rounded-full text-white text-[13px] font-semibold">2</div>
        </button>

        <button className='relative'>
            <IoCartOutline size={30} className='hover:text-secondaryClr2' />
            <div className="h-5 w-5 bg-secondaryClr2 absolute -top-2 -right-2 rounded-full text-white text-[13px] font-semibold">1</div>
        </button>
        <button className="" onClick={onClick}>
          <IoGridOutline size={30} />
        </button>
      </div>
  )
}

export default MobileMenu