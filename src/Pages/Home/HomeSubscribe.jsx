import React from "react";

const HomeSubscribe = () => {
  return (
    <div data-aos="zoom-in" className=" mb-16 mt-32">
      <div className="subscribe_bg 2xl:flex xl:flex lg:flex gap-5 2xl:p-24 xl:p-24 md:p-10 lg:p-20 p-5">
        <div>
          <h1 className="text-white font-bold text-2xl">
            Don't Miss Our Future Updates! Get Subscribed Today!
          </h1>
        </div>
        <div className="2xl:flex xl:flex lg:flex gap-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-5 mt-5">
          <input
            className="2xl:w-80 xl:w-80 lg:w-80 md:w-80 w-56 py-2 mr-3 px-2 rounded-md outline-none text-md"
            placeholder="Type Your Email Address"
            type="email"
            name="email"
            id=""
          />
          <button className="px-8 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-5 mt-5 py-3 text-white bg-primary font-thin rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
