import React from 'react'
import { servicesSecItems } from '../constant/data'

const ServicesSec = () => {
  return (
    <section className='py-[140px]'>
        <div className="container grid gap-[50px] sm:grid-cols-3">
            {servicesSecItems.map((item)=>(
                <div className="text-center">
                    <div className="w-[80px] h-[80px] bg-gray-400 grid place-content-center rounded-full mx-auto">
                        <img src={item.icon} alt={item.title} className='bg-black rounded-full p-2' />
                    </div>
                    <div className="mt-4">
                        <h4 className='mb-1 text-[20px]'>{item.title}</h4>
                        <p className='text-gray-600'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ServicesSec