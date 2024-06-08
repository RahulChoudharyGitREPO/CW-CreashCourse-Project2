import Boat1 from './1.webp'
import Boat2 from './2.webp'
import Boat3 from './3.webp'
import Boat4 from './4.webp'

function BestOFBoat() {
    return (
        <>
            <h1 className='mt-10 text-2xl ml-7'>Best Of <span className='mt-10 text-2xl font-bold'> Boat</span> </h1>
            <div className='flex items-center justify-start p-5 ml-3 space-x-20'>
                <div className='cursor-pointer text-[#1A2024] font-semibold bg-slate-300 p-2 rounded-3xl px-5'><h1>Best Sellers</h1></div>
                <div className='cursor-pointer'>Home Theatre System and SoundBar</div>
                <div className='cursor-pointer'>Top EarBuds</div>
                <div className='cursor-pointer'>Top Watches</div>

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

export default BestOFBoat
