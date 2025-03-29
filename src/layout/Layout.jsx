import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <main className='min-h-[100vh]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout