import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../hook/useAuth';
import { format, compareAsc } from "date-fns";
import toast from 'react-hot-toast';

const ViewDetails = () => {
    const {id}=useParams()
   
    const axiosSecure=useAxiosSecure()
    const[assignment,setAssignment]=useState({})
    const [startDate, setStartDate] = useState(new Date());
    const navigate=useNavigate()
    const{user}=useAuth()

   

    const fetchData=async()=>{
        try {
            const {data}= await axiosSecure(`/assignment/${id}`)
            
            setAssignment(data)
            // if(deadline){
            //     setStartDate(new Date(deadline))
            // }
            
        } catch (error) {
           
            
        }
    }

    useEffect(()=>{
        fetchData()
        
    },[id])

   

    const {
        title,
        thumbnailURL,
        marks,
        level,
        description,
        deadline,
        assignment_creator,
        _id
      } = assignment || {}

    // update

    
const handleTakeAssignment=()=>{
    if(user.email===assignment_creator){
        return toast.error('You cannot apply your own assignment')
    }

    navigate(`/apply-assignment/${_id}`,{state:{email:assignment_creator}})
   
}
    
  
    


    return (
        <div className="card bg-base-100 max-w-3xl mx-auto p-2 shadow-xl">
            <h2 className='text-3xl font-bold my-14 text-center'>Take Assignment</h2>
      <div className="">
        <figure>
          <img
            className="w-10/12 mx-auto max-h-96 rounded-md"
            referrerPolicy="no-referrer"
            src={thumbnailURL}
            alt="Assignment"
          />
        </figure>
        <div className='md:p-5'>
          <h2 className="card-title mt-12">{title}</h2>
          <p className='my-5'>
            Difficulty Lavel: <span className="font-bold">{level}</span>
          </p>
          <p className="font-semibold">Marks: {marks}</p>
        </div>
      </div>

      <div className="card-body p-2 md:p-6 lg:p-8  mt-2">
        <p className="text-gray-500">{description}</p>
        {
            deadline && <p className="my-3"><span className="font-semibold">Deadline:</span> <span className="text-red-500">{format(new Date(deadline), "MM/dd/yyyy")}</span></p>
        }
        
        <div className="card-actions mt-5 justify-center">
            
          <button onClick={handleTakeAssignment}  className="btn btn-primary">Take Assignment</button>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;