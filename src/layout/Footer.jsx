import React from 'react'
import { Link } from 'react-router-dom'
import {IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoSend} from 'react-icons/io5'
import { footerItems, footerItems2 } from '../constant/data'

const footerIcons = [
  {
    id:1,
    icon:<IoLogoFacebook size={24} />,
    name:'facebook',
    url:'#'
  },
  {
    id:2,
    icon:<IoLogoTwitter size={24} />,
    name:'twitter',
    url:'#'
  },
  {
    id:3,
    icon:<IoLogoInstagram size={24} />,
    name:'instagram',
    url:'#'
  },
  {
    id:4,
    icon:<IoLogoLinkedin size={24} />,
    name:'linkedin',
    url:'#'
  },
]

const Footer = () => {
  return (
    <footer className='pt-[80px] pb-[30px] bg-neutral-900 text-white'>
      <div className="container grid gap-8 md:grid-cols-[1fr_0.8fr_0.8fr_0.8fr_1fr] sm:grid-cols-2">
        <div className="flex flex-col gap-4 text-neutral-50/80">
          <Link to='' className='text-2xl font-bold max-w-max text-white'>Exclusive</Link>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative max-w-max border py-3 px-4 rounded-[4px]">
            <input type="email" name="" id="" placeholder='Enter your email' /> 
            <IoSend size={20} className='absolute top-0 right-3 h-full' />
          </div>
        </div>

        <div className="text-neutral-50/80">
          <p className='text-xl font-semibold text-white'>Support</p>
          <p className='my-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='my-2'>exclusive@gmail.com</p>
          <a href="" className='hover:text-white transition-colors'>+88015-88888-9999</a>
        </div>

        <div className="text-neutral-50/80">
          <p className="text-xl font-semibold text-white mb-4">Account</p>
          <ul className='grid gap-4'>
            {footerItems.map((item)=>(
              <li key={item.id}>
                <a href="#" className='hover:text-white transition-colors'>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-neutral-50/80">
          <p className="text-xl font-semibold text-white mb-4">Quick Link</p>
          <ul className='grid gap-4'>
            {footerItems2.map((item)=>(
              <li key={item.id}>
                <a href="#" className='hover:text-white transition-colors'>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-neutral-50/80">
          <p className='text-xl font-semibold text-white mb-4'>Download App</p>
          <p>Save $3 with App New User Only</p>
          <div className="flex gap-1 my-2">
            <img src="/images/Qr Code.png" alt="image" width={80} height={80} />
            <div>
              <img src="/images/GooglePlay.png" alt="image" width={110} height={40} />
              <img src="/images/AppStore.png" alt="image" width={110} height={40} />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-5">
            {footerIcons.map((link,index)=>(
              <a 
              key={index}
              href={link.url} 
              className='hover:text-white transition-colors'
              aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-neutral-400/25 my-8"></div>
      <p className='flex items-center justify-center text-neutral-500'> &copy; Copyright Rimel 2025. All right reserved</p>
    </footer>
  )
}

export default Footer