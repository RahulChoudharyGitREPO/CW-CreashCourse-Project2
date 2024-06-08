import React from 'react'
import image1 from './1.webp'
import image2 from './2.webp'
import image3 from './3.webp'
import image4 from './4.webp'

function LifyStyle() {
    return (
        <>
            <div className='grid grid-cols-4 gap-4 mb-5 '>
                <div >
                    <img src={image1} alt="" className='pl-5' />

                    <span className='flex justify-center pb-5 ml-5 text-2xl font-bold bg-slate-200 rounded-b-xl'>For Fitness</span>


                </div>
                <div>
                    <img src={image2} alt="" className='pl-5' />
                    <span className='flex justify-center pb-5 ml-5 text-2xl font-bold bg-slate-200 rounded-b-xl'>For Party</span>

                </div>
                <div>
                    <img src={image3} alt="" className='pl-5' />
                    <span className='flex justify-center pb-5 ml-5 text-2xl font-bold bg-slate-200 rounded-b-xl'>For work</span>

                </div>
                <div>
                    <img src={image4} alt="" className='pl-5' />
                    <span className='flex justify-center pb-5 ml-5 text-2xl font-bold bg-slate-200 rounded-b-xl'>For Audiophiles</span>

                </div>



            </div>

        </>


    )
}

export default LifyStyle
