import React from "react";

const HomeSubscribe = () => {
  return (
    <div data-aos="zoom-in" className=" mb-16 mt-32">
      <div className="subscribe_bg flex gap-x-5">
        <div>
          <h1 className="text-white font-bold text-2xl">
            Don't Miss Our Future Updates! Get Subscribed Today!
          </h1>
        </div>
        <div className="flex gap-2">
          <input
            className="w-80 py-2 px-2 rounded-md outline-none text-md"
            placeholder="Type Your Email Address"
            type="email"
            name="email"
            id=""
          />
          <button className="px-8 py-3 text-white bg-primary font-thin rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
