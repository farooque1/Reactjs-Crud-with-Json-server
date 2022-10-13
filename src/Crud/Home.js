import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
const [user,setuser]=useState([]);

useEffect(()=>{

  loaduser();

},[])

const deleteuser= async id=>{
  await axios.delete(`http://localhost:3003/data/${id}`);

}

const loaduser=()=>{
  axios.get('http://localhost:3003/data')
  .then(res=>{setuser(res.data.reverse());
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
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            
              {
                user.map((data)=>(
                  <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.dob}</td>
                <td>{data.address}</td>
                <td><img src={data.image} className='img-thumbnail' /></td>
                <td>
                  <Link to={`/users/${data.id}`} className='btn btn-warning m-1'>View</Link>
                  <Link to={`/update/${data.id}`} className='btn btn-primary m-1'>Edit</Link>
                  <Link className='btn btn-danger' onClick={() => deleteuser(data.id)}>Delete</Link>
                </td>
            </tr>
              ))
              }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Home