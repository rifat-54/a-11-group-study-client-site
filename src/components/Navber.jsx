import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navber = () => {
  const {user,logoutUser}=useAuth()
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  
  return (
    <div className="navbar flex justify-between bg-[#37AFE1]">
      <div className="">
        <a className="btn btn-ghost text-xl">Study Group</a>
      </div>

      <div className="flex-none">
        <div className="">
          <NavLink className={"mr-4 md:mr-6 "} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"mr-4 md:mr-6 "} to={"/assignment"}>
            Assignment
          </NavLink>
        </div>
        {
          user?
          <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt=""
                referrerPolicy="no-referrer"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/create-assignment"}> Create Assignments</NavLink>
            </li>
            <li>
              <NavLink className={"mr-4 md:mr-6 "} to={"/pending-assignment"}>
                Pending Assignment
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-attempt-assignment"}>
                My Attempted Assignments
              </NavLink>
            </li>
            <li>
              <button onClick={logoutUser}> Logout</button>
            </li>
          </ul>
        </div>
          :
          <Link className="md:mr-3" to={'/login'} >Login</Link>

        }
        <div className="flex items-center ml-2">
          {/* sun icon */}
          <button onClick={handleTheme} className="md:text-2xl">
            {theme === "light" ? <MdDarkMode /> : <CiDark />}
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default Navber;
