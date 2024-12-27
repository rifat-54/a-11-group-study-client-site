import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import AssignmentCard from "../components/AssignmentCard";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/allAssignment?filter=${filter}&search=${search}`
      );
      setAssignments(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [filter, search]);

  return (
    <div className="md:px-5  mx-auto">
      <h2 className="text-3xl font-bold text-center my-16">
       All Available Assignment
      </h2>
      {/* search start */}

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Easy">Easy</option>
            <option value="Midium">Midium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>

      {/* search end */}
      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
