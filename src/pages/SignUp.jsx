import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className='section'>
      <div className="container grid md:grid-cols-2 items-center gap-[129px]">
        <figure className="hidden md:block">
          <img src="/images/signup-banner.png" alt="banner" loading='lazy' />
        </figure>

        <form action="" className='max-w-[371px] mx-auto md:mx-0'>
          <h2>Create an account</h2>
          <p className='mt-[24px] text-gray-500'>Enter your details below</p>
          <div className="border-b-[3px] p-2 mt-10">
            <input type="text" placeholder='Name' className='text-gray-700' />
          </div>
          <div className="border-b-[3px] p-2 my-10">
            <input type="email" placeholder='Email or Phone Number' className='text-gray-700' />
          </div>
          <div className="border-b-[3px] p-2 mb-10">
            <input type="password" placeholder='Password' className='text-gray-700' />
          </div>

          <button className="bg-secondaryClr2 text-center text-white py-3 rounded-sm w-full hover:bg-secondaryClr2/90 transition-colors">Create Account</button>
          <button className="flex border mt-6 w-full justify-center py-4 bg-white hover:bg-gray-50 transition-colors gap-2 items-center">
            <img src="/images/Icon-Google.svg" alt="google logo" />
            <Link to=''>Sign up with Google</Link>
          </button>
          <div className="mt-5 flex justify-center gap-1">
            <p>Already have account?</p>
            <Link to='login'>Log in</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUp