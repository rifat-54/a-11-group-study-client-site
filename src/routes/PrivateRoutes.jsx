import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    
    if(loading){
        return <p className='text-center mt-32'><span className="loading loading-bars loading-lg"></span></p>
    }
    
    if(user){
        return children
    }
   return <Navigate to={'/login'} state={location.pathname}></Navigate>
    
};

export default PrivateRoutes;