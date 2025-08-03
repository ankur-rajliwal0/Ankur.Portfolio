import React from 'react'

function Subscribe() {
  return (
    <section className='bg-black '>
        <div className="container">
        <div className="flex justify-center flex-col items-center pt-[100px] px-3" data-aos="flip-up">
            <h4 className='lg:text-[40px]  font-popins text-white'>SUBSCRIBE MY NEWSLETTER</h4>
            <div className='border-[1px] lg:w-[600px] h-[70px] px-4 border-[#55E6A5] flex justify-between p-1'>
              <input type="email" placeholder='Enter your email' className='  bg-transparent p-5 outline-none focus:outline focus:outline-2 focus:text-white' />
              <button className='bg-[#55E6A5] text-black font-popins max-lg:px-1 max-lg:text-sm lg:px-4 lg:py-3 lg:max-w-[200px] hover:bg-[#141C27] hover:text-white  transition duration-300 ease-in-out  '>Subscribe Now</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Subscribe
