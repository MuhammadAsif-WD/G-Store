import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import safeMovers from "../../Assets/SVG/SafeMovers.svg";

const SafeMovers = () => {
  return (
    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto 2xl:gap-x-16 xl:gap-x-16 lg:gap-x-16 md:gap-x-16 2xl:p-24 xl:p-24 lg:p-16 md:p-24 p-4 2xl:pr-10 xl:pr-10 lg:pr-10 md:pr-10 pt-36 lg:mt-16 lg:mb-16">
      <div>
        <LazyLoadImage data-aos="zoom-in-up" src={safeMovers} />
      </div>
      <div data-aos="zoom-in-up">
        <h1 className="text-sm font-bold text-black xl:pr-10 lg:pr-10 md:pr-10 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-10 pt-16">
          WE’RE SAFE MOVERS.
        </h1>
        <h1 className="text-4xl pt-2 font-bold leading-normal text-secondary">
          Fast And Reliable Shipping Services
        </h1>
        <p className="text-lg text-black leading-relaxed pt-4">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet
          consectetur ante ipsum elit. faucibus orci luctus et ultrices posuere
          cubilia Curae; Nulla mollis dapibus nunc.
        </p>
        <button className="mt-14 font-bold text-white bg-primary hover:bg-primary/90 ease-in duration-200 py-4 px-8 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SafeMovers;
