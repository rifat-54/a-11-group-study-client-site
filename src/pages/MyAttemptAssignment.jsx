import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";

const MyAttemptAssignment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [application, setApplication] = useState([]);
  const email = user?.email;

  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(`/my-application/${email}`);
      setApplication(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [email]);

  console.log(application);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-14">
        My Attempt Assignment
      </h2>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody className="space-y-3">
            {application.map((item,idx) => (
              <tr key={idx}>
                <th>{idx+1}</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAttemptAssignment;
