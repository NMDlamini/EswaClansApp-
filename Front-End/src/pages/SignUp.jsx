import React from 'react';
import { useState } from 'react'; //React Hook that allows us to add state to a functional component
import {ToastContainer, toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';                  // used to send requests to API/back-end

export default function SignUp() {
  const [values, setvalues] = useState({    // values entered by user are stored here 
    email:"",
    password:"",
  })

  const handleSubmit = async (e) => {     //asyn func allows us to use await 
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:4000/signup", {
        ...values,
      },
      {
        withCredentials: true,
      });
      console.log(data);
      if (data) {
        if (data.errors){
        } else {
          
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }

  
  return (
  <div className="container">
    <h2>Sign-Up</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='Email' onChange={(e)=>  //updates values as changes are made
          setvalues({...values,[e.target.name]:e.target.value})} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' placeholder='Password' onChange={(e)=>
          setvalues({...values,[e.target.name]:e.target.value})} />
      </div>
      <button type='submit'>Submit</button>
      <span>
        Already have an account? <Link to="/Signin">Sign-in</Link>
      </span>
    </form>
    <ToastContainer />
  </div>
  );
}
