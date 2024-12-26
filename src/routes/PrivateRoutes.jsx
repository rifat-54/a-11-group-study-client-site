import React from 'react';
import useAuth from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth()
    if(loading){
        return <p className='text-center mt-32'><span className="loading loading-bars loading-lg"></span></p>
    }
    const navigate=useNavigate()
    if(user){
        return children
    }
    navigate('/login')
    
};

export default PrivateRoutes;