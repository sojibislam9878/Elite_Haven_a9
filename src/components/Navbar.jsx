import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useGetBookMark from "../Hooks/useGetBookMark";

const Navbar = () => {
  const { logout, user } = useAuth();
  const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
  const activeLink = `bg-gradient-to-r from-[#4facfe] to-blue-500 border border-blure-500 text-white hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  const { estateCardLS = [] } = useGetBookMark();
  return (
    <div className="navbar bg-base-100 container mx-auto p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmark"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Book Mark
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/updateProfile"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Elite Haven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmark"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Book Mark
              <sup>
                <span>{estateCardLS.length}</span>
                <span className="material-symbols-outlined text-sm font-bold">
                  bookmark_added
                </span>
              </sup>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/updateProfile"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Update Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex  items-center gap-2">
            <div
              className="flex tooltip tooltip-bottom z-[10]"
              data-tip={user.displayName || "Unknown"}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-20 rounded-full">
                  <img
                    alt="profile picture"
                    src={
                      user.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <button
              onClick={logout}
              className="btn bg-blue-500 text-white font-bold hover:bg-blue-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-blue-500 text-white font-bold hover:bg-blue-700">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
