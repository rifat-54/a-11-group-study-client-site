import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import axios from "axios";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {user}=useAuth();
  const axiosSecure=useAxiosSecure()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.assignment_creator=user?.email;
    initialData.deadline=startDate.toLocaleString()
    console.log(initialData);

    try {
      const {data}=await axiosSecure.post('/create-assignment',initialData)

      // const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/create-assignment`,initialData)

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold my-20 text-center">
        Create An Assignment
      </h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
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
          <select name="level" className="select select-bordered w-full ">
            <option disabled selected>
              Choose Lavel
            </option>
            <option>Easy</option>
            <option>Midium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>

          <DatePicker
          name="deadline"
            className="border w-full p-2 rounded-md"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;
