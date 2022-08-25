import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div>
      <ul className="text-sm 2xl:hidden xl:hidden lg:hidden block animate__animated animate__fadeInTopRight mb-16 mt-16">
        {/* User Login */}
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="home"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="inventory"
          >
            Inventory
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="manage"
          >
            Manage Item
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="add"
          >
            Add Item
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="my"
          >
            My Item
          </NavLink>
        </li>
        {/* User Logout */}
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="service"
          >
            Service
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="blogs"
          >
            Blogs
          </NavLink>
        </li>
        <li className="hover:text-primary ease-in-out duration-300 mt-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink text-primary font-semibold"
                : "notActiveLink"
            }
            to="contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="mt-10">
          <Link to="login">
            <button className="w-full text-sm hover:bg-primary border border-primary hover:text-[#fff] ease-in duration-300 px-8 py-2 mt-[-10px] rounded overflow-hidden">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
