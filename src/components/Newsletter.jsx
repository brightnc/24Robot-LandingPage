import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 ' id='News'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                <button className='bg-gradient-to-r from-[#BBD2C5] to-[#292E49] w-[200px] rounded-md font-medium ml-4 my-6 py-3 text-black'>Notify Me</button>
                </div>
                <p>We care bout the protection of your data. Read our <a className='text-[#00df9a]' href="/">Privacy Policy.</a> </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter