import React from 'react';
import { 
  IoArrowBack, 
  IoArrowForward, 
  IoPhonePortrait, 
  IoLaptop, 
  IoWatch,
  IoGameController,
  IoHeadset,
  IoTv,
  IoCamera,
  IoHome
} from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { id: 1, Icon: IoPhonePortrait, name: 'Phones' },
  { id: 2, Icon: IoLaptop, name: 'Laptops' },
  { id: 3, Icon: IoWatch, name: 'Watches' },
  { id: 4, Icon: IoGameController, name: 'Gaming' },
  { id: 5, Icon: IoHeadset, name: 'Audio' },
  { id: 6, Icon: IoTv, name: 'TVs' },
  { id: 7, Icon: IoCamera, name: 'Cameras' },
  { id: 8, Icon: IoHome, name: 'Home' },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <p className="border-l-8 px-2 text-secondaryClr2 mb-6 border-secondaryClr2 font-medium">
          Categories
        </p>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex gap-2 md:ml-auto">
            <button 
              className="cat-prev bg-secondaryClr p-2 rounded-full hover:shadow-md transition-all hover:bg-secondaryClr2 hover:text-white"
              aria-label="Previous categories"
            >
              <IoArrowBack size={24} />
            </button>
            <button 
              className="cat-next bg-secondaryClr p-2 rounded-full hover:shadow-md transition-all hover:bg-secondaryClr2 hover:text-white"
              aria-label="Next categories"
            >
              <IoArrowForward size={24} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.cat-prev',
            nextEl: '.cat-next',
          }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
          className="categories-swiper"
        >
          {categories.map(({ id, Icon, name }) => (
            <SwiperSlide key={id} className='pb-10'>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-secondaryClr2 transition-all cursor-pointer group">
                <div className="p-4 bg-gray-100 rounded-full group-hover:bg-secondaryClr2 group-hover:text-white transition-all mb-3">
                  <Icon size={32} />
                </div>
                <span className="text-sm font-medium text-center">{name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;