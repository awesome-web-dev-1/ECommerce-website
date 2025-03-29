import React from 'react';
import { IoCartOutline, IoEyeOutline, IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'
import { LuHeart } from 'react-icons/lu';

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} filled />);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<Star key="half" half />);
  }

  // Empty stars
  const remaining = 5 - stars.length;
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`empty-${i}`} />);
  }

  return stars;
};

const Star = ({ filled, half }) => {
  if (filled) return <IoStar size={20} className="text-[#FFAD33]" />;
  if (half) return <IoStarHalf size={20} className="text-[#FFAD33]" />;
  return <IoStarOutline size={20} className="text-[#FFAD33]" />;
};

const Card = ({ id, name, price, prevPrice, badge, imgUrl, rate, width, height }) => {
  return (
    <div className='mt-[60px] group'>
      <div className="bg-secondaryClr relative p-10 overflow-hidden">
        <img 
          src={imgUrl} 
          alt={name} 
          className="w-full h-auto object-contain aspect-square"
        />
        {badge && (
          <p className='absolute top-3 left-3 bg-secondaryClr2 text-white py-1 px-2 rounded-lg text-sm'>
            {badge}
          </p>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <LuHeart className='cursor-pointer hover:text-secondaryClr2 focus:text-secondaryClr2' size={24} />
          <IoEyeOutline className='cursor-pointer hover:text-secondaryClr2 focus:text-secondaryClr2' size={24} />
        </div>
        <button className="absolute top-[75px] right-3 rounded-full cursor-pointer hover:text-secondaryClr2 focus:text-secondaryClr2">
          <IoCartOutline size={24} />
          </button>
      </div>
      <div className="mt-4">
        <p className='text-neutral-900 font-medium'>{name}</p>
        <div className="flex items-center gap-2 my-1">
          <span className='text-secondaryClr2 font-semibold'>{price}</span>
          {prevPrice && <del className='text-gray-500 text-sm'>{prevPrice}</del>}
        </div>
        <div className="flex items-center gap-1">
          {renderStars(rate)}
          <span className="text-gray-500 text-sm ml-1">({rate})</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);