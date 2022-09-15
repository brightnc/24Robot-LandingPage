import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white' id='Home'>
        <div className="max-w-[800px] mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#BBD2C5] to-[#292E49] font-bold p-2'>GROWING WITH 24ROBOTRADE</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  '>24ROBOTRADE</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={["BTB", "BTC", "SASS"]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button className='bg-gradient-to-r from-[#BBD2C5] to-[#292E49] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero