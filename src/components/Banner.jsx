import React from "react";
import bannerImg from '../assets/banner.jpg'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
        
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Collaborate. Learn. Succeed</h1>
            <p className="mb-5">
            Join the ultimate platform for group study enthusiasts! Connect with like-minded learners, share knowledge, and achieve your academic goals together. Let’s make learning a team effort.
            </p>
            <Link to={'/assignment'} className="btn  bg-[#37AFE1]">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
