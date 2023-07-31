import React from 'react'

export const Contact = () => {

    const businessHours = [
        { day: 'Mon', hours: '10:00 AM - 7:00 PM' },
        { day: 'Tue', hours: '10:00 AM - 7:00 PM' },
        { day: 'Wed', hours: '10:00 AM - 7:00 PM' },
        { day: 'Thu', hours: '10:00 AM - 7:00 PM' },
        { day: 'Fri', hours: '10:00 AM - 7:00 PM' },
        { day: 'Sat', hours: '10:00 AM - 7:00 PM' },
        { day: 'Sun', hours: 'Closed' }
    ]

    return (
        <>

            <div id="contact" className=' pt-16 md:px-32 px-5 '>
            <div className='border border-gray-500 border-x-0 border-b-0 mx-14 md:mx-44'></div>

                <div>
                    <div className=''>
                        <div className='py-3'>
                            <p className='text-center pb-5 md:pb-8 font-bold text-3xl'>Contact Us</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <a target='_blank' href="https://www.google.com/maps/place/Chandrakiran+Nagar,+Nagpur,+Maharashtra+440024/data=!4m6!3m5!1s0x3bd4b8c56220f809:0xd5421fc29fa504df!7e2!8m2!3d21.0901849!4d79.12109679999999?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjYyLjYwNBgAIIgnKgBCAklO">
                            <img src="/images/map.PNG" alt="" />
                        </a>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-3 grid-cols-1 px-0 md:px-7 md:pt-16 pt-6 pb-12'>
                            <div className=''>
                                <p className='text-2xl font-bold pb-6'>Contact</p>
                                <a target='_blank' href="tel:+917499725139">
                                    <button className='bg-gradient-to-r from-orange-400 to-orange-600 rounded text-white px-8 py-3 text-xl'>Call Now</button>
                                </a>
                                <p className='pt-3 text-2xl'>+91 7499725139</p>
                                <p className='pt-3 text-xl'>sumeetthakre20@gmail.com</p>
                            </div>
                            <div className='md:pt-0 pt-8'>
                                <p className='text-2xl font-bold pb-6'>Address</p>
                                <a target='_blank' href="https://www.google.com/maps/place/Chandrakiran+Nagar,+Nagpur,+Maharashtra+440024/data=!4m6!3m5!1s0x3bd4b8c56220f809:0xd5421fc29fa504df!7e2!8m2!3d21.0901849!4d79.12109679999999?utm_source=mstt_1&entry=gps&g_ep=CAESCTExLjYyLjYwNBgAIIgnKgBCAklO">
                                    <button className='bg-gradient-to-r from-orange-400 to-orange-600 rounded text-white px-8 py-3 text-xl'>Get Directions</button>
                                </a>
                                <p className='pt-3 text-xl'>Plot no. 3, Pawar Nagar, Hudkeshwar Road, Nagpur, Maharashtra, India</p>
                            </div>

                            <div className='md:pl-24 md:pt-0 pt-8'>
                                <p className='text-2xl font-bold pb-6'>Business Hours</p>
                                <div className='flex'>
                                    <ul className='text-left pr-2 text-lg'>
                                        {
                                            businessHours.map((e, i) => (
                                                <li key={i}>{e.day} : </li>
                                            ))
                                        }

                                    </ul>
                                    <ul className='text-left text-lg'>
                                        {
                                            businessHours.map((e, i) => (
                                                <li key={i}> {e.hours}</li>
                                            ))
                                        }

                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div id='message'>
                        <p className='pb-5 text-center font-bold text-2xl' >Get in Touch with Us</p>
                        <form className='flex items-center w-full gap-6 flex-col' method="POST" action="https://getform.io/f/f477cf57-2fbf-46eb-84b6-28c8be2278ca">
                            <input name='name' type="text" id="email" aria-describedby="helper-text-explanation" class=" p-2 bg-transparent border-2 border-gray-400 rounded-md text-black focus:outline-none md:w-2/3 w-full " placeholder="Enter your name"></input>
                            <input name='email' id="email" aria-describedby="helper-text-explanation" class=" p-2 bg-transparent border-2 rounded-md border-gray-400 text-black focus:outline-none md:w-2/3 w-full " placeholder="Enter your email"></input>

                            <textarea name='message' id="message" rows="4" class=" p-2 bg-transparent border-2 rounded-md text-black focus:outline-none md:w-2/3 w-full border-gray-400 " placeholder="Leave a message"></textarea>
                            <button type='submit' className=' group bg-gradient-to-r from-orange-400 to-orange-600 rounded   py-2 px-7 text-white flex-row flex text-xl' >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}
