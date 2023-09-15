import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-4 bg-pink-50 py-10'>
        <div className='text-center'>
            <a href="/">
            <h1 className='text-3xl uppercase fw-bold'>BLINGG</h1>
            <p>jewelry store</p>
            </a>
        </div>
        <div className='flex justify-center'>
            
            <div className=''>
            <h4 className='text-2xl uppercase mb-5'>About us</h4>
            <ul>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Home</a></li>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>About</a></li>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Contact</a></li>

            </ul>
            </div>
        </div>
        <div className='flex justify-center'>
            <div>
            <h4 className='text-2xl uppercase mb-5'>shop</h4>
            <ul>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Rings</a></li>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Bracelets</a></li>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Earrings</a></li>
                <li className='my-2'><a href="/" className='transition-all duration-75 hover:text-pink-300 '>Necklaces</a></li>

            </ul>
            </div>
        </div>
        <div className='flex justify-center'>
            <div>
                <h4 className='text-2xl uppercase mb-5'>ADDRESS</h4>
                <ul>
                    <li className='my-1'>123 Fifth Avenue, New York,</li>
                    <li className='my-1'>NY 10160</li>
                    <li className='my-1'>contact@info.com</li>
                    <li className='my-1'>929-242-6868</li>
                </ul>
            </div>
        </div>
        <div className='col-span-4 text-center border-t-[1px] border-stone-300 mt-5'>
            <p className='py-3 text-stone-400'>Copyright © 2023 Blingg Jewelry | Powered by Blingg Jewelry</p>
        </div>
    </div>
  )
}

export default Footer