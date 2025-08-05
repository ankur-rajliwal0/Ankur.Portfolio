import React from 'react'
import EmailIcon from "../Assets/Images/Svg/contact-email-mail-svgrepo-com.svg"
import ContactIcon from "../Assets/Images/Svg/contact-phone-talking-svgrepo-com.svg"


function Contact() {
    return (
        <section id="contact" className='bg-[#000000] pb-11'>
            <div className="container">
                <div className="flex flex-row flex-wrap mx-[-12px] max-lg:gap-10  ">
                    <div className="lg:w-6/12 px-3 max-lg:w-full pt-[150px] max-lg:justify-center" data-aos="fade-up-right">
                        <h2 className='lg:text-[80px] max-lg:text-[60px] max-md:text-[40px]   font-popins  font-bold max-w-[430px] leading-10 text-center text-[#55E6A5]'>Contact <span className='lg:text-[40px] max-lg:text-[35px] max-md:[25px] text-white'>Me Today</span></h2>
                        <p className='lg:text-[20px] max-lg:[15px] font-popins text-gray-500 lg:mt-[40px] text-center' data-aos="zoom-in-up">If you have a project idea, a question, or just want to connect, feel free to reach out. I'm always open to new opportunities, collaborations, or a quick chat. Whether it's web development, design, or something creative — I'd love to hear from you. Let's build something awesome together!
                        </p>
                        <div className="flex justify-between mt-7 max-lg:flex-col max-lg:gap-5 max-lg:items-center px-3">
                            <div className="w-[300px] h-[200px] bg-[#09101A] flex flex-col items-center justify-center gap-4">
                                <img src={EmailIcon} alt="Contact Email icon" className='w-[50px]' data-aos="zoom-in-up" />
                                <h6 className='text-center text-2xl font-semibold font-popins text-white' data-aos="zoom-in-up">Email</h6>
                                <h6 className='text-center text-[15px] font-popins text-white' data-aos="zoom-in-up">ankur.rajliwal33@gmail.com</h6>
                            </div>
                            <div className="w-[300px] h-[200px] bg-[#09101A] flex flex-col items-center justify-center gap-4">
                                <img src={ContactIcon} alt="Contact Number Icon" className='w-[50px]'data-aos="zoom-in-up" />
                                <h6 className='text-center text-2xl font-semibold  font-popins text-white' data-aos="zoom-in-up">Contact</h6>
                                <h6 className='text-center   font-popins text-white' data-aos="zoom-in-up">+91 7082892696</h6>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-6/12 px-3 max-md:flex max-lg:w-full max-md:items-center max-lg:pt-[50px] max-lg:justify-center">
                    <div className="bg-[#09101A] p-10 ">
                        <h3 className='font-popins text-white lg:text-[40px] max-lg:text-[30px]' data-aos="fade-up-left">Send A Message</h3>
                        <div className="flex flex-col gap-10 max-lg:items-center"  data-aos="zoom-in-up">
                            <input type="text" placeholder='Your Name' className='border-[1px] w-full lg:h-[70px] px-4 border-[#55E6A5] bg-transparent outline-none focus:outline focus:outline-2 focus:text-white' />
                        <input type="text" placeholder='Your Email' className='border-[1px] w-full lg:h-[70px] px-4 border-[#55E6A5] bg-transparent outline-none focus:outline focus:outline-2 focus:text-white' />
                        <input type="text" placeholder='Phone Number' className='border-[1px] w-full lg:h-[70px] px-4 border-[#55E6A5] bg-transparent outline-none focus:outline focus:outline-2 focus:text-white' />
                        <textarea type="text" placeholder='Your Message...' className='p-4 h-40 border-[1px] w-full px-4 border-[#55E6A5] bg-transparent outline-none focus:outline focus:outline-2 focus:text-white' />
                        <button className='text-black font-popins px-4 py-3 bg-[#55E6A5] max-w-[200px] hover:bg-[#141C27] hover:text-white  transition duration-300 ease-in-out  ' data-aos="zoom-in-up">Submit Now</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
