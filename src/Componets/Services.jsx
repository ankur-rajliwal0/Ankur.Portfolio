import React from 'react'
import responsiveIcon from "../Assets/Images/Svg/responsive-device-svgrepo-com (1).svg"
import BackendIcon from "../Assets/Images/Svg/api-svgrepo-com.svg"
import FrontEndIcon from "../Assets/Images/Svg/shapes-triangle-svgrepo-com.svg"

function Services() {
  return (
    <section id='services' className='bg-[#02050a]  '>
      <div className="container lg:pb-[170px]">
        
       <div className="flex justify-center items-center flex-col gap-5">
         <h3 className=' w-[170px] pt-[150px] text-[20px] text-[#55E6A5] font-popins text-center ' data-aos="zoom-in">My Services</h3>
         <h2 className='text-white lg:text-[45px] max-md:text-[35px] font-popins font-bold max-w-[650px] text-center' data-aos="zoom-in" >Where Design Meets Functionality.</h2>
       </div> 

       {/* Responsive Design Col */}
        <div className="flex flex-row flex-wrap items-center mx-[-12px] lg:pt-[120px] sm:pt-[100px] pt-[50px] max-md:gap-10">

          {/* Row 1 */}
          <div className=" w-4/12 max-lg:w-6/12 px-3 max-md:w-full " data-aos="flip-"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className='border-[1px] border-gray-600 p-6 relative hover:scale-105 transition duration-300 hover:border-[#55E6A5] hover:bg-[#09101a81] hover:border-2 '>
              <img src={responsiveIcon} alt="responsive icon" className='absolute top-[-20px] w-[40px] left-[50%] translate-x-[-50%] bg-black ' />
             <h5 className='text-white font-popins text-center mt-8 text-[20px]'> Responsive Website </h5>
             <p className=' text-gray-500 text-center mt-3  font-popins'>I specialize in building fast, fully responsive websites that provide a seamless experience across desktops, tablets, and mobile devices. Using technologies like HTML5, CSS3, JavaScript, and frameworks such as React.js and Tailwind CSS, I ensure each website is clean, optimized, and user-friendly</p>
            </div>
          </div>
         
         {/* Row 2 */}
            <div className=" w-4/12 px-3 max-lg:w-6/12 max-md:w-full" data-aos="zoom-in">
            <div className='border-[1px] border-gray-600 p-6 relative hover:scale-105 transition duration-300 hover:border-[#55E6A5] hover:bg-[#09101a81] hover:border-2 '>
              <img src={BackendIcon} alt="responsive icon" className='absolute top-[-20px] w-[40px] left-[50%] translate-x-[-50%] bg-black ' />
             <h5 className='text-white font-popins text-center mt-8 text-[20px]'>  Backend  & API Handling </h5>
             <p className=' text-gray-500 text-center mt-3  font-popins'>I develop and integrate powerful backend systems using Node.js, Express.js, and MongoDB, enabling websites to handle user data, authentication, product listings, form submissions, and more. I also work with REST APIs and third-party services to bring real-time functionality to the frontend</p>
            </div>
          </div>

          {/* Row 3 */}
            <div className="w-4/12 px-3 max-lg:w-6/12 max-lg:mt-5 max-md:w-full" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className='border-[1px] border-gray-600 p-6 relative hover:scale-105 transition duration-300 hover:border-[#55E6A5] hover:bg-[#09101a81] hover:border-2 '>
              <img src={FrontEndIcon} alt="responsive icon" className='absolute top-[-20px] w-[40px] left-[50%] translate-x-[-50%] bg-black ' />
             <h5 className='text-white font-popins text-center mt-8 text-[20px]'> Frontend UI/UX Design </h5>
             <p className=' text-gray-500 text-center mt-3  font-popins'>I design modern, engaging user interfaces that not only look great but also provide an intuitive user experience. With a focus on usability, accessibility, and smooth interactions, I use tools like React, Tailwind, and animations to enhance user engagement. My goal is to turn ideas into beautiful frontends that are easy </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
