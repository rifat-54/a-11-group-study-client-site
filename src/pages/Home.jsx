import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Features from "../components/Features";
import ExtraSecton from "../components/ExtraSecton";
import AssignmentCard from "../components/AssignmentCard";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const Home = () => {
  const [assignments, setAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();

  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get('/home-assignment');
      setAssignments(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(assignments);

  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <ExtraSecton></ExtraSecton>
      <h2 className="text-3xl font-bold text-center my-14">
       Available Assignment
      </h2>
      <div className="flex flex-col justify-center items-center">
      <div className="grid lg:px-3 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignmen) => (
          <AssignmentCard
            fetchData={fetchData}
            assignmen={assignmen}
            key={assignmen._id}
          ></AssignmentCard>
        ))?.slice(0,6)}
      </div>
      <Link className="btn bg-[#37AFE1] mt-16 text-center" to={'/assignment'}>View All Assignment</Link>
      </div>
      <Faq></Faq>
    </div>
  );
};

export default Home;
