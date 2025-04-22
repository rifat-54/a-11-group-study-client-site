import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const PandingAssignment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [assignmen, setAssignment] = useState([]);
  const email = user?.email;

  const fetchData = async () => {
    const { data } = await axiosSecure.get(`/pending-assignment/${email}`);
    const filterData = data.filter((item) => item.status === "pending");
    setAssignment(filterData);
  };
  useEffect(() => {
    fetchData();
  }, [email]);

  

  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold text-center my-14">
        Panding Assignment
      </h2>
      <div className="overflow-x-auto lg:w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Title</th>
              <th>Marks</th>
              <th>Level</th>
              <th>Status</th>
              <th>Give Mark</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assignmen.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item?.applicant_name}</td>
                <td>{item?.title}</td>
                <td>{item?.marks}</td>
                
                <td>{item?.level}</td>
                <td>{item?.status}</td>
                <td><Link state={item?.marks} to={`/givemark/${item._id}`} className="btn bg-[#37AFE1] text-white">Give Mark</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PandingAssignment;
