import React from 'react';
import logoImg from '../assets/student-study-group.jpg'

const ExtraSecton = () => {
    return (
        <div className='my-28 px-2  bg-[#37aee147] lg:px-8 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
                <img src={logoImg} alt="" />
            </div>
            <div className='flex flex-col  items-center justify-center'>
                <h2 className='text-2xl font-bold text-center'>Study Together, Grow Together!</h2>
                <p className='mt-6 text-center  text-gray-600 '>Empower your learning with collaborative study groups. Connect with peers, share resources, and achieve academic success together—all in one seamless platform designed to enhance group study experiences.</p>
            </div>
            
        </div>
    );
};

export default ExtraSecton;