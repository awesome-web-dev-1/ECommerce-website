import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Catagories from '../components/Catagories'
import BestSelling from '../components/BestSelling'
import MidBanner from '../components/MidBanner'
import OurProducts from '../components/OurProducts'
import Featured2 from '../components/Featured2'
import ServicesSec from '../components/ServicesSec'

const Home = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Catagories />
    <BestSelling />
    <MidBanner />
    <OurProducts />
    <Featured2 />
    <ServicesSec />
    </>
  )
}

export default Home