import Lottie from 'lottie-react';
import React, { useState } from 'react';
import lottieData from '../assets/register.json'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
    const [error,setError]=useState('')
    const{updateUser,googleLogin,registerUser}=useAuth()
    const navigate=useNavigate()
    

    const handleRegister=async(e)=>{
        setError('')
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photo=form.photo.value;
       
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(!passwordRegex.test(password))
    {
        setError('password should one uppercase one number and at least 6 characters');
        return;
    }

    try {
      await registerUser(email,password)
      toast.success('successfully register user')
      updateUser(name,photo)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
   

    }

    const handleGoogleLogin=async()=>{
      try {
       await googleLogin()
       toast.success('successfully login')
       navigate('/')
      
      } catch (error) {
        toast.error(error?.message)
      }
      
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:w-96 lg:text-left">
            <Lottie animationData={lottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl mt-8 ml-8 font-bold">Register now!</h1>
  
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                {
                  error &&
                  <p className="text-red-600">{error}</p>
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <small className='text-end'>Already have an account? please <Link className='text-red-500' to={'/login'}>Login</Link> </small>

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

export default Register;