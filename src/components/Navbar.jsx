import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import Logo from "../assets/Layer 0.png"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-4'>
        <img className=" h-20 " src={Logo} alt="Logo" />
        <h1 className='w-full text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BBD2C5] to-[#7d3eff]'>24ROBOTRADE</h1>
        
        <ul className='hidden md:flex'>
            <li className='p-4 py-9'>
                <a href='#Home'>Home</a>
            </li>
            <li className='p-4 py-9'>
                <a href='#About'>About</a>
            </li>
            <li className='p-4 py-9'>
                <a href='#Pricing'>Pricing</a>
            </li>
            <li className='p-4 py-9'>
                <a href='#Contact'>Contact</a>
            </li>
            <li className=''>
                <button className='w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black bg-[#00df9a]'>
                    <a href='#News'>Start Trial</a>
                </button>
            </li>
        </ul>
        <div onClick={handleNav}  className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className="h-20 m-4 mb-0" src={Logo} alt="Workflow" />
        
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 border-b border-b-gray-600'>Contact</li>
                <li className='p-4'>Pricing</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar