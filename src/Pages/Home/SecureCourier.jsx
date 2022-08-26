import React from "react";
import { Icon } from "@iconify/react";

const SecureCourier = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-x-16 2xl:my-36 xl:my-36 lg:my-36 md:my-36 my-28">
      <div data-aos="fade-right">
        <h3 className="text-md text-black font-semibold pb-2">
          SECURE COURIER
        </h3>
        <h3 className="text-4xl leading-tight text-secondary font-bold">
          Secure Courier For Small & Big Packages
        </h3>
        <p className="py-8 text-black text-xl">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet
          consectetur elit. Earum mollitia cum ex ipsam autem!earum sequi amet.
        </p>
        <button className="mt-10 font-bold text-white bg-primary hover:bg-primary/90 ease-in duration-200 py-4 px-8 rounded">
          Learn More
        </button>
      </div>
      <div className="2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-16">
        <div data-aos="zoom-in" className="flex gap-x-5 bg-[#F7F7F9] p-10">
          <Icon
            className="w-14 h-14 text-primary"
            icon="fa6-solid:truck-ramp-box"
          />
          <a href="/">
            <h1 className="text-3xl text-secondary font-bold">
              Tracking Is Easy
            </h1>
            <p className="text-black pt-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula tempufddfel.
            </p>
          </a>
        </div>
        <div data-aos="zoom-in" className="flex gap-x-5 bg-[#F7F7F9] p-10 mt-6">
          <Icon className="w-14 h-14 text-primary" icon="fa-solid:boxes" />
          <a href="/">
            <h1 className="text-3xl text-secondary font-bold">
              Multiple Warehouses
            </h1>
            <p className="text-black pt-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula tempufddfel.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecureCourier;
