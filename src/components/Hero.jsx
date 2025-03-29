import React from 'react'
import { heroItems } from '../constant/data'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section>
        <div className="container grid
         lg:gap-[60px] md:grid-cols-[217px_auto]">
            <div className='mt-6 md:mt-[40px] md:order-2'>
            <img src="/images/hero-banner.png" alt="" /></div>
            
            <ul className="flex gap-4 flex-col pt-[40px] md:border-r">
                {heroItems.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Hero