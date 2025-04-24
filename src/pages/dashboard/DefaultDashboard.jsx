import React from "react";
import useAuth from "../../hook/useAuth";
import TypeWriter from "./shareComponent/TypeWriter";

const DefaultDashboard = () => {
    const {user}=useAuth();
  return (
    <div className="text-center flex flex-col justify-center items-center mt-10">
      <h2 className="text-2xl flex mt-10 font-bold">Hey, <span className="text-3xl text-red-500"> {user?.displayName && <TypeWriter text={user?.displayName} speed={1000}></TypeWriter>}</span></h2>

      <p className="text-2xl mb-10 mt-2 font-bold"> Welcome to your Study Hub </p>


      <p className="text-xl md:w-3/4 mx-auto text-black">
        Collaborate, stay focused, and track your academic journey with your
        study group. Let’s learn smarter together! 📚✨
      </p>
    </div>
  );
};

export default DefaultDashboard;
