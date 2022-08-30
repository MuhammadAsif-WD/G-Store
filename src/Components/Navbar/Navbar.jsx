import Logo from "../../Assets/SVG/Logo.svg";
import NavbarDesktop from "./NavbarDesktop";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "animate.css";

const Navbar = () => {
  // Function Show Menu
  const [showMenu, setShowMenu] = useState(false);
  const menuChangeButton = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className="2xl:flex xl:flex lg:flex justify-between navbar sticky top-0 z-50 bg-[#fff]">
      {/* Navbar Logo */}
      <section className="flex justify-between">
        <NavLink to="/">
          <div className="flex gap-x-3 justify-start font-bold text-3xl animate__animated animate__fadeInLeft">
            <div className="flex align-middle gap-x-2">
              <img className="w-10" src={Logo} alt="" />
              <h1 className="text-primary text-3xl mt-1 font-bold">G-Store</h1>
            </div>
          </div>
        </NavLink>

        {showMenu ? (
          <button
            className="text-sm mt-[20px] uppercase 2xl:hidden xl:hidden lg:hidden block"
            onClick={menuChangeButton}
          >
            <Icon
              className="hover:text-text ease-in duration-300 w-5 h-5"
              icon="akar-icons:circle-x-fill"
            />
          </button>
        ) : (
          <button
            className="text-sm mt-[10px] uppercase 2xl:hidden xl:hidden lg:hidden block"
            onClick={menuChangeButton}
          >
            <Icon
              className="hover:text-text ease-in duration-300 w-8 h-10"
              icon="ci:menu-alt-05"
            />
          </button>
        )}
      </section>

      {showMenu ? <NavbarMobile /> : <NavbarDesktop />}
    </main>
  );
};

export default Navbar;
