import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";
import toast from "react-hot-toast";

const GiveMarks = () => {
  const { id } = useParams();
  const axiosSecure=useAxiosSecure()
  const location=useLocation()
  const navigate=useNavigate()
  
  const totalMark=parseInt(location.state)



  const handleSubmit=async(e)=>{
    e.preventDefault()
    const mark=parseInt(e.target.mark.value);
    const feedback=e.target.feedback.value;
    
    if(mark>totalMark){
        return toast.error('mark can not be more than total mark')
    }

    const updateData={
        mark,
        feedback,
        status:'Completed'
    }


    try {
        const {data}=await axiosSecure.patch(`/give-mark/${id}`,updateData)
        
        navigate('/pending-assignment')

    } catch (error) {
       
        
    }
  }

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center font-bold my-11">Give Mark</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input
            name="mark"
              type="number"
              placeholder="mark"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea placeholder="Write feedback" className="border p-2" name="feedback" id="" cols="30" rows="5"></textarea>
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMarks;
