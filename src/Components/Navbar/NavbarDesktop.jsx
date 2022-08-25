import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const NavbarDesktop = () => {
  const signOutHandler = () => {
    signOut(auth);
  };

  const [user] = useState(auth);

  return (
    <div className="flex">
      <ul className="text-sm mt-3 gap-8 2xl:flex xl:flex lg:flex hidden animate__animated animate__fadeInDown">
        {/* User Login */}
        <li className="hover:text-primary ease-in-out duration-300">
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

        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        <li className="hover:text-primary ease-in-out duration-300">
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
        {user ? (
          <Link to="/">
            <button
              onClick={signOutHandler}
              className="text-sm hover:bg-primary border border-primary hover:text-[#fff] ease-in duration-300 2xl:block xl:block lg:block hidden px-8 py-2 mt-[-10px] rounded-full overflow-hidden"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="login">
            <button className="text-sm hover:bg-primary border border-primary hover:text-[#fff] ease-in duration-300 2xl:block xl:block lg:block hidden px-8 py-2 mt-[-10px] rounded-full overflow-hidden">
              Login
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavbarDesktop;
