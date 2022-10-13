import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useNavigate,Link } from 'react-router-dom';


function Updatedata() {
const {id} =useParams();
const [user,setuser]=useState({
  name:"",
  email:"",
  phone:"",
  dob:"",
  address:"",
  image:""
});

const navigate=useNavigate();

const {name,email,phone,dob,address,image}=user;

const onInputChange= e =>{
  setuser({...user,[e.target.name]:e.target.value });
  console.log(user);
}

const formsubmit=e=>{
  e.preventDefault();
  axios.put(`http://localhost:3003/data/${id}`,user);
  console.log("data insert",user);
  navigate('/home');
}

useEffect(()=>{
  loaduser();
},[])


const loaduser=()=>{
  axios.get(`http://localhost:3003/data/${id}`)
  .then(res=>{setuser(res.data);
    console.log(res.data)}
      
  )
}
  return (
    <>

<div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User {user.id}</h2>
        <form onSubmit={e=>formsubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Username"
              name="email"
              value={user.email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your E-mail Address"
              name="phone"
              value={user.phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Phone Number"
              name="address"
              value={user.address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Website Name"
              name="dob"
              value={user.dob}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-2">Update User</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Updatedata