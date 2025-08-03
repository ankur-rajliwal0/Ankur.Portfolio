import React from 'react'
import AddressIcon from "../Assets/Images/Svg/address-svgrepo-com.svg"
import CallIcon from "../Assets/Images/Svg/call-receive-svgrepo-com.svg"
import EmailIcon from "../Assets/Images/Svg/Mail-Icon.svg"

function LetsTalk() {
    return (
        <section className='bg-black mb-[-5px]'>
            <div className="container pt-[150px]">
                <div className="flex flex-row flex-wrap items-center mx-[-12px] max-md:justify-center max-md:gap-10  ">
                    {/* Col 1 */}
                    <div className='w-4/12 px-3 max-lg:w-6/12  max-md:w-full max-lg:justify-center' data-aos="flip-down">
                        <div className="flex gap-10">
                            <img src={AddressIcon} alt="adress icon" className='bg-[#55E6A5] rounded-full max-md:w-[40px] max-md:h-[40px] lg:p-5' />
                            <div className="flex flex-col">
                                <h6 className='text-[30px] font-popins text-white font-semibold max-md:text-[20px]'>Address</h6>
                                <p className='text-[15px] font-popins text-gray-400'>(125112)Hisar ,Haryana , India</p>
                            </div>
                        </div>
                    </div>
                    {/* Col 2 */}
                    <div className='w-4/12 px-3 max-lg:w-6/12  max-md:w-full max-lg:justify-center' data-aos="flip-down">
                        <div className="flex gap-10">
                            <img src={CallIcon} alt="adress icon" className='bg-[#55E6A5] rounded-full max-md:w-[40px] max-md:h-[40px] lg:p-5' />
                            <div className="flex flex-col">
                                <h6 className='text-[30px] font-popins text-white font-semibold max-md:text-[20px]'> Lets Talk</h6>
                                <a href="tel:+91708292696"> <p className='text-[15px] font-popins text-gray-400'>+91 7082892696</p>
                                </a>                </div>
                        </div>
                    </div>
                    {/* Col 3 */}
                    <div className='w-4/12 px-3 max-lg:w-6/12 max-md:w-full max-lg:justify-center max-lg:pt-4' data-aos="flip-down">
                        <div className="flex gap-10">
                            <img src={EmailIcon} alt="adress icon" className='bg-[#55E6A5] rounded-full max-md:w-[40px] max-md:h-[40px] max-md:p-1  lg:p-5 ' />
                            <div className="flex flex-col">
                                <h6 className='text-[30px] font-popins text-white font-semibold max-md:text-[20px]'>Address</h6>
                                <a href="mailto:ankur.rajliwal33@gmail.com"> <p className='text-[15px] font-popins text-gray-400'>ankur.rajliwal33@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LetsTalk
