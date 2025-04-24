import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navber = () => {
  const { user, logoutUser } = useAuth();
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar fixed top-0 max-w-7xl mx-auto  z-50 opacity-95 flex justify-between bg-[#5bbee9]">
      <div className="">
        <a href="/" className=" text-white font-bold text-xl">
          Study Group
        </a>
      </div>

      <div className="flex  ">
        <div className="flex">
          <NavLink
            className={"mr-2 md:mr-6 md:text-[17px] text-white hover:text-black"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={"mr-2 md:mr-6 md:text-[17px] text-white hover:text-black"}
            to={"/assignment"}
          >
            Assignment
          </NavLink>
          {user && (
            <div className="hidden lg:flex md:text-[17px]">
              <NavLink className={"mr-2 md:mr-6 text-white hover:text-black"} to={"/create-assignment"}> Create Assignments</NavLink>
              <NavLink className={"mr-2 md:mr-6 text-white hover:text-black"} to={"/my-attempt-assignment"}>My Assignments</NavLink>
              <NavLink  className={"mr-2 md:mr-6 text-white hover:text-black"} to={"/pending-assignment"}>
                Pending Assignment
              </NavLink>
            </div>
          )}
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="" referrerPolicy="no-referrer" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu   menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="lg:hidden">
                <NavLink to={"/create-assignment"}> Create Assignments</NavLink>
              </li>
              <li className="lg:hidden">
                <NavLink className={"mr-4 md:mr-6 "} to={"/pending-assignment"}>
                  Pending Assignment
                </NavLink>
              </li>
              <li className="lg:hidden">
                <NavLink to={"/my-attempt-assignment"}>
                  My Attempted Assignments
                </NavLink>
              </li>
              <li><Link to={'/dashboard'}>Dashboard</Link></li>
              <li className=" font-bold">
                <button onClick={logoutUser}> Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="md:mr-3 md:text-[17px] text-white block" to={"/login"}>
            Login
          </Link>
        )}
        <div className="flex items-center ml-2">
          {/* sun icon */}
          <button onClick={handleTheme} className="text-xl md:text-2xl">
            {theme === "light" ? <MdDarkMode /> : <CiDark className="text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
