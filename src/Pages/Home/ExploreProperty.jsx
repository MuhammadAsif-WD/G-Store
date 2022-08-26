import React from "react";

const ExploreProperty = () => {
  return (
    <div className="grid grid-cols-2 2xl:p-24 xl:p-24 lg:p-16 md:p-6 p-5 2xl:my-0 xl:my-0 lg:my-0 md:my-0 my-24 gap-x-8 bg-[#F7F7F9]">
      <div data-aos="fade-down" className="explore_background_one">
        <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-xl text-white font-extrabold pt-24 2xl:p-16 xl:p-16 lg:p-16 md:p-16 p-3 pb-5">
          Global Logistic Service For Business <br />
          <button className="2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm px-8 py-3 mt-5 hover:bg-primary rounded hover:text-white ease-in duration-200 border hover:border-primary">
            Explore Service
          </button>
        </h1>
      </div>
      <div data-aos="fade-up" className="explore_background_two">
        <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-xl text-white font-extrabold pt-24 2xl:p-16 xl:p-16 lg:p-16 md:p-16 p-3 pb-5">
          We give you complete control of your shipments <br />
          <button className="2xl:text-xl xl:text-xl lg:text-xl md:text-md text-sm px-8 py-3 mt-5 hover:bg-primary rounded hover:text-white ease-in duration-200 border hover:border-primary">
            Explore Service
          </button>
        </h1>
      </div>
    </div>
  );
};

export default ExploreProperty;
