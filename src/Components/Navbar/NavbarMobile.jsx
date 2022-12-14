import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import man from "../../Assets/SVG/man.svg";

const NavbarMobile = () => {
  const [user] = useAuthState(auth);

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <ul className="text-sm 2xl:hidden xl:hidden lg:hidden block animate__animated animate__fadeInTopRight mb-16 mt-16">
        {/* User Login */}
        {user ? (
          <ul>
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
          </ul>
        ) : (
          <ul>
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
          </ul>
        )}
        <div className="mt-5">
          {user ? (
            <div className="flex">
              <p className="text-secondary font-semibold">{user.displayName}</p>
              <div>
                <div className="ml-3 mt-[-5px]">
                  {user?.photoURL ? (
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <img className="w-8 h-8 rounded-full" src={man} alt="" />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p>{""}</p>
          )}
        </div>
        <li className="mt-5">
          {user ? (
            <Link to="/">
              <button
                onClick={logoutHandler}
                className="w-full text-sm hover:bg-primary border border-primary hover:text-[#fff] ease-in duration-300 px-8 py-2 mt-[-10px] rounded overflow-hidden"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="login">
              <button className="w-full text-sm hover:bg-primary border border-primary hover:text-[#fff] ease-in duration-300 px-8 py-2 mt-[-10px] rounded overflow-hidden">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
