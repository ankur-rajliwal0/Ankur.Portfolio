import React from 'react'
import HeroPic from '../Assets/Images/png/HeroSectionImg.png';
import { IoIosCodeDownload } from "react-icons/io";

function Hero() {
    return (
        <section id='home' className='bg-[#09101A]'>
            <div className="container pb-[70px]">

                <div className="flex flex-row flex-wrap items-center mx-[-12px] lg:pt-[120px] sm:pt-[100px] pt-[50px]">
                    <div className="w-full md:w-1/2 px-3" data-aos="flip-up">
                        <h1 className='text-white font-popins max-sm:text-[40px] text-[70px] font-bold max-w-[650px] max-lg:text-[45px]'>HI, I'M ANKUR? WEB <span className='text-[#55E6A5] '>DEVELOPER</span></h1>
                        <p className='font-popins text-4 text-[#a2a2a2] max-w-[650px] max-lg:text-2 max-sm:text-1'>Passionate Web Developer skilled in building responsive and dynamic web applications.
                            Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Node.js.
                            Dedicated to delivering clean code, great UI/UX, and performance-optimized websites
                        </p>
                        <div className="flex gap-8 items-center max-sm:flex-col max-sm:gap-4 mt-8">
                             <button className='bg-[#55E6A5]  font-popins px-6 py-1 transition duration-300 flex items-center mt-5 hover:bg-[#09101A] hover:text-white hover:scale-110 border-[1px] border-tranparent max-sm:px-2 max-sm:py-0  hover:border-[#55E6A5]'>
                            download CV   <IoIosCodeDownload className='text-[50px] bg-transparent' />
                        </button>
                         <a href="#contact"><button className='bg-[#09101A]  font-popins px-12 py-4  transition duration-300 flex items-center mt-5  text-white hover:scale-110 border-[1px]  hover:text-black border-[#55E6A5] max-sm:px-6 max-sm:py-1 hover:bg-[#55E6A5] hover:text-black]'>
                            Hire Me  
                        </button></a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-3"data-aos="flip-right">
                        <img src={HeroPic} alt="Profile Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
