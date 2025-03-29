import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { heroBaners, heroItems } from "../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = ({
  onClick,
  paginationType = "bullets", // 'bullets', 'fraction', 'progressbar'
  showNavigation = false, // Show prev/next arrows
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[250px_minmax(0,1fr)] gap-6">
          
          {/* Categories Sidebar */}
          <aside className="hidden md:block border-r pr-6 pt-8 sticky top-0">
            <h3 className="font-bold text-lg mb-4 px-2">Shop Categories</h3>
            <ul className="space-y-1">
              {heroItems.map(({ id, label, path = "#", dropdown }) => {
                const isActive = openDropdown === id;

                return (
                  <li key={id} className="border-b border-gray-100 last:border-b-0">
                    {dropdown ? (
                      <>
                        <button
                          className="flex justify-between items-center w-full py-3 px-2 hover:text-secondaryClr2 transition-colors"
                          onClick={() => toggleDropdown(id)}
                          aria-expanded={isActive}
                        >
                          <span>{label}</span>
                          {isActive ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
                        </button>

                        <ul
                          className={`pl-4 pb-2 space-y-2 transition-all duration-300 ${
                            isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {dropdown.map(({ path, label }) => (
                            <li key={path}>
                              <Link
                                to={path}
                                className="block py-2 text-sm px-2 rounded hover:text-secondaryClr2 hover:bg-gray-50 transition-colors"
                                onClick={onClick}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={path}
                        className="block py-3 px-2 rounded hover:text-secondaryClr2 hover:bg-gray-50 transition-colors"
                        onClick={onClick}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="relative w-full rounded-xl overflow-hidden mt-5">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true, type: paginationType }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              navigation={showNavigation}
              className="h-[300px] sm:h-[450px] md:h-[550px]"
            >
              {heroBaners.map(({ id, imgUrl, subtitle, title, text, link, path }) => (
                <SwiperSlide key={id}>
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${imgUrl})` }}
                  >
                    <div className="absolute left-4 right-4 md:left-16 top-1/2 -translate-y-1/2 max-w-[500px] bg-white/60 p-6 rounded-xl shadow-lg">
                      <p className="text-sm font-medium text-secondaryClr2 mb-2">{subtitle}</p>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
                      <p className="text-gray-700 mb-6 text-sm md:text-base">{text}</p>
                      <Link
                        to={path}
                        className="inline-block bg-secondaryClr2 hover:bg-secondaryClr1 text-white px-6 py-2 rounded-full transition-all duration-300"
                      >
                        {link}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
