import Boat1 from './Boat1.webp'
import Boat2 from './boat2.webp'
import Boat3 from './boat3.webp'
import Boat4 from './boat4.webp'

function Ipl() {
    return (
        <>
            <h1 className='mt-10 text-2xl ml-7'>Boat <span className='mt-10 text-2xl font-bold'> X IPL</span> </h1>
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

export default Ipl
