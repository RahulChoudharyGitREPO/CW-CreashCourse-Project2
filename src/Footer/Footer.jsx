import React from 'react'
import logo from './boatlogo.svg'
function Footer() {
    return (
        <div className='main bg-[#e7f0f5] h-[90vh] w-[99%] ml-2 my-5 flex justify-between'>

            <div className='my-5 mt-20 ml-10 space-y-5 logo'>
                <img src={logo} alt="" />
                <h1 className='text-2xl font-medium '>Subscribe to our email alerts!</h1>
                <form className='w-'>
                    <input type="search" id="search" className="block h-6 p-4 text-sm text-gray-900 border border-gray-300 rounded-xl ps-4 w-[80%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Email " required />
                </form>
            </div>
            <div className='my-5 mt-20'>
                <ul className='space-y-4'>
                    <li className='font-bold'>Shop</li>
                    <li className='text-sm font-light'>True Wireless Earbuds</li>
                    <li className='text-sm font-light'>Wired Headphones</li>
                    <li className='text-sm font-light'>Home Audio</li>
                    <li className='text-sm font-light'>Smart Watches</li>
                    <li className='text-sm font-light'>Misfit trimmers</li>
                </ul>
            </div>
            <div className='my-5 mt-20'>
                <ul className='space-y-4'>
                    <li className='font-bold'>Help</li>
                    <li className='text-sm font-light'>True Wireless Earbuds</li>
                    <li className='text-sm font-light'>Wired Headphones</li>
                    <li className='text-sm font-light'>Home Audio</li>
                    <li className='text-sm font-light'>Smart Watches</li>
                    <li className='text-sm font-light'>Misfit trimmers</li>
                </ul>
            </div>
            <div className='my-5 mt-20 mr-10' > <ul className='space-y-4'>
                <li className='font-bold'>Company</li>
                <li className='text-sm font-light'>True Wireless Earbuds</li>
                <li className='text-sm font-light'>Wired Headphones</li>
                <li className='text-sm font-light'>Home Audio</li>
                <li className='text-sm font-light'>Smart Watches</li>
                <li className='text-sm font-light'>Misfit trimmers</li>
                <li className='text-sm font-light'>Security</li>
                <li className='text-sm font-light'>Warrenty Policy</li>


            </ul></div>


        </div>
    )
}

export default Footer
