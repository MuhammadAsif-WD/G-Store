import React from "react";
import Logo from "../../Assets/SVG/Logo.svg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary flex flex-wrap gap-x-24 2xl:p-20 xl:p-20 lg:p-20 md:p-20 p-5">
        <div>
          <div className="flex gap-x-3 justify-start font-bold text-3xl animate__animated animate__fadeInLeft">
            <div className="flex align-middle gap-x-2">
              <img className="w-10" src={Logo} alt="" />

              <h1 className="text-white text-3xl mt-1 font-bold">G-Store</h1>
            </div>
          </div>
          <p className="mt-5 text-[#B0B4A7] w-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ute dolor sit.
          </p>
          <div className="flex gap-3 mt-10">
            <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary pl-2 ease-in duration-300">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="w-7 h-7" icon="gg:facebook" />
              </a>
            </button>

            <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary pl-2 ease-in duration-300">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="w-7 h-7" icon="eva:linkedin-fill" />
              </a>
            </button>

            <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary pl-2 ease-in duration-300">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Icon className="w-7 h-7" icon="jam:twitter" />
              </a>
            </button>

            <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary pl-2 ease-in duration-300">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  className="w-7 h-7"
                  icon="ant-design:google-plus-outlined"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-y-10 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-10 mt-16">
          <div>
            <h1 className="text-xl font-bold text-white">Who We Are</h1>
            <div className="text-white text-md mt-10 gap-y-4 grid grid-cols-1">
              <p>Service</p>
              <p>Blog</p>
              <p>Inventory</p>
              <p>Manage Inventory</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white"> What We Do</h1>
            <div className="text-white text-md mt-10 gap-y-4 grid grid-cols-1">
              <p>wholesale</p>
              <p>Cheaply</p>
              <p>Believable</p>
              <p>Protection</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Company</h1>
            <div className="text-white text-md mt-10 gap-y-4 grid grid-cols-1">
              <p>Burris Logistics</p>
              <p>C.H. Robinson</p>
              <p>Coyote Logistics</p>
              <p>DB Schenker</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">More Info</h1>
            <div className="text-white text-md mt-10 gap-y-4 grid grid-cols-1 w-48">
              <p>TMS for small businesses</p>
              <p>Managed procurement services</p>
              <p>Coyote Logistics</p>
              <p>Warehouse productivity consulting</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
