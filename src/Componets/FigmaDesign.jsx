import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Added Autoplay
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS

function FigmaDesign() {
  const projects = [
    {
      url: "https://buddy-bullish.vercel.app/",
      title: "Buddy Bullish"
    },
    {
      url: "https://noble-mind-ruddy.vercel.app/",
      title: "Noble Mind"
    },
    {
      url: "https://strength-pharma.vercel.app/",
      title: "Strength Pharma"
    },
    {
      url: "https://maitree-d.vercel.app/",
      title: "Maitree"
    },
    {
      url: "https://chat-app-ui-ruddy.vercel.app/",
      title: "Chat App UI"
    }
  ];

  return (
   <section className='bg-black'>
     <div className="container">
        <div className="py-12 px-0 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-white font-popins"></h2>
      <Swiper data-aos="zoom-in"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Autoplay delay in ms (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, // Pause on hover
        }}
        modules={[EffectCoverflow, Autoplay]} // Added Autoplay module
        className="mySwiper"
        loop={true} // Enable infinite loop
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-10">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 bg-blue-600 rounded-lg font-medium"
                >
                  Visit {project.title}
                </a>
              </div>
              <iframe 
                src={project.url} 
                title={project.title}
                className="w-[70%] h-[500px] border-0"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
   </section>
  );
}

export default FigmaDesign;