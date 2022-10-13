import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';

function Edit() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [userE, setuserE] = useState({
    employee_name: "",
    employee_age: "",
    employee_salary: "",
  });
  const { employee_name, employee_age,employee_salary } = userE;
  
  const onInputChange = e => {
    setuserE({ ...userE, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => response.json())
      .then((result) => setuserE(result.data));
  }, []);

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'PUT Request' })
};

const  handlesubmit = (e)=> {
    e.preventDefault()
    console.log(e);	
    axios.put(`https://dummy.restapiexample.com/api/v1/update/${id}`,requestOptions)
    .then(res =>{ console.log(res); })
    .catch(error =>{ console.log(error); }) 
    alert('Data updated Successfully')
    navigate('/');
  }


  return (
    <>
<div>
  
  </div>    
   <div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User Details</h2>
        <form onSubmit={e => handlesubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your Name"
              name="employee_name"
              value={employee_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your Age"
              name="employee_age"
              value={employee_age}
              onChange={e => onInputChange(e)}
            />
          </div> 
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your salary"
              name="employee_salary"
              value={employee_salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-5">Update User</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Edit