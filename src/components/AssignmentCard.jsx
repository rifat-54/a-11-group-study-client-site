import React from "react";
import { format, compareAsc } from "date-fns";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignmen,fetchData }) => {
  const {
    title,
    thumbnailURL,
    marks,
    level,
    description,
    deadline,
    assignment_creator,
    _id
  } = assignmen;

  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()

  const handleDelete=async()=>{
    if(assignment_creator!==user.email){
        return toast.error('Action not permitted')
    }

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

            try {
                const {data}=await axiosSecure.delete(`/delete-assignment/${_id}`)
                console.log(data);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  fetchData()

            } catch (error) {
                toast.error(error?.message)
            }

          
        }
      });

     console.log(user?.email);
     console.log(assignment_creator,_id);
  }

  const handleUpdate=()=>{
    if(assignment_creator!==user.email){
        return toast.error('Action not permitted')
    }
    navigate(`/update-assignment/${_id}`)
  }


  return (
    <div className="card bg-base-100 p-2 shadow-xl">
      <div className="flex gap-3">
        <figure>
          <img
            className="w-14 h-14 rounded-full"
            referrerPolicy="no-referrer"
            src={thumbnailURL}
            alt="Assignment"
          />
        </figure>
        <div>
          <h2 className="card-title">{title}</h2>
          <p>
            Difficulty Lavel: <span className="font-bold">{level}</span>
          </p>
          <p className="font-semibold">Marks: {marks}</p>
        </div>
      </div>

      <div className="card-body p-2 md:p-6 lg:p-8  mt-2">
        <p className="text-gray-500">{description}</p>
        <p className="my-3"><span className="font-semibold">Deadline:</span> <span className="text-red-500">{format(new Date(deadline), "MM/dd/yyyy")}</span></p>
        <div className="card-actions mt-5 justify-between">
            <button onClick={handleDelete} className="btn bg-red-500 text-white">Delete</button>
            <button onClick={handleUpdate} className="btn bg-[#37AFE1]">Update</button>
          <Link to={`/view-details/${_id}`} className="btn btn-primary">View Assignment</Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
