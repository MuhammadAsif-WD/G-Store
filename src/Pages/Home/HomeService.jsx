import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HomeService = () => {
  return (
    <div className="2xl:p-32 xl:p-32 lg:p-32 md:p-32 py-32 bg-[#F7F7F9]">
      <h1
        data-aos="zoom-in"
        className="text-sm text-black text-center font-bold"
      >
        WHAT WE DO
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-4xl text-secondary text-center font-bold mt-5 mb-20"
      >
        Our Services
      </h1>
      <div className="flex flex-wrap w-full mx-auto">
        <div
          data-aos="zoom-in-right"
          className="bg-white 2xl:w-full xl:w-96 lg:w-80 p-10 mx-auto 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-5 mt-5"
        >
          <div className="bg-[#F7F7F9] text-primary hover:text-white w-28 h-28 mx-auto pt-6 hover:bg-primary pl-6 rounded-full ease-in duration-200">
            <Icon className="w-16 h-16" icon="fa-solid:truck-moving" />
          </div>
          <Link to="/service">
            <h3 className="text-2xl mt-8 text-secondary font-bold hover:text-primary ease-in duration-300 text-center">
              Transportation
            </h3>
          </Link>
          <p className="text-black text-center mt-8">
            Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white 2xl:w-full xl:w-96 lg:w-80 p-10 mx-auto 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-5 mt-5"
        >
          <div className="bg-[#F7F7F9] text-primary hover:text-white w-28 h-28 mx-auto pt-6 hover:bg-primary pl-6 rounded-full ease-in duration-200">
            <Icon className="w-16 h-16" icon="fa-solid:chalkboard-teacher" />
          </div>
          <Link to="/service">
            <h3 className="text-2xl mt-8 text-secondary font-bold hover:text-primary ease-in duration-300 text-center">
              Live Monitoring
            </h3>
          </Link>
          <p className="text-black text-center mt-8">
            Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
          </p>
        </div>
        <div
          data-aos="zoom-in-left"
          className="bg-white 2xl:w-full xl:w-96 lg:w-80 p-10 mx-auto 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-5 mt-5"
        >
          <div className="bg-[#F7F7F9] text-primary hover:text-white w-28 h-28 mx-auto pt-6 hover:bg-primary pl-6 rounded-full ease-in duration-200">
            <Icon className="w-16 h-16" icon="fa6-solid:people-carry-box" />
          </div>
          <Link to="/service">
            <h3 className="text-2xl mt-8 text-secondary font-bold hover:text-primary ease-in duration-300 text-center">
              Worldwide Service
            </h3>
          </Link>
          <p className="text-black text-center mt-8">
            Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
