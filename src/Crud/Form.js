import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Form() {
  const navigate=useNavigate();

  const [insert,setInsert]=useState({
    name:"",
    email:"",
    phone:"",
    dob:"",
    address:"",
    image:""
  });

  const {name,email,phone,dob,address,image}=insert;

  const onInput= e =>{
    setInsert({...insert,[e.target.name]:e.target.value });
    console.log(insert);
  }

  const formsubmit=e=>{
    e.preventDefault();
    axios.post('http://localhost:3003/data',insert);
    console.log("data insert",insert);
    navigate('/home');
  }


  return (
    <div className='container  mt-5 '>
      <form onSubmit={e=> formsubmit(e)}>
      <div className='row'> 
      <h2 className='text-center mb-5'>Add user Details</h2>     
        <div className='col-lg-6'>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" 
          class="form-control" 
          placeholder='Enter your Name' 
          name="name" 
          onChange={e => onInput(e)} />
        </div>
        
        <div class="mb-3">
          <label class="form-label">Phone Number </label>
          <input type="text" 
          class="form-control" 
          placeholder='Enter your Phone number' 
          name="phone" 
          onChange={e => onInput(e)}/>
        </div>
        
        <div class="mb-3">
          <label class="form-label">Address</label>
          <input 
          type="text" 
          class="form-control" 
          placeholder='Enter your Address' 
          name="address" 
          onChange={e => onInput(e)}/>
        </div>
        </div>  
        <div className='col-lg-6'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email ID</label>
          <input type="email"
           class="form-control" 
           name="email" 
           placeholder='Enter your Email ID'
           onChange={e => onInput(e)}/>
        </div>

        <div class="mb-3">
          <label class="form-label">DOB</label>
          <input type="date" 
          class="form-control" 
          placeholder='DOB' name="dob"
          onChange={e => onInput(e)}/>
        </div>

        <div class="mb-3">
          <label class="form-label">Profile Pic</label>
          <input 
          type="file" 
          class="form-control" 
          placeholder='Chooes your profile pic' 
          name="image" 
          onChange={e => onInput(e)}/>
        </div>

        </div>  
      </div>
        <button type="submit" class="btn btn-outline-dark">Submit</button>
      </form>

    </div>
  )
}

export default Form