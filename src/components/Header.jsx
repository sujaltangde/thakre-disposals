import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll';



export const Header = () => {

  const [text, setText] = useState("") ; 

  useEffect(()=>{
    const shopStatus = ()=>{
      const today = new Date().getDay();
    
      if (today === 0) {
        return "Shop is closed today.";
      } else {
        return "Shop is open today from 10 am to 7 pm.";
      }
    }

    setText(shopStatus()) ;



  },[])

  return (
    <>

        <div id="home" className=' pt-16 md:px-32 px-5 '>


                    <div className='md:pt-20 font-bold pt-12 text-center justify-center items-center'>
                      <p className='text-4xl md:text-7xl'>Thakre Disposals</p>
                      <p className='pt-2 ms:px-0 px-5 '>Disposalable items shop in Hudekeshwar road, Nagpur</p>
                   
                      <p>{text}</p>
                      
                      <div className='md:pt-5 pt-2'>
                        <Link to='message' >
                        <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-lg rounded w-1/3 md:w-1/6 py-1 md:py-2 px-4 text-white'>Contact</button>
                        </Link>
                      </div>
          

                    </div>

        <div className='md:pt-14 pt-8 flex justify-center items-center' >
          <img src="/images/banner.jpg" alt="" />
        </div>
                  
        </div>

    </>
  )
}
