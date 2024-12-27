import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";

const ApplyAssignment = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const location=useLocation();
  const owner_email=location?.state?.email;
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()
  


  const handleApplyAssignment=async(e)=>{
    e.preventDefault()
    console.log('clicked');
    const notes=e.target.notes.value;
    const applyData={
        assignment_id:id,
        applicant_email:user?.email,
        applicant_name:user?.displayName,
        notes:notes,
        assignment_owner_email:owner_email,
        status:'pending'
    }
    
    try {
        const {data}=await axiosSecure.post('/apply-assignment',applyData)
       
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Succesfully applied!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/my-attempt-assignment');
        
    } catch (error) {
        console.log(error);
    }
    

  }
  return (
    <div>
      <h2 className="text-3xl font-bold my-14 text-center">Apply Assignment</h2>
      <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleApplyAssignment} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Write Note</span>
            </label>
            <textarea placeholder="Write here..." className="border p-3" name="notes" id="" cols="30" rows="5"></textarea>
          </div>
          
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyAssignment;
