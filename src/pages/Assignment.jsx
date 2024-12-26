import React, { useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import AssignmentCard from "../components/AssignmentCard";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();

  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get("/allAssignment");
      setAssignments(data);
    } catch (error) {}
  };

  useState(() => {
    
    fetchData();
  }, [fetchData]);
 

  console.log(assignments);

  return (
    <div className="md:px-5  mx-auto">
      <h2 className="text-3xl font-bold text-center my-16">
        Available Assignment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignmen) => (
          <AssignmentCard
          fetchData={fetchData}
            assignmen={assignmen}
            key={assignmen._id}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
