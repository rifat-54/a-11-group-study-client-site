import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';

const UpdateAssignment = () => {
    const {id}=useParams()
    const axiosSecure=useAxiosSecure()
    const[assignment,setAssignment]=useState({})
    console.log(id);

    const fetchData=async()=>{
        try {
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        try {
            const {data}=axiosSecure(`/assignment/${id}`)
            console.log(data);
        } catch (error) {
            
        }
    },[])

    // console.log(assignment);


    return (
        <div>
            dsfsfdsf
        </div>
    );
};

export default UpdateAssignment;