import React, { useState, useEffect } from "react";
import user from './user.png';
import { Link } from "react-router-dom";

export default function Cards() {

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((result) => setData(result.data));
  }, []);

  const info ="" ;

  return (
    <div className="container mt-5">
      <div className="row text-center">
        {data.map((employee) => (
      <div className="col-sm-4">
      <div class="card mb-1 mt-3" key={employee.id}>
        <img src={user} class="card-img-top" alt={employee.employee_name } style={{'width':'50%','display':'block','margin-left':'auto','margin-right':'auto','margin-top':'10px'}}/>
        <div class="card-body">
        <Link to={`edit/${employee.id}`}><h5 class="card-text ">{employee.employee_name } , {employee.employee_age}</h5></Link>
        </div>
      </div>

     </div>
        ))
  }
        </div>
    </div>
  );
}