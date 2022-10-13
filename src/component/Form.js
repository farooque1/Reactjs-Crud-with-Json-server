import React, { useState } from "react";
import axios from 'axios';


const Form = () => {

  const [data, setdata] = useState({
    name: "",
    salary: "",
    age: ""
  });

  const { name, salary, age } = data;
  const onInputChange = e => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'React POST Request Example' })
// };
//   const onSubmit = e => {
//     e.preventDefault();
//     axios.post("https://dummy.restapiexample.com/api/v1/create", requestOptions);
//   };


 const handleClick = e => {
  e.preventDefault();
    fetch('https://dummy.restapiexample.com/api/v1/create', { 
      method: 'POST', 
      body: JSON.stringify(data)
    })
    console.log();
  }

  return (
    <div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => handleClick(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              placeholder="Enter Your Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block mt-2">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
