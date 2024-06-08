import boatlogo from './BoatLogo.png'
import { Route, Routes, Link } from 'react-router-dom'
import Categories from '../Routes/Categories'
import BoatPresonalisation from '../Routes/BoatPresonalisation'
import GiftWithBoat from '../Routes/GiftWithBoat'
import Corporate from '../Routes/Corporate'
import More from '../Routes/More'
import { GrUserAdmin } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";



function Navbar() {

    return (
        <>
            <div className='mx-[7vw]  flex flex-col md:flex-row justify-around items-center '>
                <div className="flex items-center justify-center left">
                    <div className='w-full md:w-full'>
                        <Link to='/'>
                            <img src={boatlogo} alt="" className='w-20 h-12 mr-4 ' />
                        </Link>

                    </div>

                    <div className='w-[50vw] text-lg md:flex-shrink  mx-0 space-x-4  '>
                        <Link to='Categories'>Categories</Link>
                        <Link to='GiftWithBoat'>GiftWithBoat</Link>
                        <Link to='BoatPresonalisation'>BoatPresonalisation</Link>
                        <Link to='Corporate'>Corporate</Link>
                        <Link to='More'>More</Link>

                    </div>


                    <Routes>
                        <Route path='/Categories' element={<Categories />} />
                        <Route path='/BoatPresonalisation' element={<BoatPresonalisation />} />
                        <Route path='/GiftWithBoat ' element={<GiftWithBoat />} />
                        <Route path='/Corporate' element={<Corporate />} />
                        <Route path='/More' element={<More />} />

                    </Routes>

                </div>
                <div className="flex items-center justify-center ml-10 right w-[100%] ">
                    <form className='w-[100%]'>



                        <input type="search" id="search" className="block p-4 text-sm text-gray-900 border border-gray-300 rounded-[40px] h-6 w-[90%] ps-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for Products" required />


                    </form>
                    <div className='flex justify-evenly '>
                        <div className='mr-8'>
                            <GrUserAdmin className='cursor-pointer icon' style={{ height: '70px' }} />

                        </div>
                        <div>
                            <IoBagHandleOutline className='mr-10 cursor-pointer' style={{ height: '70px' }} />

                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}


export default Navbar
