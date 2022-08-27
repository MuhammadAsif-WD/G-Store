import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <div className="banner_background_one">
              <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-extrabold text-center 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto pt-72 text-white leading-tight">
                We provide our services to everyone with faith
              </h1>
              <p className="text-center pt-16">
                <button className="px-16 py-5 text-white bg-primary font-thin rounded-md">
                  Contact
                </button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_background_two">
              <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-extrabold text-center 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto pt-72 text-white leading-tight">
                We try to provide the best products and services
              </h1>
              <p className="text-center pt-16">
                <button className="px-16 py-5 text-white bg-primary font-thin rounded-md">
                  Service
                </button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_background_three">
              {" "}
              <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl text-4xl font-extrabold text-center 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full mx-auto pt-72 text-white leading-tight">
                Our website is dedicated to Laptop Warehouse
              </h1>
              <p className="text-center pt-16">
                <button className="px-16 py-5 text-white bg-primary font-thin rounded-md">
                  Most Product
                </button>
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
