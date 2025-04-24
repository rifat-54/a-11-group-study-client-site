import React from 'react';
import useAuth from '../../hook/useAuth';

const Profile = () => {
    const {user}=useAuth()
    // const[role,isLoading]=useRole()
    return (
        <div className='flex  justify-center items-center mt-16'>
          
          <div className='bg-white shadow-lg rounded-2xl w-full md:w-4/5 lg:w-3/5'>
            
            <div className='flex flex-col w-full items-center justify-center p-4 '>
              <a href='#' className='relative block'>
                <img
                  alt='profile'
                  src={user?.photoURL}
                  className='mx-auto object-cover rounded-full h-24 md:w-24  border-2 border-white '
                />
              </a>
    
              
              <p className='mt-2 text-xl font-medium text-gray-800 '>
                {/* User Id: {user.uid} */}
                Phone: 01784-427654
              </p>
              <div className='w-full p-2 mt-4 rounded-lg'>
                <div className='flex flex-wrap gap-10 items-center justify-between text-sm text-gray-600 '>
                  <p className='flex flex-col'>
                    Name
                    <span className='font-bold text-black '>
                      {user?.displayName}
                    </span>
                  </p>
                  <p className='flex flex-col'>
                    Email
                    <span className='font-bold text-black '>{user?.email}</span>
                  </p>
    
                  <div className='mt-5'>
                    <button className='bg-[#6DC5D1] text-white px-10 py-1 rounded-lg  cursor-pointer hover:bg-lime-800 block mb-1'>
                      Update Profile
                    </button>
                    <button className='bg-[#6DC5D1] text-white px-7 py-1 rounded-lg  cursor-pointer hover:bg-lime-800'>
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Profile;