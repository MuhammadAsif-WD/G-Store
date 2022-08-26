import React from "react";
import safeMovers from "../../Assets/SVG/SafeMovers.svg";

const SafeMovers = () => {
  return (
    <div className="grid grid-cols-2 mx-auto gap-x-16 p-24 pr-10">
      <div>
        <img className="rounded-xl" src={safeMovers} alt="" />
      </div>
      <div>
        <h1 className="text-sm font-bold text-black">WE’RE SAFE MOVERS.</h1>
        <h1 className="text-4xl pt-2 font-bold leading-normal text-secondary">
          Fast And Reliable Shipping Services
        </h1>
        <p className="text-lg text-black leading-relaxed pt-4">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet
          consectetur ante ipsum elit. faucibus orci luctus et ultrices posuere
          cubilia Curae; Nulla mollis dapibus nunc.
        </p>
        <button className="mt-14 font-bold text-white bg-primary py-4 px-8 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SafeMovers;
