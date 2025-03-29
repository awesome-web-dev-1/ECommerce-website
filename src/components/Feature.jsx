import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { featuredItems } from '../constant/data';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className='section'>
      <div className="container">
        <p className="border-l-8 px-2 text-secondaryClr2 mb-6 border-secondaryClr2">Today's</p>
        
        <div className="flex flex-col gap-2 md:flex-row md:items-center mb-6">
          <h2>Flash Sales</h2>
          <div className="flex gap-2 md:ml-auto">
            <button className="flash-prev bg-secondaryClr p-2 rounded-full hover:shadow-md transition-shadow">
              <IoArrowBack size={24} strokeWidth={0} />
            </button>
            <button className="flash-next bg-secondaryClr p-2 rounded-full hover:shadow-md transition-shadow">
              <IoArrowForward size={24} strokeWidth={0} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.flash-prev',
            nextEl: '.flash-next',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="feature-swiper"
        >
          {featuredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Link to='' className='bg-secondaryClr2 px-12 py-4 mx-auto max-w-max block text-white hover:bg-secondaryClr2/90 transition-colors my-32'>View All Products</Link>
      </div>
    </section>
  );
};

export default Feature;