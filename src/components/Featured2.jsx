import React from 'react'
import { featuredItems2, featuredItems3 } from '../constant/data'
import { Link } from 'react-router-dom'

const Featured2 = () => {
  return (
    <section>
        <div className="container">
            <p className="border-l-8 px-2 text-secondaryClr2 mb-6 border-secondaryClr2 font-medium">
            Featured
            </p>
            
            <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
                <h2 className="text-2xl font-bold">New Arrival</h2>
            </div>

            <div className='grid gap-3 sm:grid-cols-2'>
                <div>
                    <img src="/images/featured-img-1.png" alt="PlayStation 5" loading='lazy' />
                </div>
                <div className="grid gap-3 ">
                <div className='relative'>
                    <img src="/images/featured-img-2.png" alt="Women’s Collections" loading='lazy' />
                    <Link to='' className='absolute bottom-[6%] left-5 text-xs text-white hover:underline'>Show more</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-[30px]">
                    <div>
                        <img src="/images/featured-img-3.png" alt="Speakers" loading='lazy' />
                    </div>
                    <div>
                        <img src="/images/featured-img-4.png" alt="Perfume" loading='lazy' />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured2