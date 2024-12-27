import React from 'react';
import loginlottlejson from '../assets/Animation - 1733903087166.json'
import Lottie from 'lottie-react';
import useAuth from '../hook/useAuth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {googleLogin,loginUser}=useAuth()
    const location=useLocation()
   
    const navigate=useNavigate()

    const handleLogin=async (e)=>{
       
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        

        try {
         await loginUser(email,password)
         toast.success('successfully login')
         if(location?.state){
           navigate(location?.state)
         }else{
          navigate('/')
         }

        } catch (error) {
          toast.error(error?.message)
        }

        

    }


    const handleGoogleLogin=async()=>{
      try {
       await googleLogin()
       toast.success('successfully login')
       
       if(location?.state){
        navigate(location?.state)
      }else{
       navigate('/')
      }
      } catch (error) {
        toast.error(error?.message)
      }
      
    }


   

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-96 lg:text-left">
          <Lottie animationData={loginlottlejson}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl mt-8 ml-8 font-bold">Login now!</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <small className='text-end'>New to this website? please <Link className='text-red-500' to={'/register'}>Register</Link> </small>
            </div>
          </form>
          <div className='px-4 md:px-6 '>
            <button onClick={handleGoogleLogin} className='block w-full mb-10 btn'>Login With Google</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;