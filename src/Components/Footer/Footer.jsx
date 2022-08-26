import React from "react";
import Logo from "../../Assets/SVG/Logo.svg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="bg-secondary flex gap-x-24 p-20">
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
        <div>
          <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary p-5 ">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="w-7 h-7" icon="gg:facebook" />
            </a>
          </button>

          <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary p-5 ">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="w-7 h-7" icon="eva:linkedin-fill" />
            </a>
          </button>

          <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary p-5 ">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Icon className="w-7 h-7" icon="jam:twitter" />
            </a>
          </button>

          <button className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary p-5 ">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <Icon
                className="w-7 h-7"
                icon="ant-design:google-plus-outlined"
              />
            </a>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-20">
        <div>
          <h1 className="text-xl font-bold text-white">Who We Are</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white"> What We Do</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Company</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">More Info</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
