import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';
import useAuth from '../hook/useAuth';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';

const UpdateAssignment = () => {
    const {id}=useParams()
    const axiosSecure=useAxiosSecure()
    const[assignment,setAssignment]=useState({})
    const [startDate, setStartDate] = useState(new Date());

    console.log(id);

    const fetchData=async()=>{
        try {
            const {data}= await axiosSecure(`/assignment/${id}`)
            
            setAssignment(data)
            if(deadline){
                setStartDate(new Date(deadline))
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchData()
        
    },[id])

    console.log(assignment);

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

    

    const { user } = useAuth();
    
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const initialData = Object.fromEntries(formData.entries());
      initialData.assignment_creator = user?.email;
      initialData.deadline = startDate.toLocaleString();
      console.log(initialData);
  
      try {

        const {data}=await axiosSecure.put(`/update-assignment/${id}`,initialData)
        

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Succesfully Updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/assignment");
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold my-20 text-center">
          Update An Assignment
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
            defaultValue={title}
              name="title"
              type="text"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
            defaultValue={description}
              className="input input-bordered"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
            defaultValue={marks}
              name="marks"
              type="number"
              placeholder="marks"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail URL</span>
            </label>
            <input
            defaultValue={thumbnailURL}
              name="thumbnailURL"
              type="url"
              placeholder="thumbnail Image URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Difficulty level</span>
            </label>
            {
                level && <select
                defaultValue={assignment?.level}
              //   onChange={(e)=>setNewLavel(e.target.value)}
                name="level"
                className="select select-bordered w-full "
              >
                <option disabled>Choose Lavel</option>
                <option>Easy</option>
                <option>Midium</option>
                <option>Hard</option>
              </select>
            }
            
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            {
                deadline &&  <DatePicker
                name="deadline"
          
                className="border w-full p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            }
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default UpdateAssignment;