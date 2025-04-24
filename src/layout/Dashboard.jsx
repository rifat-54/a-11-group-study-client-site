import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Profile from '../pages/dashboard/Profile';
import './dashboard.css';


const Dashboard = () => {
    const[open,setIsOpen]=useState(false)

    const location=useLocation();
    console.log(location);

    const handleOpen=()=>{
        setIsOpen(!open);
    }

    
    return (
        <div className='flex gap-5'>
           <FaBarsStaggered onClick={handleOpen} className='absolute text-xl text-green-500 sm:hidden top-2 right-2'/>
           <aside className={`${open?'block':'hidden'} sm:block pl-5 md:pl-10    mt-10 h-96 w-5/6 sm:w-1/4`}>
            <ul className='space-y-2'>

           <li> <NavLink to={'/'} className={'text-xl font-semibold flex items-center gap-3'}><IoHomeOutline className='text-2xl'/> Home</NavLink></li>
           <li> <NavLink onClick={handleOpen} to={'/dashboard/profile'} className={'text-xl font-semibold flex items-center gap-3'}><CgProfile className='text-2xl'/> Profile</NavLink></li>
           <li> <NavLink to={'logout'} className={'text-xl font-semibold flex items-center gap-3'}><MdLogout className='text-2xl'/> Logout</NavLink></li>
      
            </ul>
           </aside>
           <aside className={`${open?'hidden':'block'} sm:block bg-[#d2e1e8]  h-screen w-full sm:w-3/4 `}>
           
            <div className='mt-10 md:mt-16'>
                <Outlet></Outlet>
            {/* {location.pathname==='/dashboard/profile'&&<Profile></Profile>} */}
          
            </div>
           </aside>
        </div>
    );
};

export default Dashboard;