import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navber = () => {
  const {user,logoutUser}=useAuth()
  
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
        
      </div>
    </div>
  );
};

export default Navber;
