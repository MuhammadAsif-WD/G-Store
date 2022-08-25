import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper Slide Image
import BannerOne from "../../Assets/SVG/BannerOne.svg";
import BannerTwo from "../../Assets/SVG/BannerTwo.svg";
import BannerThree from "../../Assets/SVG/BannerThree.svg";

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
            <img className="w-[100%]" src={BannerOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={BannerTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={BannerThree} alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
