import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';


function Viewusers() {
const {id} =useParams();
const [user,setuser]=useState([]);

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
      <div className='container mt-5'>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">DOB</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">PIC</th>
            </tr>
          </thead>
          <tbody>
               <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dob}</td>
                <td>{user.address}</td>
                <td><img src={user.image} className='img-thumbnail' /></td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Viewusers