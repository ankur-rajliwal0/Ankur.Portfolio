import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Html from "../Assets/Images/Svg/html-5-svgrepo-com.svg";
import Css from "../Assets/Images/Svg/css3-01-svgrepo-com.svg";
import js from "../Assets/Images/Svg/js-svgrepo-com.svg";
import Reeact from "../Assets/Images/Svg/react-svgrepo-com.svg";
import NodeJS from "../Assets/Images/Svg/nodejs-icon-logo-svgrepo-com.svg";
import Jquerry from "../Assets/Images/Svg/jquery-1-logo-svgrepo-com.svg";
import MongoDb from "../Assets/Images/Svg/mongodb-logo-svgrepo-com.svg";

function MySkills() {
  const skills = [
    { icon: Html, name: "HTML5" },
    { icon: Css, name: "CSS3" },
    { icon: js, name: "JavaScript" },
    { icon: Reeact, name: "React" },
    { icon: NodeJS, name: "NodeJS" },
    { icon: MongoDb, name: "MongoDB" },
    { icon: Jquerry, name: "jQuery" }
  ];

  return (
    <section className='bg-black pb-[50px]' id="skills">
      <div className="container flex justify-center flex-col items-center">
        <h5 className='font-popins text-[40px] font-semibold  text-[#55E6A5]'>My Skills</h5>
        
        <div className="w-full mt-20 px-4" data-aos="zoom-in">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-6">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className='w-[120px] h-[120px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out'
                  />
                  <p className="mt-4 text-xl font-semibold text-[#55E6A5]">{skill.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default MySkills;