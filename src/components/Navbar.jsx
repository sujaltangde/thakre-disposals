import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClear } from 'react-icons/md'
import { BiMessageDetail } from 'react-icons/bi'
import { IoIosCall } from 'react-icons/io'
import { BiSolidDirectionRight } from 'react-icons/bi'



export const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <>

            <div className=' fixed w-full bg-white z-10  shadow-xl shadow-gray-300 '>

                <div className='justify-between flex flex-row'>
                    <div className='fixed md:top-5  md:left-8 top-6 left-5'>

                        {
                            toggle ?
                                <MdOutlineClear onClick={() => setToggle(!toggle)} size={26} className='text-black cursor-pointer' />
                                : <FaBars onClick={() => setToggle(!toggle)} size={26} className='text-black cursor-pointer' />
                        }


                    </div>
                    <div className='md:text-3xl text-2xl md:pt-3 pt-5 font-bold py-3 md:pl-28 pl-20 flex justify-center items-center '>
                        <p>Thakre Disposals </p>
                    </div>
                    <ul className='md:flex hidden  flex-row gap-9 text-xl py-3 pr-5'>
                        <Link to='message' className='cursor-pointer hover:text-orange-500 flex flex-row justify-center items-center '>
                            <BiMessageDetail size={25} className='pt-1 ' /> Message</Link>
                        <a target='_blank' href='tel:+917499725139' className='cursor-pointer hover:text-orange-500 flex flex-row justify-center items-center '> <IoIosCall size={25} className='pt-1 ' /> Call Now</a>
                        <Link offset={0} to='contact' className='cursor-pointer hover:text-orange-500 flex flex-row justify-center items-center '> <BiSolidDirectionRight size={25} to='contact' className='pt-1 ' />Get Directions</Link>


                    </ul>
                </div>

            </div>

            <div className={` 
              ${toggle ? "flex" : "hidden"} ease-in fixed left-0 md:top-14 top-12 bg-white  h-screen`}>
                <ul className='flex flex-col font-bold md:w-80 w-56 justify-top items-center md:py-2 md:pt-12 pt-16 md:px-5 gap-16 text-xl shadow-xl shadow-gray-700'>
                    <Link offset={0} to='products' onClick={() => setToggle(!toggle)} className='cursor-pointer hover:text-orange-500' >Products</Link>
                    <Link to='about' offset={0} onClick={() => setToggle(!toggle)} className='cursor-pointer hover:text-orange-500' >About Us</Link>
                    <Link offset={0} to='contact' onClick={() => setToggle(!toggle)} className='cursor-pointer hover:text-orange-500' >Contact Us</Link>
                </ul>
            </div>

            <div className='bg-white upShadow fixed border border-gray-300 border-x-0 border-b-0   z-10 bottom-0 md:hidden flex w-full  '>

                <ul className='flex px-3  flex-row w-full gap-10 justify-center items-center pt-2 pb-3'>
                    <Link offset={0} to='message' className='cursor-pointer hover:text-orange-500 flex flex-col justify-center items-center '>
                        <BiMessageDetail size={25} className='pt-1 ' /> Message</Link>

                    <a target='_blank' href='tel:+917499725139' className='cursor-pointer hover:text-orange-500 flex flex-col justify-center items-center '> <IoIosCall size={25} className='pt-1 ' /> Call Now</a>

                    <Link offset={0} to='contact' className='cursor-pointer hover:text-orange-500 flex flex-col justify-center items-center '> <BiSolidDirectionRight size={25} to='contact' className='pt-1 ' />Location</Link>
                </ul>


            </div>



        </>
    )
}


