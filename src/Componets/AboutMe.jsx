import React from 'react'
import { IoIosCodeDownload } from "react-icons/io";
import Mypic from "../Assets/Images/png/Ankur.png"

function AboutMe() {
    return (
        <section id="about" className='bg-[#02050a] max-lg:pt-[70px] lg:pb-32 lg:pt-32 max-md:w-full pb-10'>
            <div className="container">
                <div className="flex flex-wrap flex-row mx-[-12px] max-md:gap-20 max-md:items-center   ">
                    <div className="w-7/12 px-3 max-lg:w-6/12 max-md:w-full" >
                        <h4 className='font-popins text-[25px] text-[#55E6A5]' data-aos="flip-left">ABOUT ME</h4>
                        <h2 className='text-white lg:text-[45px] max-lg:text-[35px] max-md:text-[30px]  font-popins font-bold max-w-[650px] '  data-aos="flip-left">Driven by curiosity, powered by code
                        </h2>
                        <div className="lg:flex lg:mt-[150px] max-md:mt-[20px] gap-10">
                            <div className="bg-gray-400 h-[2px] lg:w-[170px] "></div>
                            <div>
                                <div className="lg:text-[20px] max-lg:text-[15px] font-popins text-gray-400 " data-aos="fade-up-right">I enjoy solving real-world problems using code and constantly strive to learn new technologies.
With a creative mind and attention to detail, I aim to deliver seamless digital experiences.</div>
                               <a  href="../Assets/pdf/Ankur Resume.pdf" download={"Ankur Resume.pdf"}>
                                 <button className='bg-[#55E6A5]  font-popins px-6 py-1 transition duration-300 flex items-center lg:mt-[90px] max-md:mt-[20px] hover:bg-[#09101A] hover:text-white hover:scale-110 border-[1px] border-tranparent  hover:border-[#55E6A5]  max-md:py-2 ' data-aos="fade-up-right">
                                    download CV   <IoIosCodeDownload className='lg:text-[50px] bg-transparent' />
                                </button>
                               </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12 lg:flex max-md:flex max-md:justify-center     justify-end max-lg:w-6/12 max-md:w-full" data-aos="flip-right">
                        <div className="w-[80%] bg-[#55E6A5] text-[#55E6A5] h-[80%] max-2xl:pb-h-[50%] lg:pr-8  max-md:pr-4 "> k
                            <img src={Mypic} alt="" className='bg-black   max-lg:pt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
