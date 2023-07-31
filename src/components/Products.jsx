import React from 'react'
import ProData from './ProData.json'


export const Products = () => {
    return (
        <>

            <div id="products" className=' pt-16 md:px-32 px-5 '>
                <div className='border border-gray-500 border-x-0 border-b-0 mx-14 md:mx-44'></div>
                <div className='md:pt-6 pt-4'>
                    <div className='py-3'>
                        <p className='text-center pb-5 md:pb-8 font-bold text-3xl'>Our Products</p>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4   justify-items-center '>

                            {
                                ProData.map((e,i) => (
                                    <div key={i} className='md:w-92 md:h-80 w-72 h-92 shadow-lg shadow-gray-400 my-4 flex rounded-md  flex-col justify-center items-center '>
                                        <img src={e.image} className='object-cover rounded-md w-full md:h-full h-80' alt="" />
                                        <p className='font-bold text-xl pt-5 pb-2'>{e.name}</p>
                                    </div>
                                ))
                            }


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
