import React from 'react';
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [values, setvalues] = useState({
    email:"",
    password:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  
  return (
  <div className="container">
    <h2>Log-In Account</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='Email' onChange={(e)=>
          setvalues({...values,[e.target.name]:e.target.value})} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='pasword' placeholder='Password' />
      </div>
      <button type='submit'>Submit</button>
      <span>
        Already have an account? <Link to="/SignUp">Sign-up</Link>
      </span>
    </form>
    <ToastContainer />
  </div>
  );
}