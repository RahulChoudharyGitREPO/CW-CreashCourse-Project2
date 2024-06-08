import Boat1 from './1.webp'
import Boat2 from './2.webp'
import Boat3 from './3.webp'
import Boat4 from './3.webp'

function TopPicks() {
    return (
        <>
            <h1 className='mt-10 text-2xl ml-7'>Top Picks <span className='mt-10 text-2xl font-bold'> For You</span> </h1>
            <div className='flex items-center justify-start p-5 ml-3 space-x-20'>
                <div className='cursor-pointer text-[#1A2024] font-semibold bg-slate-300 p-2 rounded-3xl px-3'><h1>New Launches</h1></div>
                <div className='cursor-pointer'>Personalization</div>
                <div className='cursor-pointer'>Recently viewed</div>
            </div>
            <div className='grid items-center grid-cols-4 gap-20 pl-5 pr-5 mt-10 mb-5 justify-evenly' >
                <div className='bg-[#e9e9e9] rounded-xl pb-5 '>
                    <img src={Boat1} alt="" className=' rounded-t-xl' />
                    <div className='flex justify-around'>
                        <div className='mt-3'>
                            <span className='text-sm font-medium'>Niravana Lon</span>
                            <h1 className='text-sm font-medium'>Rs : 1999</h1>
                        </div>
                        <button className='h-10 mt-5 font-medium text-white bg-black rounded-lg w-28'>Add To Cart</button>

                    </div>
                </div>

                <div className='bg-[#e9e9e9] rounded-xl pb-5 '>
                    <img src={Boat2} alt="" className=' rounded-t-xl' />
                    <div className='flex justify-around'>
                        <div className='mt-3'>
                            <span className='text-sm font-medium'>Niravana Lon</span>
                            <h1 className='text-sm font-medium'>Rs : 1999</h1>
                        </div>
                        <button className='h-10 mt-5 font-medium text-white bg-black rounded-lg w-28'>Add To Cart</button>

                    </div>
                </div>
                <div className='bg-[#e9e9e9] rounded-xl pb-5 '>
                    <img src={Boat3} alt="" className=' rounded-t-xl' />
                    <div className='flex justify-around'>
                        <div className='mt-3'>
                            <span className='text-sm font-medium'>Niravana Lon</span>
                            <h1 className='text-sm font-medium'>Rs : 1999</h1>
                        </div>
                        <button className='h-10 mt-5 font-medium text-white bg-black rounded-lg w-28'>Add To Cart</button>

                    </div>
                </div>

                <div className='bg-[#e9e9e9] rounded-xl pb-5 '>
                    <img src={Boat4} alt="" className=' rounded-t-xl' />
                    <div className='flex justify-around'>
                        <div className='mt-3'>
                            <span className='text-sm font-medium'>Niravana Lon</span>
                            <h1 className='text-sm font-medium'>Rs : 1999</h1>
                        </div>
                        <button className='h-10 mt-5 font-medium text-white bg-black rounded-lg w-28'>Add To Cart</button>

                    </div>
                </div>

            </div>


        </>
    )
}

export default TopPicks
